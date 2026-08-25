---
title: "Using {{ bmaas_first }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using {{ bmaas_first }} {id="bare-metal-using-bare-metal-as-a-service"}
{%- set context = "bare-metal-using-bmaas" %}

You can provision and manage bare-metal hosts by using the Metal^3^ API and the Bare Metal Operator (BMO). These hosts, external to the {{ product_title }} cluster, can run workloads that might not be suitable for containerization or virtualization, such as legacy applications or applications that require direct hardware access. {._abstract}

{{ bmaas_first }} has the following capabilities:

*   Provisioning of bare-metal hosts, including initial configuration.
*   Lifecycle management such as power management, firmware updates, and decommissioning by using the BMO.

As standalone systems, these hosts operate independently of the {{ product_title }} cluster and support diverse workloads by integrating bare metal resources with containerized and virtualized applications. {{ bmaas_first }} can run other operating systems, but only {{ op_system_base_full }} and CentOS Stream 9 were tested.

{% leveloffset +1 %}{% include "./modules/bmaas-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bmaas-using-the-bmo-to-manage-resources-across-all-namespaces.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bmaas-setting-up-a-dedicated-namespace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bmo-creating-a-bmc-secret.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About BMC addressing](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)

{% leveloffset +1 %}{% include "./modules/bmo-creating-a-bare-metal-host-resource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bmo-configuring-users-for-bmaas-hosts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bmo-configuring-the-networkdata-parameter-in-the-bmo-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/bmo-deploying-an-image-to-the-bare-metal-host.md" %}{% endleveloffset %}