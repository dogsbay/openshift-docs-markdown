{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About the NVIDIA DPF Operator {id="about-dpf-operator"}
{%- set context = "about-dpf-operator" -%}
{%- set dpf_version = "26.4.1" %}

The NVIDIA DOCA Platform Framework (DPF) Operator enables hardware-accelerated networking on {{ product_title }} by offloading OVN-Kubernetes data plane operations to NVIDIA BlueField-3 Data Processing Units (DPUs). {._abstract}

The DPF deployment creates a dual-cluster topology consisting of a management cluster running on x86 servers and a hosted DPU cluster running on BlueField-3 DPUs.

{%- set FeatureName = "The NVIDIA DPF Operator" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-architecture-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-component-placement.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-deployment-flow-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-hardware-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-network-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-software-requirements.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [NVIDIA DPF Operator release notes](/networking/networking_operators/dpf_operator/dpf-release-notes#dpf-release-notes)
*   [Troubleshooting the DPF Operator](/networking/networking_operators/dpf_operator/dpf-troubleshooting#dpf-troubleshooting)
*   [DPU Operator](/networking/networking_operators/dpu-operator/dpu-operator#dpu-operator)
*   [DOCA Platform Framework (DPF) documentation](https://networking-docs.nvidia.com/dpf/26.4.1)
*   [Get Started with DPF Host Trusted](https://networking-docs.nvidia.com/dpf/26.4.1/dpf-host-trusted)
*   [DPF OVN-Kubernetes with Host-Based Networking User Guide](https://networking-docs.nvidia.com/dpf/26.4.1/ovn-kubernetes-with-host-based-networking)
*   [OpenShift mirror](https://mirror.openshift.com/pub/openshift-v4/clients/ocp/)
*   [Helm installation guide](https://helm.sh/docs/intro/install/)
*   [NVIDIA DPF uninstall guide](https://networking-docs.nvidia.com/dpf/26.4.1/dpf-host-trusted)