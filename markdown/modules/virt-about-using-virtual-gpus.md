{%- set _mod_docs_content_type = "CONCEPT" %}
# About using virtual GPUs with {{ VirtProductName }} {id="virt-about-using-virtual-gpus_{{ context }}"}

You can create vGPUs for your virtual machines (VMs) using supported GPU cards. Refer to your hardware vendor’s documentation for functionality and support details. {._abstract}

You can use the NVIDIA GPU Operator to manage vGPUs for your virtual machines (VMs) on the cluster nodes. You must add these devices to the `HyperConverged` custom resource (CR) so that {{ VirtProductName }} can discover and make them available to virtual machines.

A mediated device is a physical device that is divided into one or more virtual devices. vGPUs are a type of mediated device (mdev) where the performance of the physical GPU is divided among the virtual devices. You can assign mediated devices to one or more virtual machines (VMs), but the number of guests must be compatible with your GPU. Some GPUs do not support multiple guests.