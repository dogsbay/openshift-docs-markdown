{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running the Terraform script via the Home region {id="c3-ai-running-script-via-home_{{ context }}"}

Copy the Terraform scripts `createInfraResources.tf` and `terraform.tfvars` onto the bastion server. Then run the `createInfraResources.tf` script to create the Dynamic Group Identity resources on your {{ oci_first_no_rt }} Home Region. {._abstract}

These resources include dynamic groups, policies, and tags.

**Prerequisites**

*   You have tenancy privileges to create Dynamic Groups and Policies. If not, you can manually provision them during this procedure.

**Procedure**

1.  Connect to the bastion server via SSH.
1.  Create `OpenShift\createResourceOnHomeRegion` folders.
1.  Copy the `createInfraResources.tf` and `terraform.tfvars` files from the C3_PCA GitHub repository into the `createResourceOnHomeRegion` folder.
1.  Ensure that you have access to the source environment, and that your C3 certificate has been exported.
1.  Run the `createInfraResources.tf` Terraform script.

    For the full procedure, see the "Terraform Script Execution Part-1 (Run Script via Home Region)" section in the [Oracle documentation](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_assisted_installer.pdf?source=:em:nl:mt::::PCATP).