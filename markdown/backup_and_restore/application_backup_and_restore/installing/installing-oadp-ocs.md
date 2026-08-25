---
title: Configuring the OpenShift API for Data Protection with OpenShift Data Foundation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the OpenShift API for Data Protection with OpenShift Data Foundation {id="installing-oadp-ocs"}
{%- set context = "installing-oadp-ocs" -%}
{%- set installing_oadp_ocs = true -%}
{%- set credentials = "cloud-credentials" -%}
{%- set provider = "gcp" %}

Install the {{ oadp_first }} with {{ rh_storage }} by installing the {{ oadp_short }} Operator and configuring a backup location and a snapshot location. You then install the Data Protection Application. {._abstract}

You can configure Multicloud Object Gateway or any AWS S3-compatible object storage as a backup location.

You can create a `Secret` CR for the backup location and install the Data Protection Application.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.

{% leveloffset +1 %}{% include "./modules/oadp-about-backup-snapshot-locations-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-creating-default-secret.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-secrets-for-different-credentials.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-setting-resource-limits-and-requests.md" %}{% endleveloffset %}

{% include "./snippets/oadp-nodeselector-snippet.md" %}

{% leveloffset +3 %}{% include "./modules/oadp-odf-cpu-memory-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-self-signed-certificate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-using-ca-certificates-with-velero-command.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-installing-dpa-1-3.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-client-burst-qps.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agents.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-load-affinity.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-node-agent-load-affinity-guidelines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-load-concurrency.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-non-root.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-repository-maintenance.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-velero-load-affinity.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-priority-class.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-configuring-imagepullpolicy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-creating-object-bucket-claim.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-enabling-csi-dpa.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-about-disable-node-agent-dpa.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Configuring OADP with Multicloud Object Gateway](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#installing-oadp-mcg)
*   [Installing the OADP Operator](/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Installing the Data Protection Application with the `kubevirt` and `openshift` plugins](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-kubevirt#oadp-installing-dpa_installing-oadp-kubevirt)
*   [Running tasks in pods using jobs](/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)
*   [Configuring the {{ oadp_first }} with multiple backup storage locations](/backup_and_restore/application_backup_and_restore/installing/configuring-oadp-multiple-bsl#configuring-oadp-multiple-bsl)
*   [Creating an Object Bucket Claim using the OpenShift Web Console](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.13/html/managing_hybrid_and_multicloud_resources/object-bucket-claim#creating-an-object-bucket-claim-using-the-openshift-web-console_rhodf)
*   [Configuring node agents and node labels](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-ocs#oadp-configuring-node-agents_installing-oadp-ocs)