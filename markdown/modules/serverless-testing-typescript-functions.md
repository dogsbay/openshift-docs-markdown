{%- set _mod_docs_content_type = "PROCEDURE" %}
# Testing TypeScript functions {id="serverless-testing-typescript-functions_{{ context }}"}

TypeScript functions can be tested locally on your computer. In the default project that is created when you create a function using `kn func create`, there is a **test** folder that contains some simple unit and integration tests.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a function by using `kn func create`.

**Procedure**

1.  If you have not previously run tests, install the dependencies first:
    ```terminal
    $ npm install
    ```
1.  Navigate to the **test** folder for your function.
1.  Run the tests:
    ```terminal
    $ npm test
    ```