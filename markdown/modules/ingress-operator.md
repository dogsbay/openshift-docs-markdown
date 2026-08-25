{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{% if context == "operator-reference" %}
{%- set operator_ref = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if operator_ref %}
# Ingress Operator {id="ingress-operator_{{ context }}"}
{% endif %}
{% if cluster_caps %}
# Ingress Capability {id="_ingress_capability"}
{% endif %}

{%- if cluster_caps %}

The Ingress Operator provides the features for the `Ingress` capability. {._abstract}

{%- endif %}
The Ingress Operator configures and manages the {{ product_title }} router.


Project
:   `openshift-ingress-operator`


CRDs
:   *   `clusteringresses.ingress.openshift.io`
        *   Scope: Namespaced
        *   CR: `clusteringresses`
        *   Validation: No

    Configuration objects
:   *   Cluster config
        *   Type Name: `clusteringresses.ingress.openshift.io`
        *   Instance Name: `default`
        *   View Command:
        ```terminal
        $ oc get clusteringresses.ingress.openshift.io -n openshift-ingress-operator default -o yaml
        ```

    Notes
        :   The Ingress Operator sets up the router in the `openshift-ingress` project and creates the deployment for the router:
        ```terminal
        $ oc get deployment -n openshift-ingress
        ```
        The Ingress Operator uses the `clusterNetwork[].cidr` from the `network/cluster` status to determine what mode (IPv4, IPv6, or dual stack) the managed Ingress Controller (router) should operate in. For example, if `clusterNetwork` contains only a v6 `cidr`, then the Ingress Controller operates in IPv6-only mode.
        In the following example, Ingress Controllers managed by the Ingress Operator will run in IPv4-only mode because only one cluster network exists and the network is an IPv4 `cidr`:
        ```terminal
        $ oc get network/cluster -o jsonpath='{.status.clusterNetwork[*]}'
        ```
        ```terminal title="Example output"
        map[cidr:10.128.0.0/14 hostPrefix:23]
        ```

{% if context == "operator-reference" %}
{%- set operator_ref = false -%}
{% endif %}

{% if context == "cluster-caps" %}
{%- set cluster_caps = false -%}
{% endif %}