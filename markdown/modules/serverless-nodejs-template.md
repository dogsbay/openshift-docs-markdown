{%- set _mod_docs_content_type = "REFERENCE" %}
# Node.js function template structure {id="serverless-nodejs-template_{{ context }}"}

When you create a Node.js function using the Knative (`kn`) CLI, the project directory looks like a typical Node.js project. The only exception is the additional `func.yaml` file, which is used to configure the function.

Both `http` and `event` trigger functions have the same template structure:

```terminal title="Template structure"
.
├── func.yaml (1)
├── index.js (2)
├── package.json (3)
├── README.md
└── test (4)
    ├── integration.js
    └── unit.js
```
1.  The `func.yaml` configuration file is used to determine the image name and registry.
1.  Your project must contain an `index.js` file which exports a single function.
1.  You are not restricted to the dependencies provided in the template `package.json` file. You can add additional dependencies as you would in any other Node.js project.
    ```terminal title="Example of adding npm dependencies"
    npm install --save opossum
    ```

    When the project is built for deployment, these dependencies are included in the created runtime container image.
1.  Integration and unit test scripts are provided as part of the function template.