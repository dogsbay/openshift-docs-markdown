{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling CPU CFS quota {id="cnf-disabling-cpu-cfs-quota_{{ context }}"}

To eliminate CPU throttling for pinned pods, create a pod with the `cpu-quota.crio.io: "disable"` annotation. This annotation disables the CPU completely fair scheduler (CFS) quota when the pod runs. {._abstract}

**Procedure**

*   To eliminate CPU throttling for pinned pods, create a pod with the `cpu-quota.crio.io: "disable"` annotation. This annotation disables the CPU completely fair scheduler (CFS) quota when the pod runs.
    ```yaml title="Example pod specification with cpu-quota.crio.io disabled"
    apiVersion: v1
    kind: Pod
    metadata:
      annotations:
          cpu-quota.crio.io: "disable"
    spec:
        runtimeClassName: performance-<profile_name>
    #...
    ```

    :::note

    Only disable CPU CFS quota when the CPU manager static policy is enabled and for pods with guaranteed QoS that use whole CPUs. For example, pods that contain CPU-pinned containers. Otherwise, disabling CPU CFS quota can affect the performance of other containers in the cluster.
    
    :::