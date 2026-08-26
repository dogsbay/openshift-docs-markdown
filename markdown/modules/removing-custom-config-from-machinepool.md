{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing custom configuration from a machine pool {id="removing-custom-config-from-machinepool_{{ context }}"}

You can remove custom configuration on your machine pools by removing the `KubeletConfig` object that contains the configuration details. {._abstract}

**Prerequisites**

*   You have an existing {{ product_title }} cluster.
*   You have installed the {{ rosa_cli_first }}.
*   You have logged in to your Red Hat account by using the {{ rosa_cli }}.

**Procedure**

*   Edit the machine pool and set the `--kubeletconfigs` parameter so that the `KubeletConfig` object you want to remove is omitted.

    To remove all `KubeletConfig` objects from the machine pool, set an empty value for the `--kubeletconfigs` parameter, for example:
    ```terminal
    $ rosa edit machinepool -c <cluster_name> --kubelet-configs="" <machinepool_name>
    ```

**Verification**

*   Confirm that the `KubeletConfig` object you removed is not visible in the machine pool description:
    ```terminal
    $ rosa describe machinepool --cluster <cluster_name> --machinepool=<machinepool_name>
    ```