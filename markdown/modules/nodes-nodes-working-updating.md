{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding how to update labels on nodes {id="nodes-nodes-working-updating_{{ context }}"}

You can update any label on a node in order to adapt your cluster to evolving needs. {._abstract}

Node labels are not persisted after a node is deleted even if the node is backed up by a Machine.


:::note

Any change to a `MachineSet` object is not applied to existing machines owned by the compute machine set.
For example, labels edited or added to an existing `MachineSet` object are not propagated to existing machines and nodes
associated with the compute machine set.

:::


*   The following command adds or updates labels on a node:
    ```terminal
    $ oc label node <node> <key_1>=<value_1> ... <key_n>=<value_n>
    ```

    For example:
    ```terminal
    $ oc label nodes webconsole-7f7f6 unhealthy=true
    ```

    :::tip

    You can alternatively apply the following YAML to apply the label:

    ```yaml
    kind: Node
    apiVersion: v1
    metadata:
      name: webconsole-7f7f6
      labels:
        unhealthy: 'true'
    #...
    ```
    
    :::

*   The following command updates all pods in the namespace:
    ```terminal
    $ oc label pods --all <key_1>=<value_1>
    ```

    For example:
    ```terminal
    $ oc label pods --all status=unhealthy
    ```


:::important

In {{ product_title }} 4.12 and later, newly installed clusters include both the `node-role.kubernetes.io/control-plane` and `node-role.kubernetes.io/master` labels on control plane nodes by default.

In {{ product_title }} versions earlier than 4.12, the `node-role.kubernetes.io/control-plane` label is not added by default. Therefore, you must manually add the `node-role.kubernetes.io/control-plane` label to control plane nodes in clusters upgraded from earlier versions.

:::