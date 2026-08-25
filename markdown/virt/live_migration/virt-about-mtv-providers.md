---
title: "About {{ mtv_first }} providers"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# About {{ mtv_first }} providers {id="virt-about-mtv-providers"}
{%- set context = "virt-about-mtv-providers" %}

To migrate a virtual machine (VM) across {{ product_title }} clusters, you must configure an {{ product_title }} provider for each cluster that you are including in the migration. If {{ mtv_short }} is already installed on a cluster, a local provider already exists. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-configuring-root-ca-for-providers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-long-lived-account-and-token.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Adding a Red Hat {{ VirtProductName }} source provider](https://docs.redhat.com/en/documentation/migration_toolkit_for_virtualization/2.9/html-single/installing_and_using_the_migration_toolkit_for_virtualization/index#adding-source-provider_cnv)
*   [Adding an {{ VirtProductName }} destination provider](https://docs.redhat.com/en/documentation/migration_toolkit_for_virtualization/2.9/html-single/installing_and_using_the_migration_toolkit_for_virtualization/index#adding-source-provider_dest_cnv)