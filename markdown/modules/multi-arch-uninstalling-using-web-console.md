{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Multiarch Tuning Operator by using the web console {id="multi-architecture-uninstalling-using-web-console_{{ context }}"}

You can uninstall the Multiarch Tuning Operator by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` permissions.
*   You have deleted the `ClusterPodPlacementConfig` object.

    :::important

    You must delete the `ClusterPodPlacementConfig` object before uninstalling the Multiarch Tuning Operator. Uninstalling the Operator without deleting the `ClusterPodPlacementConfig` object leads to unexpected behavior.
    
    :::


**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Navigate to **Ecosystem** → **Software Catalog**.
1.  Enter **Multiarch Tuning Operator** in the search field.
1.  Click **Multiarch Tuning Operator**.
1.  Click the **Details** tab. 
1.  From the **Actions** menu, select **Uninstall Operator**.
1.  When prompted, click **Uninstall**.

**Verification**

1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  On the **Installed Operators** page, verify that the **Multiarch Tuning Operator** is not listed.