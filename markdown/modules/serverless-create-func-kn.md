{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating functions {id="serverless-create-func-kn_{{ context }}"}

Before you can build and deploy a function, you must create it by using the Knative (`kn`) CLI. You can specify the path, runtime, template, and image registry as flags on the command line, or use the `-c` flag to start the interactive experience in the terminal.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.

**Procedure**

*   Create a function project:
    ```terminal
    $ kn func create -r <repository> -l <runtime> -t <template> <path>
    ```
    *   Accepted runtime values include `quarkus`, `node`, `typescript`, `go`, `python`, `springboot`, and `rust`.
    *   Accepted template values include `http` and `cloudevents`.
        ```terminal title="Example command"
        $ kn func create -l typescript -t cloudevents examplefunc
        ```
        ```terminal title="Example output"
        Created typescript function in /home/user/demo/examplefunc
        ```
    *   Alternatively, you can specify a repository that contains a custom template.
        ```terminal title="Example command"
        $ kn func create -r https://github.com/boson-project/templates/ -l node -t hello-world examplefunc
        ```
        ```terminal title="Example output"
        Created node function in /home/user/demo/examplefunc
        ```