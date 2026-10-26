{%- set _mod_docs_content_type = "CONCEPT" %}
# CPU quota annotation for pods {id="cnf-disabling-cpu-cfs-quota_{{ context }}"}

On {{ product_title }}, you do not need the `cpu-quota.crio.io` annotation to disable the CPU completely fair scheduler (CFS) quota for pods. {._abstract}

Starting in {{ product_title }} 4.20, the kubelet automatically disables the CPU CFS quota (which prevents CPU throttling) for pods that meet all of the following:

*   The pod has a `Guaranteed` quality of service (`QoS`) class.
*   The pod requests whole CPUs.
*   The CPU manager static policy is enabled, for example by a performance profile.

If your workloads already include the `cpu-quota.crio.io: "disable"` annotation, you can leave it in place.
The annotation has no effect because the kubelet provides this functionality automatically.