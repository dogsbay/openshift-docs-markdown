{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitor managed cluster installation progress {id="ztp-monitoring-deployment-progress_{{ context }}"}

You can monitor managed cluster installation progress from the {{ rh_rhacm }} dashboard or from the command line after the Argo CD pipeline syncs the `ClusterInstance` CR to the hub cluster. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  Monitor the progress of cluster installation by running the following commands:
    1.  Export the cluster name:
        ```terminal
        $ export CLUSTER=<clusterName>
        ```
    1.  Query the `AgentClusterInstall` CR for the managed cluster:
        ```terminal
        $ oc get agentclusterinstall -n $CLUSTER $CLUSTER -o jsonpath='{.status.conditions[?(@.type=="Completed")]}' | jq
        ```
    1.  Get the installation events for the cluster:
        ```terminal
        $ curl -sk $(oc get agentclusterinstall -n $CLUSTER $CLUSTER -o jsonpath='{.status.debugInfo.eventsURL}')  | jq '.[-2,-1]'
        ```