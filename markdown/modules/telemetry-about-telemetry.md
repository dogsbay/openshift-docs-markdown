{%- set _mod_docs_content_type = "CONCEPT" %}
# About Telemetry {id="telemetry-about-telemetry_{{ context }}"}

Telemetry sends a carefully chosen subset of the cluster monitoring metrics to Red&#160;Hat. The Telemeter Client fetches the metrics values every four minutes and thirty seconds and uploads the data to Red&#160;Hat. These metrics are described in this document. {._abstract}

This stream of data is used by Red&#160;Hat to monitor the clusters in real-time and to react as necessary to problems that impact our customers. Red&#160;Hat can use the streamed data to roll out {{ product_title }} upgrades to customers to minimize service impact and continuously improve the upgrade experience.

This debugging information is available to Red&#160;Hat Support and Engineering teams with the same restrictions as accessing data reported through support cases. All connected cluster information is used by Red&#160;Hat to help make {{ product_title }} better and more intuitive to use.