{%- set _mod_docs_content_type = "CONCEPT" %}
# About connecting OADP to backup storage {id="oadp-connect-to-backup-storage-intro_{{ context }}"}

After installing the OADP Operator, you must configure a connection to your backup storage provider and create a Data Protection Application (DPA) custom resource to enable backup and restore operations. {._abstract}

The OADP Operator installs Velero. You configure your storage provider for Velero, create a default `Secret`, and then install the Data Protection Application.

You can configure {{ oadp_short }} with any of the following storage providers:

*   Amazon Web Services (AWS) S3 compatible storage
*   Microsoft Azure
*   {{ gcp_full }}
*   Multicloud Object Gateway (MCG)
*   {{ rh_storage }}

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.

**Additional resources**
{._additional-resources}

*   [Velero {{ velero_version }} documentation](https://velero.io/docs/)