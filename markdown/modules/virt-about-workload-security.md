{%- set _mod_docs_content_type = "CONCEPT" %}
# About workload security {id="virt-about-workload-security_{{ context }}"}

By default, virtual machine (VM) workloads do not run with root privileges in {{ VirtProductName }}, and there are no supported {{ VirtProductName }} features that require root privileges. {._abstract}

For each VM, a `virt-launcher` pod runs an instance of `libvirt` in _session mode_ to manage the VM process. In session mode, the `libvirt` daemon runs as a non-root user account and only permits connections from clients that are running under the same user identifier (UID). Therefore, VMs run as unprivileged pods, adhering to the security principle of least privilege.