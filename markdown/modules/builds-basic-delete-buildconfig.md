{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a BuildConfig {id="builds-basic-delete-buildconfig_{{ context }}"}

You can delete a `BuildConfig` using the following command.

**Procedure**

*   To delete a `BuildConfig`, enter the following command:
    ```terminal
    $ oc delete bc <BuildConfigName>
    ```

    This also deletes all builds that were instantiated from this `BuildConfig`.
*   To delete a `BuildConfig` and keep the builds instatiated from the `BuildConfig`, specify the `--cascade=false` flag when you enter the following command:
    ```terminal
    $ oc delete --cascade=false bc <BuildConfigName>
    ```