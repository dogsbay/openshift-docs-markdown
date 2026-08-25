{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a cluster with a configured {{ aws_short }} Local Zone infrastructure {id="installation-aws-delete-cluster"}

After you install a cluster on {{ aws_first }} into an existing Virtual Private Cloud (VPC), and you set subnets for each Local Zone location, you can delete the cluster and any {{ aws_short }} resources associated with it. {._abstract}

The example in the procedure assumes that you created a VPC and its subnets by using a CloudFormation template.

**Prerequisites**

*   You know the name of the CloudFormation stacks, `<local_zone_stack_name>` and `<vpc_stack_name>`, that were used during the creation of the network. You need the name of the stack to delete the cluster.
*   You have access rights to the directory that contains the installation files that were created by the installation program.
*   Your account includes a policy that provides you with permissions to delete the CloudFormation stack.

**Procedure**

1.  Change to the directory that contains the stored installation program, and delete the cluster by using the `destroy cluster` command:
    ```terminal
    $ ./openshift-install destroy cluster --dir <installation_directory> \
       --log-level=debug
    ```

    where:

    `<installation_directory>`
    :   Specify the directory that stored any files created by the installation program.

    `--log-level=debug`
    :   To view different log details, specify `error`, `info`, or `warn` instead of `debug`.

1.  Delete the CloudFormation stack for the Local Zone subnet:
    ```terminal
    $ aws cloudformation delete-stack --stack-name <local_zone_stack_name>
    ```
1.  Delete the stack of resources that represent the VPC:
    ```terminal
    $ aws cloudformation delete-stack --stack-name <vpc_stack_name>
    ```

**Verification**

*   Check that you removed the stack resources by issuing the following commands in the {{ aws_short }} CLI. The AWS CLI outputs that no template component exists.
    ```terminal
    $ aws cloudformation describe-stacks --stack-name <local_zone_stack_name>
    ```
    ```terminal
    $ aws cloudformation describe-stacks --stack-name <vpc_stack_name>
    ```