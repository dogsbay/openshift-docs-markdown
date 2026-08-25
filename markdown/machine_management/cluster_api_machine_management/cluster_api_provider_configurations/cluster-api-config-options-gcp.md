---
title: "Cluster API configuration options for {{ gcp_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Cluster API configuration options for {{ gcp_full }} {id="cluster-api-config-options-gcp"}
{%- set context = "cluster-api-config-options-gcp" %}

You can change the configuration of your {{ gcp_first }} Cluster API machines by updating values in the Cluster API custom resource manifests.

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

## Sample YAML for configuring {{ gcp_full }} clusters {id="cluster-api-sample-yaml-gcp_{{ context }}"}

The following example YAML files show configurations for a {{ gcp_full }} cluster.

{% leveloffset +2 %}{% include "./modules/capi-yaml-machine-template-gcp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/capi-yaml-machine-set-gcp.md" %}{% endleveloffset %}