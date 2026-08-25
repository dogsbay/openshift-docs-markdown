{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ secrets_store_driver }} {id="persistent-storage-csi-secrets-store-driver-install_{{ context }}"}

To enable {{ product_title }} to mount secrets from external secret management systems, install the {{ secrets_store_operator }} and create a `ClusterCSIDriver` instance. {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console.
*   Administrator access to the cluster.

**Procedure**

1.  Install the {{ secrets_store_operator }}:
    1.  Log in to the web console.
    1.  Click **Ecosystem** -> **Software Catalog**.
    1.  Locate the {{ secrets_store_operator }} by typing "Secrets Store CSI" in the filter box.
    1.  Click the **Secrets Store CSI Driver Operator** button.
    1.  On the **Secrets Store CSI Driver Operator** page, click **Install**.
    1.  On the **Install Operator** page, ensure that:
        *   **All namespaces on the cluster (default)** is selected.
        *   **Installed Namespace** is set to **openshift-cluster-csi-drivers**.
    1.  Click **Install**.

        After the installation finishes, the {{ secrets_store_operator }} is listed in the **Installed Operators** section of the web console.
1.  Create the `ClusterCSIDriver` instance for the driver (`secrets-store.csi.k8s.io`):
    1.  Click **Administration** -> **CustomResourceDefinitions** -> **ClusterCSIDriver**.
    1.  On the **Instances** tab, click **Create ClusterCSIDriver**.

        Use the following YAML file:
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: ClusterCSIDriver
        metadata:
            name: secrets-store.csi.k8s.io
        spec:
          managementState: Managed
        ```
    1.  Click **Create**.