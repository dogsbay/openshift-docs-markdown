{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reporting more exact resource availability {id="cnf-reporting-more-exact-resource-availability_{{ context }}"}

To report more exact resource availability and minimize Topology Affinity Errors, enable the `cacheResyncPeriod` specification for the NUMA Resources Operator. This configuration monitors pending resources on nodes and synchronizes them in the scheduler cache, though lower intervals increase network load. {._abstract}

The lower the interval, the greater the network load. The `cacheResyncPeriod` specification is disabled by default.

**Prerequisites**

*   Installed the {{ oc_first }}.
*   You are logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Delete the currently running `NUMAResourcesScheduler` resource:
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
1.  Save the following YAML in the file `nro-scheduler-cacheresync.yaml`. This example changes the log level to `Debug`:
    ```yaml {minja}
    apiVersion: nodetopology.openshift.io/v1
    kind: NUMAResourcesScheduler
    metadata:
      name: numaresourcesscheduler
    spec:
      imageSpec: "registry.redhat.io/openshift4/noderesourcetopology-scheduler-container-rhel8:v{{ product_version }}"
      cacheResyncPeriod: "5s"
    ```
    *   `spec.cacheResyncPeriod`: Enter an interval value in seconds for synchronization of the scheduler cache. A value of `5s` is typical for most implementations.
1.  Create the updated `NUMAResourcesScheduler` resource by running the following command:
    ```terminal
    $ oc create -f nro-scheduler-cacheresync.yaml
    ```
    ```terminal title="Example output"
    numaresourcesscheduler.nodetopology.openshift.io/numaresourcesscheduler created
    ```

**Verification**

1.  Check that the NUMA-aware scheduler was successfully deployed:
    1.  Run the following command to check that the CRD is created successfully:
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
1.  Check that the logs for the scheduler show the increased log level:
    1.  Get the list of pods running in the `openshift-numaresources` namespace by running the following command:
        ```terminal
        $ oc get pods -n openshift-numaresources
        ```
        ```terminal title="Example output"
        NAME                                               READY   STATUS    RESTARTS   AGE
        numaresources-controller-manager-d87d79587-76mrm   1/1     Running   0          46h
        numaresourcesoperator-worker-5wm2k                 2/2     Running   0          45h
        numaresourcesoperator-worker-pb75c                 2/2     Running   0          45h
        secondary-scheduler-7976c4d466-qm4sc               1/1     Running   0          21m
        ```
    1.  Get the logs for the secondary scheduler pod by running the following command:
        ```terminal
        $ oc logs secondary-scheduler-7976c4d466-qm4sc -n openshift-numaresources
        ```
        ```terminal title="Example output"
        ...
        I0223 11:04:55.614788       1 reflector.go:535] k8s.io/client-go/informers/factory.go:134: Watch close - *v1.Namespace total 11 items received
        I0223 11:04:56.609114       1 reflector.go:535] k8s.io/client-go/informers/factory.go:134: Watch close - *v1.ReplicationController total 10 items received
        I0223 11:05:22.626818       1 reflector.go:535] k8s.io/client-go/informers/factory.go:134: Watch close - *v1.StorageClass total 7 items received
        I0223 11:05:31.610356       1 reflector.go:535] k8s.io/client-go/informers/factory.go:134: Watch close - *v1.PodDisruptionBudget total 7 items received
        I0223 11:05:31.713032       1 eventhandlers.go:186] "Add event for scheduled pod" pod="openshift-marketplace/certified-operators-thtvq"
        I0223 11:05:53.461016       1 eventhandlers.go:244] "Delete event for scheduled pod" pod="openshift-marketplace/certified-operators-thtvq"
        ```