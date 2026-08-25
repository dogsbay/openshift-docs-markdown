{%- set _mod_docs_content_type = "CONCEPT" %}
# Pod security admission and security context constraints {id="security-context-constraints-psa-coexistence_{{ context }}"}

Pod security admission and security context constraints operate as two independent mechanisms in {{ product_title }}. You must ensure your workloads comply with both to avoid unexpected pod rejections. {._abstract}

The two controllers independently enforce security policies by using the following processes:

1.  The security context constraint controller may mutate some security context fields per the pod’s assigned SCC. For example, if the seccomp profile is empty or not set and if the pod’s assigned SCC enforces `seccompProfiles` field to be `runtime/default`, the controller sets the default type to `RuntimeDefault`.
1.  The security context constraint controller validates the pod’s security context against the matching SCC.
1.  The pod security admission controller validates the pod’s security context against the pod security standard assigned to the namespace.