{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting diagnostic information for Red Hat support {id="core-cluster-upgrade-ts-collect-diagnostics_{{ context }}"}

If you cannot resolve the update issue, collect diagnostic information and contact Red&#160;Hat support for assistance. {._abstract}

**Prerequisites**

*   You have a cluster update issue that you cannot resolve.
*   You have access to the target cluster and the {{ rh_rhacm_first }} hub cluster with cluster-admin privileges.

**Procedure**

1.  Collect must-gather data by running the following command:
    ```terminal
    $ oc adm must-gather
    ```
1.  Collect {{ rh_rhacm }} must-gather data for {{ cgu_operator }}-specific issues by running the following command:
    ```terminal
    $ oc adm must-gather --image=registry.redhat.io/rhacm2/must-gather-rhel8
    ```
1.  Collect `ClusterVersion` history by running the following command:
    ```terminal
    $ oc get clusterversion -o jsonpath='{.status.history}' > clusterversion-history.json
    ```
1.  Collect `ClusterGroupUpgrade` status by running the following command:
    ```terminal
    $ oc get cgu <cgu_name> -n <namespace> -o yaml > cgu-status.yaml
    ```