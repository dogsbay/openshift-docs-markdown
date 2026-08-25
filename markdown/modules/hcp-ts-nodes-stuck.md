{%- set _mod_docs_content_type = "PROCEDURE" %}
# Identifying why compute nodes are not ready {id="hcp-ts-nodes-stuck_{{ context }}"}

During cluster creation, nodes enter the `NotReady` state temporarily while the networking stack is rolled out. This part of the process is normal. However, if this part of the process takes longer than 15 minutes, identify the problem by investigating the node object and pods. {._abstract}

**Procedure**

1.  Enter the following command to view the conditions on the node object and determine why the node is not ready:
    ```terminal
    $ oc get nodes -o yaml
    ```
1.  Enter the following command to look for failing pods within the cluster:
    ```terminal
    $ oc get pods -A --field-selector=status.phase!=Running,status,phase!=Succeeded
    ```