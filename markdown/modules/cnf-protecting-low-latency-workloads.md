{%- set _mod_docs_content_type = "CONCEPT" %}
# How ExecCPUAffinity prevents latency spikes from exec operations {id="cnf-protecting-low-latency-workloads_{{ context }}"}

When you run exec operations such as `oc exec` or shell access on a container with isolated CPUs, those processes can interrupt your time-sensitive workloads. The `ExecCPUAffinity` feature automatically pins these secondary processes to a specific CPU within the container’s isolated set. This ensures that your primary low-latency applications, such as Telco RAN DU or 5G Core, maintain deterministic performance without resource contention. {._abstract}

`ExecCPUAffinity` is enabled by default whenever you apply a `PerformanceProfile` to a node. The feature operates at the container level and requires the following conditions:

*   **Runtime Class**: The pod must use the `PerformanceProfile` runtime class, for example `<PP-name>-performance`.
*   **QoS Class**: The pod must belong to the Guaranteed QoS class and request whole integer CPUs.
*   **CPU Selection Logic**: The system automatically selects the first available CPU to host the executed process. It prioritizes a shared CPU if one is configured; otherwise, it uses the first exclusive CPU in the container’s set.

    :::note

    If a Pod contains multiple containers, only the container requesting an integer number of CPUs uses `ExecCPUAffinity`. Any container with fractional CPU requests will follow the default behavior, allowing processes to run on any CPU within the container’s cgroup set.
    
    :::


If you need the previous behavior where executed processes can run on any allocated core, you can disable the feature for all workloads by using that performance runtime class.

To disable `ExecCPUAffinity`, add the following annotation to your `PerformanceProfile`:

```yaml
metadata:
  annotations:
    performance.openshift.io/exec-cpu-affinity: "disable"
```


:::note

Use this annotation only as a temporary fallback and is expected to be removed in future releases.

:::