{% if context == "rosa-hcp-egress-zero-install" %}
{%- set rosa_egress_lockdown = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Virtual Private Cloud using Terraform {id="rosa-hcp-vpc-terraform_{{ context }}"}

Terraform is a tool that allows you to create various resources using an established template. You can use Terraform with default options to create a Virtual Private Cloud for your {{ product_title }} cluster. {._abstract}

{% if rosa_egress_lockdown %}

:::note

The Terraform instructions are for testing and demonstration purposes. Your own installation requires some modifications to the VPC for your own use. Use this Terraform script in the same region where you intend to install your cluster. These examples use `us-east-2`.

:::

{% endif %}

**Prerequisites**

*   You have installed Terraform version 1.4.0 or newer on your machine.
*   You have installed Git on your machine.

**Procedure**

1.  Open a shell prompt and clone the Terraform VPC repository by running the following command:
    ```terminal
    $ git clone https://github.com/openshift-cs/terraform-vpc-example
    ```
1.  Navigate to the created directory by running the following command:
    {%- if not rosa_egress_lockdown %}
    ```terminal
    $ cd terraform-vpc-example
    ```
{% endif %}
{% if rosa_egress_lockdown %}
    ```terminal
    $ cd terraform-vpc-example/zero-egress
    ```
{% endif %}
1.  Initiate the Terraform file by running the following command:
    ```terminal
    $ terraform init
    ```

    A message confirming the initialization appears when this process completes.

{% if rosa_egress_lockdown %}
1.  To build your VPC Terraform plan based on the existing Terraform template, run the `plan` command. You must include your AWS region, availability zones, CIDR blocks, and private subnets. You can choose to specify a cluster name. A `rosa-zero-egress.tfplan` file is added to the `hypershift-tf` directory after the `terraform plan` completes. For more detailed options, see the [Terraform VPC repository’s README file](https://github.com/openshift-cs/terraform-vpc-example/blob/main/README.md).
    ```terminal
    $ terraform plan -out rosa-zero-egress.tfplan -var region=<aws_region> \
          -var 'availability_zones=<availability_zones>' \
          -var vpc_cidr_block=<vpc_cidr_block> \
          -var 'private_subnets=<private_subnets>'
    ```
    where:


    `<aws_region>`
    :   Enter your AWS region.

    `<availability_zones>`
    :   Enter the availability zones for the VPC. For example, for a VPC that uses `ap-southeast-1`, you would use the following as availability zones: `["ap-southeast-1a", "ap-southeast-1b", "ap-southeast-1c"]`.

    `<vpc_cidr_block>`
    :   Enter the CIDR block for your VPC. For example, `10.0.0.0/16`.

    `<private_subnets>`
    :   Enter each of the subnets that are created for the VPC. For example, `["10.0.0.0/24", "10.0.1.0/24", "10.0.2.0/24"]`.
{% endif %}
{% if not rosa_egress_lockdown %}
1.  To build your VPC Terraform plan based on the existing Terraform template, run the `plan` command. You must include your AWS region. You can choose to specify a cluster name. A `rosa.tfplan` file is added to the `hypershift-tf` directory after the `terraform plan` completes. For more detailed options, see the [Terraform VPC repository’s README file](https://github.com/openshift-cs/terraform-vpc-example/blob/main/README.md).
    ```terminal
    $ terraform plan -out rosa.tfplan -var region=<region>
    ```
{% endif %}
1.  Apply this plan file to build your VPC by running the following command:
    {%- if rosa_egress_lockdown %}
    ```terminal
    $ terraform apply rosa-zero-egress.tfplan
    ```
{% endif %}
{% if not rosa_egress_lockdown %}
    ```terminal
    $ terraform apply rosa.tfplan
    ```
    1.  Optional: Capture the Terraform-provisioned private, public, and machinepool subnet IDs as environment variables to use when creating your {{ product_title }} cluster:
        ```terminal
        $ export SUBNET_IDS=$(terraform output -raw cluster-subnets-string)
        ```
    1.  Verify that the variables were correctly set with the following command:
        ```terminal
        $ echo $SUBNET_IDS
        ```
        ```terminal title="Example output"
        $ subnet-0a6a57e0f784171aa,subnet-078e84e5b10ecf5b0
        ```
{% endif %}

{% if context == "rosa-hcp-egress-zero-install" %}
{%- set rosa_egress_lockdown = false -%}
{% endif %}