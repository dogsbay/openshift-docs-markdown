{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring registry storage for AWS with user-provisioned infrastructure {id="registry-configuring-storage-aws-user-infra_{{ context }}"}

If the Registry Operator cannot automatically create and configure an Amazon S3 bucket during installation, you must manually configure registry storage for your cluster. {._abstract}


:::warning

To secure your registry images in {{ aws_first }}, [block public access](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html) to the S3 bucket.

:::


**Prerequisites**

*   You have a cluster on {{ aws_short }} with user-provisioned infrastructure.
*   For Amazon S3 storage, the secret must contain two keys:
    *   `REGISTRY_STORAGE_S3_ACCESSKEY`
    *   `REGISTRY_STORAGE_S3_SECRETKEY`

**Procedure**

1.  Set up a [Bucket Lifecycle Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) to cancel incomplete multipart uploads that are one day old.
1.  Enter the storage configuration in `configs.imageregistry.operator.openshift.io/cluster`:
    ```terminal
    $ oc edit configs.imageregistry.operator.openshift.io/cluster
    ```
    ```yaml title="Example configuration"
    apiVersion: imageregistry.operator.openshift.io/v1
    kind: Config
    metadata:
      name: cluster
    spec:
      storage:
        s3:
          bucket: <bucket_name>
          region: <region_name>
    ```