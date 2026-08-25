{%- set _mod_docs_content_type = "REFERENCE" %}
# Prometheus database storage requirements {id="prometheus-database-storage-requirements_{{ context }}"}

Red&#160;Hat performed various tests for different scale sizes. {._abstract}


:::note

*   The following Prometheus storage requirements are not prescriptive and should be used as a reference. Higher resource consumption might be observed in your cluster depending on workload activity and resource density, including the number of pods, containers, routes, or other resources exposing metrics collected by Prometheus.
*   You can configure the size-based data retention policy to suit your storage requirements.

:::


**Prometheus Database storage requirements based on number of nodes/pods in the cluster**

| Number of nodes | Number of pods (2 containers per pod) | Prometheus storage growth per day | Prometheus storage growth per 15 days | Network (per tsdb chunk) |
| --- | --- | --- | --- | --- |
| 50 | 1800 | 6.3 GB | 94 GB | 16 MB |
| 100 | 3600 | 13 GB | 195 GB | 26 MB |
| 150 | 5400 | 19 GB | 283 GB | 36 MB |
| 200 | 7200 | 25 GB | 375 GB | 46 MB |

Approximately 20 percent of the expected size was added as overhead to ensure that the storage requirements do not exceed the calculated value.

The above calculation is for the default {{ product_title }} {{ cmo_full }}.


:::note

CPU utilization has minor impact. The ratio is approximately 1 core out of 40 per 50 nodes and 1800 pods.

:::


**Recommendations for {{ product_title }}**

*   Use at least two infrastructure (infra) nodes.
*   Use at least three **openshift-container-storage** nodes with non-volatile memory express (SSD or NVMe) drives.