{%- set _mod_docs_content_type = "CONCEPT" %}
# Multi-instance GPU {id="nvidia-gpu-mig-gpu_{{ context }}"}

Using Multi-instance GPU (MIG), you can split GPU compute units and memory into multiple MIG instances. Each of these instances represents a standalone GPU device from a system perspective and can be connected to any application, container, or virtual machine running on the node.  {._abstract}

The software that uses the GPU treats each of these MIG instances as an individual GPU.

MIG is useful when you have an application that does not require the full power of an entire GPU. By using the MIG feature of the new NVIDIA Ampere architecture, you can split your hardware resources into multiple GPU instances, each of which is available to the operating system as an independent CUDA-enabled GPU.

NVIDIA GPU Operator version 1.7.0 and later provides MIG support for the A100 and A30 Ampere cards. These GPU instances are designed to support up to seven independent CUDA applications so that they operate completely isolated with dedicated hardware resources.