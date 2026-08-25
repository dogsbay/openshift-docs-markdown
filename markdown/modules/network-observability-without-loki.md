{%- set _mod_docs_content_type = "REFERENCE" %}
# Network observability without Loki {id="network-observability-without-loki_{{ context }}"}

Compare the features available with network observability with and without installing the {{ loki_op }}. {._abstract}

If you only want to export flows to a Kafka consumer or IPFIX collector, or you only need dashboard metrics, then you do not need to install Loki or provide storage for Loki. The following table compares available features with and without Loki.

**Comparison of feature availability with and without Loki**

|  | **With Loki** | **Without Loki** |
| --- | --- | --- |
| **Exporters** | X | X |
| **Multi-tenancy** | X | X |
| **Complete filtering and aggregations capabilities** ^[1]^ | X |  |
| **Partial filtering and aggregations capabilities** ^[2]^ | X | X |
| **Flow-based metrics and dashboards** | X | X |
| **Traffic flows view overview** ^[3]^ | X | X |
| **Traffic flows view table** | X |  |
| **Topology view** | X | X |
| **{{ product_title }} console Network Traffic tab integration** | X | X |
1.  Such as per pod.
1.  Such as per workload or namespace.
1.  Statistics on packet drops are only available with Loki.