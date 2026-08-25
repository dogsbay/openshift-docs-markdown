{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting all destinations for network flows collectors {id="nw-network-flows-delete_{{ context }}"}

As a cluster administrator, you can configure the Cluster Network Operator (CNO) to stop sending network flows metadata to a network flows collector.

**Prerequisites**

*   You installed the OpenShift CLI (`oc`).
*   You are logged in to the cluster with a user with `cluster-admin` privileges.

**Procedure**

1.  Remove all network flows collectors:
    ```terminal
    $ oc patch network.operator cluster --type='json' \
        -p='[{"op":"remove", "path":"/spec/exportNetworkFlows"}]'
    ```
    ```terminal title="Example output"
    network.operator.openshift.io/cluster patched
    ```