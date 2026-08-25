{%- set _mod_docs_content_type = "CONCEPT" %}
# NVIDIA GPU architecture {id="nvidia-gpu-architecture_{{ context }}"}

NVIDIA supports the use of graphics processing unit (GPU) resources on {{ product_title }}. {{ product_title }} is a security-focused and hardened Kubernetes platform developed and supported by Red Hat for deploying and managing Kubernetes clusters at scale. {{ product_title }} includes enhancements to Kubernetes so that users can easily configure and use NVIDIA GPU resources to accelerate workloads.

The NVIDIA GPU Operator leverages the Operator framework within {{ product_title }} to manage the full lifecycle of NVIDIA software components required to run GPU-accelerated workloads.

These components include the NVIDIA drivers (to enable CUDA), the Kubernetes device plugin for GPUs, the NVIDIA Container Toolkit, automatic node tagging using GPU feature discovery (GFD), DCGM-based monitoring, and others.


:::note

The NVIDIA GPU Operator is only supported by NVIDIA. For more information about obtaining support from NVIDIA, see [Obtaining Support from NVIDIA](https://access.redhat.com/solutions/5174941).

:::