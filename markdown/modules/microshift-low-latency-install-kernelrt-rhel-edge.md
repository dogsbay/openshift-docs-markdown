{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the {{ op_system_rt_kernel }} in a {{ op_system_ostree_first }} image {id="microshift-low-latency-install-kernelrt-rhel-edge_{{ context }}"}

To configure low latency for a {{ microshift_short }} node, you can include the real-time kernel in a {{ op_system_ostree }} image deployment using image builder. {._abstract}

**Prerequisites**

*   You have a Red Hat subscription enabled on the host that includes {{ op_system_rt_kernel }}.
*   You are using the x86_64 architecture.
*   You configured `osbuild` to use the `kernel-rt` repository.


:::important

A subscription that includes the {{ op_system_rtk }} must be enabled on the host used to build the commit.

:::


**Procedure**

*   Add the following example blueprint sections to your complete installation blueprint for installing the real-time kernel in a {{ op_system_ostree }} image:
    ```text title="Example blueprint snippet for the real-time kernel"
    [[packages]]
    name = "microshift-low-latency"
    version = "*"

    # Kernel RT is supported only on the x86_64 architecture
    [customizations.kernel]
    name = "kernel-rt"

    [customizations.services]
    enabled = ["microshift", "microshift-tuned"]

    [[customizations.files]]
    path = "/etc/microshift/config.yaml"
    data = """
    kubelet:
      cpuManagerPolicy: static
      cpuManagerPolicyOptions:
        full-pcpus-only: "true"
      cpuManagerReconcilePeriod: 5s
      memoryManagerPolicy: Static
      topologyManagerPolicy: single-numa-node
      reservedSystemCPUs: 0-1
      reservedMemory:
      - limits:
          memory: 1100Mi
        numaNode: 0
      kubeReserved:
        memory: 500Mi
      systemReserved:
        memory: 500Mi
      evictionHard:
        imagefs.available: 15%
        memory.available: 100Mi
        nodefs.available: 10%
        nodefs.inodesFree: 5%
      evictionPressureTransitionPeriod: 5m
    """

    [[customizations.files]]
    path = "/etc/tuned/microshift-baseline-variables.conf"
    data = """
    # Isolated cores should be complementary to the kubelet configuration reserved CPUs.
    # Isolated and reserved CPUs must contain all online CPUs.
    # Core #3 is for testing offlining, therefore it is skipped.
    isolated_cores=2,4-5
    hugepages_size=2M
    hugepages=10
    additional_args=test1=on test2=true dummy
    offline_cpu_set=3
    """

    [[customizations.files]]
    path = "/etc/microshift/tuned.yaml"
    data = """
    profile: microshift-baseline
    reboot_after_apply: True
    """
    ```

**Next steps**

1.  Complete the image building process.
1.  If you have not completed the previous steps for enabling low latency for your {{ microshift_short }} cluster, do so now. Update the blueprint with the information gathered in those steps.
1.  If you have not configured workload partitioning, do so now.
1.  Prepare your {{ microshift_short }} workloads for low latency.