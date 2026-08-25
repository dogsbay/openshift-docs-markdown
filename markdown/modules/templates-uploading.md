{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uploading a template {id="templates-uploading_{{ context }}"}

To add a template to your {{ product_title }} project, upload a JSON or YAML template file with the CLI. Uploaded templates are saved to the project template library for reuse by users with access to that project. {._abstract}

**Procedure**

*   Upload a template using one of the following methods:
    *   Upload a JSON or YAML template file to the template library of your current project by running the following command:
        ```terminal
        $ oc create -f <filename>
        ```
    *   Upload a template to a different project using the `-n` option with the name of the project by running the following command:
        ```terminal
        $ oc create -f <filename> -n <project>
        ```

        The template is now available for selection using the web console or the CLI.