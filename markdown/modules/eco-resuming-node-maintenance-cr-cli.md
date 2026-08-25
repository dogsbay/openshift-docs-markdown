{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resuming a node from maintenance mode by using the CLI {id="eco-resuming-node-from-maintenance-mode-with-cr_{{ context }}"}

You can resume a node from maintenance mode that was initiated with a `NodeMaintenance` CR by deleting the `NodeMaintenance` CR.

**Prerequisites**

*   Install the {{ product_title }} CLI `oc`.
*   Log in to the cluster as a user with `cluster-admin` privileges.

**Procedure**

*   When your node maintenance task is complete, delete the active `NodeMaintenance` CR:
    ```terminal
    $ oc delete -f nodemaintenance-cr.yaml
    ```
    ```terminal title="Example output"
    nodemaintenance.nodemaintenance.medik8s.io "maintenance-example" deleted
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
      Type     Reason                  Age                   From     Message
      ----     ------                  ----                  ----     -------
      Normal   NodeSchedulable         2m                    kubelet  Node node-1.example.com status is now: NodeSchedulable
    ```