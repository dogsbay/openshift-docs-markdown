{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning {{ oci }} infrastructure for your cluster {id="provision-oci-infrastructure-ocp-cluster_{{ context }}"}

When using the {{ ai_full }} to create details for your {{ product_title }} cluster, you specify these details in a Terraform stack. {._abstract}

A stack is an {{ oci_first_no_rt }} feature that automates the provisioning of all necessary {{ oci }} infrastructure resources that are required for installing an {{ product_title }} cluster on {{ oci_distributed_no_rt }}.

**Prerequisites**

*   You downloaded the discovery ISO image to a local directory. For details, see _Using the {{ ai_full }} to generate a discovery ISO image_.
*   You downloaded the Terraform stack template to a local directory. For details, see "Preparing the {{ oci_distributed_no_rt }} environment".

**Procedure**

1.  Log in to your [{{ oci_distributed_no_rt }}](https://cloud.oracle.com/a/) account.
1.  Upload the discovery ISO image from your local drive to the new object storage bucket you created. For the full procedure, see [Uploading an Object Storage Object to a Bucket (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/Object/Tasks/managingobjects_topic-To_upload_objects_to_a_bucket.htm).
1.  Locate the uploaded discovery ISO, and complete the following steps:
    1.  Create a Pre-Authenticated Request (PAR) for the ISO from the adjacent options menu.
    1.  Copy the generated URL to use as the OpenShift Image Source URI in the next step.

    For the full procedure, see [Creating a Pre-Authenticated Requests in Object Storage (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/Object/Tasks/usingpreauthenticatedrequests_topic-To_create_a_preauthenticated_request_for_all_objects_in_a_bucket.htm).
1.  If you have not already done so, apply the `create-resource-attribution-tags` Terraform stack to create the required resource attribution tags:

    :::important

    Resource attribution tags are mandatory for {{ product_title }} on {{ oci_distributed_no_rt }}. If the tags do not already exist in your tenancy, you must apply the `create-resource-attribution-tags` stack before creating the cluster. You typically apply this stack once for the first cluster deployment in a tenancy. After the tags exist, later cluster deployments can reuse them.
    
    :::

    1.  In the {{ oci_distributed_no_rt }} console, navigate to **Resource Manager** -> **Stacks** and click **Create Stack**.
    1.  Upload the `create-resource-attribution-tags-vX.X.X.zip` file and click **Next**.
    1.  Click **Apply** to create the resource attribution tags.

    For details, see [create-resource-attribution-tags (Oracle GitHub)](https://github.com/oracle-quickstart/oci-openshift/tree/main/terraform-stacks/create-resource-attribution-tags).
1.  Create and apply the `create-cluster` Terraform stack:

    :::important

    The Terraform stack includes files for creating cluster resources and custom manifests. The stack also includes a script, and when you apply the stack, the script creates {{ oci }} resources, such as DNS records, an instance, and other resources. For a list of the resources, see the `terraform-stacks` folder in [OpenShift on OCI (OSO)](https://github.com/oracle-quickstart/oci-openshift/tree/main).
    
    :::

    1.  Upload the Terraform stacks template [terraform-stacks](https://github.com/oracle-quickstart/oci-openshift/tree/main/terraform-stacks) to the new object storage bucket.
    1.  Complete the stack information and click **Next**.

        :::important

        *   Make sure that **Cluster Name** matches **Cluster Name** in {{ ai_full }}, and **Zone DNS** matches **Base Domain** in {{ ai_full }}.
        *   In the **OpenShift Image Source URI** field, paste the Pre-Authenticated Request URL link that you generated in the previous step.
        *   Ensure that the correct **Compute Shape** field value is defined, depending on whether you are installing on bare metal or a virtual machine. If not, select a different shape from the list. For details, see [Compute Shapes (Oracle documentation)](docs.oracle.com/en-us/iaas/Content/Compute/References/computeshapes.htm).
        
        :::

    1.  Click **Apply** to apply the stack.

    For the full procedure, see [Creating {{ product_title }} Infrastructure Using Resource Manager (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/openshift-on-oci/installing-assisted.htm#install-cluster-apply-stack).
1.  Copy the `dynamic_custom_manifest.yml` file from the **Outputs** page of the Terraform stack.

    :::note

    The YAML file contains all the required manifests, concatenated and preformatted with the configuration values. For details, see the [Custom Manifests README file](https://github.com/oracle-openshift/oci-openshift/blob/main/custom_manifests/README.md).
    
    :::


    For the full procedure, see [Getting the {{ product_title }} Custom Manifests for Installation (Oracle documentation)](https://docs.oracle.com/en-us/iaas/Content/openshift-on-oci/installing-assisted.htm#install-cluster-edit-manifests).