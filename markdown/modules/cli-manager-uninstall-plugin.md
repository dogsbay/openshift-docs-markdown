{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling a CLI plugin with the {{ cli_manager }} {id="cli-manager-remove-plugin_{{ context }}"}

You can uninstall a plugin that was installed for the OpenShift CLI (`oc`) with the {{ cli_manager }}. {._abstract}

**Prerequisites**

*   You have installed Krew by following the [installation procedure](https://krew.sigs.k8s.io/docs/user-guide/setup/install/) in the Krew documentation.
*   You have installed a plugin for the OpenShift CLI with the {{ cli_manager }}.

**Procedure**

*   To uninstall a plugin, run the following command:
    ```terminal
    $ oc krew uninstall <plugin_name>
    ```