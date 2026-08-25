---
title: Control plane architecture
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Control plane architecture {id="control-plane"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "control-plane" %}

You can use a _control plane_, which is composed of control plane machines, to manage the {{ product_title }} cluster.
The control plane machines manage workloads on the compute machines, which are also known as worker machines.

The cluster manages all upgrades to the machines by the actions of the Cluster Version Operator (CVO),
{%- if not (openshift_dedicated or openshift_rosa) %}
the Machine Config Operator,
{%- endif %}
and a set of individual Operators.

{% if openshift_rosa %}
{%- set FeatureName = "This control plane architecture" %}
{% include "./snippets/rosa-classic-support.md" %}

{% endif %}

{%- if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +1 %}{% include "./modules/architecture-machine-config-pools.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_dedicated or openshift_rosa) %}
**Additional resources**

*   [Understanding configuration drift detection](/machine_configuration/index#machine-config-drift-detection_machine-config-overview)
{% endif %}

{% leveloffset +1 %}{% include "./modules/architecture-machine-roles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/operators-overview.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +2 %}{% include "./modules/arch-cluster-operators.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster Operators reference](/operators/operator-reference#operator-reference)
{% endif %}

{% leveloffset +2 %}{% include "./modules/arch-olm-operators.md" %}{% endleveloffset %}

**Additional resources**

*   [Operator Lifecycle Manager (OLM) concepts and resources](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)
*   [Understanding the software catalog](/operators/understanding/olm-understanding-software-catalog#olm-understanding-software-catalog)

{% leveloffset +1 %}{% include "./modules/etcd-overview.md" %}{% endleveloffset %}

{%- if openshift_dedicated or openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/cpmso-feat-auto-update.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cpmso-control-plane-recovery.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_dedicated or openshift_rosa) %}
**Additional resources**

*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backing-up-etcd)
{% endif %}