{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding custom manifests {id="adding-custom-manifests-oci_{{ context }}"}

Add the mandatory custom manifests provided by Oracle. {._abstract}

For details, see [Custom Manifests (Oracle documentation).](https://github.com/dfoster-oracle/oci-openshift/blob/v1.0.0-release-preview/custom_manifests/README.md)

**Prerequisites**

*   You copied the `dynamic_custom_manifest.yml` file from the Terraform stack in {{ oci_distributed_no_rt }}. For details, see "Provisioning {{ oci }} infrastructure for your cluster".

**Procedure**

1.  On the **Custom manifests** page, in the **Folder** field, select `manifests`. This is the {{ ai_full }} folder where you want to save the custom manifest file.
1.  In the **File name** field, enter a filename, for example, `dynamic_custom_manifest.yml`.
1.  Paste the contents of the `dynamic_custom_manifest.yml` file that you copied from {{ oci_distributed_no_rt }}:
    1.  In the **Content** section, click the **Paste content** icon.
    1.  If you are using Firefox, click **OK** to close the dialog box, and then press **Ctrl+V**. Otherwise, skip this step.
1.  Click **Next** to save the custom manifest.
1.  From the **Review and create** page, click **Install cluster** to create your {{ product_title }} cluster on {{ oci_distributed_no_rt }}.

    After the cluster installation and initialization operations, the {{ ai_full }} indicates the completion of the cluster installation operation. For more information, see "Completing the installation" section in the {{ ai_full }} for {{ product_title }} document.