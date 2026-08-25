{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing update timeout exceeded {id="core-cluster-upgrade-ts-timeout_{{ context }}"}

If {{ cgu_operator }} reports that the update timeout was exceeded, investigate cluster resource utilization, image pull speed, and network latency. {._abstract}

**Prerequisites**

*   You have a `ClusterGroupUpgrade` custom resource (CR) that has timed out.
*   You have access to the target cluster with cluster-admin privileges.

**Procedure**

1.  Check cluster resource utilization by running the following command:
    ```terminal
    $ oc adm top nodes
    ```

    High CPU or memory usage can slow updates.
1.  Check for slow image pulls by running the following command:
    ```terminal
    $ oc get events -A --sort-by='.lastTimestamp' | grep -i "pull"
    ```

    Slow image pulls can indicate network latency between nodes and registries.
1.  Increase the `ClusterGroupUpgrade` CR timeout by running the following command if the cluster is healthy but updating slowly:
    ```terminal
    $ oc patch cgu <cgu_name> -n <namespace> --type merge -p '{"spec":{"remediationStrategy":{"timeout":240}}}'
    ```