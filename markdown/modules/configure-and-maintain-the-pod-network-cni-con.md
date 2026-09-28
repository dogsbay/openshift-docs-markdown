{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure and maintain the pod network {id="configure-and-maintain-the-pod-network-cni-con_{{ context }}"}

The Cluster Network Operator manages the pod network that your cluster was installed with, including the CIDR ranges and network plugin settings that every pod depends on. {._abstract}

Review and adjust that configuration so that pod, service, and machine address space stays non-overlapping and meets your organization’s requirements.