{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ secrets_store_operator }} {id="persistent-storage-csi-secrets-store-driver-uninstall_{{ context }}"}

To remove the {{ secrets_store_operator }} and free cluster resources, uninstall the Operator after stopping applications and removing the CSI driver. {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console.
*   Administrator access to the cluster.

**Procedure**

1.  Stop all application pods that use the `secrets-store.csi.k8s.io` provider.
1.  Remove any third-party provider plug-in for your chosen secret store.
1.  Remove the Container Storage Interface (CSI) driver and associated manifests:
    1.  Click **Administration** → **CustomResourceDefinitions** → **ClusterCSIDriver**.
    1.  On the **Instances** tab, for **secrets-store.csi.k8s.io**, on the far left side, click the drop-down menu, and then click **Delete ClusterCSIDriver**.
    1.  When prompted, click **Delete**.
1.  Verify that the CSI driver pods are no longer running.
1.  Uninstall the {{ secrets_store_operator }}:

    :::note

    Before you can uninstall the Operator, you must remove the CSI driver first.
    
    :::

    1.  Click **Ecosystem** → **Installed Operators**.
    1.  On the **Installed Operators** page, scroll or type "Secrets Store CSI" into the **Search by name** box to find the Operator, and then click it.
    1.  On the upper, right of the **Installed Operators** > **Operator details** page, click **Actions** → **Uninstall Operator**.
    1.  When prompted on the **Uninstall Operator** window, click the **Uninstall** button to remove the Operator from the namespace. Any applications deployed by the Operator on the cluster need to be cleaned up manually.

        After uninstalling, the {{ secrets_store_operator }} is no longer listed in the **Installed Operators** section of the web console.