{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting the managed cluster {id="ztp-troubleshooting-the-managed-cluster_{{ context }}"}

Use this procedure to diagnose any installation issues that might occur with the managed cluster. {._abstract}

**Procedure**

1.  Check the status of the managed cluster:
    ```terminal
    $ oc get managedcluster
    ```
    ```terminal title="Example output"
    NAME            HUB ACCEPTED   MANAGED CLUSTER URLS   JOINED   AVAILABLE   AGE
    SNO-cluster     true                                   True     True      2d19h
    ```

    If the status in the `AVAILABLE` column is `True`, the managed cluster is being managed by the hub.

    If the status in the `AVAILABLE` column is `Unknown`, the managed cluster is not being managed by the hub.
    Use the following steps to continue checking to get more information.
1.  Check the `AgentClusterInstall` install status:
    ```terminal
    $ oc get clusterdeployment -n <cluster_name>
    ```
    ```terminal title="Example output"
    NAME        PLATFORM            REGION   CLUSTERTYPE   INSTALLED    INFRAID    VERSION  POWERSTATE AGE
    Sno0026    agent-baremetal                               false                          Initialized
    2d14h
    ```

    If the status in the `INSTALLED` column is `false`, the installation was unsuccessful.
1.  If the installation failed, enter the following command to review the status of the `AgentClusterInstall` resource:
    ```terminal
    $ oc describe agentclusterinstall -n <cluster_name> <cluster_name>
    ```
1.  Resolve the errors and reset the cluster:
    1.  Remove the cluster’s managed cluster resource:
        ```terminal
        $ oc delete managedcluster <cluster_name>
        ```
    1.  Remove the cluster’s namespace:
        ```terminal
        $ oc delete namespace <cluster_name>
        ```

        This deletes all of the namespace-scoped custom resources created for this cluster. You must wait for the `ManagedCluster` CR deletion to complete before proceeding.
    1.  Recreate the custom resources for the managed cluster.