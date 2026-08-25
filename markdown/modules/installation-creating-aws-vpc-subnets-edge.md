{% if context == "installing-aws-outposts" %}
{%- set outposts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating subnets for AWS edge compute services {id="installation-creating-aws-vpc-subnets-edge_{{ context }}"}

You can automate creating subnets, route tables, and Carrier Gateways in {{ aws_short }} {{ zone_type }} to extend clusters into ultra-low-latency edge locations for edge workloads. Before you configure a machine set for edge compute nodes in your {{ product_title }} cluster, you must create a subnet in {{ zone_type }}. {._abstract}

{% if not outposts %}
Complete the following procedure for each Wavelength Zone that you want to deploy compute nodes to.
{% endif %}

You can use the provided CloudFormation template and create a CloudFormation stack. You can then use this stack to custom provision a subnet.


:::note

If you do not use the provided CloudFormation template to create your AWS infrastructure, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, you might have to contact Red Hat support with your installation logs.

:::


**Prerequisites**

*   You configured an AWS account.
*   You added your AWS keys and region to your local AWS profile by running `aws configure`.
{%- if not outposts %}
*   You opted in to the {{ zone_type }} group.
{%- endif %}
{%- if outposts %}
*   You have obtained the required information about your environment from your {{ product_title }} cluster, Outpost, and AWS account.
{%- endif %}

**Procedure**

1.  Go to the section of the documentation named "CloudFormation template for the VPC subnet", and copy the syntax from the template. Save the copied template syntax as a YAML file on your local system. This template describes the VPC that your cluster requires.
1.  Run the following command to deploy the CloudFormation template, which creates a stack of AWS resources that represent the VPC:
    ```terminal {minja}
    $ aws cloudformation create-stack --stack-name <stack_name> \
      --region ${CLUSTER_REGION} \
      --template-body file://<template>.yaml \
      --parameters \
        ParameterKey=VpcId,ParameterValue="${VPC_ID}" \
        ParameterKey=ClusterName,ParameterValue="${CLUSTER_NAME}" \
        ParameterKey=ZoneName,ParameterValue="${ZONE_NAME}" \
        ParameterKey=PublicRouteTableId,ParameterValue="${ROUTE_TABLE_PUB}" \
        ParameterKey=PublicSubnetCidr,ParameterValue="${SUBNET_CIDR_PUB}" \
        ParameterKey=PrivateRouteTableId,ParameterValue="${ROUTE_TABLE_PVT}" \
    {%- if not outposts %}
        ParameterKey=PrivateSubnetCidr,ParameterValue="${SUBNET_CIDR_PVT}"
    {%- endif %}
    {%- if outposts %}
        ParameterKey=PrivateSubnetCidr,ParameterValue="${SUBNET_CIDR_PVT}" \
        ParameterKey=PrivateSubnetLabel,ParameterValue="private-outpost" \
        ParameterKey=PublicSubnetLabel,ParameterValue="public-outpost" \
        ParameterKey=OutpostArn,ParameterValue="${OUTPOST_ARN}"
    {%- endif %}
    ```

{% if not outposts %}

    where

    `<stack_name>`
    :   Specifies the name for the CloudFormation stack, such as `cluster-wl-<local_zone_shortname>` for Local Zones and `cluster-wl-<wavelength_zone_shortname>` for Wavelength Zones. You need the name of this stack if you remove the cluster.

    `<template>`
    :   Specifies the relative path and the name of the CloudFormation template YAML file that you saved.

    `${{ VPC_ID }}`{minja}
    :   Specifies the VPC ID, which is the value `VpcID` in the output of the CloudFormation template for the VPC.

    `${{ CLUSTER_NAME }}`{minja}
    :   Specifies the value of **ClusterName** to be used as a prefix of the new AWS resource names.

    `${{ ZONE_NAME }}`{minja}
    :   Specifies the value of {{ zone_type }} name to create the subnets.

    `${{ ROUTE_TABLE_PUB }}`{minja}
    :   Specifies the Public Route Table Id extracted from the CloudFormation template. For Local Zones, the public route table is extracted from the VPC CloudFormation Stack. For Wavelength Zones, the value must be extracted from the output of the VPC’s carrier gateway CloudFormation stack.

    `${{ SUBNET_CIDR_PUB }}`{minja}
    :   Specifies a valid CIDR block that is used to create the public subnet. This block must be part of the VPC CIDR block `VpcCidr`.

    `${{ ROUTE_TABLE_PVT }}`{minja}
    :   Specifies the **PrivateRouteTableId** extracted from the output of the VPC’s CloudFormation stack.

    `${{ SUBNET_CIDR_PVT }}`{minja}
    :   Specifies a valid CIDR block that is used to create the private subnet. This block must be part of the VPC CIDR block `VpcCidr`.
    ```text title="Example output"
    arn:aws:cloudformation:us-east-1:123456789012:stack/<stack_name>/dbedae40-820e-11eb-2fd3-12a48460849f
    ```
{% endif %}

{% if outposts %}

    where

    `<stack_name>`
    :   Specifies the name for the CloudFormation stack, such as `cluster-<outpost_name>`.

    `<template>`
    :   Specifies the relative path and the name of the CloudFormation template YAML file that you saved.

    `${{ VPC_ID }}`{minja}
    :   Specifies the VPC ID, which is the value `VpcID` in the output of the CloudFormation template for the VPC.

    `${{ CLUSTER_NAME }}`{minja}
    :   Specifies the value of **ClusterName** to be used as a prefix of the new AWS resource names.

    `${{ ZONE_NAME }}`{minja}
    :   Specifies the value of {{ zone_type }} name to create the subnets.

    `${{ ROUTE_TABLE_PUB }}`{minja}
    :   Specifies the Public Route Table ID created in the `${{ VPC_ID }}`{minja} used to associate the public subnets on Outposts. Specify the public route table to associate the Outpost subnet created by this stack.

    `${{ SUBNET_CIDR_PUB }}`{minja}
    :   Specifies a valid CIDR block that is used to create the public subnet. This block must be part of the VPC CIDR block `VpcCidr`.

    `${{ OUTPOST_ARN }}`{minja}
    :   Specifies the Amazon Resource Name (ARN) for the Outpost.

    `${{ SUBNET_CIDR_PVT }}`{minja}
    :   Specifies a valid CIDR block that is used to create the private subnet. This block must be part of the VPC CIDR block `VpcCidr`.

    `${{ ROUTE_TABLE_PVT }}`{minja}
    :   Specifies the Private Route Table ID created in the `${{ VPC_ID }}`{minja} used to associate the private subnets on Outposts. Specify the private route table to associate the Outpost subnet created by this stack.
    ```text title="Example output"
    arn:aws:cloudformation:us-east-1:123456789012:stack/<stack_name>/dbedae40-820e-11eb-2fd3-12a48460849f
    ```
{% endif %}

**Verification**

*   Confirm that the template components exist by running the following command:
    ```terminal
    $ aws cloudformation describe-stacks --stack-name <stack_name>
    ```

    After the `StackStatus` displays `CREATE_COMPLETE`, the output displays values for the following parameters:

    `PublicSubnetId`
    :   The IDs of the public subnet created by the CloudFormation stack.

    `PrivateSubnetId`
    :   The IDs of the private subnet created by the CloudFormation stack.

    Ensure that you provide these parameter values to the other CloudFormation templates that you run to create for your cluster.

{% if context == "installing-aws-outposts" %}
{%- set outposts = "" -%}
{% endif %}