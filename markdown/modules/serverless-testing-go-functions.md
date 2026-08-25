{%- set _mod_docs_content_type = "PROCEDURE" %}
# Testing Go functions {id="serverless-testing-go-functions_{{ context }}"}

Go functions can be tested locally on your computer. In the default project that is created when you create a function using `kn func create`, there is a `handle_test.go` file, which contains some basic tests. These tests can be extended as needed.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a function by using `kn func create`.

**Procedure**

1.  Navigate to the **test** folder for your function.
1.  Run the tests:
    ```terminal
    $ go test
    ```