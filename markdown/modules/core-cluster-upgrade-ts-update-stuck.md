{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing an update stuck in Working towards state {id="core-cluster-upgrade-ts-update-stuck_{{ context }}"}

If the cluster version shows a "Working towards" message for an extended period, identify which Operators are blocking the update from completing.
Updates typically complete within 90 to 180 minutes. {._abstract}

**Prerequisites**

*   You have a cluster update that appears stuck in the "Working towards" state.
*   You have access to the target cluster with cluster-admin privileges.

**Procedure**

1.  Check `ClusterVersion` status by running the following command:
    ```terminal
    $ oc get clusterversion -o yaml
    ```

    Look for the `status.conditions` section to identify blocking resources.
1.  Check which Operators are still progressing by running the following command:
    ```terminal
    $ oc get co | grep "True"
    ```

    Any Operator showing `PROGRESSING=True` is still updating.
1.  Check `ClusterVersion` history by running the following command:
    ```terminal
    $ oc get clusterversion -o jsonpath='{.status.history}'
    ```

    A missing or stalled history entry indicates the update has timed out.