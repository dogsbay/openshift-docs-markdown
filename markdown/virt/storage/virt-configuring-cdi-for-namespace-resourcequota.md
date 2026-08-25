---
title: Configuring CDI to override CPU and memory quotas
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring CDI to override CPU and memory quotas {id="virt-configuring-cdi-for-namespace-resourcequota"}
{%- set context = "virt-configuring-cdi-for-namespace-resourcequota" %}

You can configure the Containerized Data Importer (CDI) to import, upload, and clone virtual machine disks into namespaces that are subject to CPU and memory resource restrictions. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-about-cpu-and-memory-quota-namespace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-overriding-cpu-and-memory-defaults.md" %}{% endleveloffset %}

## Additional resources {id="{{ context }}_additional-resources" ._additional-resources}
*   [Resource quotas per project](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project)