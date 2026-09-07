{%- set _mod_docs_content_type = "CONCEPT" %}
# Restrict external access to NodePort services on {{ microshift_short }} {id="microshift-restrict-nodeport-access_{{ context }}"}

By default, OVN-Kubernetes does not restrict the host interface where a `NodePort` service can be accessed. Restrict external access to a `NodePort` service on a specific host interface to block unauthorized traffic and control which networks can reach your {{ microshift_short }} workloads.