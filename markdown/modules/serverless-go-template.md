{%- set _mod_docs_content_type = "REFERENCE" %}
# Go function template structure {id="serverless-go-template_{{ context }}"}

When you create a Go function using the Knative (`kn`) CLI, the project directory looks like a typical Go project. The only exception is the additional `func.yaml` configuration file, which is used for specifying the image.

Go functions have few restrictions. The only requirements are that your project must be defined in a `function` module, and must export the function `Handle()`.

Both `http` and `event` trigger functions have the same template structure:

```terminal title="Template structure"
fn
├── README.md
├── func.yaml (1)
├── go.mod (2)
├── go.sum
├── handle.go
└── handle_test.go
```
1.  The `func.yaml` configuration file is used to determine the image name and registry.
1.  You can add any required dependencies to the `go.mod` file, which can include additional local Go files. When the project is built for deployment, these dependencies are included in the resulting runtime container image.
    ```terminal title="Example of adding dependencies"
    $ go get gopkg.in/yaml.v2@v2.4.0
    ```