{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring worker node batching by using pod disruption budgets {id="core-cluster-upgrade-worker-batching-pdb_{{ context }}"}

You can configure `PodDisruptionBudget` resources to control how your workloads tolerate node draining during cluster updates.
Pod disruption budgets ensure that a minimum number of pod replicas remain available during worker node updates. {._abstract}

**Prerequisites**

*   You have access to the target cluster with cluster-admin privileges.
*   The `oc` CLI tool is installed and configured.
*   You have identified critical workloads that run with replicas.

**Procedure**

1.  Create a `PodDisruptionBudget` resource for each critical workload:
    ```yaml
    apiVersion: policy/v1
    kind: PodDisruptionBudget
    metadata:
      name: <pdb_name>
      namespace: <namespace>
    spec:
      maxUnavailable: 1
      selector:
        matchLabels:
          app: <app_label>
    ```

    where:
    *   `<pdb_name>`: Specifies a name for the `PodDisruptionBudget` resource, for example `cnf-workload-pdb`.
    *   `<namespace>`: Specifies the namespace where the workload runs, for example `cnf-workload`.
    *   `maxUnavailable`: Specifies the maximum number of pods that can be unavailable during a disruption. Set this value to at least `1` to allow node draining to proceed.
    *   `<app_label>`: Specifies the label selector that matches the pods for this workload.
1.  Apply the `PodDisruptionBudget` resource by running the following command:
    ```terminal
    $ oc apply -f <pdb_filename>.yaml
    ```
1.  Verify that the pod disruption budget allows at least one disruption by running the following command:
    ```terminal
    $ oc get pdb <pdb_name> -n <namespace>
    ```

    The following example shows the output:
    ```terminal
    NAME               MIN AVAILABLE   MAX UNAVAILABLE   ALLOWED DISRUPTIONS   AGE
    cnf-workload-pdb   N/A             1                 1                     30s
    ```

    :::important

    Ensure the `ALLOWED DISRUPTIONS` column shows a value greater than 0. If this value is 0, the pod disruption budget blocks node draining and updates stall. Do not set `minAvailable` to 100% of replicas, as this prevents any disruption.
    
    :::

1.  Repeat steps 1-3 for all critical workloads in your cluster.
1.  Verify all pod disruption budgets across the cluster by running the following command:
    ```terminal
    $ oc get pdb -A
    ```

**Verification**

*   Verify that no pod disruption budgets are blocking disruptions by running the following command:
    ```terminal
    $ oc get pdb -A -o jsonpath='{range .items[?(@.status.disruptionsAllowed==0)]}{.metadata.namespace}{"\t"}{.metadata.name}{"\n"}{end}'
    ```

    This command must produce no output. If the output lists any pod disruption budgets, adjust their configuration before updating.