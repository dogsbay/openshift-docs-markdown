{%- set _mod_docs_content_type = "PROCEDURE" %}
# Understanding Pod restart policy {id="nodes-configuring-nodes"}
{{ product_author }}
{{ product_version }}
{%- set data_uri = true -%}
{%- set icons = true -%}
{%- set experimental = true -%}
{%- set toc = "macro" -%}
{%- set toc_title = true %}

A Pod restart policy determines how {{ product_title }} responds when containers in that Pod exit.
The policy applies to all containers in that Pod.

The possible values are:

*   `Always` - Tries restarting a successfully exited container on the Pod continuously, with an exponential back-off delay (10s, 20s, 40s) until the Pod is restarted. The default is `Always`.
*   `OnFailure` - Tries restarting a failed container on the Pod with an exponential back-off delay (10s, 20s, 40s) capped at 5 minutes.
*   `Never` - Does not try to restart exited or failed containers on the Pod. Pods immediately fail and exit.

Once bound to a node, a Pod will never be bound to another node. This means that a controller is necessary in order for a Pod to survive node failure:

| Condition | Controller Type | Restart Policy |
| --- | --- | --- |
| Pods that are expected to terminate (such as batch computations) | [Job](/architecture/core_concepts/deployments#jobs) | `OnFailure` or `Never` |
| Pods that are expected to not terminate (such as web servers) | [Replication Controller](/architecture/core_concepts/deployments#replication-controllers) | `Always`. |
| Pods that must run one-per-machine | [Daemonset](/dev_guide/daemonsets#dev-guide-daemonsets) | Any |

If a container on a Pod fails and the restart policy is set to `OnFailure`, the Pod stays on the node and the container is restarted. If you do not want the container to
restart, use a restart policy of `Never`.

If an entire Pod fails, {{ product_title }} starts a new Pod. Developers must address the possibility that applications might be restarted in a new Pod. In particular,
applications must handle temporary files, locks, incomplete output, and so forth caused by previous runs.

For details on how {{ product_title }} uses restart policy with failed containers, see
the [Example States](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#example-states) in the Kubernetes documentation.