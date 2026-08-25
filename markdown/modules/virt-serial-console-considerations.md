{%- set _mod_docs_content_type = "CONCEPT" %}
# Considerations for accessing the serial console {id="virt-serial-console-considerations_{{ context }}"}

You can connect to the serial console of a virtual machine (VM) by using the {{ product_title }} web console or the `virtctl` command-line tool. {._abstract}

Take into account the following considerations:

*   The clients must be able to access the API server.
*   The clients must have access credentials for the cluster.
*   The API server must be able to handle the traffic load.
*   The serial connection is expected to disconnect during live migration of a VM to another node.
*   Using the serial console allows only a single connection per VM at a time.