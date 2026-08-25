{%- set _mod_docs_content_type = "PROCEDURE" -%}
{% if context == "rosa-hcp-creating-a-cluster-quickly-terraform" %}
{%- set tf_config = true -%}
{% endif %}

# Configure an htpasswd identity provider with Terraform {id="config-htpasswd-idp-terraform_{{ context }}"}

{% if tf_config %}
After creating your cluster with Terraform, you can permit users access to your cluster by using an htpasswd identity provider (IDP) with the Terraform tool.
{% endif %}
{% if not tf_config %}
You can create an htpasswd identity provider (IDP) with Terraform. {._abstract}
{% endif %}

**Prerequisites**

*   You have installed and configured the latest version of the {{ rosa_cli }}.
*   You have installed and configured the latest version of Terraform.

**Procedure**

{%- if not tf_config %}
1.  Grant permissions to your account by using [an offline {{ cluster_manager_first }} token](https://console.redhat.com/openshift/token).
1.  Copy your offline token, and set the token as an environmental variable by running the following command:
    ```terminal
    $ export RHCS_TOKEN=<your_offline_token>
    ```

    :::note

    This environmental variable resets at the end of each session, such as restarting your machine or closing the terminal.
    
    :::

{%- endif %}

1.  Create the `htpasswd_idp.tf` file by running one of the following commands:
    *   **Option 1**: To create a user with a generated, randomized password, run:
        ```terminal
        $ cat<<-EOF>htpasswd_idp.tf
          module "htpasswd_idp" {
            source = "terraform-redhat/rosa-hcp/rhcs//modules/idp"
            version = "1.6.2"

            cluster_id         = "2odpb9p344hnkfvpkluo00qmgkika78l"
            name               = "htpasswd-idp-tf-1"
            idp_type           = "htpasswd"
            htpasswd_idp_users = [{ username = "pej-user-d1", password = random_password.password.result }]
          }
          
          resource "aws_secretsmanager_secret" "idp_password" {
          name        = "idp-password-secret"
          description = "Any description here" 
          }

          resource "random_password" "password" {
              length           = 16
              lower            = true
              special          = true
              override_special = "!#$%&*()-_=+[]{}<>:?"
          }

          # If you need to output the password, mark it as sensitive to hide from CLI logs
          output "password_output" {
              value     = random_password.password.result
              sensitive = true
          }
          
          # This section sends your credentials to your AWS Secrets Manager to enable you to log in to your cluster.
          resource "aws_secretsmanager_secret_version" "idp_password_val" {
          secret_id     = aws_secretsmanager_secret.idp_password.id
          secret_string = random_password.password.result
          }
        EOF
        ```

        You must replace the `<cluster_id>` placeholder with the 32-digit ID for your cluster. To find that value, run `rosa list clusters | awk '{print $1}'`. You also must replace the `<user_name>` placeholder with the username you want to create. The randomized password is then stored in your AWS Secrets manager to be used when logging in to the cluster.
        *   Run the following command to view your password after setting it:
            ```terminal
            $ terraform output password_output
            ```

            The CLI returns your generated password in plain text.
    *   **Option 2**: To specify your passwords when creating a user, run:
        ```terminal
        $ cat<<-EOF>htpasswd_idp.tf
          module "htpasswd_idp" {
            source = "terraform-redhat/rosa-hcp/rhcs//modules/idp"
            version = "1.6.2"

            cluster_id         = "<cluster_id>"
            name               = "htpasswd-idp"
            idp_type           = "htpasswd"
            htpasswd_idp_users = [{ username="<user_name>",password="<password>"}]
          }
        EOF
        ```

        You must replace the `<cluster_id>` placeholder with the 32-digit ID for your cluster. To find that value, run `rosa list clusters | awk '{print $1}'`. You also must replace the `<user_name>` placeholder with the username you want to create and a password for the `<password>` placeholder.
1.  Run the following command to configure Terraform to create your resources based on your Terraform files:
    ```terminal
    $ terraform init
    ```
1.  Verify that the Terraform you copied is correct by running the following command:
    ```terminal
    $ terraform validate
    ```
    ```terminal title="Example output"
    Success! The configuration is valid.
    ```
1.  Create your cluster with Terraform by running the following command:
    ```terminal
    $ terraform apply
    ```
1.  Enter `yes` to proceed or `no` to cancel when the Terraform interface lists the resources to be created or changed and prompts for confirmation:
    ```terminal
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value: yes
    ```

    You see a confirmation that your IDP has been created.
    ```terminal
    Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    ```

    :::note

    If you used the randomized password template, then the generated password is stored in your AWS Secrets manager.
    
    :::


{% if context == "rosa-hcp-creating-a-cluster-quickly-terraform" %}
{%- set tf_config = "" -%}
{% endif %}