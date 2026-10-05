{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting environment variables for cluster creation {id="rosa-hcp-set-environment-variables_{{ context }}"}

You can set environment variables to streamline resource creation for your {{ product_title }} cluster. {._abstract}

**Procedure**

*   Set your environment variable by running the following command:
    ```terminal
    $ export <variable_name>=<variable_value>
    ```

**Verification**

*   You can confirm that your variable has been set by running the following command:
    ```terminal
    $ echo <variable_name>
    ```