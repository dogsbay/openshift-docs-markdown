{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding labels {id="templates-cli-labels_{{ context }}"}

To add labels when you process a template on your {{ product_title }} cluster, pass label selectors to the `oc process` command. The labels specified in the template are applied to every object that is generated from the template. {._abstract}

Labels are used to manage and organize generated objects, such as pods.

**Procedure**

*   Add labels in the template by running the following command:
    ```terminal
    $ oc process -f <filename> -l name=otherLabel
    ```