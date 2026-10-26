{%- set _mod_docs_content_type = "CONCEPT" %}
# Optimize VM workload density {id="virt-optimize-vm-workload-density_{{ context }}"}

The `wasp-agent` component facilitates memory overcommitment by assigning swap resources to worker nodes. {._abstract}

The `wasp-agent` component is deployed automatically if `memoryOvercommitPercentage` is set to more than `100` when you first create the `HyperConverged` custom resource (CR).


:::important

Swap resources can be only assigned to virtual machine workloads (VM pods) of the `Burstable` Quality of Service (QoS) class. VM pods of the `Guaranteed` QoS class and pods of any QoS class that do not belong to VMs cannot swap resources.

Using `spec.domain.resources.requests.memory` in the VM manifest disables the memory overcommit configuration. Use `spec.domain.memory.guest` instead.

:::


**Additional resources**
{._additional-resources}

*   [Configure Quality of Service for Pods](https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/)