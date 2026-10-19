{%- set _mod_docs_content_type = "CONCEPT" %}
# Provisioning and configuring DPU worker nodes {id="nw-dpf-provision-and-configure-dpu-worker-nodes_{{ context }}"}

After provisioning the DPU hosted cluster, add DPU-enabled worker nodes to your management cluster and configure the OVN-Kubernetes resource injector and DPU host mode settings. You then approve the certificate signing requests for the new nodes and verify that the DPUs are provisioned correctly.