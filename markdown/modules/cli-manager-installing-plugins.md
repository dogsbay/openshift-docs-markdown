{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing CLI plugins with the {{ cli_manager }} {id="cli-manager-adding-plugins_{{ context }}"}

You can install CLI plugins with the {{ cli_manager }} to extend OpenShift CLI functionality in both connected and disconnected environments. {._abstract}

**Prerequisites**

*   You have installed Krew by following the [installation procedure](https://krew.sigs.k8s.io/docs/user-guide/setup/install/) in the Krew documentation.
*   The {{ cli_manager }} is installed.
*   The {{ cli_manager }} custom index has been added to Krew.
*   You are using {{ product_title }} 4.17 or later.

**Procedure**

1.  To list all available plugins, run the following command:
    ```terminal
    $ oc krew search
    ```
1.  To get information about a plugin, run the following command:
    ```terminal
    $ oc krew info <plugin_name>
    ```
1.  To install a plugin, run the following command:
    ```terminal
    $ oc krew install <plugin_name>
    ```
1.  To list all plugins that were installed by Krew, run the following command:
    ```terminal
    $ oc krew list
    ```