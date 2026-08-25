{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating CLI plugins with the {{ cli_manager }} {id="cli-manager-updating-plugin_{{ context }}"}

You can update a plugin that was installed for the OpenShift CLI (`oc`) with the {{ cli_manager }} and Krew to keep your plugins current with the latest features. {._abstract}

**Prerequisites**

*   You have installed Krew by following the [installation procedure](https://krew.sigs.k8s.io/docs/user-guide/setup/install/) in the Krew documentation.
*   The {{ cli_manager }} is installed.
*   The custom index has been added to Krew by the cluster administrator.
*   The plugin updates have been added to the {{ cli_manager }} by the cluster administrator.
*   The plugin you are updating is already installed.

**Procedure**

*   To update a single plugin, run the following command:
    ```terminal
    $ oc krew upgrade <plugin_name>
    ```
*   To update all plugins that were installed by Krew, run the following command:
    ```terminal
    $ oc krew upgrade
    ```