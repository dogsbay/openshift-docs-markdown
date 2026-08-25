{%- set _mod_docs_content_type = "PROCEDURE" %}
# Binding a user to a node using taints and tolerations {id="nodes-scheduler-taints-tolerations-bindings_{{ context }}"}

You can use taints and tolerations to dedicate a set of nodes for exclusive use by a particular set of users.  {._abstract}

First, add a toleration to their pods. Then, add a corresponding taint to those nodes. The pods with the tolerations are allowed to use the tainted nodes or any other nodes in the cluster.

If you want ensure the pods are scheduled to only those tainted nodes, also add a label to the same set of nodes and add a node affinity to the pods so that the pods can only be scheduled onto nodes with that label.

Use the following procedure to configure a node so that users can use only that node.

**Procedure**

1.  Add a corresponding taint to those nodes:

    For example:
    ```terminal
    $ oc adm taint nodes node1 dedicated=groupName:NoSchedule
    ```

    :::tip

    You can alternatively apply the following YAML to add the taint:

    ```yaml
    kind: Node
    apiVersion: v1
    metadata:
      name: my-node
    #...
    spec:
      taints:
        - key: dedicated
          value: groupName
          effect: NoSchedule
    #...
    ```
    
    :::

1.  Add a toleration to the pods by writing a custom admission controller.