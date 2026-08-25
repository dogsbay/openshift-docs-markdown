{%- set _mod_docs_content_type = "CONCEPT" %}
# Lowering latency in {{ microshift_short }} applications {id="microshift-low-latency-concept_{{ context }}"}

Latency is the time from an event to its response. You can optimize low latency performance on a {{ microshift_short }} node by combining configurations, operating system tuning, and workload partitioning to ensure edge devices respond quickly. {._abstract}


:::important

The CPU set for management applications, such as the {{ microshift_short }} service, OVS, CRI-O, {{ microshift_short }} pods, and isolated cores, must contain all-online CPUs.

:::


## Workflow for configuring low latency for {{ microshift_short }} applications {id="microshift-low-latency-workflow_{{ context }}"}
To configure low latency for applications running in a {{ microshift_short }} node, you must complete the following tasks:


Required
:   *   Install the `microshift-low-latency` RPM.
    *   Configure workload partitioning.
    *   Configure the `kubelet` section of the `config.yaml` file in the `/etc/microshift/` directory.
    *   Configure and activate a TuneD profile. TuneD is a {{ op_system_base_full }} service that monitors the host system and optimizes performance under certain workloads.
    *   Restart the host.

Optional
:   *   If you are using the x86_64 architecture, you can install [Red Hat Enterprise Linux for Real Time 9](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux_for_real_time/9).