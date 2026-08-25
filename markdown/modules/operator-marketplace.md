{%- if context == "operator-reference" %}
{%- set operator_ref = true -%}
{% endif %}

{%- if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if operator_ref %}
# Marketplace Operator {id="marketplace-operator_{{ context }}"}
{% endif %}
{% if cluster_caps %}
# Marketplace capability {id="_marketplace_capability"}
{% endif %}

{%- if operator_ref %}
The Marketplace Operator is an optional cluster capability that can be disabled by cluster administrators if it is not needed. For more information about optional cluster capabilities, see "Cluster capabilities" in _Installing_.
{% endif %} {._abstract}

{% if cluster_caps %}
The Marketplace Operator provides the features for the `marketplace` capability.
{% endif %}

The Marketplace Operator simplifies the process for bringing off-cluster Operators to your cluster by using a set of default Operator Lifecycle Manager (OLM) catalogs on the cluster. When the Marketplace Operator is installed, it creates the `openshift-marketplace` namespace. OLM ensures catalog sources installed in the `openshift-marketplace` namespace are available for all namespaces on the cluster.

{% if cluster_caps %}
If you disable the `marketplace` capability, the Marketplace Operator does not create the `openshift-marketplace` namespace. Catalog sources can still be configured and managed on the cluster manually, but OLM depends on the `openshift-marketplace` namespace in order to make catalogs available to all namespaces on the cluster. Users with elevated permissions to create namespaces prefixed with `openshift-`, such as system or cluster administrators, can manually create the `openshift-marketplace` namespace.

If you enable the `marketplace` capability, you can enable and disable individual catalogs by configuring the Marketplace Operator.
{% endif %}

{% if operator_ref %}

Project
:   `operator-marketplace`
{% endif %}

{% if context == "operator-reference" %}
{%- set operator_ref = false -%}
{% endif %}

{% if context == "cluster-caps" %}
{%- set cluster_caps = false -%}
{% endif %}