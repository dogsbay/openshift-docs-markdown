---
title: "Cluster API configuration options for {{ azure_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Cluster API configuration options for {{ azure_full }} {id="cluster-api-config-options-azure"}
{%- set context = "cluster-api-config-options-azure" %}

You can change the configuration of your {{ azure_first }} Cluster API machines by updating values in the Cluster API custom resource manifests. {._abstract}

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

The following example YAML files show configurations for an {{ azure_short }} cluster.

{% leveloffset +1 %}{% include "./modules/capi-yaml-machine-template-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/capi-yaml-machine-set-azure.md" %}{% endleveloffset %}