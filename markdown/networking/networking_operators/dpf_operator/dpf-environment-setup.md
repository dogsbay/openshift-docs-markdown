{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Set up the environment for DPF {id="dpf-environment-setup"}
{%- set context = "dpf-environment-setup" -%}
{%- set dpf_version = "26.4.1" %}

Before installing the NVIDIA DPF Operator, you must set up the management cluster, configure worker nodes, create the `dpf-operator-system` namespace, and install and configure the required Operators. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-dpf-management-cluster-setup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-worker-machineconfig.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-installing-required-operators.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing the {{ cert_manager_operator }}](/security/cert_manager_operator/cert-manager-operator-install#cert-manager-operator-install)
*   [Installing the MetalLB Operator](/networking/networking_operators/metallb-operator/metallb-operator-install#metallb-operator-install)
*   [Installing {{ gitops_title }}](https://docs.openshift.com/gitops/latest/installing_gitops/installing-openshift-gitops.html#installing-openshift-gitops)
*   [DPF Operator prerequisites](https://networking-docs.nvidia.com/dpf/26.4.1/host-network-configuration-prerequisites)

{% leveloffset +2 %}{% include "./modules/nw-dpf-installing-maintenance-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-configuring-required-operators.md" %}{% endleveloffset %}