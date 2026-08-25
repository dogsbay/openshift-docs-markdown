{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing taints and tolerations {id="nodes-scheduler-taints-tolerations-removing_{{ context }}"}

You can remove taints from nodes and tolerations from pods as needed if you no longer want the scheduling behavior.  {._abstract}

You should add the toleration to the pod first, then add the taint to the node to avoid pods being removed from the node before you can add the toleration.

Use the following procedure to remove taints and tolerations.

**Procedure**

1.  To remove a taint from a node:
    ```terminal
    $ oc adm taint nodes <node-name> <key>-
    ```

    For example:
    ```terminal
    $ oc adm taint nodes ip-10-0-132-248.ec2.internal key1-
    ```
    ```terminal title="Example output"
    node/ip-10-0-132-248.ec2.internal untainted
    ```
1.  To remove a toleration from a pod, edit the `Pod` spec to remove the toleration:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    #...
    spec:
      tolerations:
      - key: "key2"
        operator: "Exists"
        effect: "NoExecute"
        tolerationSeconds: 3600
    #...
    ```