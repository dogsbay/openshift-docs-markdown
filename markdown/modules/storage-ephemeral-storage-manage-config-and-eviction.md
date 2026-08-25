{%- set _mod_docs_content_type = "CONCEPT" -%}
{% if not microshift %}
# Ephemeral storage management configuration affects pod scheduling and eviction {id="storage-ephemeral-storage-manage-config-and-eviction_{{ context }}"}

Configure ephemeral storage requests and limits in the pod spec to control how the scheduler places pods on nodes and when kubelet evicts pods that exceed their allocated storage. {._abstract}

*   First, the scheduler ensures that the sum of the resource requests of the scheduled containers is less than the capacity of the node. In this case, the pod can be assigned to a node only if the node’s available ephemeral storage (allocatable resource) is more than 4GiB.
*   Second, at the container level, because the first container sets a resource limit, kubelet eviction manager measures the disk usage of this container and evicts the pod if the storage usage of the container exceeds its limit (4GiB). The kubelet eviction manager also marks the pod for eviction if the total usage exceeds the overall pod storage limit (8GiB).
{% endif %}

{% if microshift %}
## Ephemeral storage configuration effects pod eviction {id="storage-ephemeral-storage-eviction_{{ context }}"}
At the container level, because the first container sets a resource limit, kubelet eviction manager measures the disk usage of this container and evicts the pod if the storage usage of the container exceeds its limit (4GiB). The kubelet eviction manager also marks the pod for eviction if the total usage exceeds the overall pod storage limit (8GiB).


:::note

This policy is strictly for `emptyDir` volumes and is not applied to persistent storage. You can specify the `priorityClass` of pods to exempt the pod from eviction.

:::

{% endif %}