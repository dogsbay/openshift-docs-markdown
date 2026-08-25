{% if context == "operator-reference" %}
{%- set operator_ref = true -%}
{% endif %}

{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if operator_ref %}
# Cluster Storage Operator {id="cluster-storage-operator_{{ context }}"}
{% endif %}
{% if cluster_caps %}
# Cluster storage capability {id="_cluster_storage_capability"}
{% endif %}

{% if operator_ref %}

The Cluster Storage Operator is an optional cluster capability that can be disabled by cluster administrators during installation.  {._abstract}

For more information about optional cluster capabilities, see "Cluster capabilities".
{% endif %}

{% if cluster_caps %}
The Cluster Storage Operator provides the features for the `Storage` capability.
{% endif %}

The Cluster Storage Operator sets {{ product_title }} cluster-wide storage defaults. It ensures a default `storageclass` exists for {{ product_title }} clusters. It also installs Container Storage Interface (CSI) drivers which enable your cluster to use various storage backends.

{% if cluster_caps %}

:::important

If the cluster storage capability is disabled, the cluster will not have a default `storageclass` or any CSI drivers. Users with administrator privileges can create a default `storageclass` and manually install CSI drivers if the cluster storage capability is disabled.

:::

{% endif %}

{% if operator_ref %}


Project
:   See "cluster-storage-operator".


Configuration
:   No configuration is required.

{% endif %}


Notes
:   The storage class that the Operator creates can be made non-default by editing its annotation, but this storage class cannot be deleted as long as the Operator runs.

{% if context == "operator-reference" %}
{%- set operator_ref = "" -%}
{% endif %}

{% if context == "cluster-caps" %}
{%- set cluster_caps = "" -%}
{% endif %}