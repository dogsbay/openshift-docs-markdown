{%- set _mod_docs_content_type = "CONCEPT" %}
# Hosting cluster requirements {id="con_virt-vcp-hosting-cluster-requirements_{{ context }}"}

The hosting cluster runs the virtualized control plane VMs and manages their lifecycle through KubeVirt Redfish. {._abstract}

The hosting cluster requires the following components:

*   {{ product_title }} installed and operational.
*   {{ VirtProductName }} installed and configured.
*   Sufficient compute resources to host control plane VMs.
*   At least three physical nodes to enable anti-affinity placement, ensuring control plane VMs are spread across different physical hosts.