{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="virt-NUMA-prereqs_{{ context }}"}

Before you can enable NUMA functionality with {{ VirtProductName }} VMs, you must ensure that your environment meets the following prerequisites. {._abstract}

*   Worker nodes must have huge pages enabled.
*   The `KubeletConfig` object on worker nodes must be configured with the `cpuManagerPolicy: static` spec to guarantee dedicated CPU allocation, which is a prerequisite for NUMA pinning.

    Example `cpuManagerPolicy: static` spec:
    ```yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: KubeletConfig
    metadata:
      name: cpu-numa-static-config
    spec:
      kubeletConfig:
        cpuManagerPolicy: static
    # ...
    ```