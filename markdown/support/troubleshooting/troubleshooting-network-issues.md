---
title: Troubleshooting network issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting network issues {id="troubleshooting-network-issues"}

{%- set context = "troubleshooting-network-issues" %}

Use the following sections to troubleshoot network issues. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-how-nw-iface-selected.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/overriding-default-node-ip-selection-logic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-ovnk-use-second-ovs-bridge.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configure an external gateway on the default network](/networking/ovn_kubernetes_network_provider/configuring-secondary-external-gateway#configuring-secondary-external-gateway)

{% leveloffset +1 %}{% include "./modules/nw-troubleshoot-ovs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-ovs-log-level-temp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-ovs-log-level-permanently.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding the Machine Config Operator](/machine_configuration/index#machine-config-operator_machine-config-overview)
*   [Checking machine config pool status](/machine_configuration/index#checking-mco-status_machine-config-overview)

{% leveloffset +2 %}{% include "./modules/displaying-ovs-logs.md" %}{% endleveloffset %}