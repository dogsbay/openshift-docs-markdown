{%- set _mod_docs_content_type = "CONCEPT" %}
# Use Red Hat Enterprise Linux for Real Time {id="microshift-low-latency-kernelrt-conc_{{ context }}"}

Use the {{ op_system_rt_kernel }} for workloads with stringent low-latency determinism requirements for core kernel features. The {{ op_system_rtk }} provides consistent, low-latency determinism and predictable response times. {._abstract}

When considering system tuning, consider the following factors:

*   System tuning is just as important when using the {{ op_system_rtk }} as it is for the standard kernel.
*   Installing the {{ op_system_rtk }} on an untuned system running the standard kernel supplied as part of the RHEL 9 release is not likely to result in any noticeable benefit.
*   Tuning the standard kernel yields 90% of possible latency gains.
*   The {{ op_system_rtk }} provides the last 10% of latency reduction required by the most demanding workloads.