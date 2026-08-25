{%- set _mod_docs_content_type = "CONCEPT" %}
# GPUs and bare metal {id="nvidia-gpu-bare-metal_{{ context }}"}

You can deploy {{ product_title }} on an NVIDIA-certified bare-metal server. 
However, consider several limitations that might affect your objectives. {._abstract}

The following list details these limitations:

*   Control plane nodes can be CPU nodes.
*   Worker nodes must be GPU nodes, provided that AI/ML workloads are executed on these worker nodes.

    In addition, the worker nodes can host one or more GPUs, but they must be of the same type. 
    For example, a node can have two NVIDIA A100 GPUs, but a node with one A100 GPU and one T4 GPU is not supported. 
    The NVIDIA Device Plugin for Kubernetes does not support mixing different GPU models on the same node.
*   When using {{ product_title }}, note that one or three or more servers are required. 
Clusters with two servers are not supported. 
The single server deployment is called {{ sno }} and using this configuration results in a non-high availability {{ product_title }} environment.

You can choose one of the following methods to access the containerized GPUs:

*   GPU passthrough
*   Multi-Instance GPU (MIG)