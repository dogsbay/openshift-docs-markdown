{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validate the deployment {id="cloud-experts-using-aws-ack-valid-deploy_{{ context }}"}

Verify that the controller is working correctly by deploying a test S3 bucket resource and confirming that it is created in AWS. {._abstract}

**Procedure**

1.  Deploy an S3 bucket resource:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: s3.services.k8s.aws/v1alpha1
    kind: Bucket
    metadata:
       name: ${CLUSTER-NAME}-bucket
       namespace: ack-system
    spec:
       name: ${CLUSTER-NAME}-bucket
    EOF
    ```
1.  Verify the S3 bucket was created in AWS:
    ```terminal
    $ aws s3 ls | grep ${CLUSTER_NAME}-bucket
    ```
    ```text title="Example output"
    2023-10-04 14:51:45 mrmc-test-maz-bucket
    ```