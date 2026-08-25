{%- set _mod_docs_content_type = "REFERENCE" %}
# Recommended node host practices {id="recommended-node-host-practices_{{ context }}"}

You can configure the `podsPerCore` and `maxPods` parameters to control the maximum number of pods that can be scheduled on a node. {._abstract}

The {{ product_title }} node configuration file contains important options. For
example, two parameters control the maximum number of pods that can be scheduled
to a node: `podsPerCore` and `maxPods`.

{% include "./snippets/nodes-pods-core-max-pods.md" %}