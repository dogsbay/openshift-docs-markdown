{% if context == "installing-aws-user-infra" %}
{%- set three_node_cluster = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the worker nodes in AWS {id="installation-creating-aws-worker_{{ context }}"}

Create worker nodes in {{ aws_first }} for your cluster by using the provided `CloudFormation` template and a custom parameter file. {._abstract}

{% if three_node_cluster %}

:::note

If you are installing a three-node cluster, skip this step. A three-node cluster consists of three control plane machines, which also act as compute machines.

:::

{% endif %}

You can use the provided CloudFormation template and a custom parameter file to create a stack of AWS resources that represent a worker node.


:::important

The CloudFormation template creates a stack that represents one worker node.
You must create a stack for each worker node.

:::



:::note

If you do not use the provided CloudFormation template to create your worker
nodes, you must review the provided information and manually create
the infrastructure. If your cluster does not initialize correctly, you might
have to contact Red Hat support with your installation logs.

:::


**Prerequisites**

*   You created the control plane machines.

**Procedure**

1.  Create a JSON file that contains the parameter values that the CloudFormation
template requires:
    ```json
    [
      {
        "ParameterKey": "InfrastructureName", (1)
        "ParameterValue": "mycluster-<random_string>" (2)
      },
      {
        "ParameterKey": "RhcosAmi", (3)
        "ParameterValue": "ami-<random_string>" (4)
      },
      {
        "ParameterKey": "Subnet", (5)
        "ParameterValue": "subnet-<random_string>" (6)
      },
      {
        "ParameterKey": "WorkerSecurityGroupId", (7)
        "ParameterValue": "sg-<random_string>" (8)
      },
      {
        "ParameterKey": "IgnitionLocation", (9)
        "ParameterValue": "https://api-int.<cluster_name>.<domain_name>:22623/config/worker" (10)
      },
      {
        "ParameterKey": "CertificateAuthorities", (11)
        "ParameterValue": "data:text/plain;charset=utf-8;base64,ABC...xYz==" (12)
      },
      {
        "ParameterKey": "WorkerInstanceProfileName", (13)
        "ParameterValue": "<roles_stack>-WorkerInstanceProfile-<random_string>" (14)
      },
      {
        "ParameterKey": "WorkerInstanceType", (15)
        "ParameterValue": "" (16)
      }
    ]
    ```
    1.  The name for your cluster infrastructure that is encoded in your Ignition
    config files for the cluster.
    1.  Specify the infrastructure name that you extracted from the Ignition config
    file metadata, which has the format `<cluster-name>-<random-string>`.
    1.  Current {{ op_system_first }} AMI to use for the worker nodes based on your selected architecture.
    1.  Specify an `AWS::EC2::Image::Id` value.
    1.  A subnet, preferably private, to start the worker nodes on.
    1.  Specify a subnet from the `PrivateSubnets` value from the output of the
    CloudFormation template for DNS and load balancing.
    1.  The worker security group ID to associate with worker nodes.
    1.  Specify the `WorkerSecurityGroupId` value from the output of the
    CloudFormation template for the security group and roles.
    1.  The location to fetch the bootstrap Ignition config file from.
    1.  Specify the generated Ignition config location,
    `https://api-int.<cluster_name>.<domain_name>:22623/config/worker`.
    1.  Base64 encoded certificate authority string to use.
    1.  Specify the value from the `worker.ign` file that is in the installation
    directory. This value is the long string with the format
    `data:text/plain;charset=utf-8;base64,ABC...xYz==`.
    1.  The IAM profile to associate with worker nodes.
    1.  Specify the `WorkerInstanceProfile` parameter value from the output of
    the CloudFormation template for the security group and roles.
    1.  The type of AWS instance to use for the compute machines based on your selected architecture.
    1.  The instance type value corresponds to the minimum resource requirements
    for compute machines. For example `m6i.large` is a type for AMD64
{%- if not openshift_origin %}
     and `m6g.large` is a type for ARM64.
{%- endif %}
1.  Copy the template from the **CloudFormation template for worker machines**
section of this topic and save it as a YAML file on your computer. This template
describes the networking objects and load balancers that your cluster requires.
1.  Optional: If you specified an `m5` instance type as the value for `WorkerInstanceType`, add that instance type to the `WorkerInstanceType.AllowedValues` parameter in the CloudFormation template.
1.  Optional: If you are deploying with an AWS Marketplace image, update the `Worker0.type.properties.ImageID` parameter with the AMI ID that you obtained from your subscription.
1.  Use the CloudFormation template to create a stack of AWS resources that represent a worker node:

    :::important

    You must enter the command on a single line.
    
    :::

    ```terminal
    $ aws cloudformation create-stack --stack-name <name> (1)
         --template-body file://<template>.yaml \ (2)
         --parameters file://<parameters>.json (3)
    ```
    1.  `<name>` is the name for the CloudFormation stack, such as `cluster-worker-1`.
    You need the name of this stack if you remove the cluster.
    1.  `<template>` is the relative path to and name of the CloudFormation template
    YAML file that you saved.
    1.  `<parameters>` is the relative path to and name of the CloudFormation
    parameters JSON file.
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

    You must create at least two worker machines, so you must create at least
    two stacks that use this CloudFormation template.
    
    :::


{% if context == "installing-aws-user-infra" %}
{%- set three_node_cluster = false -%}
{% endif %}