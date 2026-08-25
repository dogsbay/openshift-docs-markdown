{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the CIFS/SMB CSI Driver {id="persistent-storage-csi-smb-cifs-driver-install_{{ context }}"}

To use network file shares as persistent volumes (PVs) in your cluster, create a `ClusterCSIDriver` resource after installing the CIFS/SMB CSI Driver Operator. {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console.
*   CIFS/SMB CSI Driver Operator installed.

**Procedure**

1.  Click **Administration** -> **CustomResourceDefinitions** -> **ClusterCSIDriver**.
1.  On the **Instances** tab, click **Create ClusterCSIDriver**.
1.  Use the following YAML file:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: ClusterCSIDriver
    metadata:
        name: smb.csi.k8s.io
    spec:
      managementState: Managed
    ```
1.  Click **Create**.
1.  Wait for the following Conditions to change to a "True" status:
    *   `SambaDriverControllerServiceControllerAvailable`
    *   `SambaDriverNodeServiceControllerAvailable`