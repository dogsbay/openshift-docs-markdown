---
title: "Managing {{ hcp }} on {{ ibm_power_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing {{ hcp }} on {{ ibm_power_title }} {id="hcp-manage-ibm-power"}
{%- set context = "hcp-manage-ibm-power" %}

After you deploy {{ hcp }} on {{ ibm_power_title }}, you can manage a hosted cluster.

{% leveloffset +1 %}{% include "./modules/hcp-ibm-power-infraenv.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-power-add-agents.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-power-scale-np.md" %}{% endleveloffset %}

**Additional resources**

*   [Initial Operator configuration](/installing/installing_ibm_power/installing-ibm-power#installation-operators-config)
*   [Scaling down the data plane to zero](/hosted_control_planes/hcp-troubleshooting#scale-down-data-plane_hcp-troubleshooting)