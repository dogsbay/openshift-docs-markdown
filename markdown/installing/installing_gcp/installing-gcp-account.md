---
title: "Configuring a {{ gcp_short }} project"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring a {{ gcp_short }} project {id="installing-gcp-account"}
{%- set context = "installing-gcp-account" %}

Before you can install {{ product_title }}, you must configure a {{ gcp_first }} project to host it. You can configure custom roles and permissions, DNS configuration, and manage your own {{ gcp_short }} firewall rules.

{% leveloffset +1 %}{% include "./modules/installation-gcp-project.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-enabling-api-services.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-limits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-service-account.md" %}{% endleveloffset %}

**Additional resources**

*   [Reducing permissions while using the {{ gcp_short }} CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-gcp-pd#persistent-storage-csi-gcp-pd-reduce-permissions_persistent-storage-csi-gcp-pd)

{% leveloffset +2 %}{% include "./modules/installation-gcp-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/minimum-required-permissions-ipi-gcp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/minimum-required-permissions-ipi-gcp-xpn.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/minimum-required-permissions-ipi-gcp-provided-sas.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-managed-firewall-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-organization-policies.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-regions.md" %}{% endleveloffset %}

## Next steps {id="_next_steps"}

*   Install an {{ product_title }} cluster on {{ gcp_short }}. You can
[install a customized cluster](/installing/installing_gcp/installing-gcp-customizations#installing-gcp-customizations)
or [quickly install a cluster](/installing/installing_gcp/installing-gcp-default#installing-gcp-default)
with default options.