{%- set _mod_docs_content_type = "PROCEDURE" %}
# Testing Python functions {id="serverless-testing-python-functions_{{ context }}"}

You can test Python functions locally on your computer. The default project contains a `test_func.py` file, which provides a simple unit test for functions.


:::note

The default test framework for Python functions is `unittest`. You can use a different test framework if you prefer.

:::


**Prerequisites**

*   To run Python functions tests locally, you must install the required dependencies:
    ```terminal
    $ pip install -r requirements.txt
    ```

**Procedure**

1.  Navigate to the folder for your function that contains the `test_func.py` file.
1.  Run the tests:
    ```terminal
    $ python3 test_func.py
    ```