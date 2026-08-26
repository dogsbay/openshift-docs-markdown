{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster Autoscaler Operator {id="cluster-autoscaler-operator_{{ context }}"}

The Cluster Autoscaler Operator manages deployments of the OpenShift Cluster Autoscaler using the `cluster-api` provider. {._abstract}

## CRDs {id="_crds"}

*   `ClusterAutoscaler`: This is a singleton resource, which controls the configuration autoscaler instance for the cluster. The Operator only responds to the `ClusterAutoscaler` resource named `default` in the managed namespace, the value of the `WATCH_NAMESPACE` environment variable.
*   `MachineAutoscaler`: This resource targets a node group and manages the annotations to enable and configure autoscaling for that group, the `min` and `max` size. Currently only `MachineSet` objects can be targeted.