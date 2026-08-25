{%- set _mod_docs_content_type = "CONCEPT" %}
# About network traffic through the firewall {id="microshift-firewall-about_{{ context }}"}

Firewalld is a networking service that runs in the background and responds to connection requests, creating a dynamic customizable host-based firewall. If you are using {{ op_system_ostree_first }} with {{ microshift_short }}, firewalld should be installed and you only need to configure it.  {._abstract}

Details are provided in procedures that follow. Overall, you must explicitly allow the following OVN-Kubernetes traffic when the `firewalld` service is running.


CNI pod to CNI pod
:   CNI pod to Host-Network pod
    Host-Network pod to Host-Network pod


CNI pod
:   The Kubernetes pod that uses the CNI network


Host-Network pod
:   The Kubernetes pod that uses host network
    You can configure the `firewalld` service by using the following procedures. In most cases, firewalld is part of {{ op_system_ostree }} installations. If you do not have firewalld, you can install it with the simple procedure in this section.


:::important

{{ microshift_short }} pods must have access to the internal CoreDNS component and API servers.

:::