{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the `CloudFormation` stack for compute machines {id="installation-aws-creating-cloudformation-stack_{{ context }}"}

You can create a stack of {{ aws_first }} resources for the compute machines by using the provided `CloudFormation` template. {._abstract}


:::important

When you use the `CloudFormation` template for the control plane machines, the template provisions all three control plane machines with a single stack; however, when you use the `CloudFormation` template to deploy the compute machines, you must create the number of stacks based on the number that you defined in the `install-config.yaml` file. You provision each stack once for each machine. To provision a new compute machine, you must change the stack name.

:::


**Procedure**

*   To create the `CloudFormation` stack for compute machines, run the following command:
    ```terminal
    $ aws cloudformation create-stack --stack-name <name> \
         --template-body file://<template>.yaml \
         --parameters file://<parameters>.json
    ```

    where:

    `<name>`
    :   Specifies the `<name>` with the name for the `CloudFormation` stack, such as `cluster-worker-1`. You need the name of this stack if you remove the cluster.

    `<template>`
    :   Specifies the relative path and the name of the `CloudFormation` template YAML file that you saved.

    `<parameters>`
    :   Specifies the relative path and the name of the JSON file for the `CloudFormation` parameters.
    ```terminal title="Example output"
    arn:aws:cloudformation:us-east-1:269333783861:stack/cluster-worker-1/729ee301-1c2a-11eb-348f-sd9888c65b59
    ```