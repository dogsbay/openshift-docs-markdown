{%- set _mod_docs_content_type = "CONCEPT" %}
# Using the Node Feature Discovery Operator {id="using-node-feature-discovery-operator_{{ context }}"}

As a cluster administrator, you can create a `NodeFeatureDiscovery` CR, which controls the namespace, image, image pull policy, and worker configuration for the Node Feature Discovery (NFD) daemon set, by using the {{ oc_first }} or the web console. {._abstract}

The Node Feature Discovery Operator uses the `NodeFeatureDiscovery` custom resource (CR) to deploy and configure the NFD operand in your cluster.


:::note

Starting with version 4.12, the `operand.image` field in the `NodeFeatureDiscovery` CR is mandatory. If the NFD Operator is deployed by using {{ olm_first }}, OLM automatically sets the `operand.image` field. If you create the `NodeFeatureDiscovery` CR by using the {{ product_title }} CLI or the {{ product_title }} web console, you must set the `operand.image` field explicitly.

:::