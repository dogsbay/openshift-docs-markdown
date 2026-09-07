{%- set _mod_docs_content_type = "CONCEPT" %}
# Get your node ID {id="microshift-get-node-id_{{ context }}"}

The {{ microshift_short }} node ID uniquely identifies your node within the cluster and is used in support cases, licensing, and cluster registration scenarios. You can retrieve the node ID from the `kube-system` namespace either while {{ microshift_short }} is running or from a stopped node by reading the stored namespace data.