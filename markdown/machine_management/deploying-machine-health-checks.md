---
title: Deploying machine health checks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying machine health checks {id="deploying-machine-health-checks"}
{%- set context = "deploying-machine-health-checks" %}

You can configure and deploy a machine health check to automatically repair damaged machines in a machine pool. {._abstract}

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-health-checks-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About listing all the nodes in a cluster](/nodes/nodes/nodes-nodes-viewing#nodes-nodes-viewing-listing_nodes-nodes-viewing)
*   [Short-circuiting machine health check remediation](/machine_management/deploying-machine-health-checks#machine-health-checks-short-circuiting_deploying-machine-health-checks)
*   [About the Control Plane Machine Set Operator](/machine_management/control_plane_machine_management/cpmso-about#cpmso-about)

{% leveloffset +1 %}{% include "./modules/machine-health-checks-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-health-checks-short-circuiting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-health-checks-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mgmt-power-remediation-baremetal-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mgmt-power-remediation-baremetal-about-creating-mhc-baremetal.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mgmt-power-remediation-baremetal-about-troubleshooting.md" %}{% endleveloffset %}