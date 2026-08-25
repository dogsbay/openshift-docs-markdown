{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying {{ product_title }} installer log levels {id="specifying-openshift-installer-log-levels_{{ context }}"}

By default, the {{ product_title }} installer log level is set to `info`. If more detailed logging is required when diagnosing a failed {{ product_title }} installation, you can increase the `openshift-install` log level to `debug` when starting the installation again. {._abstract}

**Prerequisites**

*   You have access to the installation host.

**Procedure**

*   Set the installation log level to `debug` when initiating the installation:
    ```terminal
    $ ./openshift-install --dir <installation_directory> wait-for bootstrap-complete --log-level debug
    ```

    where
    :   *   Possible log levels include `info`, `warn`, `error,` and `debug`.