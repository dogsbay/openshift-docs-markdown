{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overwriting the mirror registry {id="overwriting-the-mirror-registry_{{ context }}"}

To download npm packages for Node.js dependencies and Maven packages for Java dependencies from a private mirror registry, you must create and configure a mirror npm or Maven registry on the cluster. You can then overwrite the mirror registry on an existing component or when you create a new component.

**Procedure**

*   To overwrite the mirror registry on an existing component:
    ```terminal
    $ odo config set --env NPM_MIRROR=<npm_mirror_registry>
    ```
*   To overwrite the mirror registry when creating a component:
    ```terminal
    $ odo component create nodejs --env NPM_MIRROR=<npm_mirror_registry>
    ```