---
title: Connecting a virtual machine to a service mesh
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Connecting a virtual machine to a service mesh {id="virt-connecting-vm-to-service-mesh"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-connecting-vm-to-service-mesh" %}

{{ VirtProductName }} is now integrated with {{ SMProductName }}. You can monitor, visualize, and control traffic between pods that run virtual machine (VM) workloads on the default pod network with IPv4.

{% leveloffset +1 %}{% include "./modules/virt-adding-vm-to-service-mesh.md" %}{% endleveloffset %}

{%- if not (openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}"}
*   [Installing the Service Mesh Operator](https://docs.redhat.com/en/documentation/red_hat_openshift_service_mesh/3.0/html/installing/ossm-installing-service-mesh)
{% endif %}