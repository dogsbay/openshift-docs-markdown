{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ FeatureName }} CSI Driver {id="persistent-storage-csi-efs-driver-install_{{ context }}"}

After installing the Container Storage Interface (CSI) Driver Operator (a Red Hat operator), you need to install the {{ FeatureName }} CSI driver. {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console.

**Procedure**

1.  Click **Administration** → **CustomResourceDefinitions** → **ClusterCSIDriver**.
1.  On the **Instances** tab, click **Create ClusterCSIDriver**.
1.  Use the following YAML file:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: ClusterCSIDriver
    metadata:
        name: efs.csi.aws.com
    spec:
      managementState: Managed
    ```

    Where `metadata.name` is the storage provisioner name.
1.  Click **Create**.
1.  Wait for the following Conditions to change to a "True" status:
    *   AWSEFSDriverNodeServiceControllerAvailable
    *   AWSEFSDriverControllerServiceControllerAvailable