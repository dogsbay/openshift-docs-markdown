---
title: Configuring local storage by using the hostpath provisioner
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring local storage by using the hostpath provisioner {id="virt-configuring-local-storage-with-hpp"}
{%- set context = "virt-configuring-local-storage-with-hpp" %}

You can configure local storage for virtual machines by using the hostpath provisioner (HPP). {._abstract}

When you install the {{ VirtProductName }} Operator, the Hostpath Provisioner Operator is automatically installed. HPP is a local storage provisioner designed for {{ VirtProductName }} that is created by the Hostpath Provisioner Operator. To use HPP, you create an HPP custom resource (CR) with a basic storage pool.

{% leveloffset +1 %}{% include "./modules/virt-creating-hpp-basic-storage-pool.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-about-creating-storage-classes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-storage-class-csi-driver.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-storage-pools-pvc-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-creating-storage-pool-pvc-template.md" %}{% endleveloffset %}