---
title: "Monitoring MetalLB configuration status {id=\"monitoring-metallb-status\"\"}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring MetalLB configuration status {id="monitoring-metallb-status""}
{%- set context = "monitor-metallb-config-status" %}

As an {{ product_title }} system administrator, you can monitor the operational status of your MetalLB deployment by examining its custom resources (CRs). These status fields provide information about IP address allocations, BGP peer announcements, and session states, which are important for effective monitoring and troubleshooting. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-metallb-status-reporting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-viewing-ipaddresspool-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-viewing-servicebgpstatus.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-verifying-bgp-session.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-checking-configuration-status.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)