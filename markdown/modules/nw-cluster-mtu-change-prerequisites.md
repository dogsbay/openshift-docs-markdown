{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites for changing the cluster network MTU {id="nw-cluster-mtu-change-prerequisites_{{ context }}"}

Before you change the cluster network maximum transmission unit (MTU), verify that you have the required access, tools, and network infrastructure to support the new MTU value. {._abstract}

Ensure that the following conditions are met before you begin:

*   You have installed the {{ oc_first }}.
*   You have access to the cluster using an account with `cluster-admin` permissions.
*   You have identified the target MTU for your cluster. The MTU for the OVN-Kubernetes network plugin must be set to `100` less than the lowest hardware MTU value in your cluster.
*   If your nodes are physical machines, ensure that the cluster network and the connected network switches support jumbo frames.
*   If your nodes are virtual machines (VMs), ensure that the hypervisor and the connected network switches support jumbo frames.