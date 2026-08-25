---
title: Connecting service meshes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Connecting service meshes {id="ossm-federation"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "federation" %}

_Federation_ is a deployment model that lets you share services and workloads between separate meshes managed in distinct administrative domains.

{% leveloffset +1 %}{% include "./modules/ossm-federation-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-features.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-security.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-planning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-across-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-checklist.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-config-smcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-config-meshPeer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-federation-create-meshPeer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-config-export.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-federation-create-export.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-config-import.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-federation-create-import.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-config-failover-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-federation-config-importedserviceset-failover.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-federation-config-destinationrule-failover.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-remove-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-federation-remove-mesh.md" %}{% endleveloffset %}