{%- set _mod_docs_content_type = "CONCEPT" %}
# Static Operator groups {id="olm-operatorgroups-static_{{ context }}"}

A static Operator group has `spec.staticProvidedAPIs` set to `true`, so OLM does not modify the `olm.providedAPIs` annotation. You can set this annotation in advance to reserve API ownership and prevent resource contention without active member CSVs. {._abstract}

Below is an example of an Operator group that protects `Prometheus` resources in all namespaces with the `something.cool.io/cluster-monitoring: "true"` annotation:

```yaml
apiVersion: operators.coreos.com/v1
kind: OperatorGroup
metadata:
  name: cluster-monitoring
  namespace: cluster-monitoring
  annotations:
    olm.providedAPIs: Alertmanager.v1.monitoring.coreos.com,Prometheus.v1.monitoring.coreos.com,PrometheusRule.v1.monitoring.coreos.com,ServiceMonitor.v1.monitoring.coreos.com
spec:
  staticProvidedAPIs: true
  selector:
    matchLabels:
      something.cool.io/cluster-monitoring: "true"
```