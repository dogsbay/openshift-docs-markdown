---
title: Understanding host and VM security
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding host and VM security {id="security-hosts-vms"}
{%- set context = "security-hosts-vms" %}

Containers and virtual machines provide ways of separating applications running on a host from the operating system itself. You should understand {{ op_system }}, which is the operating system used by {{ product_title }}, to see how the host systems protect containers and hosts from each other. {._abstract}

{% leveloffset +1 %}{% include "./modules/security-hosts-vms-rhcos.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Building, running, and managing containers](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html-single/building_running_and_managing_containers/index)
*   [How nodes enforce resource constraints](/nodes/nodes/nodes-nodes-resources-configuring#allocate-node-enforcement_nodes-nodes-resources-configuring)
*   [Managing security context constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies)
*   [Supported platforms for OpenShift clusters](/architecture/architecture-installation#supported-platforms-for-openshift-clusters_architecture-installation)
*   [Choosing how to configure {{ op_system }}](/architecture/architecture-rhcos#rhcos-configured_architecture-rhcos)
*   [Ignition](/architecture/architecture-rhcos#rhcos-about-ignition_architecture-rhcos)
*   [Kernel arguments](/installing/install_config/installing-customizing#installation-special-config-kargs_installing-customizing)
*   [Kernel modules](/installing/install_config/installing-customizing#installation-special-config-kmod_installing-customizing)
*   [Disk encryption](/installing/install_config/installing-customizing#installation-special-config-storage_installing-customizing)
*   [Chrony time service](/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)
*   [About the OpenShift Update Service](/updating/understanding_updates/intro-to-updates#update-service-about_understanding-openshift-updates)
*   [Red Hat OpenShift security guide](https://www.redhat.com/en/resources/openshift-security-guide-ebook)
{%- if not openshift_origin %}
*   [FIPS cryptography](/installing/overview/installing-fips#installing-fips)
{%- endif %}

{% leveloffset +1 %}{% include "./modules/security-hosts-vms-vs-containers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-hosts-vms-openshift.md" %}{% endleveloffset %}

{% if not openshift_origin %}

**Additional resources**
{._additional-resources}

*   [FIPS cryptography](/installing/overview/installing-fips#installing-fips)
{% endif %}