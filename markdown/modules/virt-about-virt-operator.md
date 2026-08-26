{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ VirtProductName }} Operator {id="virt-about-virt-operator_{{ context }}"}

The {{ VirtProductName }} Operator, `virt-operator`, deploys, upgrades, and manages {{ VirtProductName }} without disrupting current virtual machine (VM) workloads. In addition, the {{ VirtProductName }} Operator deploys the common instance types and common preferences. {._abstract}

![virt-operator components](/images/cnv_components_virt-operator.png)

**virt-operator components**

| **Component** | **Description** |
| --- | --- |
| `deployment/virt-api` | HTTP API server that serves as the entry point for all virtualization-related flows. |
| `deployment/virt-controller` | Observes the creation of a new VM instance object and creates a corresponding pod. When the pod is scheduled on a node, `virt-controller` updates the VM with the node name. |
| `daemonset/virt-handler` | Monitors any changes to a VM and instructs `virt-launcher` to perform the required operations. This component is node-specific. |
| `pod/virt-launcher` | Contains the VM that was created by the user as implemented by `libvirt` and `qemu`. |