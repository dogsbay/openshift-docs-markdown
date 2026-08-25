{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS S3 compatible backup storage providers {id="oadp-s3-compatible-backup-storage-providers_{{ context }}"}

{{ oadp_short }} works with many S3-compatible object storage providers. Several object storage providers are certified and tested with every release of {{ oadp_short }}. Various S3 providers are known to work with {{ oadp_short }} but are not specifically tested and certified. These providers will be supported on a best-effort basis. Additionally, there are a few S3 object storage providers with known issues and limitations that are listed in this documentation.


:::note

Red Hat will provide support for {{ oadp_short }} on any S3-compatible storage, but support will stop if the S3 endpoint is determined to be the root cause of an issue.

:::


## Certified backup storage providers {id="oadp-certified-backup-storage-providers_{{ context }}"}

The following AWS S3 compatible object storage providers are fully supported by {{ oadp_short }} through the AWS plugin for use as backup storage locations:

*   MinIO
*   Multicloud Object Gateway (MCG)
*   Amazon Web Services (AWS) S3
*   {{ ibm_cloud_name }} Object Storage S3
*   Ceph RADOS Gateway (Ceph Object Gateway)
*   Red Hat Container Storage
*   {{ odf_full }}
*   NetApp ONTAP S3 Object Storage
*   Scality ARTESCA S3 object storage


:::note

The following compatible object storage providers are supported and have their own Velero object store plugins:

*   {{ gcp_first }}
*   Microsoft Azure

:::


## Unsupported backup storage providers {id="oadp-s3-compatible-backup-storage-providers-unsupported"}

The following AWS S3 compatible object storage providers, are known to work with Velero through the AWS plugin, for use as backup storage locations, however, they are unsupported and have not been tested by Red Hat:

*   Oracle Cloud
*   DigitalOcean
*   NooBaa, unless installed using Multicloud Object Gateway (MCG)
*   Tencent Cloud
*   Ceph RADOS v12.2.7
*   Quobyte
*   Cloudian HyperStore

{% include "./snippets/snip-noobaa-and-mcg.md" %}

## Backup storage providers with known limitations {id="oadp-s3-compatible-backup-storage-providers-known-limitations"}

The following AWS S3 compatible object storage providers are known to work with Velero through the AWS plugin with a limited feature set: {._abstract}

*   Swift - It works for use as a backup storage location for backup storage, but is not compatible with Restic for filesystem-based volume backup and restore.

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Scality ARTESCA S3 object storage (Scality documentation)](https://downloads.scality.com/artesca-ova/doc/general_introduction.html#)