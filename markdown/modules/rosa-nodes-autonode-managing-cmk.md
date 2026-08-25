{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure a customer-managed key for root volume encryption {id="rosa-nodes-autonode-managing-cmk_{{ context }}"}

The root volume attached to the worker nodes managed by the {{ autonode }} is automatically encrypted using your default KMS key for EBS encryption. Alternatively, you can specify a different symmetric encryption KMS key for the specific volume creation operation. {._abstract}


:::important

You cannot modify the `blockDeviceMappings` field on an existing `OpenshiftEC2NodeClass`. You must create a new `OpenshiftEC2NodeClass` resource with the required KMS key configuration.

:::


**Prerequisites**

*   The {{ autonode }} is enabled on the cluster.
*   You have a symmetric encryption AWS KMS key (customer-managed key).
*   The KMS key use policy grants the required permissions to the {{ autonode }} IAM role.

**Procedure**

1.  Obtain the ARN of the KMS key you want to use. If you want to use the cluster’s default KMS key, run the following command:
    ```terminal
    $ rosa describe cluster -c $CLUSTER_NAME -o json | jq -r '.aws.kms_key_arn'
    ```
1.  Create an `OpenshiftEC2NodeClass` manifest with the customer-managed key:
    ```terminal
    $ cat > openshiftec2nodeclass-cmk.yaml <<'EOF'
    apiVersion: karpenter.hypershift.openshift.io/v1
    kind: OpenshiftEC2NodeClass
    metadata:
      name: cmk-nodeclass
    spec:
      blockDeviceMappings:
        - deviceName: /dev/xvda
          ebs:
            encrypted: Encrypted
            volumeSizeGiB: <root_volume_size>
            kmsKeyID: <kms_key_arn>
    EOF
    ```

    where:

    `blockDeviceMappings.ebs.encrypted`
    :   Must be set to `Encrypted` to enable encryption.

    `blockDeviceMappings.ebs.volumeSizeGiB`
    :   The size of the root volume in GiB.

    `blockDeviceMappings.ebs.kmsKeyID`
    :   The ARN of the symmetric encryption KMS key to use for root volume encryption.

1.  Apply the manifest:
    ```terminal
    $ oc apply -f openshiftec2nodeclass-cmk.yaml
    ```

**Verification**

1.  Verify that the `OpenshiftEC2NodeClass` resource is ready:
    ```terminal
    $ oc get openshiftec2nodeclass cmk-nodeclass
    ```
    ```terminal title="Example output"
    NAME             READY   AGE
    cmk-nodeclass    True    5s
    ```