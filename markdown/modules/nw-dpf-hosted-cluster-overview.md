{%- set _mod_docs_content_type = "CONCEPT" %}
# DPU hosted cluster provisioning with the DPF HCP Provisioner Operator {id="nw-dpf-hosted-cluster-overview_{{ context }}"}

The DPF HCP Provisioner Operator orchestrates the lifecycle of hosted clusters for DPU environments. {._abstract}

The Operator provides the following capabilities:


HostedCluster lifecycle management
:   Creates, updates, and deletes `HostedCluster`, `NodePool`, and associated secret resources.


Automatic CSR approval
:   Approves Certificate Signing Requests from DPU worker nodes joining the hosted cluster.


BlueField {{ product_title }} layer image lookup
:   Matches {{ product_title }} release images to corresponding BlueField container images by using container registry tag lookup.


Kubeconfig injection
:   Extracts the `HostedCluster` kubeconfig and injects it into the `DPUCluster` custom resource, enabling management cluster communication with the DPU hosted cluster.


MetalLB configuration
:   Deploys `IPAddressPool` and `L2Advertisement` resources for `LoadBalancer` service exposure.


Ignition generation
:   Generates BlueField-specific ignition configurations from hosted control plane ignition for DPU node provisioning.


Status translation
:   Mirrors `HostedCluster` conditions to `DPFHCPProvisioner` status without exposing hosted control plane internals.