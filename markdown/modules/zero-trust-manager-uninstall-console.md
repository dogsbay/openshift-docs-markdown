{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ zero_trust_full }} {id="zero-trust-manager-uninstall-console_{{ context }}"}

To remove the {{ zero_trust_full }} from your cluster, uninstall the Operator using the web console. This helps you clean up resources and delete the service from your environment. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   The {{ zero_trust_full }} is installed.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Uninstall the {{ zero_trust_full }}.
    1.  Go to **Ecosystem** -> **Installed Operators**.
    1.  Click the **Options** menu next to the **{{ zero_trust_full }}** entry, and then click **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.

**Verification**

*   Verify that the {{ zero_trust_full }} Operator is uninstalled.
    ```terminal
    $ oc get csv -n openshift-zero-trust-workload-identity
    ```
    ```terminal title="Example output"
    No resources found in openshift-zero-trust-workload-identity namespace.
    ```