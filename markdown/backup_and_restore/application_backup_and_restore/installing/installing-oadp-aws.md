---
title: Configuring the OpenShift API for Data Protection with AWS S3 compatible storage
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the OpenShift API for Data Protection with AWS S3 compatible storage {id="installing-oadp-aws"}
{%- set context = "installing-oadp-aws" -%}
{%- set installing_oadp_aws = true -%}
{%- set credentials = "cloud-credentials" -%}
{%- set provider = "aws" %}

Install the {{ oadp_first }} with Amazon Web Services (AWS) S3 compatible storage by installing the {{ oadp_short }} Operator. The Operator installs Velero {{ velero_version }}. {._abstract}

You configure AWS for Velero, create a default `Secret`, and then install the Data Protection Application. For more details, see _Installing the OADP Operator_.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog. See _Using Operator Lifecycle Manager in disconnected environments_ for details.

{% leveloffset +1 %}{% include "./modules/oadp-s3-and-gov-cloud.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/migration-configuring-aws-s3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-about-backup-snapshot-locations-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-creating-default-secret.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-aws-secrets-for-different-credentials.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-ssec-encrypted-backups.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/oadp-ssec-encrypted-backups-velero.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-installing-dpa-1-3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-changing-default-bsl.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-setting-resource-limits-and-requests.md" %}{% endleveloffset %}

{% include "./snippets/oadp-nodeselector-snippet.md" %}

{% leveloffset +2 %}{% include "./modules/oadp-self-signed-certificate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-using-ca-certificates-with-velero-command.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-configuring-node-agents.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-aws-md5sum.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-client-burst-qps.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-load-affinity.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-node-agent-load-affinity-guidelines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-load-concurrency.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-non-root.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-repository-maintenance.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-velero-load-affinity.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-priority-class.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-imagepullpolicy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-enabling-csi-dpa.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-about-disable-node-agent-dpa.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing the OADP Operator](/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
*   [Velero {{ velero_version }}](https://{{ velero_domain }}/docs/v{{ velero_version }}/)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Installing the Data Protection Application with the `kubevirt` and `openshift` plugins](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-kubevirt#oadp-installing-dpa_installing-oadp-kubevirt)
*   [Running tasks in pods using jobs](/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)

{%- set installing_oadp_aws = "" -%}