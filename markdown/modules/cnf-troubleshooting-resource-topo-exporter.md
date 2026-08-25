{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting the resource topology exporter {id="cnf-troubleshooting-resource-topo-exporter_{{ context }}"}

To resolve unexpected results in `noderesourcetopologies` objects, inspect the `resource-topology-exporter` logs. Reviewing this diagnostic data helps you identify and fix configuration issues within your cluster. {._abstract}


:::note

Ensure that the NUMA resource topology exporter instances in the cluster are named for nodes they refer to. For example, a compute node with the name `worker` should have a corresponding `noderesourcetopologies` object called `worker`.

:::


**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Get the daemonsets managed by the NUMA Resources Operator. Each daemonset has a corresponding `nodeGroup` in the `NUMAResourcesOperator` CR. Run the following command:
    ```terminal
    $ oc get numaresourcesoperators.nodetopology.openshift.io numaresourcesoperator -o jsonpath="{.status.daemonsets[0]}"
    ```
    ```json title="Example output"
    {"name":"numaresourcesoperator-worker","namespace":"openshift-numaresources"}
    ```
1.  Get the label for the daemonset of interest using the value for `name` from the previous step:
    ```terminal
    $ oc get ds -n openshift-numaresources numaresourcesoperator-worker -o jsonpath="{.spec.selector.matchLabels}"
    ```
    ```json title="Example output"
    {"name":"resource-topology"}
    ```
1.  Get the pods using the `resource-topology` label by running the following command:
    ```terminal
    $ oc get pods -n openshift-numaresources -l name=resource-topology -o wide
    ```
    ```terminal title="Example output"
    NAME                                 READY   STATUS    RESTARTS   AGE    IP            NODE
    numaresourcesoperator-worker-5wm2k   2/2     Running   0          2d1h   10.135.0.64   compute-0.example.com
    numaresourcesoperator-worker-pb75c   2/2     Running   0          2d1h   10.132.2.33   compute-1.example.com
    ```
1.  Examine the logs of the `resource-topology-exporter` container running on the worker pod that corresponds to the node you are troubleshooting. Run the following command:
    ```terminal
    $ oc logs -n openshift-numaresources -c resource-topology-exporter numaresourcesoperator-worker-pb75c
    ```
    ```terminal title="Example output"
    I0221 13:38:18.334140       1 main.go:206] using sysinfo:
    reservedCpus: 0,1
    reservedMemory:
      "0": 1178599424
    I0221 13:38:18.334370       1 main.go:67] === System information ===
    I0221 13:38:18.334381       1 sysinfo.go:231] cpus: reserved "0-1"
    I0221 13:38:18.334493       1 sysinfo.go:237] cpus: online "0-103"
    I0221 13:38:18.546750       1 main.go:72]
    cpus: allocatable "2-103"
    hugepages-1Gi:
      numa cell 0 -> 6
      numa cell 1 -> 1
    hugepages-2Mi:
      numa cell 0 -> 64
      numa cell 1 -> 128
    memory:
      numa cell 0 -> 45758Mi
      numa cell 1 -> 48372Mi
    ```