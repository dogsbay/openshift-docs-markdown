{%- set _mod_docs_content_type = "REFERENCE" %}
# NodePool autoscaling configuration reference {id="hcp-autoscaling-nodepool-reference_{{ context }}"}

Get familiar with the `NodePool` fields and status conditions for autoscaling to and from zero on {{ hcp }}. {._abstract}

| Field or condition | Description |
| --- | --- |
| `spec.autoScaling.min` | Minimum nodes the cluster autoscaler can scale the pool to. Valid values include `0` on {{ aws_first }} and {{ azure_short }}. On other platforms, the minimum must be at least `1`. |
| `spec.autoScaling.max` | Maximum nodes the cluster autoscaler can scale the pool to. Must be greater than or equal to `spec.autoScaling.min`. |
| `spec.replicas` | Fixed replica count when autoscaling is disabled. Must be omitted when `spec.autoScaling` is configured. |
| `AutoscalingEnabled` condition | Reports whether autoscaling is active on the `NodePool`. Status `True` indicates the autoscaler manages pool size. |
| `--scale-from-zero-provider` and `--scale-from-zero-creds` | On {{ aws_short }} and {{ azure_short }}, credentials and provider configuration for instance-type metadata used during scale-from-zero. |
| Non-tainted pool minimum sum | Sum of minimum replicas across non-tainted pools must be at least `2` cluster-wide for HA platform operators. |


:::note

`spec.replicas` and `spec.autoScaling` are mutually exclusive.
Patch or edit the `NodePool` to remove `spec.replicas` before adding `spec.autoScaling`.

:::