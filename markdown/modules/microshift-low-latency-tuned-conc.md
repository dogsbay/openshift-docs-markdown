{%- set _mod_docs_content_type = "CONCEPT" %}
# Tuning Red Hat Enterprise Linux 9 {id="microshift-low-latency-tuned-conc_{{ context }}"}

As a {{ op_system_base_full }} system administrator, you can use the TuneD service to optimize the performance profile of {{ op_system_base }} for a variety of use cases. TuneD monitors and optimizes system performance under certain workloads, including latency performance. {._abstract}

*   Use TuneD profiles to tune your system for different use cases, such as deploying a low-latency {{ microshift_short }} node.
*   You can modify the rules defined for each profile and customize tuning for a specific device.
*   When you switch to another profile or deactivate TuneD, all changes made to the system settings by the previous profile revert back to their original state.
*   You can also configure TuneD to react to changes in device usage and adjusts settings to improve performance of active devices and reduce power consumption of inactive devices.