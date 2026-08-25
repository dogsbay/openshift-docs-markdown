{%- set _mod_docs_content_type = "PROCEDURE" %}
# Overriding the imagePullPolicy setting in the DPA  {id="oadp-configuring-imagepullpolicy_{{ context }}"}

In {{ oadp_short }} 1.4.0 or earlier, the Operator sets the `imagePullPolicy` field of the Velero and node agent pods to `Always` for all images. {._abstract}

In {{ oadp_short }} 1.4.1 or later, the Operator first checks if each image has the `sha256` or `sha512` digest and sets the `imagePullPolicy` field accordingly:

*   If the image has the digest, the Operator sets `imagePullPolicy` to `IfNotPresent`.
*   If the image does not have the digest, the Operator sets `imagePullPolicy` to `Always`.

You can also override the `imagePullPolicy` field by using the `spec.imagePullPolicy` field in the Data Protection Application (DPA).

**Prerequisites**

*   You have installed the {{ oadp_short }} Operator.

**Procedure**

*   Configure the `spec.imagePullPolicy` field in the DPA as shown in the following example:
    ```yaml title="Example Data Protection Application"
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: test-dpa
      namespace: openshift-adp
    spec:
      backupLocations:
        - name: default
          velero:
            config:
              insecureSkipTLSVerify: "true"
              profile: "default"
              region: <bucket_region>
              s3ForcePathStyle: "true"
              s3Url: <bucket_url>
            credential:
              key: cloud
              name: cloud-credentials
            default: true
            objectStorage:
              bucket: <bucket_name>
              prefix: velero
            provider: aws
      configuration:
        nodeAgent:
          enable: true
          uploaderType: kopia
        velero:
          defaultPlugins:
            - openshift
            - aws
            - kubevirt
            - csi
      imagePullPolicy: Never
    ```

    where:

    `imagePullPolicy`
    :   Specifies the value for `imagePullPolicy`. In this example, the `imagePullPolicy` field is set to `Never`.