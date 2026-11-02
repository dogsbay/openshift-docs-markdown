{%- set _mod_docs_content_type = "REFERENCE" %}
# Gang scheduling admission, timeout, and requeue fields {id="kueue-gang-scheduling-timeout-requeue-fields_{{ context }}"}

The `spec.config.gangScheduling.byWorkload` fields in {{ kueue_name }} configure admission, readiness timeouts, and requeue behavior. {._abstract}

Set the `admission` field when you use the `ByWorkload` policy. The `admission` field accepts the following values:

**`spec.config.gangScheduling.byWorkload.admission` values**

| Value | Behavior |
| --- | --- |
| `Parallel` | Admits workloads without waiting for pods in admitted workloads to reach a ready state. Quota and other admission requirements still apply. Workloads can compete for cluster capacity and cause a deadlock. |
| `Sequential` | Waits for pods in admitted workloads to reach a ready state before admitting more workloads across any cluster queue. Sequential admission reduces competition for resources while pods start. It can delay workloads even when the cluster has capacity to run them. |
| Empty string (`""`) | Uses `Parallel`, the default value. |

The `byWorkload` field supports the following timeout fields:

**`spec.config.gangScheduling.byWorkload` fields**

| Field | Description | Valid values | If omitted |
| --- | --- | --- | --- |
| `timeoutSeconds` | Sets the start timeout for an admitted workload to reach the `PodsReady=True` condition. Allow enough time for image pulls, initialization, and resource provisioning. | `30`–`86400` seconds | Uses `1800` seconds (30 minutes). |
| `recoveryTimeoutSeconds` | Sets the recovery timeout for a workload to return to the `PodsReady=True` condition after one or more pods lose readiness. A value of `0` disables recovery timeout checks. The start timeout still applies. | `0`–`86400` seconds | Uses the value of `timeoutSeconds`. |

The `requeuingStrategy` field supports the following fields. If you include `requeuingStrategy`, specify at least one field. An empty `requeuingStrategy: {}` value is invalid.

**`spec.config.gangScheduling.byWorkload.requeuingStrategy` fields**

| Field | Description | Valid values | If omitted |
| --- | --- | --- | --- |
| `timeReference` | Selects which timestamp {{ kueue_name }} uses to order a workload in the queue after a readiness timeout. | `Eviction` uses the eviction time. `Creation` uses the workload creation time. | Uses `Eviction`. |
| `retryLimit` | Limits repeated admission attempts after readiness timeouts. After a workload uses all retries, the next timeout deactivates the workload. The `spec.active` field of the `Workload` object changes to `false`. | `1`–`200` | Sets no retry limit. |
| `backoffBaseSeconds` | Sets the base delay before a workload can be admitted again. The delay increases exponentially with the retry count. | `30`–`3600` seconds | Uses `60` seconds. |
| `backoffMaxSeconds` | Sets the maximum delay before a workload can be admitted again. If you set both delay fields, `backoffBaseSeconds` must not exceed `backoffMaxSeconds`. | `30`–`7200` seconds | Uses `3600` seconds. |

After the configured delay, the workload must still meet quota and other admission requirements before {{ kueue_name }} can admit it again.