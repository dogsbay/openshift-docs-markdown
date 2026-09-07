{%- set _mod_docs_content_type = "CONCEPT" %}
# Install and configure the oc CLI {id="microshift-install-and-configure-oc-cli_{{ context }}"}

The `oc` CLI tool is the primary command-line interface for interacting with {{ microshift_short }}. You can install `oc` on Linux, Windows, and macOS, or install it from an RPM package on {{ op_system_base }}. After installation, you configure access by using a kubeconfig file to connect to the {{ microshift_short }} API server, either locally on the node or remotely from another host.