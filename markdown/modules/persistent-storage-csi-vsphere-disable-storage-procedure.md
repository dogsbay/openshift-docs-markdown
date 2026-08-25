{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling and enabling storage on vSphere {id="persistent-storage-csi-vsphere-disable-storage-procedure_{{ context }}"}

To control vSphere storage integration with your cluster, disable or enable the CSI driver by changing the management state in the `ClusterCSIDriver` resource. {._abstract}


:::important

Before running this procedure, carefully review the preceding "Consequences of disabling and enabling storage on vSphere" table and potential impacts to your environment.

:::


**Procedure**

1.  Click **Administration** > **CustomResourceDefinitions**.
1.  On the **CustomResourceDefinitions** page next to the **Name** dropdown box, type "clustercsidriver".
1.  Click **CRD ClusterCSIDriver**.
1.  Click the **Instances** tab.
1.  Click **csi.vsphere.vmware.com**.
1.  Click the **YAML** tab.
1.  For `spec.managementState`, change the value to `Removed` or `Managed`:
    *   `Removed`: storage is disabled
    *   `Managed`: storage is enabled
1.  Click **Save**.
1.  If you are disabling storage, confirm that the driver has been removed:
    1.  Click **Workloads** > **Pods**.
    1.  On the **Pods** page, in the **Name** filter box type "vmware-vsphere-csi-driver".

        The only item that should appear is the operator. For example: "vmware-vsphere-csi-driver-operator-559b97ffc5-w99fm"