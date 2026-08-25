{%- set _mod_docs_content_type = "PROCEDURE" %}
# Allowing endpoint gateway traffic {id="installation-ibm-cloud-configure-vpc-for-endpoint-gateways_{{ context }}"}

If you are using {{ ibm_cloud_name }} Virtual Private endpoints, your Virtual Private Cloud (VPC) must be configured to allow traffic to and from the endpoint gateways. {._abstract}

A VPC’s default security group is configured to allow all outbound traffic to endpoint gateways. Therefore, the simplest way to allow traffic between your VPC and endpoint gateways is to modify the default security group to allow inbound traffic on port 443.


:::note

If you choose to configure a new security group, the security group must be configured to allow both inbound and outbound traffic.

:::


**Prerequisites**

*   You have installed the {{ ibm_cloud_name }} Command Line Interface utility (`ibmcloud`).

**Procedure**

1.  Obtain the identifier for the default security group by running the following command:
    ```terminal
    $ DEFAULT_SG=$(ibmcloud is vpc <your_vpc_name> --output JSON | jq -r '.default_security_group.id')
    ```
1.  Add a rule that allows inbound traffic on port 443 by running the following command:
    ```terminal
    $ ibmcloud is security-group-rule-add $DEFAULT_SG inbound tcp --remote 0.0.0.0/0 --port-min 443 --port-max 443
    ```


:::note

Be sure that your endpoint gateways are configured to use this security group.

:::