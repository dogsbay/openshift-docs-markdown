---
title: Network considerations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Network considerations {id="planning-considerations-3-4"}
{%- set context = "planning-considerations-3-4" %}

Review the strategies for redirecting your application network traffic after migration.

## DNS considerations {id="dns-considerations_{{ context }}"}

The DNS domain of the target cluster is different from the domain of the source cluster. By default, applications get FQDNs of the target cluster after migration.

To preserve the source DNS domain of migrated applications, select one of the two options described below.

{% leveloffset +2 %}{% include "./modules/migration-isolating-dns-domain-of-target-cluster-from-clients.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/migration-setting-up-target-cluster-to-accept-source-dns-domain.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   See [Replacing the default ingress certificate](/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress) for more information.

{% leveloffset +1 %}{% include "./modules/migration-network-traffic-redirection-strategies.md" %}{% endleveloffset %}