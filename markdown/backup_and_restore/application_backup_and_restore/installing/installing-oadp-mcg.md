---
title: Configuring the OpenShift API for Data Protection with Multicloud Object Gateway
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Configuring the OpenShift API for Data Protection with Multicloud Object Gateway {id="installing-oadp-mcg"}
{%- set context = "installing-oadp-mcg" -%}
{%- set installing_oadp_mcg = true -%}
{%- set credentials = "cloud-credentials" -%}
{%- set provider = "aws" %}

Configure {{ oadp_first }} to use Multicloud Object Gateway (MCG), a component of {{ rh_storage }}, as a backup storage location by setting up credentials, secrets, and the Data Protection Application. {._abstract}

You can install the {{ oadp_first }} with MCG by installing the OADP Operator. The Operator installs Velero {{ velero_version }}.

You can create a `Secret` CR for the backup location and install the Data Protection Application.

To install the OADP Operator in a restricted network environment, you must first disable the default software catalog sources and mirror the Operator catalog.

{% leveloffset +1 %}{% include "./modules/migration-configuring-mcg.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-about-backup-snapshot-locations-secrets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-creating-default-secret.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-secrets-for-different-credentials.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-setting-resource-limits-and-requests.md" %}{% endleveloffset %}

{% include "./snippets/oadp-nodeselector-snippet.md" %}

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

{% leveloffset +2 %}{% include "./modules/oadp-enabling-csi-dpa.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oadp-about-disable-node-agent-dpa.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Velero {{ velero_version }}](https://{{ velero_domain }}/docs/v{{ velero_version }}/)
*   [Installing the OADP Operator](/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Performance tuning guide for Multicloud Object Gateway](https://access.redhat.com/solutions/6719951)
*   [Installing the Data Protection Application with the `kubevirt` and `openshift` plugins](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-kubevirt#oadp-installing-dpa_installing-oadp-kubevirt)
*   [Running tasks in pods using jobs](/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs)
*   [Configuring the {{ oadp_first }} with multiple backup storage locations](/backup_and_restore/application_backup_and_restore/installing/configuring-oadp-multiple-bsl#configuring-oadp-multiple-bsl)
*   [Configuring node agents and node labels](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-mcg#oadp-configuring-node-agents_installing-oadp-mcg)