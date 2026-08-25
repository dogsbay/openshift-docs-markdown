{%- set _mod_docs_content_type = "CONCEPT" %}
# Scheduled workloads on clusters with multi-architecture compute machines {id="multi-architecture-scheduling_{{ context }}"}

When you deploy workloads on a cluster with compute nodes that use different architectures, you must align pod architecture with the architecture of the underlying node. Your workload might also require additional configuration to particular resources depending on the underlying node architecture. {._abstract}

You can use the Multiarch Tuning Operator to enable architecture-aware scheduling of workloads on clusters with multi-architecture compute machines. The Multiarch Tuning Operator implements additional scheduler predicates in the pod specifications based on the architectures that the pods can support at creation time.

{% if not openshift_enterprise %}
For information about the Multiarch Tuning Operator, see "Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator".
{% endif %}