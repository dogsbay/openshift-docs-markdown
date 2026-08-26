{% if context == "operator-reference" %}
{%- set operator_ref = true -%}
{% endif %}

{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster CSI Snapshot Controller Operator {id="cluster-csi-snapshot-controller-operator_{{ context }}"}

{% if operator_ref %}
The Cluster CSI Snapshot Controller Operator is an optional cluster capability that can be disabled by cluster administrators during installation. For more information about optional cluster capabilities, see "Cluster capabilities" in _Installing_. {._abstract}
{% endif %}

{% if cluster_caps %}
The Cluster CSI Snapshot Controller Operator provides the features for the `CSISnapshot` capability.
{% endif %}

The Cluster CSI Snapshot Controller Operator installs and maintains the CSI Snapshot Controller. The CSI Snapshot Controller is responsible for watching the `VolumeSnapshot` CRD objects and manages the creation and deletion lifecycle of volume snapshots.

{% if context == "operator-reference" %}
{%- set operator_ref = "" -%}
{% endif %}

{% if context == "cluster-caps" %}
{%- set cluster_caps = "" -%}
{% endif %}