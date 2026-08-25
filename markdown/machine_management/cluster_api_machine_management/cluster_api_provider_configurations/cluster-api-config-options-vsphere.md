---
title: Cluster API configuration options for VMware vSphere
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Cluster API configuration options for VMware vSphere {id="cluster-api-config-options-vsphere"}
{%- set context = "cluster-api-config-options-vsphere" %}

You can change the configuration of your {{ vmw_first }} Cluster API machines by updating values in the Cluster API custom resource manifests. {._abstract}

{%- set FeatureName = "Managing machines with the Cluster API" %}
{% include "./snippets/technology-preview.md" %}

## Sample YAML for configuring {{ vmw_full }} clusters {id="cluster-api-sample-yaml-vsphere_{{ context }}"}

The following example YAML files show configurations for a {{ vmw_full }} cluster.

{% leveloffset +2 %}{% include "./modules/capi-yaml-machine-template-vsphere.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/capi-yaml-machine-set-vsphere.md" %}{% endleveloffset %}