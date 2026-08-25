{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up your environment {id="cloud-experts-custom-dns-resolver-environment-setup_{{ context }}"}

You can use environment variables to ensure consistency across the commands within this lab. {._abstract}

**Prerequisites**

*   You have access to the {{ rosa_cli_first }}.
*   You have access to the AWS CLI (`aws`).
{%- if openshift_rosa %}
*   You have manually created an AWS Virtual Private Cloud (VPC).
{% endif %}
{% if openshift_rosa_hcp %}
*   You have manually created [an AWS Virtual Private Cloud (VPC)](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-hcp-creating-vpc_rosa-hcp-sts-creating-a-cluster-quickly).
{%- endif %}
*   You have configured a DHCP option set to point to a custom DNS server and set as the default for your VPC.

**Procedure**

1.  In your terminal, configure the following environment variables:
    ```terminal
    $ export VPC_ID=<vpc_ID>
    $ export REGION=<region>
    $ export VPC_CIDR=<vpc_CIDR>
    ```
    where:


    `<vpc_ID>`
    :   Replace with the ID of the VPC you want to install your cluster into.

    `<region>`
    :   Replace with the AWS region you want to install your cluster into.

    `<vpc_CIDR>`
    :   Replace with the CIDR range of your VPC.
1.  Ensure all fields output correctly before moving to the next section:
    ```terminal
    $ echo "VPC ID: ${VPC_ID}, VPC CIDR Range: ${VPC_CIDR}, Region: ${REGION}"
    ```