{%- set _mod_docs_content_type = "PROCEDURE" %}
# Powering off bare-metal hosts by using the CLI {id="powering-off-bare-metal-hosts-cli_{{ context }}"}

You can power off bare-metal cluster hosts by applying a patch in the cluster by using the {{ oc_first }}. Before you power off a host, mark the node as unschedulable and drain all pods and workloads from the node. {._abstract}

**Prerequisites**

*   You have installed a {{ op_system }} compute machine on bare-metal infrastructure for use in the cluster.
*   You have logged in as a user with `cluster-admin` privileges.
*   You have configured the host to be managed and have added Baseboard Management Console credentials for the cluster host. You can add BMC credentials by applying a `Secret` custom resource (CR) in the cluster or by logging in to the web console and configuring the bare-metal host to be managed.

**Procedure**

1.  Get the name of the managed bare-metal host by entering the following command:
    ```terminal
    $ oc get baremetalhosts -n openshift-machine-api -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.status.provisioning.state}{"\n"}{end}'
    ```
    ```terminal title="Example output"
    master-0.example.com  managed
    master-1.example.com  managed
    master-2.example.com  managed
    worker-0.example.com  managed
    worker-1.example.com  managed
    worker-2.example.com  managed
    ```
1.  Mark the node as unschedulable by entering the following command:
    ```terminal
    $ oc adm cordon <bare_metal_host>
    ```
    *   `<bare_metal_host>`: Specifies the name of the host that you want to shut down. For example, `worker-2.example.com`.
1.  Drain all pods on the node by entering the following command:
    ```terminal
    $ oc adm drain <bare_metal_host> --force=true
    ```

    Pods that are backed by replication controllers are rescheduled to other available nodes in the cluster.
1.  Safely power off the bare-metal host by entering the following command:
    ```terminal
    $ oc patch <bare_metal_host> --type json -p '[{"op": "replace", "path": "/spec/online", "value": false}]'
    ```
1.  After you power on the host, make the node schedulable for workloads by entering the following command:
    ```terminal
    $ oc adm uncordon <bare_metal_host>
    ```