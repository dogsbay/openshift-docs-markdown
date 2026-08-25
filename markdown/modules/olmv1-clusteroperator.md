{% if context == "operator-reference" %}
{%- set operators = true -%}
{% endif %}
{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}

{% if operators %}
# {{ olmv1_first }} Operator {id="cluster-operators-ref-olmv1_{{ context }}"}

{% endif %}
{% if cluster_caps %}
# {{ olmv1_first }} capability {id="_olmv1_first_capability"}

{% endif %}

{% if cluster_caps %}
{{ olmv1 }} provides the features for the `OperatorLifecycleManagerV1` capability. {._abstract}
{% endif %}

Starting in {{ product_title }} 4.18, {{ olmv1 }} is enabled by default alongside {{ olmv0 }}. This next-generation iteration provides an updated framework that evolves many of {{ olmv0 }} concepts that enable cluster administrators to extend capabilities for their users.

{{ olmv1 }} manages the lifecycle of the new `ClusterExtension` object, which includes Operators via the `registry+v1` bundle format, and controls installation, upgrade, and role-based access control (RBAC) of extensions within a cluster.

In {{ product_title }}, {{ olmv1 }} is provided by the `olm` cluster Operator.


:::note

The `olm` cluster Operator informs cluster administrators if there are any installed extensions blocking cluster upgrade, based on their `olm.maxOpenShiftVersion` properties. For more information, see "Compatibility with {{ product_title }} versions".

:::


{{ olmv1_first }} comprises the following component projects:

*   Operator Controller: The central component of {{ olmv1 }} that extends Kubernetes with an API through which users can install and manage the lifecycle of Operators and extensions. It consumes information from catalogd.
*   Catalogd: A Kubernetes extension that unpacks file-based catalog (FBC) content packaged and shipped in container images for consumption by on-cluster clients. As a component of the {{ olmv1 }} microservices architecture, catalogd hosts metadata for Kubernetes extensions packaged by the authors of the extensions, and as a result helps users discover installable content.
*   CRDs:
    *   `clusterextension.olm.operatorframework.io`
        *   Scope: Cluster
        *   CR: `ClusterExtension`
    *   `clustercatalog.olm.operatorframework.io`
        *   Scope: Cluster
        *   CR: `ClusterCatalog`
*   See the following projects in the _Additional resources_ section:
    *   `operator-framework/operator-controller`
    *   `operator-framework/catalogd`