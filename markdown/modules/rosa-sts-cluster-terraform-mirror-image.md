{%- set _mod_docs_content_type = "CONCEPT" %}

# Configuring image mirroring in Terraform for your {{ product_title }} cluster {id="rosa-sts-cluster-terraform-mirror-image_{{ context }}"}

Terraform users can configure an image mirror for {{ product_title }} clusters. This action creates a rule that redirects requests for container images from a public source to your internal corporate registries.

{% include "./snippets/terraform-modification-disclaimer.md" %}

**Procedure**

1.  Add the following `rhcs_image_mirror` resource block to your Terraform configuration file (for example, `main.tf`), replacing the variable values with your specific requirements.
    ```terminal
    resource "rhcs_image_mirror" "corp_registry_explicit" {
      cluster_id = rhcs_cluster_rosa_hcp.my_cluster.id
      name       = "corp-registry-explicit"
      type       = "digest"

      source = "registry.example.com/team"
      mirrors = [
        "mirror.corp.com/team",
        "backup.corp.com/team"
      ]
     }
    ```
1.  Initialize the directory by running the following command:

    ```terminal
    $ terraform init
    ```
1.  Review the execution plan by running the following command:
    ```terminal
    $ terraform plan
    ```
1.  Once you have confirmed that only one resource (`rhcs_image_mirror`) will be added to your {{ product_title }} cluster, and nothing will be changed or destroyed, run the following command to apply the changes:
    ```terminal
    $ terraform apply
    ```
1.  Click ***Enter*** to approve the changes.

The `ImageContentSourcePolicy` is now configured on your cluster, and the image mirror will be active.