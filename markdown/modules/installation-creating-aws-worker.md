{% if context == "installing-aws-user-infra" %}
{%- set three_node_cluster = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the worker nodes in AWS {id="installation-creating-aws-worker_{{ context }}"}

To run application workloads on your {{ product_title }} cluster, create worker nodes in {{ aws_first }} by using the provided CloudFormation template. {._abstract}

{% if three_node_cluster %}

:::note

If you are installing a three-node cluster, skip this step. A three-node cluster consists of three control plane machines, which also act as compute machines.

:::

{% endif %}

You can use the provided CloudFormation template and a custom parameter file to create a stack of {{ aws_short }} resources that represent a worker node.


:::important

The CloudFormation template creates a stack that represents one worker node.
You must create a stack for each worker node.

:::



:::note

If you do not use the provided CloudFormation template to create your worker nodes, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, you might have to contact Red Hat support with your installation logs.

:::


**Prerequisites**

*   You created the control plane machines.

**Procedure**

1.  Create a JSON file that contains the parameter values that the CloudFormation template requires:
    ```json
    [
      {
        "ParameterKey": "InfrastructureName",
        "ParameterValue": "mycluster-<random_string>"
      },
      {
        "ParameterKey": "RhcosAmi",
        "ParameterValue": "ami-<random_string>"
      },
      {
        "ParameterKey": "Subnet",
        "ParameterValue": "subnet-<random_string>"
      },
      {
        "ParameterKey": "WorkerSecurityGroupId",
        "ParameterValue": "sg-<random_string>"
      },
      {
        "ParameterKey": "IgnitionLocation",
        "ParameterValue": "https://api-int.<cluster_name>.<domain_name>:22623/config/worker"
      },
      {
        "ParameterKey": "CertificateAuthorities",
        "ParameterValue": "data:text/plain;charset=utf-8;base64,ABC...xYz=="
      },
      {
        "ParameterKey": "WorkerInstanceProfileName",
        "ParameterValue": "<roles_stack>-WorkerInstanceProfile-<random_string>"
      },
      {
        "ParameterKey": "WorkerInstanceType",
        "ParameterValue": ""
      }
    ]
    ```

    where:

    `InfrastructureName`
    :   Specifies the name for your cluster infrastructure that is encoded in your Ignition config files for the cluster. Set the value to the infrastructure name that you extracted from the Ignition config file metadata, which has the format `<cluster-name>-<random-string>`.

    `RhcosAmi`
    :   Specifies the current {{ op_system_first }} AMI to use for the worker nodes based on your selected architecture. Set the value to a valid `AWS::EC2::Image::Id` value.

    `Subnet`
    :   Specifies a subnet, preferably private, to start the worker nodes on. Set the value to a subnet from the `PrivateSubnets` value from the output of the CloudFormation template for DNS and load balancing.

    `WorkerSecurityGroupId`
    :   Specifies the worker security group ID to associate with worker nodes. Set the value to the `WorkerSecurityGroupId` value from the output of the CloudFormation template for the security group and roles.

    `IgnitionLocation`
    :   Specifies the location to fetch the bootstrap Ignition config file from. Set the value to the generated Ignition config location, `https://api-int.<cluster_name>.<domain_name>:22623/config/worker`.

    `CertificateAuthorities`
    :   Specifies the base64 encoded certificate authority string to use. Set the value to the value from the `worker.ign` file that is in the installation directory. This value is the long string with the format `data:text/plain;charset=utf-8;base64,ABC...xYz==`.

    `WorkerInstanceProfileName`
    :   Specifies the IAM profile to associate with worker nodes. Set the value to the `WorkerInstanceProfile` parameter value from the output of the CloudFormation template for the security group and roles.

    `WorkerInstanceType`
    :   Specifies the type of {{ aws_short }} instance to use for the compute machines based on your selected architecture. The instance type value corresponds to the minimum resource requirements for compute machines. For example `m6i.large` is a type for AMD64
{%- if not openshift_origin %}
        and `m6g.large` is a type for ARM64.
{%- endif %}
1.  Copy the template from the **CloudFormation template for compute machines** section of this topic and save it as a YAML file on your computer. This template describes the compute machines that your cluster requires.
1.  Optional: If you specified an `m5` instance type as the value for `WorkerInstanceType`, add that instance type to the `WorkerInstanceType.AllowedValues` parameter in the CloudFormation template.
1.  Optional: If you are deploying with an AWS Marketplace image, update the `Worker0.type.properties.ImageID` parameter with the AMI ID that you obtained from your subscription.
1.  Use the CloudFormation template to create a stack of {{ aws_short }} resources that represent a worker node:

    :::important

    You must enter the command on a single line.
    
    :::

    ```terminal
    $ aws cloudformation create-stack --stack-name <name> \
         --template-body file://<template>.yaml \
         --parameters file://<parameters>.json
    ```

    where:

    `<name>`
    :   Specifies the name for the CloudFormation stack, such as `cluster-worker-1`. You need the name of this stack if you remove the cluster.

    `<template>`
    :   Specifies the relative path to and name of the CloudFormation template YAML file that you saved.

    `<parameters>`
    :   Specifies the relative path to and name of the CloudFormation parameters JSON file.
    ```terminal title="Example output"
    arn:aws:cloudformation:us-east-1:269333783861:stack/cluster-worker-1/729ee301-1c2a-11eb-348f-sd9888c65b59
    ```

    :::note

    The CloudFormation template creates a stack that represents one worker node.
    
    :::

1.  Confirm that the template components exist:
    ```terminal
    $ aws cloudformation describe-stacks --stack-name <name>
    ```
1.  Continue to create worker stacks until you have created enough worker machines for your cluster. You can create additional worker stacks by referencing the same template and parameter files and specifying a different stack name.

    :::important

    You must create at least two worker machines, so you must create at least two stacks that use this CloudFormation template.
    
    :::


{% if context == "installing-aws-user-infra" %}
{%- set three_node_cluster = "" -%}
{% endif %}