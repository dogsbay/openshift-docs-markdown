{%- set _mod_docs_content_type = "CONCEPT" %}
# Zone aware data replication {id="logging-loki-zone-aware-rep_{{ context }}"}

The {{ loki_op }} offers support for zone-aware data replication through pod topology spread constraints. Enabling this feature enhances reliability and safeguards against log loss in the event of a single zone failure. When configuring the deployment size as `1x.extra-small`, `1x.small`, or `1x.medium`, the `replication.factor` field is automatically set to 2.

To ensure proper replication, you need to have at least as many availability zones as the replication factor specifies. While it is possible to have more availability zones than the replication factor, having fewer zones can lead to write failures. Each zone should host an equal number of instances for optimal operation.

```yaml title="Example LokiStack CR with zone replication enabled"
apiVersion: loki.grafana.com/v1
kind: LokiStack
metadata:
 name: logging-loki
 namespace: openshift-logging
spec:
 replicationFactor: 2 # (1)
 replication:
   factor: 2 # (2)
   zones:
   -  maxSkew: 1 # (3)
      topologyKey: topology.kubernetes.io/zone # (4)
```
1.  Deprecated field, values entered are overwritten by `replication.factor`.
1.  This value is automatically set when deployment size is selected at setup.
1.  The maximum difference in number of pods between any two topology domains. The default is 1, and you cannot specify a value of 0.
1.  Defines zones in the form of a topology key that corresponds to a node label.