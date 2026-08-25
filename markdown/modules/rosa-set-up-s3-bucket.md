{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the S3 bucket {id="rosa-set-up-s3-bucket_{{ context }}"}

If you have logs that need long-term storage or large-scale data analysis, set up an Amazon S3 bucket. {._abstract}

**Prerequisites**

*   If you want to prevent limitations for the managed keys for your S3 bucket, you must have created an IAM role and policy.
*   You have ensured that the name of you your IAM role has the prefix, `CustomerLogDistribution`.

**Procedure**

1.  Create the S3 bucket by running the following command:
    ```terminal
    $ aws s3api create-bucket \
        --bucket <your_s3_bucket_name> \
        --region <your_aws_region> \
        --create-bucket-configuration LocationConstraint=<cluster_aws_region>
    ```
1.  Configure the policy for the S3 bucket by applying the following S3 bucket policy sample:
    ```json
     "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowCentralLogDistributionWrite",
                "Effect": "Allow",
                "Principal": {
                    "AWS": "arn:aws:iam::859037107838:role/ROSA-CentralLogDistributionRole-241c1a86"
                },
                "Action": "s3:PutObject",
                "Resource": "arn:aws:s3:::<your_s3_bucket_name>/*",
                "Condition": {
                    "StringEquals": {
                        "s3:x-amz-acl": "bucket-owner-full-control"
                    }
                }
            }
        ]
    }
    ```
1.  Attach the policy to the S3 role by running the following command:
    ```terminal
    $ aws s3api put-bucket-policy \
        --bucket <your_s3_bucket_name> \
        --policy file://s3-bucket-policy.json
    ```
1.  Configure your {{ product_title }} cluster to forward logs to the S3 bucket by applying the following sample YAML list. Specify an application, or group, or both:
    ```yaml
    s3:
      s3_config_bucket_name: "my-log-bucket"
      s3_config_bucket_prefix: "my-bucket-prefix"
      applications:
        - "<example_app1>"
      groups:
        - "<example_group1>"
    ```

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
1.  Optional: For an example for forwarding logs to the S3 bucket, apply the following sample YAML:
    ```yaml
    s3:
      s3_config_bucket_name: "s3-bucket-name"
      s3_config_bucket_prefix: "s3-bucket-prefix"
      groups:
        - "<example_group1>"
    ```