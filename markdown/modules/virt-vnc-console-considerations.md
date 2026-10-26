{%- set _mod_docs_content_type = "CONCEPT" %}
# VNC console access requirements and limits {id="virt-vnc-console-considerations_{{ context }}"}

Use a VNC connection to troubleshoot a virtual machine (VM) that has lost network connectivity. You can reach the VNC console from the {{ product_title }} web console or with the `virtctl` command-line tool, but only one connection to a VM is possible at a time. {._abstract}

Take into account the following considerations:

*   Using the VNC console is recommended for troubleshooting VMs.
*   Using the VNC console is not recommended for high-traffic applications, such as Virtual Desktop Infrastructure (VDI), because of the burden on the API server.
*   The API server must be able to handle the traffic load.
*   The clients must be able to access the API server.
*   The clients must have access credentials for the cluster.
*   The VNC connection is expected to disconnect during live migration of a VM to another node.
*   Using the VNC console allows only a single connection per VM at a time.