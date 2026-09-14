{%- set _mod_docs_content_type = "PROCEDURE" %}

# Define your required Terraform variables {id="rosa-hcp-config-spot-instance-terraform-define-vars_{{ context }}"}

Update you local Terraform variables file with the NodePoolManagement role ARN. {._abstract}

**Procedure**

1.  (Optional): Retrieve the NodePoolManagement role ARN from an existing cluster:
    ```terminal
    $ aws iam list-roles --query 'Roles[?contains(RoleName, `kube-system-capa-controller-manager`)].Arn' --output text
    ```
1.  Add the following variables to your `variables.tf` file:
    ```text
    variable "cluster_name" {
      description = "Name of the ROSA HCP cluster"
      type        = string
    }

    variable "nodepool_management_role_arn" {
      description = "ARN of the NodePoolManagement IAM role for the cluster"
      type        = string
    }
    ```

    The NodePoolManagement role ARN typically follows this pattern:
    ```text
    arn:aws:iam::<account-id>:role/ManagedOpenShift-HCP-ROSA-NodePoolManagement-Role
    ```