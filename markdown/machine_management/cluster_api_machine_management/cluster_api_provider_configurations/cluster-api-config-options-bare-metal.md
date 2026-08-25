---
title: Cluster API configuration options for bare metal
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Cluster API configuration options for bare metal {id="cluster-api-config-options-bare-metal"}
{%- set context = "cluster-api-config-options-bare-metal" %}

You can change the configuration of your bare metal Cluster API machines by updating values in the Cluster API custom resource manifests. {._abstract}

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

## Sample YAML for configuring bare metal clusters {id="cluster-api-sample-yaml-bare-metal_{{ context }}"}

The following example YAML files show configurations for a bare metal cluster.

{% leveloffset +2 %}{% include "./modules/capi-yaml-machine-template-bare-metal.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/capi-yaml-machine-set-bare-metal.md" %}{% endleveloffset %}