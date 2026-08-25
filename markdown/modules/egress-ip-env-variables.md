{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set environment variables {id="cloud-experts-consistent-egress-ip-env-variables_{{ context }}"}

Set environment variables to ensure consistency across the commands in this tutorial. {._abstract}

**Prerequisites**

*   You have created a {{ product_title }} cluster deployed with OVN-Kubernetes.
*   You have access to the {{ oc_first }}.
*   You have access to the {{ rosa_cli_first }}.
*   You have access to the `jq` command-line JSON processor.

**Procedure**

*   Set your environment variables by running the following command:

    :::note

    Replace the value of the `ROSA_MACHINE_POOL_NAME` variable to target a different machine pool.
    
    :::

    ```terminal
    $ export ROSA_CLUSTER_NAME=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"  | sed 's/-[a-z0-9]\{5\}$//')
    ```
    ```terminal
    $ export ROSA_MACHINE_POOL_NAME=worker
    ```

**Additional resources**
{._additional-resources}

*   [The `jq` command-line JSON processor](https://jqlang.org/)