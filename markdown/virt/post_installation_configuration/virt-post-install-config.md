---
title: Postinstallation configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Postinstallation configuration {id="virt-post-install-config"}
{%- set context = "virt-post-install-config" %}

After you have installed {{ VirtProductName }}, there are procedures that you can complete to ensure that your environment is properly set up. You can configure the components that are relevant for your environment.

{%- if openshift_enterprise %}
*   As a cluster administrator, you can run a self validation checkup to verify that the environment is fully functional and self-sustained before you deploy production workloads.
{% endif %}
*   The hostpath provisioner is a local storage provisioner designed for {{ VirtProductName }}. If you want to configure local storage for virtual machines, you must enable the hostpath provisioner first.
*   Node placement rules for {{ VirtProductName }} Operators, workloads, and controllers.
*   Network configuration:

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
    *   Installing the Kubernetes NMState and SR-IOV Operators
    *   Configuring a Linux bridge network for external access to virtual machines (VMs)
    *   Configuring a dedicated secondary network for live migration
    *   Configuring an SR-IOV network
    *   Enabling the creation of load balancer services by using the {{ product_title }} web console
        {% endif %}
        {% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
    *   Enabling the creation of load balancer services by using the {{ product_title }} web console
{% endif %}
*   Storage configuration:
    *   Defining a default storage class for the Container Storage Interface (CSI)
    *   Configuring local storage by using the Hostpath Provisioner (HPP)

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp or openshift_origin) %}
{% leveloffset +1 %}{% include "./modules/about-self-service-tsr.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Specifying nodes for {{ VirtProductName }} components](/virt/post_installation_configuration/virt-node-placement-virt-components#virt-node-placement-virt-components)
*   [Postinstallation network configuration](/virt/post_installation_configuration/virt-post-install-network-config#virt-post-install-network-config)
*   [Postinstallation storage configuration](/virt/post_installation_configuration/virt-post-install-storage-config#virt-post-install-storage-config)