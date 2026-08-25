{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding the {{ cli_manager }} custom index to Krew {id="cli-manager-custom-index_{{ context }}"}

You can use the terminal to add the {{ cli_manager }} custom index to Krew so that the {{ cli_manager }} will work in disconnected environments. This procedure is required for the {{ cli_manager }} to function correctly and needs to be done only once. {._abstract}


:::note

If you use self-signed certificates, mark the certificate as trusted on your local operating system to use Krew.

:::


**Prerequisites**

*   [Krew is installed](https://krew.sigs.k8s.io/docs/user-guide/setup/install).
*   The {{ cli_manager }} is installed.

**Procedure**

1.  To establish the `ROUTE` variable, enter the following command:
    ```terminal
    $ ROUTE=$(oc get route/openshift-cli-manager -n openshift-cli-manager-operator -o=jsonpath='{.spec.host}')
    ```
1.  To add the custom index to Krew, enter the following command:
    ```terminal
    $ oc krew index add <custom_index_name> https://$ROUTE/cli-manager
    ```
1.  To update Krew, enter the following command and check for any errors:
    ```terminal
    $ oc krew update
    ```
    ```terminal title="Example output"
    Updated the local copy of plugin index.
    Updated the local copy of plugin index <custom_index_name>.
    New plugins available:
    * ocp/<plugin_name>
    ```