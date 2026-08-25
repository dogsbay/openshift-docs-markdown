{%- set _mod_docs_content_type = "REFERENCE" %}
# TypeScript function template structure {id="serverless-typescript-template_{{ context }}"}

When you create a TypeScript function using the Knative (`kn`) CLI, the project directory looks like a typical TypeScript project. The only exception is the additional `func.yaml` file, which is used for configuring the function.

Both `http` and `event` trigger functions have the same template structure:

```terminal title="Template structure"
.
├── func.yaml (1)
├── package.json (2)
├── package-lock.json
├── README.md
├── src
│   └── index.ts (3)
├── test (4)
│   ├── integration.ts
│   └── unit.ts
└── tsconfig.json
```
1.  The `func.yaml` configuration file is used to determine the image name and registry.
1.  You are not restricted to the dependencies provided in the template `package.json` file. You can add additional dependencies as you would in any other TypeScript project.
    ```terminal title="Example of adding npm dependencies"
    npm install --save opossum
    ```

    When the project is built for deployment, these dependencies are included in the created runtime container image.
1.  Your project must contain an `src/index.js` file which exports a function named `handle`.
1.  Integration and unit test scripts are provided as part of the function template.