{%- set _mod_docs_content_type = "CONCEPT" %}
# Serial console access requirements and limits {id="virt-serial-console-considerations_{{ context }}"}

Use a serial connection to troubleshoot a virtual machine (VM) that has lost network connectivity. You can reach the serial console from the {{ product_title }} web console or with the `virtctl` command-line tool, but only one connection to a VM is possible at a time. {._abstract}

Take into account the following considerations:

*   The clients must be able to access the API server.
*   The clients must have access credentials for the cluster.
*   The API server must be able to handle the traffic load.
*   The serial connection is expected to disconnect during live migration of a VM to another node.
*   Using the serial console allows only a single connection per VM at a time.