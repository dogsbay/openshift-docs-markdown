---
title: Optimizing CPU usage with mount namespace encapsulation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Optimizing CPU usage with mount namespace encapsulation {id="optimizing-cpu-usage"}
{%- set context = "optimizing-cpu-usage" %}

You can optimize CPU usage in {{ product_title }} clusters by using mount namespace encapsulation to provide a private namespace for kubelet and CRI-O processes. This reduces the cluster CPU resources used by systemd with no difference in functionality. {._abstract}

{%- set FeatureName = "Mount namespace encapsulation" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/optimizing-by-encapsulation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/enabling-encapsulation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/supporting-encapsulation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/running-services-with-encapsulation.md" %}{% endleveloffset %}

## Additional resources {id="optimizing-cpu-usage-additional-resources" ._additional-resources}

*   [What are namespaces](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/monitoring_and_managing_system_status_and_performance/setting-limits-for-applications_monitoring-and-managing-system-status-and-performance#what-namespaces-are_setting-limits-for-applications)
*   [Manage containers in namespaces by using nsenter](https://www.redhat.com/sysadmin/container-namespaces-nsenter)
*   [MachineConfig](/rest_api/machine_apis/machineconfig-machineconfiguration-openshift-io-v1)