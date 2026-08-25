---
title: Using the Node Observability Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using the Node Observability Operator {id="using-node-observability-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "node-observability-operator" %}

The Node Observability Operator collects and stores CRI-O and Kubelet profiling or metrics from scripts of compute nodes.

With the Node Observability Operator, you can query the profiling data, enabling analysis of performance trends in CRI-O and Kubelet. It supports debugging performance-related issues and executing embedded scripts for network metrics by using the `run` field in the custom resource definition. To enable CRI-O and Kubelet profiling or scripting, you can configure the `type` field in the custom resource definition.

{%- set FeatureName = "The Node Observability Operator" %}
{% leveloffset +0 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/node-observability-high-level-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/node-observability-installation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/node-observability-install-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/node-observability-install-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/node-observability-requesting-crio-kubelet-profiling.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/node-observability-create-custom-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/node-observability-run-profiling-query.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/node-observability-operator-scripting.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/node-observability-scripting-cr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/node-observability-scripting.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_node-observability-operator"}

*   [Collecting worker metrics using the Node Observability Operator](https://access.redhat.com/solutions/5343671)