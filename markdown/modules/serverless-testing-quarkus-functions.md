{%- set _mod_docs_content_type = "PROCEDURE" %}
# Testing Quarkus functions {id="serverless-testing-quarkus-functions_{{ context }}"}

Quarkus functions can be tested locally on your computer. In the default project that is created when you create a function using `kn func create`, there is the  `src/test/` directory, which contains basic Maven tests. These tests can be extended as needed.

**Prerequisites**

*   You have created a Quarkus function.
*   You have installed the Knative (`kn`) CLI.

**Procedure**

1.  Navigate to the project folder for your function.
1.  Run the Maven tests:
    ```terminal
    $ ./mvnw test
    ```