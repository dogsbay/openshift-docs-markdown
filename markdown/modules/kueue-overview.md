{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ kueue_name }} overview {id="kueue-overview_{{ context }}"}

You can use {{ kueue_name }} to manage when jobs in your Kubernetes cluster start, get preempted, or wait for resources. {{ kueue_name }} optimizes resource utilization by enforcing quotas and scheduling policies across your workloads. {._abstract}

{{ kueue_name }} can determine when a job waits, is admitted to start by creating pods, or should be _preempted_, meaning that active pods for that job are deleted.


:::note

In the context of {{ kueue_name }}, a job can be defined as a one-time or on-demand task that runs to completion.

:::


{{ kueue_name }} is based on the Kueue open source project.

{{ kueue_name }} is compatible with environments that use heterogeneous, elastic resources, where many different resource types exist and those resources are capable of dynamic scaling.

{{ kueue_name }} does not replace any existing components in a Kubernetes cluster, but instead integrates with the existing Kubernetes API server, scheduler, and cluster autoscaler components.

{{ kueue_name }} supports all-or-nothing semantics, where either an entire job with all of its components is admitted to the cluster, or the entire job is rejected if it does not fit on the cluster.