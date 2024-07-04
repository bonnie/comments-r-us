#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const { program } = require("commander");

const {
  getConfig,
  buildPrettifier,
  createParentDirectoryIfNecessary,
  logIntro,
  logItemCompletion,
  logConclusion,
  logError,
} = require("./helpers");
const {
  requireOptional,
  mkDirPromise,
  readFilePromiseRelative,
  writeFilePromise,
} = require("./utils");

// Get the default config for this component (looks for local/global overrides,
// falls back to sensible defaults).
const config = getConfig();

// Convenience wrapper around Prettier, so that config doesn't have to be
// passed every time.
const prettify = buildPrettifier(config.prettierConfig);

program
  .version("5.0.2")
  .arguments("<componentName>")
  .option(
    "-l, --lang <language>",
    'Which language to use (default: "ts")',
    /^(js|ts)$/i,
    config.lang
  )
  .option(
    "-d, --dir <pathToDirectory>",
    'Path to the "components" directory (default: "src/components")',
    config.dir
  )
  .parse(process.argv);

const [componentName] = program.args;

const options = program.opts();

const fileExtension = "tsx";
const indexExtension = "ts";

// Find the path to the selected template file.
const templatePath = "./templates/ts.tsx";
const cssTemplatePath = "./templates/styles.css";

// Get all of our file paths worked out, for the user's project.
const componentDir = `${options.dir}/${componentName}`;
const filePath = `${componentDir}/${componentName}.${fileExtension}`;
const indexPath = `${componentDir}/index.${indexExtension}`;
const cssFilePath = `${componentDir}/${componentName}.module.css`;

// Our index template is super straightforward, so we'll just inline it for now.
const indexTemplate = prettify(`\
export * from "./${componentName}";
export { default } from "./${componentName}";
`);

logIntro({
  name: componentName,
  dir: componentDir,
  lang: options.lang,
});

// Check if componentName is provided
if (!componentName) {
  logError(
    `Sorry, you need to specify a name for your component like this: new-component <name>`
  );
  process.exit(0);
}

// Check to see if the parent directory exists.
// Create it if not
createParentDirectoryIfNecessary(options.dir);

// Check to see if this component has already been created
const fullPathToComponentDir = path.resolve(componentDir);
if (fs.existsSync(fullPathToComponentDir)) {
  logError(
    `Looks like this component already exists! There's already a component at ${componentDir}.\nPlease delete this directory and try again.`
  );
  process.exit(0);
}

// Start by creating the directory that our component lives in.
mkDirPromise(componentDir)
  .then(() => readFilePromiseRelative(templatePath))
  .then((template) => {
    logItemCompletion("Directory created.");
    return template;
  })
  .then((template) =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then((template) =>
    // Format it using prettier, to ensure style consistency, and write to file.
    writeFilePromise(filePath, prettify(template))
  )
  .then((template) => {
    logItemCompletion("Component built and saved to disk.");
    return template;
  })
  .then(() => readFilePromiseRelative(cssTemplatePath))
  .then((cssTemplate) =>
    // Replace our placeholders with real data (so far, just the component name)
    cssTemplate.replace(/COMPONENT_NAME/g, componentName)
  )
  .then((cssTemplate) => writeFilePromise(cssFilePath, cssTemplate))
  .then((cssTemplate) => {
    logItemCompletion("CSS built and saved to disk.");
    return cssTemplate;
  })
  .then(() =>
    // We also need the `index.js` file, which allows easy importing.
    writeFilePromise(indexPath, prettify(indexTemplate))
  )
  .then(() => {
    logItemCompletion("Index file built and saved to disk.");
  })
  .then(() => {
    logConclusion();
  })
  .catch((err) => {
    console.error(err);
  });
