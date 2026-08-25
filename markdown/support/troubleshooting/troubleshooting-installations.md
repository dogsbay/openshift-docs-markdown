---
title: Troubleshooting installations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting installations {id="troubleshooting-installations"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "troubleshooting-installations" %}

Use the following sections to troubleshoot {{ product_title }} installation issues.

{% leveloffset +1 %}{% include "./modules/determining-where-installation-issues-occur.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/upi-installation-considerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/checking-load-balancer-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/specifying-openshift-installer-log-levels.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-openshift-install-command-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/monitoring-installation-progress.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gathering-bootstrap-diagnostic-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/investigating-master-node-installation-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/investigating-etcd-installation-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/investigating-kubelet-api-installation-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/investigating-worker-node-installation-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/querying-operator-status-after-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-bootstrap-gather.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated) %}
## Additional resources {id="_additional_resources"}

*   [Installation process](/architecture/architecture-installation#installation-process_architecture-installation)
{% endif %}