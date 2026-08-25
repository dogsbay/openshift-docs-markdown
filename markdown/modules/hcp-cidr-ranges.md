{%- set _mod_docs_content_type = "REFERENCE" %}
# CIDR ranges for {{ hcp }} {id="hcp-cidr-ranges_{{ context }}"}

To successfully deploy {{ hcp }} on {{ product_title }}, define the network environment by using specific Classless Inter-Domain Routing (CIDR) subnet ranges. {._abstract}

The following Classless Inter-Domain Routing (CIDR) subnet ranges are the default settings for {{ hcp }}:

*   `v4InternalSubnet`: 100.65.0.0/16 (OVN-Kubernetes)
*   `clusterNetwork`: 10.132.0.0/14 (pod network)
*   `serviceNetwork`: 172.31.0.0/16

By using one of the default subnet ranges, you can avoid CIDR overlap with the management cluster and avoid connectivity issues. However, you can use other CIDR subnet ranges if they do not overlap with the management cluster.