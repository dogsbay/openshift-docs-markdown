{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing where high-performance workloads run  {id="cnf-changing-where-high-performance-workloads-run_{{ context }}"}

To optimize the processing of high-performance workloads, change the default placement behavior of the NUMA-aware secondary scheduler. With this configuration, you can assign workloads to a specific NUMA node within a compute node instead of relying on default resource availability. {._abstract}

If you want to change where the workloads run, you can add the `scoringStrategy` setting to the `NUMAResourcesScheduler` custom resource and set its value to either `MostAllocated`  or `BalancedAllocation`.  

**Prerequisites**

*   Installed the {{ oc_first }}.
*   Logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Delete the currently running `NUMAResourcesScheduler` resource by using the following steps:
    1.  Get the active `NUMAResourcesScheduler` by running the following command:
        ```terminal
        $ oc get NUMAResourcesScheduler
        ```
        ```terminal title="Example output"
        NAME                     AGE
        numaresourcesscheduler   92m
        ```
    1.  Delete the secondary scheduler resource by running the following command:
        ```terminal
        $ oc delete NUMAResourcesScheduler numaresourcesscheduler
        ```
        ```terminal title="Example output"
        numaresourcesscheduler.nodetopology.openshift.io "numaresourcesscheduler" deleted
        ```
1.  Save the following YAML in the file `nro-scheduler-mostallocated.yaml`. This example changes the `scoringStrategy` to `MostAllocated`:
    ```yaml
    apiVersion: nodetopology.openshift.io/v1
    kind: NUMAResourcesScheduler
    metadata:
      name: numaresourcesscheduler
    spec:
      imageSpec: "registry.redhat.io/openshift4/noderesourcetopology-scheduler-container-rhel8:v{product-version}"
      scoringStrategy:
            type: "MostAllocated"
    # ...
    ```

    `spec.imageSpec.scoringStrategy`: If the `scoringStrategy` configuration is omitted, the default of `LeastAllocated` applies.
1.  Create the updated `NUMAResourcesScheduler` resource by running the following command:
    ```terminal
    $ oc create -f nro-scheduler-mostallocated.yaml
    ```
    ```terminal title="Example output"
    numaresourcesscheduler.nodetopology.openshift.io/numaresourcesscheduler created
    ```

**Verification**

1.  Check that the NUMA-aware scheduler was successfully deployed by using the following steps:
    1.  Run the following command to check that the custom resource definition (CRD) is created successfully:
        ```terminal
        $ oc get crd | grep numaresourcesschedulers
        ```
        ```terminal title="Example output"
        NAME                                                              CREATED AT
        numaresourcesschedulers.nodetopology.openshift.io                 2022-02-25T11:57:03Z
        ```
    1.  Check that the new custom scheduler is available by running the following command:
        ```terminal
        $ oc get numaresourcesschedulers.nodetopology.openshift.io
        ```
        ```terminal title="Example output"
        NAME                     AGE
        numaresourcesscheduler   3h26m
        ```
1.  Verify that the `ScoringStrategy` has been applied correctly by running the following command to check the relevant `ConfigMap` resource for the scheduler: 
    ```terminal
    $ oc get -n openshift-numaresources cm topo-aware-scheduler-config -o yaml | grep scoring -A 1
    ```
    ```terminal title="Example output"
    scoringStrategy:
      type: MostAllocated
    ```