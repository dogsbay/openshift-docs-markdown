---
title: Configuring quotas
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring quotas {id="configuring-quotas"}
{%- set context = "configuring-quotas" %}

As an administrator, you can use {{ kueue_name }} to configure quotas to optimize resource allocation and system throughput for user workloads.
You can configure quotas for compute resources such as CPU, memory, pods, and GPU.

You can configure quotas in {{ kueue_name }} by completing the following steps:

1.  Configure a cluster queue.
1.  Configure a resource flavor.
1.  Configure a local queue.

Users can then submit their workloads to the local queue.

{% leveloffset +1 %}{% include "./modules/kueue-configuring-clusterqueues.md" %}{% endleveloffset %}

<a name="clusterqueues-next-steps_{{ context }}"></a>**Next steps**

The cluster queue is not ready for use until a [`ResourceFlavor` object](/ai_workloads/kueue/configuring-quotas#configuring-resourceflavors_configuring-quotas) has also been configured.

{% leveloffset +1 %}{% include "./modules/kueue-configuring-resourceflavors.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configuring-localqueues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configuring-localqueue-defaults.md" %}{% endleveloffset %}

## Additional resources {id="clusterqueues-additional-resources_{{ context }}"}
*   [RBAC permissions](/ai_workloads/kueue/rbac-permissions#rbac-permissions)
*   [Kubernetes documentation about cluster queues](https://kueue.sigs.k8s.io/docs/concepts/cluster_queue/)