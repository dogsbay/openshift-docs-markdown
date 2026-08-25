{%- set _mod_docs_content_type = "CONCEPT" %}
# GPUs and virtualization {id="nvidia-gpu-virtualization_{{ context }}"}

With {{ VirtProductName }}, you can develop and maintain applications that run on virtual machines (VMs).
These capabilities enable enterprises to incorporate VMs into containerized workflows within clusters. {._abstract}

Many developers and enterprises are moving to containerized applications and serverless infrastructures, but interest exists in developing and maintaining applications that run on virtual machines (VMs).

You can choose one of the following methods to connect the worker nodes to the GPUs:

*   GPU passthrough to access and use GPU hardware within a VM.
*   GPU (vGPU) time-slicing, when GPU compute capacity is not saturated by workloads.