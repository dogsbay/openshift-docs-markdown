{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring managed cluster installation progress {id="ztp-monitoring-deployment-progress_{{ context }}"}

The Argo CD pipeline syncs the `ClusterInstance` CR from the Git repository to the hub cluster. The SiteConfig Operator then processes the `ClusterInstance` CR and generates the required cluster configuration CRs. You can monitor the progress of the cluster installation from the {{ rh_rhacm }} dashboard or from the command line. {._abstract}

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