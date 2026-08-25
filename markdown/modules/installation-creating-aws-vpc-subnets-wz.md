{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating subnets in Wavelength Zones {id="installation-creating-aws-vpc-subnets-wz_{{ context }}"}

Before you configure a machine set for edge compute nodes in your {{ product_title }} cluster, you must create the subnets in {{ zone_type }}. Use the provided CloudFormation template to provision public and private subnets for each Wavelength Zone where you want to deploy compute nodes. {._abstract}

You can use the provided CloudFormation template and create a CloudFormation stack. You can then use this stack to custom provision a subnet.


:::note

If you do not use the provided CloudFormation template to create your {{ aws_first }} infrastructure, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, you might have to contact Red Hat support with your installation logs.

:::


**Prerequisites**

*   You configured an {{ aws_short }} account.
*   You added your {{ aws_short }} keys and region to your local A{{ aws_short }} profile by running `aws configure`.
*   You opted in to the {{ zone_type }} group.

**Procedure**

1.  Go to the section of the documentation named "CloudFormation template for the VPC subnet", and copy the syntax from the template. Save the copied template syntax as a YAML file on your local system. This template describes the VPC that your cluster requires.
1.  Run the following command to deploy the CloudFormation template, which creates a stack of {{ aws_short }} resources that represent the VPC:
    ```terminal
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
        ParameterKey=PrivateSubnetCidr,ParameterValue="${SUBNET_CIDR_PVT}"
    ```

    where:

    `<stack_name>`
    :   Specifies the name for the CloudFormation stack, such as `cluster-wl-<wavelength_zone_shortname>`. You need the name of this stack if you remove the cluster.

    `<template>`
    :   Specifies the relative path and the name of the CloudFormation template YAML file that you saved.

    `${{ VPC_ID }}`{minja}
    :   Specifies the VPC ID, which is the value `VpcID` in the output of the CloudFormation template for the VPC.

    `${{ CLUSTER_NAME }}`{minja}
    :   Specifies the value of `ClusterName` to be used as a prefix of the new {{ aws_short }} resource names.

    `${{ ZONE_NAME }}`{minja}
    :   Specifies the value of the {{ zone_type }} name to create the subnets.

    `${{ ROUTE_TABLE_PUB }}`{minja}
    :   Specifies the `PublicRouteTableId` extracted from the output of the VPC’s carrier gateway CloudFormation stack.

    `${{ SUBNET_CIDR_PUB }}`{minja}
    :   Specifies a valid CIDR block that is used to create the public subnet. This block must be part of the VPC CIDR block `VpcCidr`.

    `${{ ROUTE_TABLE_PVT }}`{minja}
    :   Specifies the `PrivateRouteTableId` extracted from the output of the VPC’s CloudFormation stack.

    `${{ SUBNET_CIDR_PVT }}`{minja}
    :   Specifies a valid CIDR block that is used to create the private subnet. This block must be part of the VPC CIDR block `VpcCidr`.

```terminal title="Example output"
arn:aws:cloudformation:us-east-1:123456789012:stack/<stack_name>/dbedae40-820e-11eb-2fd3-12a48460849f
```

**Verification**

*   Confirm that the template components exist by running the following command:
    ```terminal
    $ aws cloudformation describe-stacks --stack-name <stack_name>
    ```

    After the `StackStatus` displays `CREATE_COMPLETE`, the output displays values for the following parameters. Ensure that you provide these parameter values to the other CloudFormation templates that you run to create for your cluster.

    `PublicSubnetId`
    :   The IDs of the public subnet created by the CloudFormation stack.

    `PrivateSubnetId`
    :   The IDs of the private subnet created by the CloudFormation stack.