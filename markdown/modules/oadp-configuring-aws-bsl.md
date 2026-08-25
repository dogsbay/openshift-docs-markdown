{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the backup storage location using AWS {id="oadp-configuring-aws-bsl_{{ context }}"}

You can configure the {{ aws_short }} backup storage location (BSL) as shown in the following example procedure.

**Prerequisites**

*   You have created an object storage bucket using {{ aws_short }}.
*   You have installed the {{ oadp_short }} Operator.

**Procedure**

*   Configure the BSL custom resource (CR) with values as applicable to your use case.
    ```yaml title="Backup storage location"
    apiVersion: oadp.openshift.io/v1alpha1
    kind: BackupStorageLocation
    metadata:
      name: default
      namespace: openshift-adp
    spec:
      provider: aws (1)
      objectStorage:
        bucket: <bucket_name> (2)
        prefix: <bucket_prefix> (3)
      credential: (4)
        key: cloud (5)
        name: cloud-credentials (6)
      config:
        region: <bucket_region> (7)
        s3ForcePathStyle: "true" (8)
        s3Url: <s3_url> (9)
        publicUrl: <public_s3_url> (10)
        serverSideEncryption: AES256 (11)
        kmsKeyId: "50..c-4da1-419f-a16e-ei...49f" # <12>    
        customerKeyEncryptionFile: "/credentials/customer-key" (13)
        signatureVersion: "1" (14)
        profile: "default" (15)
        insecureSkipTLSVerify: "true" (16)
        enableSharedConfig: "true" (17)
        tagging: "" (18)
        checksumAlgorithm: "CRC32" (19)
    ```
    1.  The name of the object store plugin. In this example, the plugin is `aws`. This field is required.
    1.  The name of the bucket in which to store backups. This field is required.
    1.  The prefix within the bucket in which to store backups. This field is optional.
    1.  The credentials for the backup storage location. You can set custom credentials. If custom credentials are not set, the default credentials' secret is used.
    1.  The `key` within the secret credentials' data.
    1.  The name of the secret containing the credentials.
    1.  The AWS region where the bucket is located. Optional if s3ForcePathStyle is false.
    1.  A boolean flag to decide whether to use path-style addressing instead of virtual hosted bucket addressing. Set to `true` if using a storage service such as MinIO or NooBaa. This is an optional field. The default value is `false`.
    1.  You can specify the {{ aws_short }} S3 URL here for explicitness. This field is primarily for storage services such as MinIO or NooBaa. This is an optional field.
    1.  This field is primarily used for storage services such as MinIO or NooBaa. This is an optional field.
    1.  The name of the server-side encryption algorithm to use for uploading objects, for example, `AES256`. This is an optional field.
    1.  Specify an {{ aws_short }} KMS key ID. You can format, as shown in the example, as an alias, such as `alias/<KMS-key-alias-name>`, or the full `ARN` to enable encryption of the backups stored in S3. Note that `kmsKeyId` cannot be used in with `customerKeyEncryptionFile`. This is an optional field.
    1.  Specify the file that has the `SSE-C` customer key to enable customer key encryption of the backups stored in S3. The file must contain a 32-byte string. The `customerKeyEncryptionFile` field points to a mounted secret within the `velero` container. Add the following key-value pair to the `velero` `cloud-credentials` secret: `customer-key: <your_b64_encoded_32byte_string>`. Note that the `customerKeyEncryptionFile` field cannot be used with the `kmsKeyId` field. The default value is an empty string (`""`), which means `SSE-C` is disabled. This is an optional field.
    1.  The version of the signature algorithm used to create signed URLs. You use signed URLs to download the backups, or fetch the logs. Valid values are `1` and `4`. The default version is `4`. This is an optional field.
    1.  The name of the {{ aws_short }} profile in the credentials file. The default value is `default`. This is an optional field.
    1.  Set the `insecureSkipTLSVerify` field to `true` if you do not want to verify the TLS certificate when connecting to the object store, for example, for self-signed certificates with MinIO. Setting to `true` is susceptible to man-in-the-middle attacks and is not recommended for production workloads. The default value is `false`. This is an optional field.
    1.  Set the `enableSharedConfig` field to `true` if you want to load the credentials file as a shared config file. The default value is `false`. This is an optional field.
    1.  Specify the tags to annotate the {{ aws_short }} S3 objects. Specify the tags in key-value pairs. The default value is an empty string (`""`). This is an optional field.
    1.  Specify the checksum algorithm to use for uploading objects to S3. The supported values are: `CRC32`, `CRC32C`, `SHA1`, and `SHA256`. If you set the field as an empty string (`""`), the checksum check will be skipped. The default value is `CRC32`. This is an optional field.