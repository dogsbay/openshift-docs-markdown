---
title: Associating secondary interfaces metrics to network attachments
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Associating secondary interfaces metrics to network attachments {id="associating-secondary-interfaces-metrics-to-network-attachments"}
{%- set context = "secondary-interfaces-metrics" %}

To gain better visibility into cluster traffic, you can associate secondary interface metrics with specific network attachments. By using the `pod_network_info` metric to label interfaces based on their `NetworkAttachmentDefinition` resource, you can more easily monitor performance and troubleshoot connectivity issues across your network. {._abstract}

{% leveloffset +1 %}{% include "./modules/cnf-associating-secondary-interfaces-metrics-to-network-attachments.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-network-metrics-daemon.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-metrics-secondary-interfaces-by-name.md" %}{% endleveloffset %}