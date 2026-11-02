{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring hierarchical cohorts {id="configuring-hierarchical-cohorts_{{ context }}"}

You can configure hierarchical cohorts to share resource quota between teams. {._abstract}

In the following example, an engineering department shares 1 CPU and 256 MiB of memory quota between two teams that use separate cluster queues.

**Prerequisites**

*   You have cluster administrator permissions.
*   You installed the {{ kueue_name }} Operator on your cluster.
*   You created a `Kueue` custom resource (CR).
*   A `ResourceFlavor` object named `default-flavor` exists.

**Procedure**

1.  Create a file named `cohorts.yaml` with the following content:
    ```yaml
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: Cohort
    metadata:
      name: engineering
    spec:
      resourceGroups:
      - coveredResources: ["cpu", "memory"]
        flavors:
        - name: default-flavor
          resources:
          - name: cpu
            nominalQuota: 1
          - name: memory
            nominalQuota: 256Mi
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: Cohort
    metadata:
      name: team-a
    spec:
      parentName: engineering
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: Cohort
    metadata:
      name: team-b
    spec:
      parentName: engineering
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ClusterQueue
    metadata:
      name: team-a-queue
    spec:
      namespaceSelector: {}
      cohortName: team-a
      resourceGroups:
      - coveredResources: ["cpu", "memory"]
        flavors:
        - name: default-flavor
          resources:
          - name: cpu
            nominalQuota: 0
          - name: memory
            nominalQuota: 0
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ClusterQueue
    metadata:
      name: team-b-queue
    spec:
      namespaceSelector: {}
      cohortName: team-b
      resourceGroups:
      - coveredResources: ["cpu", "memory"]
        flavors:
        - name: default-flavor
          resources:
          - name: cpu
            nominalQuota: 0
          - name: memory
            nominalQuota: 0
    ```

    where:

    `spec.resourceGroups.flavors.resources.nominalQuota`
    :   Specifies the resource quota that a cohort or cluster queue contributes to the hierarchy.

    `spec.parentName`
    :   Specifies the parent cohort in a cohort hierarchy.

    `spec.namespaceSelector`
    :   Specifies which namespaces can submit workloads to the cluster queue. An empty selector (`{}`) accepts workloads from all namespaces. If you omit this field, the cluster queue accepts no workloads and jobs stay pending.

    `spec.cohortName`
    :   Specifies the cohort to which a cluster queue belongs.

1.  Apply the configuration by running the following command:
    ```terminal
    $ oc apply -f cohorts.yaml
    ```

**Verification**

1.  Verify the cohort objects by running the following command:
    ```terminal
    $ oc get cohorts
    ```
    ```terminal title="Example output"
    NAME               AGE
    engineering        10s
    team-a             10s
    team-b             10s
    ```
1.  Verify that each cluster queue belongs to the correct cohort by running the following command:
    ```terminal
    $ oc get clusterqueue team-a-queue team-b-queue -o custom-columns=NAME:.metadata.name,COHORT:.spec.cohortName
    ```
    ```terminal title="Example output"
    NAME             COHORT
    team-a-queue     team-a
    team-b-queue     team-b
    ```