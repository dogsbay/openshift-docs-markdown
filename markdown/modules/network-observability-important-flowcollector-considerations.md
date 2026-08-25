{%- set _mod_docs_content_type = "REFERENCE" %}
# Important FlowCollector configuration considerations {id="network-observability-important-flowcollector-configuration-considerations_{{ context }}"}

Review essential `FlowCollector` configuration options before initial deployment to avoid pod disruptions caused by later reconfiguration. Key settings include Kafka integration, enriched flow data exports, SR-IOV traffic monitoring, and advanced tracking for DNS and packet drops. {._abstract}

Once you create the `FlowCollector` instance, you can reconfigure it, but the pods are terminated and recreated again, which can be disruptive.

Therefore, you can consider configuring the following options when creating the `FlowCollector` for the first time.