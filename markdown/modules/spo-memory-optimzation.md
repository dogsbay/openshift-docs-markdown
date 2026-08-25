{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling memory optimization in the spod daemon {id="spo-memory-optimization_{{ context }}"}

The controller running inside of `spod` daemon process watches all pods available in the cluster when profile recording is enabled. This can lead to very high memory usage in large clusters, resulting in the `spod` daemon running out of memory or crashing. {._abstract}

To prevent crashes, the `spod` daemon can be configured to only load the pods labeled for profile recording into the cache memory.


:::note

SPO memory optimization is not enabled by default.

:::


**Procedure**

1.  Enable memory optimization by running the following command:
    ```terminal
    $ oc -n openshift-security-profiles patch spod spod --type=merge -p '{"spec":{"enableMemoryOptimization":true}}'
    ```
1.  To record a security profile for a pod, the pod must be labeled with `spo.x-k8s.io/enable-recording: "true"`:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-recording-pod
      labels:
        spo.x-k8s.io/enable-recording: "true"
    # ...
    ```