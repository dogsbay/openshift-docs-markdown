---
title: Installing a cluster without an external registry
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster without an external registry {id="installing-ove"}
{%- set context = "installing-ove" %}

You can deploy an {{ product_title }} cluster without the need for an external image registry, either in a connected or disconnected environment. This installation method uses a simplified user interface and self-contained media to facilitate the installation. {._abstract}

Although the method supports general clusters, the downloaded media contains an Operator bundle that is curated specifically for {{ ove_first }}, meaning additional Operators must be retrieved separately if required for other use cases.

{%- set FeatureName = "Installing a cluster without an external registry" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/installing-ove-advantages.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ove-iso.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ove-rendezvous.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ove-console-initial.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ove-hosts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ove-console-final.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Installing virtctl](/virt/getting_started/virt-using-the-cli-tools#virt-installing-virtctl-binary_virt-using-the-cli-tools)
*   [Creating virtual machines from instance types](/virt/creating_vm/virt-creating-vms-from-instance-types#virt-creating-vms-from-instance-types)
*   [Creating virtual machines from templates](/virt/creating_vm/virt-creating-vms-from-templates#virt-creating-vms-from-templates)
*   [Migrating virtual machines from VMware vSphere (Migration Toolkit for Virtualization documentation)](https://docs.redhat.com/en/documentation/migration_toolkit_for_virtualization/2.8/html/installing_and_using_the_migration_toolkit_for_virtualization/migrating-vmware)
*   [Migrating virtual machines from Red&#160;Hat Virtualization (Migration Toolkit for Virtualization documentation)](https://docs.redhat.com/en/documentation/migration_toolkit_for_virtualization/2.8/html/installing_and_using_the_migration_toolkit_for_virtualization/migrating-rhv_rhv)