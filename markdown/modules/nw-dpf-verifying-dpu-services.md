{%- set _mod_docs_content_type = "REFERENCE" %}
# Verify DPU service reconciliation {id="nw-dpf-verifying-dpu-services_{{ context }}"}

After the DPU hosted cluster and `DPUCluster` are ready, the DPF Operator creates the DPU services, IPAM pools, service interfaces, and service chains for the `DPUDeployment`. {._abstract}

These resources are created but will not be fully reconciled until DPU worker nodes are provisioned and joined to the cluster.
For full verification of DPU service status, see "Verify full system readiness" after completing worker node provisioning.