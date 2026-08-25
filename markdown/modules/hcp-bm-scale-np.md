{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling the NodePool object for a hosted cluster {id="hcp-bm-scale-np_{{ context }}"}

You can scale up the `NodePool` object by adding nodes to your hosted cluster.  {._abstract}

When you scale a node pool, consider the following information:

*   When you scale a replica by the node pool, a machine is created. For every machine, the Cluster API provider finds and installs an Agent that meets the requirements that are specified in the node pool specification. You can monitor the installation of an Agent by checking its status and conditions.
*   When you scale down a node pool, Agents are unbound from the corresponding cluster. Before you can reuse the Agents, you must restart them by using the Discovery image.

**Procedure**

1.  Scale the `NodePool` object to two nodes:
    ```terminal
    $ oc -n <hosted_cluster_namespace> scale nodepool <nodepool_name> --replicas 2
    ```

    The Cluster API agent provider randomly picks two agents that are then assigned to the hosted cluster. Those agents go through different states and finally join the hosted cluster as {{ product_title }} nodes. The agents pass through states in the following order:
    *   `binding`
    *   `discovering`
    *   `insufficient`
    *   `installing`
    *   `installing-in-progress`
    *   `added-to-existing-cluster`
1.  Enter the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get agent
    ```
    ```terminal title="Example output"
    NAME                                   CLUSTER         APPROVED   ROLE          STAGE
    4dac1ab2-7dd5-4894-a220-6a3473b67ee6   hypercluster1   true       auto-assign
    d9198891-39f4-4930-a679-65fb142b108b                   true       auto-assign
    da503cf1-a347-44f2-875c-4960ddb04091   hypercluster1   true       auto-assign
    ```
1.  Enter the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get agent \
      -o jsonpath='{range .items[*]}BMH: {@.metadata.labels.agent-install\.openshift\.io/bmh} Agent: {@.metadata.name} State: {@.status.debugInfo.state}{"\n"}{end}'
    ```
    ```terminal title="Example output"
    BMH: ocp-worker-2 Agent: 4dac1ab2-7dd5-4894-a220-6a3473b67ee6 State: binding
    BMH: ocp-worker-0 Agent: d9198891-39f4-4930-a679-65fb142b108b State: known-unbound
    BMH: ocp-worker-1 Agent: da503cf1-a347-44f2-875c-4960ddb04091 State: insufficient
    ```
1.  Obtain the kubeconfig for your new hosted cluster by entering the extract command:
    ```terminal
    $ oc extract -n <hosted_cluster_namespace> \
      secret/<hosted_cluster_name>-admin-kubeconfig --to=- \
      > kubeconfig-<hosted_cluster_name>
    ```
1.  After the agents reach the `added-to-existing-cluster` state, verify that you can see the {{ product_title }} nodes in the hosted cluster by entering the following command:
    ```terminal
    $ oc --kubeconfig kubeconfig-<hosted_cluster_name> get nodes
    ```
    ```terminal title="Example output"
    NAME           STATUS   ROLES    AGE     VERSION
    ocp-worker-1   Ready    worker   5m41s   v1.24.0+3882f8f
    ocp-worker-2   Ready    worker   6m3s    v1.24.0+3882f8f
    ```

    Cluster Operators start to reconcile by adding workloads to the nodes.
1.  Enter the following command to verify that two machines were created when you scaled up the `NodePool` object:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get machines
    ```
    ```terminal title="Example output"
    NAME                            CLUSTER               NODENAME       PROVIDERID                                     PHASE     AGE   VERSION
    hypercluster1-c96b6f675-m5vch   hypercluster1-b2qhl   ocp-worker-1   agent://da503cf1-a347-44f2-875c-4960ddb04091   Running   15m   4.x.z
    hypercluster1-c96b6f675-tl42p   hypercluster1-b2qhl   ocp-worker-2   agent://4dac1ab2-7dd5-4894-a220-6a3473b67ee6   Running   15m   4.x.z
    ```

    The `clusterversion` reconcile process eventually reaches a point where only Ingress and Console cluster Operators are missing.
1.  Enter the following command:
    ```terminal
    $ oc --kubeconfig kubeconfig-<hosted_cluster_name> get clusterversion,co
    ```
    ```terminal title="Example output"
    NAME                                         VERSION   AVAILABLE   PROGRESSING   SINCE   STATUS
    clusterversion.config.openshift.io/version             False       True          40m     Unable to apply 4.x.z: the cluster operator console has not yet successfully rolled out

    NAME                                                                             VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
    clusteroperator.config.openshift.io/console                                      4.12z     False       False         False      11m     RouteHealthAvailable: failed to GET route (https://console-openshift-console.apps.hypercluster1.domain.com): Get "https://console-openshift-console.apps.hypercluster1.domain.com": dial tcp 10.19.3.29:443: connect: connection refused
    clusteroperator.config.openshift.io/csi-snapshot-controller                      4.12z     True        False         False      10m
    clusteroperator.config.openshift.io/dns                                          4.12z     True        False         False      9m16s
    ```