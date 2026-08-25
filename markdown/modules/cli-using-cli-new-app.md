{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a new application {id="cli-using-cli-new-app_{{ context }}"}

Use the `oc new-app` command to create a new application. {._abstract}

**Procedure**

*   Create a new application by running the following command:
    ```terminal
    $ oc new-app https://github.com/sclorg/cakephp-ex
    ```
    ```terminal title="Example output"
    --> Found image 40de956 (9 days old) in imagestream "openshift/php" under tag "7.2" for "php"

    ...

        Run 'oc status' to view your app.
    ```