{%- set _mod_docs_content_type = "REFERENCE" %}
# Assisted Service {id="telco-hub-assisted-service_{{ context }}"}

The Assisted Service is deployed with the multicluster engine and {{ rh_rhacm_first }}. {._abstract}


:::note

The following numbers are estimates.
Tune the values for more accurate results.
Add an engineering margin, for example +20%, to the results to account for potential estimation inaccuracies.

:::


**Assisted Service storage requirements**

| Persistent volume resource | Size (GB) |
| --- | --- |
| `imageStorage`^[1]^ | 30 |
| `filesystemStorage`^[2]^ | 709 |
| `dataBaseStorage`^[3]^ | 0.7 |

[1][2] For more information, refer to the multicluster engine Operator documentation [About enabling central infrastructure management](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/clusters/cluster_mce_overview#enable-cim).

[3] The `databaseStorage` value is an empirical estimate based on cluster topology, number of installation events, hardware profile, and configuration complexity. Based on empirical testing, estimate approximately 200 KB per host.