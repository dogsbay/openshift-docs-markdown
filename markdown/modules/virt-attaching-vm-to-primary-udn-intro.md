{%- set _mod_docs_content_type = "REFERENCE" %}
# Attach a virtual machine to the primary user-defined network {id="virt-attaching-vm-to-primary-udn-intro_{{ context }}"}

You can connect a virtual machine (VM) to the primary user-defined network (UDN) by requesting the pod network attachment and configuring the interface binding. {._abstract}

{{ VirtProductName }} supports the following network binding plugins to connect the network interface to the VM:


Layer 2 bridge
:   The Layer 2 bridge binding creates a direct Layer 2 connection between the VM’s virtual interface and the virtual switch of the UDN.


Passt
:   The Plug a Simple Socket Transport (passt) binding provides a user-space networking solution that integrates seamlessly with the pod network, providing better integration with the {{ product_title }} networking ecosystem.

    Passt binding has the following benefits:

    *   You can define readiness and liveness HTTP probes to configure VM health checks.
    *   You can use Red Hat Advanced Cluster Security to monitor TCP traffic within the cluster with detailed insights.

{%- set FeatureName = "Using the passt binding plugin to attach a VM to the primary UDN" %}
{% include "./snippets/technology-preview.md" %}