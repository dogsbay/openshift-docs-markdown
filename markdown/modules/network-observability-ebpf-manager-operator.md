{%- set _mod_docs_content_type = "PROCEDURE" %}
# Working with the eBPF Manager Operator {id="network-observability-ebpf-manager-operator_{{ context }}"}

Integrate the eBPF Manager Operator with Network Observability to manage eBPF programs and reduce the need for privileged agent permissions. {._abstract}

The eBPF Manager Operator reduces the attack surface and ensures compliance, security, and conflict prevention by managing all eBPF programs. Network observability can use the eBPF Manager Operator to load hooks. As a result, you no longer need to provide the eBPF Agent with privileged mode or additional Linux capabilities such as `CAP_BPF` and `CAP_PERFMON`. The eBPF Manager Operator with network observability is only supported on 64-bit AMD architecture.

{%- set FeatureName = "eBPF Manager Operator with network observability" %}
{% include "./snippets/technology-preview.md" %}

**Procedure**

1.  In the web console, navigate to **Ecosystem** → **Operator Hub**.
1.  Install **eBPF Manager**.
1.  Check **Workloads** → **Pods** in the `bpfman` namespace to make sure they are all up and running.
1.  Configure the `FlowCollector` custom resource to use the eBPF Manager Operator:
    ```yaml title="Example FlowCollector configuration"
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      agent:
        ebpf:
          features:
            - EbpfManager
    ```

**Verification**

1.  In the web console, navigate to **Ecosystem** → **Installed Operators**.
1.  Click **eBPF Manager Operator** → **All instances** tab.

    For each node, verify that a `BpfApplication` named `netobserv` and a pair of `BpfProgram` objects, one for Traffic Control (TCx) ingress and another for TCx egress, exist. If you enable other eBPF Agent features, you might have more objects.