{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting a build {id="builds-basic-start-build_{{ context }}"}

You can manually start a new build from an existing build configuration in your current project.

**Procedure**

*   To start a build manually, enter the following command:
    ```terminal
    $ oc start-build <buildconfig_name>
    ```