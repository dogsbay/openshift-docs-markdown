# Viewing Node Allocatable Resources and Capacity {id="nodes-nodes-resources-configuring-setting_{{ context }}"}

As an administrator, you can view the current capacity and allocatable resources of a specific node.

**Procedure**

To see a node’s current capacity and allocatable resources:

1.  Run the following command:

```
$ oc get node/<node_name> -o yaml
```

1.  Locate the following section in the output:
    ```yaml
    ...
    status:
    ...
      allocatable:
        cpu: "4"
        memory: 8010948Ki
        pods: "110"
      capacity:
        cpu: "4"
        memory: 8010948Ki
        pods: "110"
    ...
    ```