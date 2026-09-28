{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Virtual Private Cloud using Terraform {id="rosa-hcp-vpc-terraform_{{ context }}"}

Terraform is a tool that allows you to create various resources using an established template. You can use Terraform with default options to create a Virtual Private Cloud for your {{ product_title }} cluster. {._abstract}

**Prerequisites**

*   You have installed Terraform version 1.4.0 or newer on your machine.
*   You have installed Git on your machine.

**Procedure**

1.  Open a shell prompt and clone the Terraform VPC repository by running the following command:
    ```terminal
    $ git clone https://github.com/openshift-cs/terraform-vpc-example
    ```
1.  Navigate to the created directory by running the following command:
    ```terminal
    $ cd terraform-vpc-example
    ```
1.  Initiate the Terraform file by running the following command:
    ```terminal
    $ terraform init
    ```

    A message confirming the initialization appears when this process completes.
1.  To build your VPC Terraform plan based on the existing Terraform template, run the `plan` command. You must include your AWS region. You can choose to specify a cluster name. A `rosa.tfplan` file is added to the `hypershift-tf` directory after the `terraform plan` completes. For more detailed options, see the [Terraform VPC repository’s README file](https://github.com/openshift-cs/terraform-vpc-example/blob/main/README.md).
    ```terminal
    $ terraform plan -out rosa.tfplan -var region=<region>
    ```
1.  Apply this plan file to build your VPC by running the following command:
    ```terminal
    $ terraform apply rosa.tfplan
    ```
    1.  Optional: Capture the Terraform-provisioned private, public, and machinepool subnet IDs as environment variables to use when creating your {{ product_title }} cluster:
        ```terminal
        $ export SUBNET_IDS=$(terraform output -raw cluster-subnets-string)
        ```

**Verification**

*   Verify that the variables were correctly set with the following command:
    ```terminal
    $ echo $SUBNET_IDS
    ```
    ```terminal title="Example output"
    $ subnet-0a6a57e0f784171aa,subnet-078e84e5b10ecf5b0
    ```