{%- set _mod_docs_content_type = "PROCEDURE" %}
# Spreading node pool VMs by using topologySpreadConstraint {id="hcp-topology-spread-constraint_{{ context }}"}

In some scenarios, node pool virtual machines (VMs) might run on the same node, which can cause availability issues. To avoid distribution of VMs on a single node, use the descheduler to continuously honor the `topologySpreadConstraint` constraint to spread VMs on multiple nodes. {._abstract}

By default, KubeVirt VMs created by a node pool are scheduled on any available nodes that have the capacity to run the VMs. The `topologySpreadConstraint` constraint is set to schedule VMs on multiple nodes.

**Prerequisites**

*   You installed the {{ descheduler_operator }}. For more information, see "Installing the descheduler".

**Procedure**

*   Open the `KubeDescheduler` custom resource (CR) by entering the following command, and then modify the `KubeDescheduler` CR to use the `SoftTopologyAndDuplicates` and `KubeVirtRelieveAndMigrate` profiles so that you maintain the `topologySpreadConstraint` constraint settings.

    The `KubeDescheduler` CR named `cluster` runs in the `openshift-kube-descheduler-operator` namespace.
    ```terminal
    $ oc edit kubedescheduler cluster -n openshift-kube-descheduler-operator
    ```
    ```yaml title="Example KubeDescheduler configuration"
    apiVersion: operator.openshift.io/v1
    kind: KubeDescheduler
    metadata:
      name: cluster
      namespace: openshift-kube-descheduler-operator
    spec:
      mode: Automatic
      managementState: Managed
      deschedulingIntervalSeconds: 30
      profiles:
      - SoftTopologyAndDuplicates
      - KubeVirtRelieveAndMigrate
      profileCustomizations:
        devDeviationThresholds: AsymmetricLow
        devActualUtilizationProfile: PrometheusCPUCombined
    # ...
    ```

    where:

    `spec.deschedulingIntervalSeconds`
    :   Sets the number of seconds between the descheduler running cycles. 

    `spec.profiles`
    :   The `SoftTopologyAndDuplicates` profile evicts pods that follow the `whenUnsatisfiable: ScheduleAnyway` soft topology constraint. The `KubeVirtRelieveAndMigrate` profile balances resource usage between nodes and enables strategies, such as `RemovePodsHavingTooManyRestarts` and `LowNodeUtilization`.