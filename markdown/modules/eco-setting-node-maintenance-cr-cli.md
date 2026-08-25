{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a node to maintenance mode by using the CLI {id="eco-setting-node-maintenance-cr-cli_{{ context }}"}

You can put a node into maintenance mode with a `NodeMaintenance` custom resource (CR). When you apply a `NodeMaintenance` CR, all allowed pods are evicted and the node is rendered unschedulable. Evicted pods are queued to be moved to another node in the cluster.

**Prerequisites**

*   Install the {{ product_title }} CLI `oc`.
*   Log in to the cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  Create the following `NodeMaintenance` CR, and save the file as `nodemaintenance-cr.yaml`:
    ```yaml
    apiVersion: nodemaintenance.medik8s.io/v1beta1
    kind: NodeMaintenance
    metadata:
      name: nodemaintenance-cr  (1)
    spec:
      nodeName: node-1.example.com (2)
      reason: "NIC replacement" (3)
    ```
    1.  The name of the node maintenance CR.
    1.  The name of the node to be put into maintenance mode.
    1.  A plain text description of the reason for maintenance.
1.  Apply the node maintenance CR by running the following command:
    ```terminal
    $ oc apply -f nodemaintenance-cr.yaml
    ```

**Verification**

1.  Check the progress of the maintenance task by running the following command:
    ```terminal
    $ oc describe node <node-name>
    ```

    where `<node-name>` is the name of your node; for example, `node-1.example.com`
1.  Check the example output:
    ```terminal
    Events:
      Type     Reason                     Age                   From     Message
      ----     ------                     ----                  ----     -------
      Normal   NodeNotSchedulable         61m                   kubelet  Node node-1.example.com status is now: NodeNotSchedulable
    ```