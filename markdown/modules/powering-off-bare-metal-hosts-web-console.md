{%- set _mod_docs_content_type = "PROCEDURE" %}
# Powering off bare-metal hosts by using the web console {id="powering-off-bare-metal-hosts-web-console_{{ context }}"}

You can power off bare-metal cluster hosts in the web console. Before you power off a host, mark the node as unschedulable and drain all pods and workloads from the node. {._abstract}

**Prerequisites**

*   You have installed a {{ op_system }} compute machine on bare-metal infrastructure for use in the cluster.
*   You have logged in as a user with `cluster-admin` privileges.
*   You have configured the host to be managed and have added Baseboard Management Console credentials for the cluster host. You can add BMC credentials by applying a `Secret` custom resource (CR) in the cluster or by logging in to the web console and configuring the bare-metal host to be managed.

**Procedure**

1.  Navigate to **Nodes** and select the node that you want to power off. Expand the **Actions** menu and select **Mark as unschedulable**.
1.  Manually delete or relocate running pods on the node by adjusting the pod deployments or scaling down workloads on the node to zero. Wait for the drain process to complete.
1.  Navigate to **Compute** -> **Bare Metal Hosts**.
1.  Expand the **Options menu** for the bare-metal host that you want to power off, and select **Power Off**.
1.  Select **Immediate power off**.