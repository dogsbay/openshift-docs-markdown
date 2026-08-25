{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring node pools for availability zones {id="hcp-manage-openstack-az_{{ context }}"}

To improve the high availability of your hosted cluster, you can distribute node pools across multiple {{ rh_openstack_first }} Nova availability zones. {._abstract}


:::note

Availability zones do not necessarily correspond to fault domains and do not inherently provide high availability benefits.

:::


**Prerequisites**

*   You created a hosted cluster.
*   You have access to the management cluster.
*   The `hcp` and `oc` command-line interfaces (CLIs) are installed.

**Procedure**

1.  Set environment variables that are appropriate for your needs. For example, if you want to create two additional machines in the `az1` availability zone, you could enter:
    ```terminal
    $ export NODEPOOL_NAME="${CLUSTER_NAME}-az1" \
      && export WORKER_COUNT="2" \
      && export FLAVOR="m1.xlarge" \
      && export AZ="az1"
    ```
1.  Create the node pool by using your environment variables by entering the following command:
    ```terminal
    $ hcp create nodepool openstack \
      --cluster-name <cluster_name> \
      --name $NODEPOOL_NAME \
      --replicas $WORKER_COUNT \
      --openstack-node-flavor $FLAVOR \
      --openstack-node-availability-zone $AZ
    ```
    where:


    `<cluster_name>`
    :   Specifies the name of your hosted cluster.
1.  Check the status of the node pool by listing `nodepool` resources in the clusters namespace by running the following command:
    ```terminal
    $ oc get nodepools --namespace clusters
    ```
    ```terminal title="Example output"
    NAME                      CLUSTER         DESIRED NODES   CURRENT NODES   AUTOSCALING   AUTOREPAIR   VERSION   UPDATINGVERSION   UPDATINGCONFIG   MESSAGE
    example                   example         5               5               False         False        4.17.0
    example-az1               example         2                               False         False                  True              True             Minimum availability requires 2 replicas, current 0 available
    ```
1.  Observe the notes as they start on your hosted cluster by running the following command:
    ```terminal
    $ oc --kubeconfig $CLUSTER_NAME-kubeconfig get nodes
    ```
    ```terminal title="Example output"
    NAME                      STATUS   ROLES    AGE     VERSION
    ...
    example-extra-az-zh9l5    Ready    worker   2m6s    v1.27.4+18eadca
    example-extra-az-zr8mj    Ready    worker   102s    v1.27.4+18eadca
    ...
    ```
1.  Verify that the node pool is created by running the following command:
    ```terminal
    $ oc get nodepools --namespace clusters
    ```
    ```terminal title="Example output"
    NAME              CLUSTER         DESIRED   CURRENT   AVAILABLE   PROGRESSING   MESSAGE
    <node_pool_name>  <cluster_name>  2         2         2           False         All replicas are available
    ```