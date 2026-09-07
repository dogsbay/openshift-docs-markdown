{%- set _mod_docs_content_type = "CONCEPT" %}
# OVN-Kubernetes DPU-Host mode {id="nw-dpf-enabling-ovnk-dpu-host-mode_{{ context }}"}

DPU-Host mode on worker nodes with accelerated OVN-Kubernetes CNI is automatically configured by the DPF provisioning controller. {._abstract}

When the `DPFOperatorConfig` resource is created and worker nodes with the `worker-dpu` label are provisioned, the DPF provisioning controller automatically configures the required settings for DPU-Host mode, including the network node identity and hardware offload configuration.