{%- set _mod_docs_content_type = "CONCEPT" %}
# NVIDIA GPU features for {{ product_title }} {id="nvidia-gpu-features_{{ context }}"}

Learn about the NVIDIA GPU features, software components, and monitoring tools available to accelerate containerized workloads in {{ product_title }}. {._abstract}


NVIDIA Container Toolkit
:   By using the NVIDIA Container Toolkit, you can create and run GPU-accelerated containers. The toolkit includes a container runtime library and utilities to automatically configure containers to use NVIDIA GPUs.


NVIDIA AI Enterprise
:   NVIDIA AI Enterprise is an end-to-end, cloud-native suite of AI and data analytics software optimized, certified, and supported with NVIDIA-Certified systems.

    NVIDIA AI Enterprise includes support for Red Hat {{ product_title }}. 
    The following installation methods are supported:
    *   {{ product_title }} on bare metal or {{ vmw_first }} with GPU Passthrough.
    *   {{ product_title }} on {{ vmw_first }} with NVIDIA vGPU.

GPU Feature Discovery
:   NVIDIA GPU Feature Discovery for Kubernetes is a software component that you can use to automatically generate labels for the GPUs available on a node. GPU Feature Discovery uses node feature discovery (NFD) to perform this labeling.

    The Node Feature Discovery Operator (NFD) manages the discovery of hardware features and configurations in an {{ product_title }} cluster by labeling nodes with hardware-specific information. NFD labels the host with node-specific attributes, such as PCI cards, kernel, OS version, and so on.

    You can find the NFD Operator in the Operator Hub by searching for “Node Feature Discovery”.


NVIDIA GPU Operator with OpenShift Virtualization
:   The GPU Operator only provisioned worker nodes to run GPU-accelerated containers. The GPU Operator can also provision worker nodes for running GPU-accelerated virtual machines (VMs).

    You can configure the GPU Operator to deploy different software components to worker nodes depending on which GPU workload is configured to run on those nodes.


GPU Monitoring dashboard
:   You can install a monitoring dashboard to display GPU usage information on the cluster **Observe** page in the {{ product_title }} web console. GPU utilization information includes the number of available GPUs, power consumption (in watts), temperature (in degrees Celsius), utilization (in percent), and other metrics for each GPU.