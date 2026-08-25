---
title: Gathering data about your cluster update
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Gathering data about your cluster update {id="gathering-data-cluster-update"}
{%- set context = "troubleshooting_updates" %}

{% if not openshift_origin %}
Collect cluster data, logs, and update history to help Red Hat Support diagnose and troubleshoot failed cluster updates.
{% endif %}
{% if openshift_origin %}
Collect cluster data, logs, and update history to diagnose and troubleshoot failed cluster updates. {._abstract}
{% endif %}

{% leveloffset +1 %}{% include "./modules/gathering-log-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/changing-cvo-log-level.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gathering-clusterversion-history.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/gathering-clusterversion-history-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/gathering-clusterversion-history-cli.md" %}{% endleveloffset %}

<a name="additional-resources_gathering-cluster-data"></a>**Additional resources**
{._additional-resources}

*   [Gathering data about your cluster for Red Hat Support](/support/gathering-cluster-data#support_gathering_data_gathering-cluster-data)