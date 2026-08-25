{%- set _mod_docs_content_type = "CONCEPT" %}
# GPUs and vSphere {id="nvidia-gpu-vsphere_{{ context }}"}

You can deploy {{ product_title }} on an NVIDIA-certified {{ vmw_first }} server that can host different GPU types. {._abstract}

An NVIDIA GPU driver must be installed in the hypervisor if vGPU instances are used by the VMs. For {{ vmw_short }}, this host driver is provided in the form of a VIB file.

The maximum number of vGPUs that can be allocated to worker node VMs depends on the version of {{ vmw_short }}:

*   {{ vmw_short }} 7.0: maximum 4 vGPU per VM
*   {{ vmw_short }} 8.0: maximum 8 vGPU per VM

    :::note

    {{ vmw_short }} 8.0 introduced support for multiple full or fractional heterogeneous profiles associated with a VM.
    
    :::


You can choose one of the following methods to attach the worker nodes to the GPUs:

*   GPU passthrough for accessing and using GPU hardware within a virtual machine (VM)
*   GPU (vGPU) time-slicing, when not all of the GPU is needed

Similar to bare-metal deployments, one or three or more servers are required.
Clusters with two servers are not supported.