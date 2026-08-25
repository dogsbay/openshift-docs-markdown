{%- set _mod_docs_content_type = "CONCEPT" %}
# Ephemeral storage management overview {id="storage-ephemeral-storage-manage-overview_{{ context }}"}

Cluster administrators can manage ephemeral storage within a project by setting quotas that define limit ranges and request counts for all pods in a non-terminal state. Developers can also set requests and limits on this resource at the pod and container level. {._abstract}

You can manage local ephemeral storage by specifying requests and limits. Each container in a pod can specify the following:

*   `spec.containers[].resources.limits.ephemeral-storage`
*   `spec.containers[].resources.requests.ephemeral-storage`