{%- set _mod_docs_content_type = "CONCEPT" %}
# Replacing an unhealthy etcd member {id="replace-unhealthy-etcd-member-intro_{{ context }}"}

To restore etcd quorum when a single member is unhealthy, identify the member and determine whether its machine is stopped, its node is not ready, or its pod is crashlooping. You can then follow the replacement procedure that matches that state. {._abstract}


:::note

If you have lost the majority of your control plane hosts, follow the steps in "Restoring to an earlier cluster state" instead of this procedure.

If the control plane certificates are not valid on the member being replaced, then you must follow the steps in "Recovering from expired control plane certificates" instead of this procedure.

If a control plane node is lost and a new one is created, the etcd cluster Operator handles generating the new TLS certificates and adding the node as an etcd member.

:::