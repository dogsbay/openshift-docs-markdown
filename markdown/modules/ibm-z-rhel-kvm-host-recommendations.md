{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ op_system_base }} KVM on {{ ibm_z_title }} host recommendations {id="ibm-z-rhel-kvm-host-recommendations_{{ context }}"}

To optimize Kernel-based Virtual Machine (KVM) performance on {{ ibm_z_title }}, apply host recommendations.  {._abstract}

Optimizing a KVM virtual server environment strongly depends on the workloads of the virtual servers and on the available resources. The same action that enhances performance in one environment can have adverse effects in another. Finding the best balance for a particular setting can be a challenge and often involves experimentation.

The following sections introduces some best practices when using {{ product_title }} with {{ op_system_base }} KVM on {{ ibm_z_name }} and {{ ibm_linuxone_name }} environments.