---
title: Create a service to connect with SSH
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Create a service to connect with SSH {id="virt-using-services"}
{%- set context = "virt-using-services" %}

You can create a service for a virtual machine (VM) and connect to the IP address and port exposed by the service. Services provide excellent performance and are recommended for applications that are accessed from outside the cluster or within the cluster. Ingress traffic is protected by firewalls. {._abstract}

After you create a service with `virtctl`, you must add `special: key` to the `spec.template.metadata.labels` stanza of the `VirtualMachine` manifest. If the cluster network cannot handle the traffic load, consider using a secondary network for VM access.

{% leveloffset +1 %}{% include "./modules/virt-about-services.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-enabling-load-balancer-service-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-service-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-service-virtctl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-service-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-connecting-service-ssh.md" %}{% endleveloffset %}