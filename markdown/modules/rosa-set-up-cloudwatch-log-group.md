{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the CloudWatch log group {id="rosa-set-up-cloudwatch-log-group_{{ context }}"}

If you have logs that require immediate action or organization, set up an Amazon CloudWatch log group. {._abstract}

**Prerequisites**

*   You have created an IAM role and policy.
*   You have ensured that the name of you your IAM role has the prefix, `CustomerLogDistribution`.

**Procedure**

1.  Create the CloudWatch log group by running the following command:
    ```terminal
    $ aws logs create-log-group --log-group-name <your_log_group_name>
    ```
1.  In your {{ product_title }} cluster, configure the log forwarder to use the CloudWatch log group by applying the following JSON sample:
    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "CreatePutLogs",
                "Effect": "Allow",
                "Action": [
                    "logs:CreateLogStream",
                    "logs:PutLogEvents"
                ],
                "Resource": "<your_log_group_arn>:*"
            },
            {
                "Sid": "DescribeLogs",
                "Effect": "Allow",
                "Action": [
                    "logs:DescribeLogGroups",
                    "logs:DescribeLogStreams"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
1.  Attach the policy to the CloudWatch role by running the following command:
    ```terminal
    $ aws iam put-role-policy \
        --role-name CustomerLogDistribution-RH \
        --policy-name Allow-CloudWatch-Writes \
        --policy-document file://cloudwatch-policy.json
    ```
1.  Configure your {{ product_title }} cluster to forward logs to the CloudWatch log group by applying the following sample YAML list. Specify an application, or group, or both:
    ```yaml
    cloudwatch:
      cloudwatch_log_role_arn: "arn:aws:iam::123456789012:role/RosaCloudWatch"
      cloudwatch_log_group_name: "rosa-logs"
      applications:
        - "<example_app1>"
      groups:
        - "<example_group1>"
    ```

    where:

    &lt;example_app1>
    :   Add one or more applications. For a list of applications, see the table in "Determining what log groups to use".

    &lt;example_group1>
    :   Add one or more of the following groups: `api`, `authentication`, `controller manager`, `scheduler`.

1.  Enable the log forwarder to send logs to your {{ product_title }} cluster.
    1.  To enable control plane log forwarding on a new cluster, include the log forwarding configuration by running the following command:
        ```terminal
        $ rosa create cluster --log-fwd-config="<path_to_file>.yaml"
        ```
    1.  To enable control plane log forwarding on an existing cluster, include the log forwarding configuration by running the following command:
        ```terminal
        $ rosa create log-forwarder -c <cluster> --log-fwd-config="<path_to_file>.yaml" -o yaml
        ```
1.  Optional: For an example for forwarding logs to the CloudWatch log group, apply the following sample YAML:
    ```yaml
    cloudwatch:
      cloudwatch_log_role_arn: "cloudwatch-log-role-arn"
      cloudwatch_log_group_name: "cloudwatch-group-name"
      applications:
        - "<example_app1>"
      groups:
        - "<example_group1>"
    ```