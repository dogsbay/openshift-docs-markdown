{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the NUMAResourcesOperator custom resource {id="cnf-creating-nrop-cr_{{ context }}"}

After you have installed the NUMA Resources Operator, you can create the `NUMAResourcesOperator` custom resource (CR). This CR instructs the NUMA Resources Operator to install all the cluster infrastructure that is needed to support the NUMA-aware scheduler, including daemon sets and APIs. {._abstract}

**Prerequisites**

*   Installed the {{ oc_first }}.
*   Logged in as a user with `cluster-admin` privileges.
*   Installed the NUMA Resources Operator.

**Procedure**

1.  Create the `NUMAResourcesOperator` custom resource:
    1.  Save the following minimal required YAML file example as `nrop.yaml`:
        ```yaml
        apiVersion: nodetopology.openshift.io/v1
        kind: NUMAResourcesOperator
        metadata:
          name: numaresourcesoperator
        spec:
          nodeGroups:
          - machineConfigPoolSelector:
              matchLabels:
                pools.operator.machineconfiguration.openshift.io/worker: ""
        # ...
        ```

        `pools.operator.machineconfiguration.openshift.io/worker`: Specifies a value that must match the `MachineConfigPool` resource that you want to configure the NUMA Resources Operator on. For example, you might have created a `MachineConfigPool` resource named `worker-cnf` that designates a set of nodes expected to run telecommunications workloads. When configuring the `nodeGroups` spec, ensure that each `MachineConfigPool` resource you reference targets nodes with a unique `nodeSelector` label. This `nodeSelector` label should be applied exclusively to that specific node set. A node you want to manage with topology-aware scheduling must be associated with a single `MachineConfigPool` resource. Consequently, each `nodeGroup` should match exactly one `MachineConfigPool` resource, as configurations matching multiple pools are not supported.
    1.  Create the `NUMAResourcesOperator` CR by running the following command:
        ```terminal
        $ oc create -f nrop.yaml
        ```
1.  Optional: To enable NUMA-aware scheduling for multiple machine config pools (MCPs), define a separate `NodeGroup` for each pool. For example, define three `NodeGroups` for `worker-cnf`, `worker-ht`, and `worker-other`, in the `NUMAResourcesOperator` CR as shown in the following example:
    ```yaml title="Example YAML definition for a NUMAResourcesOperator CR with multiple NodeGroups"
    apiVersion: nodetopology.openshift.io/v1
    kind: NUMAResourcesOperator
    metadata:
      name: numaresourcesoperator
    spec:
      logLevel: Normal
      nodeGroups:
        - machineConfigPoolSelector:
            matchLabels:
              machineconfiguration.openshift.io/role: worker-ht
        - machineConfigPoolSelector:
            matchLabels:
              machineconfiguration.openshift.io/role: worker-cnf
        - machineConfigPoolSelector:
            matchLabels:
              machineconfiguration.openshift.io/role: worker-other
    # ...
    ```

**Verification**

1.  Verify that the NUMA Resources Operator deployed successfully by running the following command:
    ```terminal
    $ oc get numaresourcesoperators.nodetopology.openshift.io
    ```
    ```terminal title="Example output"
    NAME                    AGE
    numaresourcesoperator   27s
    ```
1.  After a few minutes, run the following command to verify that the required resources deployed successfully:
    ```terminal
    $ oc get all -n openshift-numaresources
    ```
    ```terminal title="Example output"
    NAME                                                    READY   STATUS    RESTARTS   AGE
    pod/numaresources-controller-manager-7d9d84c58d-qk2mr   1/1     Running   0          12m
    pod/numaresourcesoperator-worker-7d96r                  2/2     Running   0          97s
    pod/numaresourcesoperator-worker-crsht                  2/2     Running   0          97s
    pod/numaresourcesoperator-worker-jp9mw                  2/2     Running   0          97s
    ```