{%- set _mod_docs_content_type = "REFERENCE" %}
# Hub cluster resource utilization {id="telco-hub-resource-utilization_{{ context }}"}

Resource utilization was measured for deploying hub clusters in the following scenario: {._abstract}

*   Under reference load managing 3500 {{ sno }} clusters.
*   3-node compact cluster for management hub running on dual socket bare-metal servers.
*   Network impairment of 50 ms round-trip latency, 100 Mbps bandwidth limit and 0.02% packet loss.
*   Observability was not enabled.
*   Only local storage was used.

**Resource utilization values**

| Metric | Peak Measurement |
| --- | --- |
| OpenShift Platform CPU | 106 cores (52 cores peak per node) |
| OpenShift Platform memory | 504 G (168 G peak per node) |