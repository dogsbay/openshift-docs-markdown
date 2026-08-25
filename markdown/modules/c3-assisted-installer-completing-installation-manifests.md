{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding custom manifests {id="c3-ai-completing-installation-manifests_{{ context }}"}

Create, modify, and upload the four mandatory custom manifests provided by Oracle. {._abstract}

*   In the `C3/custom_manifests_C3/manifests` folder, the following manifests are mandatory:
    *   `oci-ccm.yml`
    *   `oci-csi.yml`
*   In the `C3/custom_manifests_C3/openshift` folder, the following manifests are mandatory:
    *   `machineconfig-ccm.yml`
    *   `machineconfig-csi.yml`

**Prerequisites**

*   Prepare the custom manifests. For details, see step 8 in the "Install the Cluster using the RH Assisted Installer UI" section of the [Oracle documentation](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_assisted_installer.pdf?source=:em:nl:mt::::PCATP).

**Procedure**

1.  Navigate to the **Custom manifests** page.
1.  Upload and save the `oci-ccm.yml` and `oci-csi.yml` manifest files:
    1.  In the **Folder** field, select **manifests**.
    1.  In the **File name** field, enter `oci-ccm.yml`.
    1.  In the **Content** section, click **Browse**.
    1.  Select the **oci-ccm.yml** file from the `C3/custom_ manifest_C3/manifests` folder.
    1.  Click **Add another manifest** and repeat the previous substeps for the `oci-csi.yml` file.
1.  Upload and save the `machineconfig-ccm.yml` and `machineconfig-csi.yml` manifest files:
    1.  Click **Add another manifest**.
    1.  In the **Folder** field, select **openshift**.
    1.  In the **File name** field, enter `machineconfig-ccm.yml`.
    1.  In the **Content** section, click **Browse**.
    1.  Select the **machineconfig-ccm.yml** file from the `C3/custom_ manifest_C3/openshift` folder.
    1.  Click **Add another manifest** and repeat the previous substeps for the `machineconfig-csi.yml` file.
1.  Click **Next** to save the custom manifests.
1.  From the **Review and create** page, click **Install cluster** to create your {{ product_title }} cluster. This process takes approximately thirty minutes.