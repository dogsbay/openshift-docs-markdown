{%- set _mod_docs_content_type = "PROCEDURE" %}
# Testing Node.js functions {id="serverless-testing-nodejs-functions_{{ context }}"}

Node.js functions can be tested locally on your computer. In the default project that is created when you create a function by using `kn func create`, there is a **test** folder that contains some simple unit and integration tests.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a function by using `kn func create`.

**Procedure**

1.  Navigate to the **test** folder for your function.
1.  Run the tests:
    ```terminal
    $ npm test
    ```