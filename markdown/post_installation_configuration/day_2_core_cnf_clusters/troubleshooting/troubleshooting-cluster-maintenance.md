---
title: Cluster maintenance
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Cluster maintenance {id="troubleshooting-cluster-maintenance"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "troubleshooting-cluster-maintenance" %}

When deploying {{ product_title }} on bare-metal infrastructure, you must pay more attention to certain configurations which can have a significant impact on cluster stability.
You can troubleshoot more effectively by completing these tasks:

*   Monitor for failed or failing hardware components
*   Periodically check the status of the cluster Operators


:::note

For hardware monitoring, contact your hardware vendor to find the appropriate logging tool for your specific hardware.

:::


{% leveloffset +1 %}{% include "./modules/troubleshooting-clusters-check-cluster-operators.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/troubleshooting-clusters-check-for-failed-pods.md" %}{% endleveloffset %}