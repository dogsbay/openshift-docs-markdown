{%- set _mod_docs_content_type = "PROCEDURE" %}
# AWS storage {id="logging-loki-storage-aws_{{ context }}"}

**Prerequisites**

*   You installed the {{ loki_op }}.
*   You installed the {{ oc_first }}.
*   You created a [bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) on AWS.
*   You created an [AWS IAM Policy and IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_resource-based).

**Procedure**

*   Create an object storage secret with the name `logging-loki-aws` by running the following command:
    ```terminal
    $ oc create secret generic logging-loki-aws \
      --from-literal=bucketnames="<bucket_name>" \
      --from-literal=endpoint="<aws_bucket_endpoint>" \
      --from-literal=access_key_id="<aws_access_key_id>" \
      --from-literal=access_key_secret="<aws_access_key_secret>" \
      --from-literal=region="<aws_region_of_your_bucket>"
    ```

## AWS storage for STS enabled clusters {id="AWS_storage_STS_{{ context }}"}

If your cluster has STS enabled, the Cloud Credential Operator (CCO) supports short-term authentication using AWS tokens.

You can create the Loki object storage secret manually by running the following command:
```terminal
$ oc -n openshift-logging create secret generic "logging-loki-aws" \
  --from-literal=bucketnames="<s3_bucket_name>" \
  --from-literal=region="<bucket_region>" \
  --from-literal=audience="<oidc_audience>" (1)
```
1.  Optional annotation, default value is `openshift`.