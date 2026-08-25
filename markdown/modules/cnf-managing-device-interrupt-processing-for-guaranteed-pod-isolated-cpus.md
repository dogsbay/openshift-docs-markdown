{%- set _mod_docs_content_type = "CONCEPT" %}
# Managing device interrupt processing for guaranteed pod isolated CPUs {id="managing-device-interrupt-processing-for-guaranteed-pod-isolated-cpus_{{ context }}"}

The Node Tuning Operator can manage host CPUs by dividing them into reserved CPUs for cluster and operating system housekeeping duties, including pod infra containers, and isolated CPUs for application containers to run the workloads. By completing these tasks, you can set CPUs for low-latency workloads as isolated workloads. {._abstract}

Device interrupts are load balanced between all isolated and reserved CPUs to avoid CPUs being overloaded, with the exception of CPUs where there is a guaranteed pod running. Guaranteed pod CPUs are prevented from processing device interrupts when the relevant annotations are set for the pod.

In the performance profile, `globallyDisableIrqLoadBalancing` is used to manage whether device interrupts are processed or not. For certain workloads, the reserved CPUs are not always sufficient for dealing with device interrupts, and for this reason, device interrupts are not globally disabled on the isolated CPUs. By default, Node Tuning Operator does not disable device interrupts on isolated CPUs.