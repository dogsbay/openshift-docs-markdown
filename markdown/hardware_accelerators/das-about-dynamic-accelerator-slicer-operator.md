{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Dynamic Accelerator Slicer (DAS) Operator {id="das-about-dynamic-accelerator-slicer-operator"}
{%- set context = "das-about-dynamic-accelerator-slicer-operator" %}

{%- set FeatureName = "Dynamic Accelerator Slicer Operator" %}

{% include "./snippets/technology-preview.md" %}

The Dynamic Accelerator Slicer (DAS) Operator allows you to dynamically slice GPU accelerators in {{ product_title }}, instead of relying on statically sliced GPUs defined when the node is booted. This allows you to dynamically slice GPUs based on specific workload demands, ensuring efficient resource utilization.

Dynamic slicing is useful if you do not know all the accelerator partitions needed in advance on every node on the cluster.

The DAS Operator currently includes a reference implementation for NVIDIA Multi-Instance GPU (MIG) and is designed to support additional technologies such as NVIDIA MPS or GPUs from other vendors in the future.

**Limitations**

The following limitations apply when using the Dynamic Accelerator Slicer Operator:

*   You need to identify potential incompatibilities and ensure the system works seamlessly with various GPU drivers and operating systems.
*   The Operator only works with specific MIG compatible NVIDIA GPUs and drivers, such as H100 and A100.
*   The Operator cannot use only a subset of the GPUs of a node.
*   The NVIDIA device plugin cannot be used together with the Dynamic Accelerator Slicer Operator to manage the GPU resources of a cluster.


:::note

The DAS Operator is designed to work with MIG-enabled GPUs. It allocates MIG slices instead of whole GPUs. Installing the DAS Operator prevents the use of the standard resource request through the NVIDIA device plugin such as `nvidia.com/gpu: "1"`, for allocating the entire GPU.

:::


{% leveloffset +1 %}{% include "./modules/das-operator-installing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/das-operator-installing-web-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ cert_manager_operator }}](/security/cert_manager_operator/cert-manager-operator-install#cert-manager-operator-install)
*   [Node Feature Discovery (NFD) Operator](/hardware_enablement/psap-node-feature-discovery-operator#psap-node-feature-discovery-operator)
*   [NVIDIA GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/index.html)
*   [NodeFeatureDiscovery CR](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/specialized_hardware_and_driver_enablement/psap-node-feature-discovery-operator#creating-nfd-cr-web-console_psap-node-feature-discovery-operator)

{% leveloffset +2 %}{% include "./modules/das-operator-installing-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ cert_manager_operator }}](/security/cert_manager_operator/cert-manager-operator-install#cert-manager-operator-install)
*   [Node Feature Discovery (NFD) Operator](/hardware_enablement/psap-node-feature-discovery-operator#psap-node-feature-discovery-operator)
*   [NVIDIA GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/index.html)
*   [NodeFeatureDiscovery CR](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/specialized_hardware_and_driver_enablement/psap-node-feature-discovery-operator#creating-nfd-cr-cli_psap-node-feature-discovery-operator)

{% leveloffset +1 %}{% include "./modules/das-operator-uninstalling.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/das-operator-uninstalling-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/das-operator-uninstalling-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/das-operator-deploying-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/das-operator-troubleshooting.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Kubernetes issue #128043](https://github.com/kubernetes/kubernetes/issues/128043)
*   [Node Feature Discovery Operator](/hardware_enablement/psap-node-feature-discovery-operator#psap-node-feature-discovery-operator)
*   [NVIDIA GPU Operator troubleshooting](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/troubleshooting.html)