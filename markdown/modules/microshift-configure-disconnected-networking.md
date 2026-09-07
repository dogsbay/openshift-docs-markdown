{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure networking for a fully disconnected host {id="microshift-configure-disconnected-networking_{{ context }}"}

When {{ microshift_short }} runs on a host with no external network connectivity, you must configure networking so that the node can resolve container image references and reach cluster-internal services. This includes configuring the OVN-Kubernetes network plugin for disconnected operation and, if needed, reverting network configuration changes.