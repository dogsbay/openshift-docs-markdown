{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure high-performance networking {id="configure-high-performance-networking-con_{{ context }}"}

Workloads that need low latency and high throughput can bypass the default pod network by using SR-IOV virtual functions or by offloading to compatible hardware. Configure these features on compatible nodes to increase data processing performance and reduce load on host CPUs.