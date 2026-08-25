{%- set _mod_docs_content_type = "CONCEPT" %}
# NFD Operator overview {id="nfd-using-operator-overview_{{ context }}"}

The Node Feature Discovery (NFD) Operator orchestrates all resources needed to run the NFD daemon set. You create a `NodeFeatureDiscovery` custom resource (CR), and the Operator creates the operand components in the selected namespace. {._abstract}

As a cluster administrator, you can create a `NodeFeatureDiscovery` CR by using the {{ oc_first }} or the web console.


:::note

Starting with version 4.12, the `operand.image` field in the `NodeFeatureDiscovery` CR is mandatory. If the NFD Operator is deployed by using {{ olm_first }}, OLM automatically sets the `operand.image` field. If you create the `NodeFeatureDiscovery` CR by using the {{ product_title }} CLI or the {{ product_title }} web console, you must set the `operand.image` field explicitly.

:::