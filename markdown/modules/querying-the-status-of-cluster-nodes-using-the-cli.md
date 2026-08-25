{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying the status of the cluster nodes by using the CLI {id="querying-the-status-of-cluster-nodes-using-the-cli_{{ context }}"}

You can verify the status of the cluster nodes after an installation. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  List the status of the cluster nodes by entering the following command:
    ```terminal
    $ oc get nodes
    ```
1.  Verify that the output lists all of the expected control plane and compute nodes and that each node has a `Ready` status:
    ```terminal title="Example output"
    NAME                          STATUS   ROLES    AGE   VERSION
    compute-1.example.com         Ready    worker   33m   v1.35.4
    control-plane-1.example.com   Ready    master   41m   v1.35.4
    control-plane-2.example.com   Ready    master   45m   v1.35.4
    compute-2.example.com         Ready    worker   38m   v1.35.4
    compute-3.example.com         Ready    worker   33m   v1.35.4
    control-plane-3.example.com   Ready    master   41m   v1.35.4
    ```
1.  Review CPU and memory resource availability for each cluster node:
    ```terminal
    $ oc adm top nodes
    ```
    ```terminal title="Example output"
    NAME                          CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
    compute-1.example.com         128m         8%     1132Mi          16%
    control-plane-1.example.com   801m         22%    3471Mi          23%
    control-plane-2.example.com   1718m        49%    6085Mi          40%
    compute-2.example.com         935m         62%    5178Mi          75%
    compute-3.example.com         111m         7%     1131Mi          16%
    control-plane-3.example.com   942m         26%    4100Mi          27%
    ```