{%- set _mod_docs_content_type = "CONCEPT" %}
# Loki object storage {id="logging-loki-storage_{{ context }}"}

The {{ loki_op }} supports [AWS S3](https://aws.amazon.com/), as well as other S3 compatible object stores such as [Minio](https://min.io/) and [{{ rh_storage }}](https://www.redhat.com/en/technologies/cloud-computing/openshift-data-foundation). [Azure](https://azure.microsoft.com), [GCS](https://cloud.google.com/), and [Swift](https://docs.openstack.org/swift/latest/) are also supported.

The recommended nomenclature for Loki storage is `logging-loki-_<your_storage_provider>_`.

The following table shows the `type` values within the `LokiStack` custom resource (CR) for each storage provider. For more information, see the section on your storage provider.

**Secret type quick reference**

| Storage provider | Secret `type` value |
| --- | --- |
| AWS | s3 |
| Azure | azure |
| {{ gcp_full }} | gcs |
| Minio | s3 |
| OpenShift Data Foundation | s3 |
| Swift | swift |