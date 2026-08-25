{%- set _mod_docs_content_type = "CONCEPT" %}
# KubeVirt Redfish architecture {id="con_virt-kubevirt-redfish-architecture_{{ context }}"}

KubeVirt Redfish is deployed on the hosting cluster as a Deployment resource and is exposed using Service and Route resources. KubeVirt Redfish connects to the cluster API to list and control the KubeVirt VMs you expose through configuration. {._abstract}

Requests arrive at the KubeVirt Redfish endpoint, which is exposed as an {{ product_title }} Route. KubeVirt Redfish then translates supported Redfish operations into KubeVirt API calls to manage VM power state, inventory, and virtual media.