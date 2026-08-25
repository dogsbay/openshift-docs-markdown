{%- set _mod_docs_content_type = "CONCEPT" %}
# Control permissions with security context constraints {id="microshift-control-permissions-security-context-constraints_{{ context }}"}

You can use security context constraints (SCCs) to control permissions for the pods in your node. These permissions determine the actions that a pod can perform and what resources it can access. You can use SCCs to define a set of conditions that a pod must run with to be accepted into the system. {._abstract}

For more information, see "Managing security context constraints".


:::important

Only RWO volume mounts are supported. SCC could be blocked if pods are not operating with the SCC contexts.

:::