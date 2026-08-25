{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing a ClusterGroupUpgrade CR stuck in Preparing state {id="core-cluster-upgrade-ts-cgu-preparing_{{ context }}"}

If a `ClusterGroupUpgrade` custom resource (CR) is stuck in the `Preparing` state, the issue is typically related to policy compliance, cluster readiness, or blocking custom resources. {._abstract}

**Prerequisites**

*   You have a `ClusterGroupUpgrade` CR that is stuck in `Preparing` state.
*   You have access to the {{ rh_rhacm_first }} hub cluster with cluster-admin privileges.

**Procedure**

1.  Check the `ClusterGroupUpgrade` status by running the following command:
    ```terminal
    $ oc get cgu <cgu_name> -n <namespace> -o yaml
    ```

    Look for error messages in the `status.conditions` section.
    Common causes include managed policies that do not exist or are not bound to target clusters, target clusters that are not in a ready state, and blocking custom resources that are not ready.
1.  Check policy compliance in {{ rh_rhacm }} by running the following command:
    ```terminal
    $ oc get policy <policy_name> -n <namespace>
    ```
1.  Check policy details for noncompliant policies by running the following command:
    ```terminal
    $ oc describe policy <policy_name> -n <namespace>
    ```

    Resolve policy compliance issues before the `ClusterGroupUpgrade` CR can proceed.