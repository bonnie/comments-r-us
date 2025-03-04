# Comments R Us

Code to support a talk about server components.

This code shows the same app with variations in approach:

1. Client components only
2. Server components only
3. Server components + suspense
4. Server components + suspense + server actions
5. Server components + suspense + server actions + useFormStatus hook

## Getting started:

1. Copy data/comments-template.json to data/comments.json. The template is in a separate file so that the actual comments file can be added to `.gitignore`. This way, any updates to the actual comments file don't cause a git status change – but you still have a template file for starting out.

```sh
cp data/comments-template.json data/comments.json
```

1. Install dependencies: `npm install`

1. Start the server by running `npm run dev`

1. Navigate to `http://localhost:3000` from a browser to view the site.

## The fine print

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app) v15.0.0-canary.53
