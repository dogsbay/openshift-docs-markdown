{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing worker nodes stuck in NotReady state {id="core-cluster-upgrade-ts-nodes-notready_{{ context }}"}

If worker nodes show `NotReady` status during an update, common causes include disk pressure, memory pressure, network connectivity issues, and PID pressure. {._abstract}

**Prerequisites**

*   You have worker nodes showing `NotReady` status during a cluster update.
*   You have access to the target cluster with cluster-admin privileges.

**Procedure**

1.  Identify `NotReady` nodes by running the following command:
    ```terminal
    $ oc get nodes | grep NotReady
    ```
1.  Check node conditions by running the following command:
    ```terminal
    $ oc describe node <node_name> | grep -A 10 Conditions
    ```
1.  Check kubelet logs by running the following command:
    ```terminal
    $ oc debug node/<node_name> -- chroot /host journalctl -u kubelet -n 100
    ```