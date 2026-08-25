{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ oadp_short }} virtual machine data protection backend storage {id="oadp-vmdp-storage-backends_{{ context }}"}

Review the backend storage options for {{ oadp_full }} virtual machine data protection (VMDP) backup storage locations. This helps you to configure S3-compatible or file system storage for your backup repository. {._abstract}

## S3-compatible storage {id="_s3-compatible_storage"}

**S3 storage options**

| Option | Description | Default |
| --- | --- | --- |
| `--bucket` | Name of the S3 bucket. | (required) |
| `--access-key` | Access key ID. | (required) |
| `--secret-access-key` | Secret access key. | (required) |
| `--endpoint` | S3 endpoint URL. | `s3.amazonaws.com` |
| `--region` | S3 region. | Auto-detect |
| `--prefix` | Object prefix in the bucket. | None |
| `--session-token` | Session token for temporary credentials. | None |
| `--disable-tls` | Disable HTTPS. | `false` |
| `--disable-tls-verification` | Skip TLS certificate verification. | `false` |
| `--root-ca-pem-path` | Path to a custom CA certificate file. | None |
| `--root-ca-pem-base64` | Base64-encoded CA certificate. | None |


:::note

VMDP automatically prepends `oadp-vmdp/` to your prefix.

:::


## Filesystem storage {id="_filesystem_storage"}

**Filesystem storage options**

| Option | Description | Default |
| --- | --- | --- |
| `--path` | Absolute path to the storage directory. | (required) |
| `--owner-uid` | User ID for new files. | Current user |
| `--owner-gid` | Group ID for new files. | Current group |
| `--file-mode` | Permission mode for files. | `0600` |
| `--dir-mode` | Permission mode for directories. | `0700` |