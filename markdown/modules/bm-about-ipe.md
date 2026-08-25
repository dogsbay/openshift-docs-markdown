{%- set _mod_docs_content_type = "CONCEPT" %}
# Hardware metrics in the Monitoring stack {id="bm-about-ipe_{{ context }}"}

Hardware metrics can be exported to the cluster by enabling the Ironic Prometheus Exporter (IPE). {._abstract}

IPE is a tool that exposes the hardware sensor data of cluster nodes in the Prometheus format.
When you enable IPE in your cluster, the tool collects data from the baseboard management controller (BMC) of each node and exports the data to the cluster’s monitoring stack.


:::note

This method of collecting hardware metrics works only on Redfish-compatible BMCs.

:::


You can then view these hardware metrics alongside other metrics in the ***Observe*** tab of the web console.

{%- set FeatureName = "Monitoring bare metal hardware metrics" %}
{% include "./snippets/technology-preview.md" %}