{%- set _mod_docs_content_type = "PROCEDURE" %}
# Maintaining bare metal hosts {id="maintaining-bare-metal-hosts_{{ context }}"}

You can maintain the details of the bare metal hosts in your cluster from the {{ product_title }} web console. {._abstract}

**Procedure**

1.  From the web console, comlete the following steps:
    1.  Navigate to **Compute** → **Bare Metal Hosts**.
    1.  Select a task from the **Actions** drop-down menu. 
    1.  Manage items such as baseboard management controller (BMC) details, boot MAC address for the host, enable power management, and so on. You can also review the details of the network interfaces and drives for the host.
1.  Move a bare-metal host into maintenance mode. When you move a host into maintenance mode, the scheduler moves all managed workloads off the corresponding bare-metal node. No new workloads are scheduled while in maintenance mode.
1.  Deprovision a bare-metal host in the web console. Deprovisioning a host does the following actions:
    1.  Annotates the bare-metal host CR with `cluster.k8s.io/delete-machine: true`.
    1.  Scales down the related compute machine set.

        :::note

        Powering off the host without first moving the daemon set and unmanaged static pods to another node can cause service disruption and loss of data.
        
        :::