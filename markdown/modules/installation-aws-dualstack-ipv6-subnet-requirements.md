{%- set _mod_docs_content_type = "PROCEDURE" %}
# Subnet requirements for AWS dual-stack networking with IPv4 primary {id="installation-aws-dualstack-ipv6-subnet-requirements_{{ context }}"}

When deploying a dual-stack cluster into an existing VPC with IPv4 as the primary IP family (`ipFamily: DualStackIPv4Primary`), you must ensure that all subnets hosting cluster nodes have automatic IPv6 address assignment enabled (`AssignIpv6AddressOnCreation`). {._abstract}

If IPv6 auto-assignment is disabled on these subnets, EC2 instances will not receive an IPv6 address at launch, causing network initialization and cluster bootstrapping to fail.

**Procedure**

1.  Verify the `AssignIpv6AddressOnCreation` attribute for your subnets by running the following command:
    ```terminal
    $ aws ec2 describe-subnets \
        --filters "Name=vpc-id,Values=<vpc_id>" \
        --query "Subnets[*].[SubnetId, AssignIpv6AddressOnCreation]" \
        --output table \
        --region <aws_region>
    ```

    Replace `<vpc_id>` with your VPC ID and `<aws_region>` with your AWS region.
1.  If any subnet where cluster instances reside returns `False`, enable IPv6 auto-assignment by running the following command:
    ```terminal
    $ aws ec2 modify-subnet-attribute \
        --subnet-id <subnet_id> \
        --assign-ipv6-address-on-creation \
        --region <aws_region>
    ```