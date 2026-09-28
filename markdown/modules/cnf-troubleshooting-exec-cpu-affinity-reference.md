{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting ExecCPUAffinity configuration common issues and resolutions {id="troubleshooting-exec-cpu-affinity-reference_{{ context }}"}

Troubleshoot `ExecCPUAffinity` configuration issues by identifying common symptoms and their resolutions. Use this information to ensure processes are correctly pinned to the intended CPUs and that the MachineConfigPool updates successfully. {._abstract}

The following table describes common issues and resolutions for `ExecCPUAffinity` configuration:

| Symptom | Potential Cause | Resolution |
| --- | --- | --- |
| Process runs on all CPUs in the container set. | The pod does not belong to the Guaranteed QoS class. For more information see [Pod Quality of Service Classes](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#criteria). | Ensure the container has `limits` and `requests` defined for both CPU and memory, and that they are equal. |
| Process runs on all CPUs in the container set. | The container uses fractional CPU requests for example `500m`. | Update the pod specification to request a whole integer number of CPUs. |
| The `99-runtimes.conf` file does not exist or is not updated. | The MachineConfigPool (MCP) is still updating or has failed. | Check the MCP status using `oc get mcp`. Changing the `ExecCPUAffinity` status triggers a node reboot; ensure the update has completed. |
| The `exec` process is pinned to an exclusive CPU instead of a shared CPU. | Shared CPUs are not defined in the `PerformanceProfile`. | When the `MixedCPUsAllocation` Technology Preview feature is enabled through the `TechPreviewNoUpgrade` feature set, the system’s CPU pinning logic for exec processes changes. If shared CPUs are defined in the PerformanceProfile under `spec.cpu.shared` and `workloadHints.mixedCpus` is set to `true`, the system prioritizes the first shared CPU. If no shared CPUs are defined, it defaults to the first exclusive (isolated) CPU. Enabling this feature set cannot be undone and is not recommended for production clusters. Additionally, the container must request shared CPUs by including `workload.openshift.io/enable-shared-cpus: "1"` in the resource limits. |