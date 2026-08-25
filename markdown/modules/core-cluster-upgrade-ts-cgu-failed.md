{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing a ClusterGroupUpgrade CR that failed on some clusters {id="core-cluster-upgrade-ts-cgu-failed_{{ context }}"}

If a `ClusterGroupUpgrade` custom resource (CR) completes but some clusters show a `failed` status, investigate the failed clusters individually to identify the root cause. {._abstract}

**Prerequisites**

*   You have a `ClusterGroupUpgrade` CR that shows failed clusters.
*   You have access to the {{ rh_rhacm_first }} hub cluster with cluster-admin privileges.

**Procedure**

1.  Check detailed cluster status in the `ClusterGroupUpgrade` CR by running the following command:
    ```terminal
    $ oc get cgu <cgu_name> -n <namespace> -o jsonpath='{.status.clusters}'
    ```

    The following example shows the output:
    ```json
    {
      "spoke1": "complete",
      "spoke2": "failed",
      "spoke3": "inprogress"
    }
    ```
1.  Check {{ cgu_operator }} logs for errors related to the failed clusters by running the following command:
    ```terminal
    $ oc logs -n openshift-operators deployment/cluster-group-upgrades-controller-manager
    ```
1.  Check policy violation events on the failed cluster by running the following command:
    ```terminal
    $ oc --context=<failed_cluster> get events -A --sort-by='.lastTimestamp' | tail -20
    ```