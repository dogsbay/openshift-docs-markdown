{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ rh_rhacm }} Observability {id="telco-hub-acm-observability_{{ context }}"}

Cluster Observability is provided by the multicluster engine and {{ rh_rhacm_first }}. {._abstract}

*   Observability storage needs several `PV` resources and an S3 compatible bucket storage for long-term retention of the metrics.
*   Storage requirements calculation is complex and dependent on the specific workloads and characteristics of managed clusters.
Requirements for `PV` resources and the S3 bucket depend on many aspects including data retention, the number of managed clusters, managed cluster workloads, and so on.
*   Estimate the required storage for observability by using the observability sizing calculator in the {{ rh_rhacm }} capacity planning repository.
See the Red Hat Knowledgebase article [Calculating storage need for MultiClusterHub Observability on telco environments](https://access.redhat.com/articles/7103886) for an explanation of using the calculator to estimate observability storage requirements.
The below table uses inputs derived from the telco RAN DU RDS and the hub cluster RDS as representative values.

:::note

The following numbers are estimates.
Tune the values for more accurate results.
Add an engineering margin, for example +20%, to the results to account for potential estimation inaccuracies.

Storage resources depend on the number of replicas for each component.
You can configure the sizing for the Observability stack in the `MultiClusterObservability` custom resource.
The number of replicas scales with the sizing configuration.
The sizing values in this specification use the default size.

:::


**Cluster requirements**

| Capacity planner input | Data source | Example value |
| --- | --- | --- |
| Number of control plane nodes | Hub cluster RDS (scale) and telco RAN DU RDS (topology) | 3500 |
| Number of additional worker nodes | Hub cluster RDS (scale) and telco RAN DU RDS (topology) | 0 |
| Days for storage of data | Hub cluster RDS | 15 |
| Total number of pods per cluster | Telco RAN DU RDS | 120 |
| Number of namespaces (excluding {{ product_title }}) | Telco RAN DU RDS | 4 |
| Number of metric samples per hour | Default value | 12 |
| Number of hours of retention in receiver persistent volume (PV) | Default value | 24 |

With these input values, the sizing calculator as described in the Red Hat Knowledgebase article [Calculating storage need for MultiClusterHub Observability on telco environments](https://access.redhat.com/articles/7103886) indicates the following storage needs:

**Storage requirements**

<table>
<thead>
<tr>
  <th colspan="2"><code>alertmanager</code> PV 2+</th>
  <th><code>thanos receive</code> PV 2+</th>
  <th><code>thanos compact</code> PV</th>
</tr>
</thead>
<tbody>
<tr>
  <td><strong>Per replica</strong></td>
  <td><strong>Total</strong></td>
  <td><strong>Per replica</strong></td>
  <td><strong>Total</strong> 2+</td>
</tr>
<tr>
  <td><strong>Total</strong></td>
  <td>10 GiB</td>
  <td>30 GiB</td>
  <td>10 GiB</td>
</tr>
<tr>
  <td>30 GiB 2+</td>
  <td>100 GiB</td>
</tr>
</tbody>
</table>

**Storage requirements**

| `thanos rule` PV 2+ | `thanos store` PV 2+ | Object bucket<sup>[1]</sup> |
| --- | --- | --- |
| **Per replica** | **Total** | **Per replica** |
| **Total** | **Total** | 30 GiB |
| 90 GiB | 100 GiB | 300 GiB |

[1] This value assumes downsampling is enabled. You cannot configure the object bucket size in the `MultiClusterObservability` CR. Ensure this storage capacity is available in your environment.