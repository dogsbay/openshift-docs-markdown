---
title: "Configuring the {{ oadp_full }} with {{ ibm_cloud_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the {{ oadp_full }} with {{ ibm_cloud_title }} {id="installing-oadp-ibm-cloud"}
{%- set context = "installing-oadp-ibm-cloud" -%}
{%- set installing_oadp_ibm_cloud = true -%}
{%- set credentials = "cloud-credentials" %}

You install the {{ oadp_first }} Operator on an {{ ibm_cloud_title }} cluster to back up and restore applications on the cluster. You configure {{ ibm_cloud_object_storage }} to store the backups. {._abstract}

{% leveloffset +1 %}{% include "./modules/configuring-ibm-cos.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-creating-default-secret.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-secrets-for-different-credentials.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-installing-dpa-1-3.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-setting-resource-limits-and-requests.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agents.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-configuring-client-burst-qps.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-load-affinity.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-node-agent-load-affinity-guidelines.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-configuring-node-agent-load-concurrency.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-configuring-repository-maintenance.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-configuring-velero-load-affinity.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-configuring-imagepullpolicy.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-configuring-dpa-multiple-bsl.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/oadp-about-disable-node-agent-dpa.md" %}{% endleveloffset %}

{%- set installing_oadp_ibm_cloud = "" -%}