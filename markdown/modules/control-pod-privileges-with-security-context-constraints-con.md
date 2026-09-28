{%- set _mod_docs_content_type = "CONCEPT" %}
# Control pod privileges with security context constraints {id="control-pod-privileges-with-security-context-constraints-con_{{ context }}"}

Security context constraints (SCCs) control the permissions that a pod can request, such as running as a specific user, using host namespaces, or mounting host paths. By assigning SCCs through RBAC, you can block ordinary applications from running as root while still allowing infrastructure workloads the access they genuinely need.