{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the cluster platform for update {id="update-preparing-the-cluster-platform_{{ context }}"}

Before you update the cluster, perform basic checks and verifications to ensure that the cluster is ready for the update. {._abstract}

**Procedure**

1.  Verify that there are no failed or in progress pods in the cluster by running the following command:
    ```terminal
    $ oc get pods -A | grep -E -vi 'complete|running'
    ```

    :::note

    You might have to run this command more than once if there are pods that are in a pending state.
    
    :::

1.  Verify that all nodes in the cluster are available:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME           STATUS   ROLES                  AGE   VERSION
    ctrl-plane-0   Ready    control-plane,master   32d   v1.27.15+6147456
    ctrl-plane-1   Ready    control-plane,master   32d   v1.27.15+6147456
    ctrl-plane-2   Ready    control-plane,master   32d   v1.27.15+6147456
    worker-0       Ready    mcp-1,worker           32d   v1.27.15+6147456
    worker-1       Ready    mcp-2,worker           32d   v1.27.15+6147456
    ```
1.  Verify that all bare-metal nodes are provisioned and ready.
    ```terminal
    $ oc get bmh -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME           STATE         CONSUMER                   ONLINE   ERROR   AGE
    ctrl-plane-0   unmanaged     cnf-58879-master-0         true             33d
    ctrl-plane-1   unmanaged     cnf-58879-master-1         true             33d
    ctrl-plane-2   unmanaged     cnf-58879-master-2         true             33d
    worker-0       unmanaged     cnf-58879-worker-0-45879   true             33d
    worker-1       progressing   cnf-58879-worker-0-dszsh   false            1d
    ```

    An error occurred while provisioning the `worker-1` node.

**Verification**

*   Verify that all cluster Operators are ready:
    ```terminal
    $ oc get co
    ```
    ```terminal title="Example output"
    NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
    authentication                             4.14.34   True        False         False      17h
    baremetal                                  4.14.34   True        False         False      32d

    ...

    service-ca                                 4.14.34   True        False         False      32d
    storage                                    4.14.34   True        False         False      32d
    ```