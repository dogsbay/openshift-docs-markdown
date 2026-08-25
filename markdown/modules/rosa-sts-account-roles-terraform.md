{%- if context == "rosa-understanding-terraform" %}
{%- set tf_full = true -%}
{% endif %}
{%- set _mod_docs_content_type = "PROCEDURE" %}

{% if tf_full %}
# Account roles Terraform example {id="sd-terraform-account-roles_{{ context }}"}
{% endif %}
{% if not tf_full %}
# Creating your account-wide IAM roles with Terraform {id="_creating_your_account-wide_iam_roles_with_terraform"}
{% endif %}

The following example shows how Terraform can be used to create your Amazon Web Services (AWS) Identity and Access Management (IAM) account roles for ROSA.

{% include "./snippets/terraform-modification-disclaimer.md" %}

**Procedure**

1.  Check your AWS account for existing roles and policies by running the following command:
    ```terminal
    $ rosa list account-roles
    ```
1.  In your terminal, run the following command to export [your {{ cluster_manager_first }} token](https://console.redhat.com/openshift/token). This value must include the full {{ cluster_manager }} token:
    ```terminal
    $ export RHCS_TOKEN="<your_offline_token>"
    ```

    You can verify that your token is saved by running the following command:
    ```terminal
    $ echo $RHCS_TOKEN
    ```

    You see your token in the command line.
1.  Optional: You can specify your own account-role prefix that prepends the roles you create by running the following command:

    :::note

    If you do not specify an account-role prefix, a prefix is generated in the format of `account-role-` followed by a string of four random characters.
    
    :::

    ```terminal
    $ export TF_VAR_account_role_prefix=<account_role_prefix>
    ```
1.  Create the Terraform files locally by using the following code templates:

    :::note

    These files are created in your current directory. Ensure that you are in the directory where you want to run Terraform.
    
    :::

    1.  The `main.tf` file calls the Red&#160;Hat Cloud Services Terraform provider, which allows you to use OpenShift services with Terraform. Run the following command to create the `main.tf` file:
        ```terminal
        $ cat<<-EOF>main.tf
          #
          # Copyright (c) 2022 Red Hat, Inc.
          #
          # Licensed under the Apache License, Version 2.0 (the "License");
          # you may not use this file except in compliance with the License.
          # You may obtain a copy of the License at
          #
          #   http://www.apache.org/licenses/LICENSE-2.0
          #
          # Unless required by applicable law or agreed to in writing, software
          # distributed under the License is distributed on an "AS IS" BASIS,
          # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          # See the License for the specific language governing permissions and
          # limitations under the License.
          #

          terraform {
            required_providers {
              aws = {
                source  = "hashicorp/aws"
                version = ">= 4.20.0"
              }
              rhcs = {
                version = "1.4.0"
                source  = "terraform-redhat/rhcs"
              }
            }
          }

          data "rhcs_policies" "all_policies" {}

          data "rhcs_versions" "all" {}

          module "create_account_roles" {
            source  = "terraform-redhat/rosa-sts/aws"
            version = "0.0.15"

            create_operator_roles = false
            create_oidc_provider  = false
            create_account_roles  = true

            account_role_prefix    = var.account_role_prefix
            rosa_openshift_version = var.openshift_version
            account_role_policies  = data.rhcs_policies.all_policies.account_role_policies
            operator_role_policies = data.rhcs_policies.all_policies.operator_role_policies
            all_versions           = data.rhcs_versions.all
            tags                   = var.tags
          }
        EOF
        ```
    1.  You define the account role prefix structure in the `output.tf` file. This output definition allows you to specify how the various generated roles are constructed. Run the following command to create your `output.tf` file:
        ```terminal
        $ cat<<-EOF>output.tf
          output "account_role_prefix" {
            value = module.create_account_roles.account_role_prefix
          }
        EOF
        ```
    1.  The `variables.tf` allows you to specify values you want for select variables. If you exported a variable for the `account_role_prefix` earlier, leave this variable’s default value blank. Setting the variable in both places with different values can produce unexpected results. Run the following command to create your `variables.tf` file:

        :::important

        Do not include your {{ cluster_manager }} token in this file if it is not stored in a safe location.
        
        :::

        ```terminal
        $ cat<<-EOF>variables.tf
          variable "openshift_version" {
            type = string
            default = "4.13"
            description = "Enter the desired OpenShift version as X.Y. This version should match what you intend for your ROSA cluster. For example, if you plan to create a ROSA cluster using '4.13.10', then this version should be '4.13'. You can see the supported versions of OpenShift by running 'rosa list version'."
          }

          variable "account_role_prefix" {
            type    = string
            default = ""
            description = "Your account roles are prepended with whatever value you enter here. The default value in the ROSA CLI is 'ManagedOpenshift-' before all of your account roles."
          }

          variable "tags" { (1)
            type        = map
            default     = null
            description = "(Optional) List of AWS resource tags to apply."
          }
        EOF
        ```
        1.  The `tags` parameter uses a map of strings variable. The format that it takes looks like the following example:
            ```terraform
            variable "tags" {
              type    = "map"
              default = {
                "us-east-1" = "image-1234"
                "us-west-2" = "image-4567"
              }
            }
            ```
1.  In the directory where you saved these Terraform files, run the following command to set up Terraform to create these resources:
    ```terminal
    $ terraform init
    ```
1.  Optional: Run the following command to confirm that the Terraform code you copied is correct:
    ```terminal
    $ terraform validate
    ```
    ```terminal title="Example output"
    Success! The configuration is valid.
    ```
1.  Optional: Test your Terraform template and create a reusable Terraform plan file by running the following command:
    ```terminal
    $ terraform plan -out account-roles.tfplan
    ```
1.  Run the following command to build your account-wide IAM roles with Terraform:
    ```terminal
    $ terraform apply "account-roles.tfplan"
    ```

    :::note

    If you used the `terraform plan` command first, you can provide your created `account-roles.tf` file here. Otherwise, Terraform temporarily creates this plan before it applies your desired outcome.
    
    :::


**Verification**

*   Run the following command to verify that your account-roles have been created:
    ```terminal
    $ rosa list account-roles
    ```

    ```terminal title="Example output"
    I: Fetching account roles
    ROLE NAME                            ROLE TYPE      ROLE ARN                                                            OPENSHIFT VERSION  AWS Managed
    account-role-6kn4-ControlPlane-Role  Control plane  arn:aws:iam::269733383066:role/account-role-6kn4-ControlPlane-Role  4.13               No
    account-role-6kn4-Installer-Role     Installer      arn:aws:iam::269733383066:role/account-role-6kn4-Installer-Role     4.13               No
    account-role-6kn4-Support-Role       Support        arn:aws:iam::269733383066:role/account-role-6kn4-Support-Role       4.13               No
    account-role-6kn4-Worker-Role        Worker         arn:aws:iam::269733383066:role/account-role-6kn4-Worker-Role        4.13               No
    ```

**Clean up**

When you are finished using the resources that you created using Terraform, you should purge these resources with the following command:
```terminal
$ terraform destroy
```
{% if context == "rosa-understanding-terraform" %}
{%- set tf_full = "" -%}
{% endif %}