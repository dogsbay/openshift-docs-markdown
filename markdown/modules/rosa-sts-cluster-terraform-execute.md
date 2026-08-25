{% if context == "rosa-classic-creating-a-cluster-quickly-terraform" %}
{%- set tf_rosa_classic = true -%}
{% endif %}
{% if context == "rosa-hcp-creating-a-cluster-quickly-terraform" %}
{%- set tf_rosa_hcp = true -%}
{% endif %}
{%- set _mod_docs_content_type = "PROCEDURE" %}

# Using Terraform to create your {{ product_title }} cluster {id="rosa-sts-cluster-terraform-execute_{{ context }}"}

After you create the Terraform files, you must initiate Terraform to provide all of the required dependencies. Then apply the Terraform plan. {._abstract}

{% include "./snippets/terraform-modification-disclaimer.md" %}

**Procedure**

1.  Configure Terraform to create your resources based on your Terraform files, run the following command:
    ```terminal
    $ terraform init
    ```
1.  **Optional**: Verify that the Terraform you copied is correct by running the following command:
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

    The Terraform interface asks two questions to create your cluster, similar to the following:
    ```terminal
    var.create_vpc
      If you would like to create a new VPC, set this value to 'true'. If you do not want to create a new VPC, set this value to 'false'.

      Enter a value:

    var.private_cluster
      If you want to create a private cluster, set this value to 'true'. If you want a publicly available cluster, set this value to 'false'.

      Enter a value:
    ```
1.  Enter `yes` to proceed or `no` to cancel when the Terraform interface lists the resources to be created or changed and prompts for confirmation:
    {%- if tf_rosa_hcp %}
    ```terminal
    Plan: 63 to add, 0 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.
    ```
{% endif %}
{% if tf_rosa_classic %}
    ```terminal title="Example output"
    Plan: 74 to add, 0 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value: yes
    ```
{%- endif %}

    If you enter `yes`, your Terraform plan starts, creating your AWS account roles, Operator roles, and your {{ product_title }} cluster.

**Verification**

1.  Verify that your cluster was created by running the following command:
    ```terminal
    $ rosa list clusters
    ```

    This example shows a cluster in the `ready` state:
{%- if openshift_rosa_hcp %}
    ```terminal
    ID                                NAME          STATE  TOPOLOGY
    27c3snjsupa9obua74ba8se5kcj11269  rosa-tf-demo  ready  Hosted CP
    ```
{% endif %}
{% if openshift_rosa %}
    ```terminal
    ID                                NAME          STATE  TOPOLOGY
    27c3snjsupa9obua74ba8se5kcj11269  rosa-tf-demo  ready  Classic (STS)
    ```
{% endif %}
1.  Verify that your account roles were created by running the following command:
    ```terminal
    $ rosa list account-roles
    ```

    This example shows the account roles that were created:
    ```terminal
    I: Fetching account roles
    ROLE NAME                                   ROLE TYPE      ROLE ARN                                                           OPENSHIFT VERSION  AWS Managed
{%- if tf_rosa_classic %}
    ROSA-demo-ControlPlane-Role                 Control plane  arn:aws:iam::<ID>:role/ROSA-demo-ControlPlane-Role                 4.14               No
{%- endif %}
    ROSA-demo-Installer-Role                    Installer      arn:aws:iam::<ID>:role/ROSA-demo-Installer-Role                    4.14               No
    ROSA-demo-Support-Role                      Support        arn:aws:iam::<ID>:role/ROSA-demo-Support-Role                      4.14               No
    ROSA-demo-Worker-Role                       Worker         arn:aws:iam::<ID>:role/ROSA-demo-Worker-Role                       4.14               No
    ```
1.  Verify that your Operator roles were created by running the following command:
    ```terminal
    $ rosa list operator-roles
    ```

    This example shows the Terraform-created Operator roles:
    ```terminal
    I: Fetching operator roles
    ROLE PREFIX    AMOUNT IN BUNDLE
{%- if tf_rosa_classic %}
    rosa-demo      6
{% endif %}
{% if tf_rosa_hcp %}
    rosa-demo      8
{%- endif %}
    ```

{% if context == "rosa-classic-creating-a-cluster-quickly-terraform" %}
{%- set tf_rosa_classic = true -%}
{% endif %}
{% if context == "rosa-hcp-creating-a-cluster-quickly-terraform" %}
{%- set tf_rosa_hcp = true -%}
{% endif %}