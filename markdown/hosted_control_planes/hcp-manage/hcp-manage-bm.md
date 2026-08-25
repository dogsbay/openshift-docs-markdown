---
title: "Managing {{ hcp }} on bare metal"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing {{ hcp }} on bare metal {id="hcp-manage-bm"}
{%- set context = "hcp-manage-bm" %}

After you deploy {{ hcp }} on bare metal, you can manage a hosted cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/hcp-bm-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-bm-scale-np.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-add-np.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-autoscale.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-bm-autoscale-disable.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Scaling down the data plane to zero](/hosted_control_planes/hcp-troubleshooting#scale-down-data-plane_hcp-troubleshooting)
*   [Scaling up and down workloads in a hosted cluster](/hosted_control_planes/hcp-machine-config#scale-up-down-autoscaler-hcp_hcp-machine-config)

{% leveloffset +1 %}{% include "./modules/hcp-bm-ingress.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb_about-metallb)

{% leveloffset +1 %}{% include "./modules/hcp-bm-machine-health.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-bm-machine-health-disable.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Deploying machine health checks](/machine_management/deploying-machine-health-checks#deploying-machine-health-checks)