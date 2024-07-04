# new-component

This code is adapted from Josh W Comeau's [new-component module](https://github.com/joshwcomeau/new-component).

The purpose is to create of the "boilerplate" files needed for Josh's [delightful file structure](https://www.joshwcomeau.com/react/file-structure/).

This code has been adapted to create files for a component that uses CSS Modules.

## Usage

`npm run new-component <component-name>`

where `<component-name>` is the name of the new component. For example:

`npm run new-component Button`

## Result

- A directory will be created in the _src/components_ directory with the component name. Example _src/components/Button_

- Three files will be created in the _src/components/<component-name>_ directory: _index.ts_, _component-name.tsx_, and _component-name.module.css_. For example:

  - _src/components/Button/index.ts_
  - _src/components/Button/Button.tsx_
  - _src/components/Button/Button.module.css_

- The file contents will be as follows for the example _Button_:

  - _index.ts_

    ```ts
    export * from './Button';
    export { default } from './Button';
    ```

  - _Button.tsx_

    ```tsx
    import React from 'react';

    import styles from './Button.module.css';

    export interface ButtonProps {};

    function Button({}: ButtonProps) {
      return <div className={styles.wrapper}></div>;
    }

    export default Button;
    ```

  - _Button.module.css_

    ```css
    .wrapper {
    }
    ```
