{%- set _mod_docs_content_type = "REFERENCE" %}
# IP forward {id="microshift-ip-forward_{{ context }}"}

You must use `ip_forward` to access network connectivity. {._abstract}

The host network `sysctl net.ipv4.ip_forward` kernel parameter is automatically enabled by the `ovnkube-master` container when started. This is required to forward incoming traffic to the CNI. For example, accessing the NodePort service from outside of a node fails if `ip_forward` is disabled.