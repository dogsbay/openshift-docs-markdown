{%- set _mod_docs_content_type = "REFERENCE" %}
# Options for connecting to VMs {id="virt-access-configuration-considerations_{{ context }}"}

Your goal determines the best way to connect to a virtual machine (VM), whether troubleshooting, automating configuration with Ansible, or providing access to clients outside the cluster. {._abstract}


:::note

Services provide excellent performance and are recommended for applications that are accessed from outside the cluster.

:::


If the internal cluster network cannot handle the traffic load, you can configure a secondary network.


`virtctl ssh` and `virtctl port-forwarding` commands
:   *   Simple to configure.
    *   Recommended for troubleshooting VMs.
    *   `virtctl port-forwarding` recommended for automated configuration of VMs with Ansible.
    *   Dynamic public SSH keys can be used to provision VMs with Ansible.
    *   Not recommended for high-traffic applications such as Rsync or Remote Desktop Protocol because of the burden on the API server.
    *   The API server must be able to handle the traffic load.
    *   The clients must be able to access the API server.
    *   The clients must have access credentials for the cluster.

Cluster IP service
:   *   The internal cluster network must be able to handle the traffic load.
    *   The clients must be able to access an internal cluster IP address.

Node port service
:   *   The internal cluster network must be able to handle the traffic load.
    *   The clients must be able to access at least one node.

Load balancer service
:   *   A load balancer must be configured.
    *   Each node must be able to handle the traffic load of one or more load balancer services.

Secondary network
:   *   Excellent performance because traffic does not go through the internal cluster network.
    *   Allows a flexible approach to network topology.
    *   Guest operating system must be configured with appropriate security because the VM is exposed directly to the secondary network. If a VM is compromised, an intruder could gain access to the secondary network.