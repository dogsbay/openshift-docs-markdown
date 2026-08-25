{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling workload partitioning {id="microshift-enabling-workload-partitioning_{{ context }}"}

To enable workload partitioning on {{ microshift_short }}, make the following configuration changes:

*   Update the {{ microshift_short }} `config.yaml` file to include the kubelet configuration file.
*   Create the CRI-O systemd and configuration files.
*   Create and update the systemd configuration file for the {{ microshift_short }} and CRI-O services respectively.

**Procedure**

1.  Update the {{ microshift_short }} `config.yaml` file to include the kubelet configuration file to enable and configure CPU Manager for the workloads:
    *   Create the kubelet configuration file in the path `/etc/kubernetes/openshift-workload-pinning`. The kubelet configuration directs the kubelet to modify the node resources based on the capacity and allocatable CPUs.
        ```yaml title="kubelet configuration example"
        # ...
        {
          "management": {
            "cpuset": "0,6,7" (1)
          }
        }
        # ...
        ```
        1.  The `cpuset` applies to a machine with 8 VCPUs (4 cores) and is valid throughout the document.
    *   Update the {{ microshift_short }} config.yaml file in the path `/etc/microshift/config.yaml`. Embed the kubelet configuration in the {{ microshift_short }} `config.yaml` file to enable and configure CPU Manager for the workloads.
        ```yaml title="{{ microshift_short }} config.yaml example"
        # ...
        kubelet:
          reservedSystemCPUs: 0,6,7 (1)
          cpuManagerPolicy: static
          cpuManagerPolicyOptions:
            full-pcpus-only: "true" (2)
          cpuManagerReconcilePeriod: 5s
        # ...
        ```
        1.  Exclusive cpuset for the system daemons and the interrupts/timers.
        1.  kubelet configuration sets the `CPUManagerPolicyOptions` option to `full-pcpus-only` to ensure allocation of whole cores to the containers workload.
1.  Create the CRI-O systemd and configuration files:
    *   Create the CRI-O configuration file in the path `/etc/crio/crio.conf.d/20-microshift-workload-partition.conf` which overrides the default configuration that already exists in the `11-microshift-ovn.conf` file.
        ```yaml title="CRI-O configuration example"
        # ...
        [crio.runtime]
        infra_ctr_cpuset = "0,6,7"

        [crio.runtime.workloads.management]
        activation_annotation = "target.workload.openshift.io/management"
        annotation_prefix = "resources.workload.openshift.io"
        resources = { "cpushares" = 0, "cpuset" = "0,6,7" }
        # ...
        ```
    *   Create the systemd file for CRI-O in the path `/etc/systemd/system/crio.service.d/microshift-cpuaffinity.conf`.
        ```yaml title="CRI-O systemd configuration example"
        # ...
        [Service]
        CPUAffinity=0,6,7
        # ...
        ```
1.  Create and update the systemd configuration file with `CPUAffinity` value for the {{ microshift_short }} and CRI-O services:
    *   Create the {{ microshift_short }} services systemd file in the path `/etc/systemd/system/microshift.service.d/microshift-cpuaffinity.conf`. {{ microshift_short }} will be pinned using the systemd `CPUAffinity` value.
        ```yaml title="{{ microshift_short }} services systemd configuration example"
        # ...
        [Service]
        CPUAffinity=0,6,7
        # ...
        ```
    *   Update the `CPUAffinity` value in the {{ microshift_short }} ovs-vswitchd systemd file in the path `/etc/systemd/system/ovs-vswitchd.service.d/microshift-cpuaffinity.conf`.
        ```yaml title="{{ microshift_short }} ovs-vswitchd systemd configuration example"
        # ...
        [Service]
        CPUAffinity=0,6,7
        # ...
        ```
    *   Update the `CPUAffinity` value in the {{ microshift_short }} ovsdb-server systemd file in the path `/etc/systemd/system/ovsdb-server.service.d/microshift-cpuaffinity.conf`
        ```yaml title="{{ microshift_short }} ovsdb-server systemd configuration example"
        # ...
        [Service]
        CPUAffinity=0,6,7
        # ...
        ```