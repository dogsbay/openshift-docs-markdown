{% if context == "operator-reference" %}
{%- set operator_ref = true -%}
{% endif %}

{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if operator_ref %}
# Cluster Baremetal Operator {id="cluster-bare-metal-operator_{{ context }}"}
{% endif %}
{% if cluster_caps %}
# Bare-metal capability {id="_bare-metal_capability"}
{% endif %}

{% if operator_ref %}
The Cluster Baremetal Operator is an optional cluster capability that can be disabled by cluster administrators during installation. {._abstract}

For more information about optional cluster capabilities, see "Cluster capabilities".
{% endif %}
{% if cluster_caps %}
The Cluster Baremetal Operator provides the features for the `baremetal` capability.
{% endif %}

The Cluster Baremetal Operator (CBO) deploys all the components necessary to take a bare-metal server to a fully functioning worker node ready to run {{ product_title }} compute nodes. The CBO ensures that the metal3 deployment, which consists of the Bare Metal Operator (BMO) and Ironic containers, runs on one of the control plane nodes within the {{ product_title }} cluster. The CBO also listens for {{ product_title }} updates to resources that it watches and takes appropriate action.

{% if cluster_caps %}
The bare-metal capability is required for deployments using installer-provisioned infrastructure. Disabling the bare-metal capability can result in unexpected problems with these deployments.


:::important

If the bare-metal capability is disabled, the cluster cannot provision or manage bare-metal nodes. Only disable the capability if there are no `BareMetalHost` resources in your deployment. The `baremetal` capability depends on the `MachineAPI` capability. If you enable the `baremetal` capability, you must also enable `MachineAPI`.

:::



:::note

Red&#160;Hat recommends that cluster administrators only disable the bare-metal capability during installations with user-provisioned infrastructure that do not have any `BareMetalHost` resources in the cluster.

:::

{% endif %}

{% if operator_ref %}

Project

:   [cluster-baremetal-operator](https://github.com/openshift/cluster-baremetal-operator)
{% endif %}

{% if context == "operator-reference" %}
{%- set operator_ref = "" -%}
{% endif %}

{% if context == "cluster-caps" %}
{%- set cluster_caps = "" -%}
{% endif %}