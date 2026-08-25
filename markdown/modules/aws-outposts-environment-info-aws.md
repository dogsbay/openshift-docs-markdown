{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining information from your AWS account {id="aws-outposts-environment-info-aws_{{ context }}"}

You can use the AWS CLI (`aws`) to obtain information from your AWS account.


:::tip

You might find it convenient to store some or all of these values as environment variables by using the `export` command.

:::


**Prerequisites**

*   You have an AWS Outposts site with the required hardware setup complete.
*   Your Outpost is connected to your AWS account.
*   You have access to your AWS account by using the AWS CLI (`aws`) as a user with permissions to perform the required tasks.

**Procedure**

1.  List the Outposts that are connected to your AWS account by running the following command:
    ```terminal
    $ aws outposts list-outposts
    ```
1.  Retain the following values from the output of the `aws outposts list-outposts` command:
    *   The Outpost ID.
    *   The Amazon Resource Name (ARN) for the Outpost.
    *   The Outpost availability zone.

        :::note

        The output of the `aws outposts list-outposts` command includes two values related to the availability zone: `AvailabilityZone` and `AvailabilityZoneId`. You use the `AvailablilityZone` value to configure a compute machine set that creates compute machines in your Outpost.
        
        :::

1.  Using the value of the Outpost ID, show the instance types that are available in your Outpost by running the following command. Retain the values of the available instance types.
    ```terminal
    $ aws outposts get-outpost-instance-types \
      --outpost-id <outpost_id_value>
    ```
1.  Using the value of the Outpost ARN, show the subnet ID for the Outpost by running the following command. Retain this value.
    ```terminal
    $ aws ec2 describe-subnets \
      --filters Name=outpost-arn,Values=<outpost_arn_value>
    ```