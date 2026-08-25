{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying the number of unavailable worker nodes {id="modify-unavailable-workers_{{ context }}"}

You can speed up kubelet configuration rollouts on large clusters by increasing the number of worker nodes that can be unavailable during machine config pool updates. {._abstract}

By default, only one machine is allowed to be unavailable when applying the kubelet-related configuration to the available worker nodes. For a large cluster, it can take a long time for the configuration change to be reflected. At any time, you can adjust the number of machines that are updating to speed up the process.

**Procedure**

1.  Edit the `worker` machine config pool:
    ```terminal
    $ oc edit machineconfigpool worker
    ```
1.  Add the `maxUnavailable` field and set the value:
    ```yaml
    spec:
      maxUnavailable: <node_count>
    ```

    :::important

    When setting the value, consider the number of worker nodes that can be
    unavailable without affecting the applications running on the cluster.
    
    :::