{%- set _mod_docs_content_type = "PROCEDURE" %}
# Controlling nodes with special hardware using taints and tolerations {id="nodes-scheduler-taints-tolerations-special_{{ context }}"}

In a cluster that has specialized hardware, you can use taints and tolerations to either keep pods that do not need the specialized hardware off of those nodes or require pods that need specialized hardware to use specific nodes. {._abstract}

You can achieve this by adding a toleration to pods that need the special hardware and tainting the nodes that have the specialized hardware.

Use the following procedure to ensure nodes with specialized hardware are reserved for specific pods. 

**Procedure**

1.  Add a toleration to pods that need the special hardware.

    For example:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    #...
    spec:
      tolerations:
        - key: "disktype"
          value: "ssd"
          operator: "Equal"
          effect: "NoSchedule"
          tolerationSeconds: 3600
    #...
    ```
1.  Taint the nodes that have the specialized hardware using one of the following commands:
    ```terminal
    $ oc adm taint nodes <node-name> disktype=ssd:NoSchedule
    ```

    Or:
    ```terminal
    $ oc adm taint nodes <node-name> disktype=ssd:PreferNoSchedule
    ```

    :::tip

    You can alternatively apply the following YAML to add the taint:

    ```yaml
    kind: Node
    apiVersion: v1
    metadata:
      name: my_node
    #...
    spec:
      taints:
        - key: disktype
          value: ssd
          effect: PreferNoSchedule
    #...
    ```
    
    :::