{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean up AWS resources {id="cloud-experts-using-aws-ack-clean-up_{{ context }}"}

Clean up your AWS resources after completing this tutorial. {._abstract}

**Procedure**

1.  Delete the S3 bucket resource:
    ```terminal
    $ oc -n ack-system delete bucket.s3.services.k8s.aws/${CLUSTER-NAME}-bucket
    ```
1.  Delete the AWS Controller for Kubernetes (ACK) S3 Operator and the AWS Identity and Access Management (IAM) roles:
    ```terminal
    $ oc -n ack-system delete subscription ack-${ACK_SERVICE}-controller
    ```
    ```terminal
    $ aws iam detach-role-policy \
      --role-name "ack-${ACK_SERVICE}-controller" \
      --policy-arn ${POLICY_ARN}
    ```
    ```terminal
    $ aws iam delete-role \
      --role-name "ack-${ACK_SERVICE}-controller"
    ```
1.  Delete the `ack-system` project:
    ```terminal
    $ oc delete project ack-system
    ```