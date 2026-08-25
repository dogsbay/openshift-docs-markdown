{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ gcp_short }} Filestore CSI Driver Operator {id="persistent-storage-csi-olm-operator-install_{{ context }}"}

Since the Google Compute Platform ({{ gcp_short }}) Filestore Container Storage Interface (CSI) Driver Operator is not installed in {{ product_title }} by default, you must install the {{ gcp_short }} Filestore CSI Driver Operator in your cluster. {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console.
*   If using {{ gcp_wid_short }}, certain {{ gcp_wid_short }} parameters are needed. See the preceding Section _Preparing to install the {{ gcp_short }} Filestore CSI Driver Operator with Workload Identity_.

**Procedure**

{% if openshift_dedicated %}

1.  Log in to the {{ cluster_manager_url }}.
1.  Select your cluster.
1.  Click **Open console** and log in with your credentials.
{% endif %}

{% if not openshift_dedicated %}
1.  Log in to the web console.

{% endif %}
1.  Enable the Filestore API in the GCE project by running the following command:
    ```command
    $ gcloud services enable file.googleapis.com  --project <my_gce_project>
    ```

    Replace `<my_gce_project>` with your Google Cloud project.

    You can also do this using Google Cloud web console.
1.  Install the {{ gcp_short }} Filestore CSI Operator:
    1.  Click **Ecosystem** -> **Software Catalog**.
    1.  Locate the {{ gcp_short }} Filestore CSI Operator by typing **{{ gcp_short }} Filestore** in the filter box.
    1.  Click the **{{ gcp_short }} Filestore CSI Driver Operator** button.
    1.  On the **{{ gcp_short }} Filestore CSI Driver Operator** page, click **Install**.
    1.  On the **Install Operator** page, ensure that:
        *   **All namespaces on the cluster (default)** is selected.
        *   **Installed Namespace** is set to **openshift-cluster-csi-drivers**.

            If using {{ gcp_wid_short }}, enter values for the following fields obtained from the procedure in Section _Preparing to install the {{ gcp_short }} Filestore CSI Driver Operator with Workload Identity_:
        *   **{{ gcp_short }} Project Number**
        *   **{{ gcp_short }} Pool ID** 
        *   **{{ gcp_short }} Provider ID** 
        *   **{{ gcp_short }} Service Account Email** 
    1.  Click **Install**.

        After the installation finishes, the {{ gcp_short }} Filestore CSI Operator is listed in the **Installed Operators** section of the web console.
1.  Install the {{ gcp_short }} Filestore CSI Driver:
    1.  Click **administration** → **CustomResourceDefinitions** → **ClusterCSIDriver**.
    1.  On the **Instances** tab, click **Create ClusterCSIDriver**.

        Use the following YAML file:
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: ClusterCSIDriver
        metadata:
            name: filestore.csi.storage.gke.io
        spec:
          managementState: Managed
        ```
    1.  Click **Create**.
    1.  Wait for the following Conditions to change to a "true" status:
        *   GCPFilestoreDriverCredentialsRequestControllerAvailable
        *   GCPFilestoreDriverNodeServiceControllerAvailable
        *   GCPFilestoreDriverControllerServiceControllerAvailable