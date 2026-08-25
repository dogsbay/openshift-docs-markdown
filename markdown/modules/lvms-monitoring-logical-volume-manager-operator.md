{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring {{ lvms }} {id="lvms-monitoring_{{ context }}"}

You can monitor {{ lvms }} by enabling cluster monitoring with a namespace label, then viewing metrics to track storage usage and receiving alerts when thin pool and volume group capacity reaches critical thresholds to prevent data loss. {._abstract}

To enable cluster monitoring, you must add a label in the namespace where you have installed {{ lvms }}.


:::important

For information about enabling cluster monitoring in {{ rh_rhacm }}, see "Observability" and "Adding custom metrics".

:::


**Procedure**

*   To enable cluster monitoring, add the following label in the namespace where you have installed {{ lvms }}:
```text
openshift.io/cluster-monitoring=true
```