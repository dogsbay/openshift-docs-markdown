---
title: Adding Operators to a cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Adding Operators to a cluster {id="olm-adding-operators-to-a-cluster"}
{%- set context = "olm-adding-operators-to-a-cluster" %}

You can install OLM-based Operators on your {{ product_title }} cluster by using Operator Lifecycle Manager (OLM). {._abstract}


:::note

For information on how OLM handles updates for installed Operators colocated in the same namespace, as well as an alternative method for installing Operators with custom global Operator groups, see "Multitenancy and Operator colocation".

:::


{% if openshift_origin %}
## Prerequisites {id="olm-adding-operators-to-a-cluster-prereqs"}

*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the `OperatorHub` custom resource (CR) as shown in _Configuring {{ product_title }} to use Red Hat Operators_.
{% endif %}

{% leveloffset +1 %}{% include "./modules/olm-installing-operators-from-software-catalog.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding the software catalog](/operators/understanding/olm-understanding-software-catalog#olm-understanding-software-catalog)

{% leveloffset +1 %}{% include "./modules/olm-installing-from-software-catalog-using-web-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually approving a pending Operator update](/operators/admin/olm-upgrading-operators#olm-approving-pending-upgrade_olm-upgrading-operators)

{% if openshift_enterprise or openshift_webscale or openshift_origin or openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}

{% leveloffset +1 %}{% include "./modules/olm-installing-from-software-catalog-using-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About Operator groups](/operators/understanding/olm/olm-understanding-operatorgroups#olm-operatorgroups-about_olm-understanding-operatorgroups)
*   [Installing global Operators in custom namespaces](/operators/admin/olm-adding-operators-to-cluster#olm-installing-global-namespaces_olm-adding-operators-to-a-cluster)
*   [Manually approving a pending Operator update](/operators/admin/olm-upgrading-operators#olm-approving-pending-upgrade_olm-upgrading-operators)

{% leveloffset +1 %}{% include "./modules/olm-preparing-multitenant-operators.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Operators in multitenant clusters](/operators/understanding/olm-multitenancy#olm-multitenancy)

{% leveloffset +1 %}{% include "./modules/olm-installing-global-namespaces.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Multitenancy and Operator colocation](/operators/understanding/olm/olm-colocation#olm-colocation)

{% leveloffset +1 %}{% include "./modules/olm-pod-placement.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Adding taints and tolerations manually to nodes](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-adding_nodes-scheduler-taints-tolerations)
*   [Adding taints and tolerations with compute machine sets](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-adding-machineset_nodes-scheduler-taints-tolerations)
{%- endif %}
*   [Creating project-wide node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors-project_nodes-scheduler-node-selectors)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Creating a project with a node selector and toleration](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-projects_nodes-scheduler-taints-tolerations)
{%- endif %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/olm-overriding-operator-pod-affinity.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding pod affinity](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity-about_nodes-scheduler-pod-affinity)
*   [Understanding node affinity](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity-about_nodes-scheduler-node-affinity)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Understanding how to update labels on nodes](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-updating_nodes-nodes-working)
{%- endif %}

## Additional resources {id="additional-resources_olm-adding-operators-to-a-cluster" ._additional-resources}

*   [Multitenancy and Operator colocation](/operators/understanding/olm/olm-colocation#olm-colocation)