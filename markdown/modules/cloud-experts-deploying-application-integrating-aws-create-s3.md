{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an S3 bucket {id="cloud-experts-deploying-application-integrating-aws-create-s3_{{ context }}"}

Use the {{ oc_first }} tool to create your S3 bucket. {._abstract}

**Procedure**

1.  Create an S3 bucket using a manifest file by running the following command:
    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: s3.services.k8s.aws/v1alpha1
    kind: Bucket
    metadata:
      name: ${OSTOY_NAMESPACE}-bucket
      namespace: ${OSTOY_NAMESPACE}
    spec:
      name: ${OSTOY_NAMESPACE}-bucket
    EOF
    ```

    :::important

    The OSToy application expects to find a bucket named `<namespace>-bucket`. If you use anything other than the namespace of your OSToy project, this feature will not work. For example, if our project is "ostoy", the value for `name` must be `ostoy-bucket`.
    
    :::

1.  Confirm the bucket was created by running the following command:
    ```terminal
    $ aws s3 ls | grep ${OSTOY_NAMESPACE}-bucket
    ```