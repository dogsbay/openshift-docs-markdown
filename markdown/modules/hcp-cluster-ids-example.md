{%- set _mod_docs_content_type = "REFERENCE" %}
# Example: Setting a custom cluster identifier {id="hcp-cluster-ids-example_{{ context }}"}

You can set the `spec.clusterID` value only when you create a `HostedCluster` custom resource (CR). {._abstract}


:::important

After you set `spec.clusterID` is set, you cannot change it. Plan the identifier before you create the hosted cluster.

:::


The following example shows a `HostedCluster` CR with a custom cluster identifier set:

```yaml title="Example HostedCluster CR with a custom cluster identifier"
apiVersion: hypershift.openshift.io/v1beta1
kind: HostedCluster
metadata:
  name: <hosted_cluster_name>
  namespace: <hosted_cluster_namespace>
spec:
  clusterID: fa45babd-40f3-4085-9b30-8bc3b7df1557
  controllerAvailabilityPolicy: SingleReplica
  dns:
    baseDomain: example.com
  platform:
    type: AWS
  release:
    image: <ocp_release_image>
  pullSecret:
    name: <pull_secret_name>
```

The `spec.clusterID` value is the UUID that you want to use as the stable cluster identifier in metrics. The value must be a valid RFC4122 UUID: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` in hexadecimal digits.

The value of `spec.clusterID` is added as the `_id` label on control plane metrics through Prometheus relabeling rules on `ServiceMonitor` and `PodMonitor` resources. HyperShift Operator metrics for the hosted cluster also use the same `_id` label, so you can correlate metrics from the management cluster and the hosted control plane in one query.

For example, to filter metrics for a specific hosted cluster, use the `_id` label in a PromQL expression:

```promql
{__name__=~"hypershift_.*", _id="fa45babd-40f3-4085-9b30-8bc3b7df1557"}
```

When you enable monitoring dashboards, the `__CLUSTER_ID__` placeholder in the dashboard template is replaced with the same UUID. For more information, see "Dashboard customization".

## Cluster identifier reuse after a reinstall {id="hcp-cluster-ids-reusing_{{ context }}"}

If you delete and re-create a hosted cluster, a new random `clusterID` is assigned unless you specify one. To keep the same identifier in external monitoring systems, set `spec.clusterID` in the new `HostedCluster` CR to the UUID that you used before.