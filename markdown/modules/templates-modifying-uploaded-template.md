{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying uploaded templates {id="templates-modifying-uploaded-template_{{ context }}"}

To update a template already stored in your {{ product_title }} project, edit the template object and replace the existing version. Updated templates remain available in the project template library for reuse. {._abstract}

**Procedure**

*   Modify a template that has already been uploaded by running the following command:
    ```terminal
    $ oc edit template <template>
    ```