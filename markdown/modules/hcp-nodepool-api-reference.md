{%- set _mod_docs_content_type = "REFERENCE" %}
# NodePool API reference for autoscaling {id="hcp-nodepool-api-reference_{{ context }}"}

Get familiar with the `NodePool` specification fields related to autoscaling, including scaling to and from zero on supported platforms. {._abstract}

## spec.autoScaling {id="hcp-nodepool-api-spec-autoscaling_{{ context }}"}

| Field | Type | Description |
| --- | --- | --- |
| `min` | integer | Minimum number of nodes for the pool when autoscaling is enabled. `0` is valid on {{ aws_first }} and {{ azure_short }}. Other platforms require `min` to be at least `1`. |
| `max` | integer | Maximum number of nodes the cluster autoscaler can add to the pool. |

## spec.replicas {id="hcp-nodepool-api-spec-replicas_{{ context }}"}

| Field | Type | Description |
| --- | --- | --- |
| `replicas` | integer | Fixed number of nodes when autoscaling is disabled. Omit this field when `spec.autoScaling` is set. |

## Drain and detach timeouts {id="hcp-nodepool-api-drain-detach-timeouts_{{ context }}"}

| Field | Type | Description |
| --- | --- | --- |
| `nodeDrainTimeout` | duration | Time the controller spends draining a node during scale-down. A value of `0s` blocks draining until a positive timeout is set. |
| `nodeVolumeDetachTimeout` | duration | Time the controller spends detaching volumes from a node during scale-down. A value of `0` blocks detachment until a positive timeout is set. |

## status.conditions {id="hcp-nodepool-api-status-conditions_{{ context }}"}

| Condition | Description |
| --- | --- |
| `AutoscalingEnabled` | Reports `True` when autoscaling is correctly configured and the autoscaler manages the pool. |

## HyperShift Operator flags {id="hcp-nodepool-api-sm-operator-flags_{{ context }}"}

| Flag | Description |
| --- | --- |
| `--scale-from-zero-provider` | Provider used to fetch instance-type metadata on {{ aws_short }} and {{ azure_short }}. |
| `--scale-from-zero-creds` | Credentials for the scale-from-zero provider on {{ aws_short }} and {{ azure_short }}. |