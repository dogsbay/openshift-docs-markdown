{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ FeatureName }} CSI Driver Operator {id="persistent-storage-csi-olm-operator-uninstall_{{ context }}"}

To remove the {{ FeatureName }} Container Storage Interface (CSI) Driver Operator and free cluster resources, uninstall the operator after stopping applications and deleting persistent volumes (PVs). {._abstract}

All EFS PVs are inaccessible after uninstalling the AWS EFS CSI Driver Operator (a Red Hat operator).


:::note

Before you can destroy a cluster (`openshift-install destroy cluster`), you must delete the EFS volume in AWS.
{%- if openshift_rosa_hcp or openshift_rosa %}
A {{ product_title }} cluster cannot be destroyed when there is an EFS volume that uses the cluster’s VPC. Amazon does not allow deletion of such a VPC.
{% endif %}
{% if not (openshift_rosa_hcp or openshift_rosa) %}
An {{ product_title }} cluster cannot be destroyed when there is an EFS volume that uses the cluster’s VPC. Amazon does not allow deletion of such a VPC.
{%- endif %}

:::


**Prerequisites**

*   Access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the web console.
1.  Stop all applications that use {{ FeatureName }} PVs.
1.  Delete all {{ FeatureName }} PVs:
    1.  Click **Storage** -> **PersistentVolumeClaims**.
    1.  Select each PVC that is in use by the {{ FeatureName }} CSI Driver Operator, click the drop-down menu on the far right of the PVC, and then click **Delete PersistentVolumeClaims**.
1.  Uninstall the {{ FeatureName }} CSI driver:

    :::note

    Before you can uninstall the Operator, you must remove the CSI driver first.
    
    :::

    1.  Click **Administration** -> **CustomResourceDefinitions** -> **ClusterCSIDriver**.
    1.  On the **Instances** tab, for **{{ provisioner }}**, on the far left side, click the drop-down menu, and then click **Delete ClusterCSIDriver**.
    1.  When prompted, click **Delete**.
1.  Uninstall the {{ FeatureName }} CSI Operator:
    1.  Click **Ecosystem** -> **Installed Operators**.
    1.  On the **Installed Operators** page, scroll or type {{ FeatureName }} CSI into the **Search by name** box to find the Operator, and then click it.
    1.  On the upper, right of the **Installed Operators > Operator details** page, click **Actions** -> **Uninstall Operator**.
    1.  When prompted on the **Uninstall Operator** window, click the **Uninstall** button to remove the Operator from the namespace. Any applications deployed by the Operator on the cluster need to be cleaned up manually.

        After uninstalling, the {{ FeatureName }} CSI Driver Operator is no longer listed in the **Installed Operators** section of the web console.