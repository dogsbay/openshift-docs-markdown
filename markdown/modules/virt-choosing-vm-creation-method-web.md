{%- set _mod_docs_content_type = "CONCEPT" %}
# VM creation methods {id="virt-choosing-vm-creation-method-web_{{ context }}"}

The web console creation wizard provides three workflows for creating a virtual machine (VM). Choose the workflow that matches your situation. {._abstract}

**VM creation methods**

| If you want to | Use this workflow | Requirements |
| --- | --- | --- |
| Build a VM with a specific combination of compute, storage, and network settings, when no existing template matches your requirements | **Custom configuration** | A boot source, such as a custom disk image, container image, or URL |
| Deploy a standardized VM quickly from a preconfigured image and settings | **Create from Template** | A template that has an available boot source in the cluster |
| Create one or more VMs that duplicate an existing VM and its configuration | **Clone existing VirtualMachine** | Access to the source VM that you want to clone |

For any method, the creation wizard reference explains how boot source, instance type, and customization options affect the VM.