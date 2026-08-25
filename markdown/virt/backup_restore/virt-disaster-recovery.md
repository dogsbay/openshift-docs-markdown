---
title: Disaster recovery
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Disaster recovery {id="virt-disaster-recovery"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-disaster-recovery" %}

{{ VirtProductName }} supports using disaster recovery (DR) solutions to ensure that your environment can recover after a site outage. To use these methods, you must plan your {{ VirtProductName }} deployment in advance.

{% leveloffset +1 %}{% include "./modules/virt-about-dr-methods.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-disaster-recovery-defining-apps.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-vm-behavior-dr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-dr-solutions-rh-managed-clusters.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Red&#160;Hat {{ VirtProductName }} disaster recovery guide](https://access.redhat.com/articles/7041594)
*   [Configuring {{ rh_storage }} Disaster Recovery for OpenShift Workloads](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/latest/html/configuring_openshift_data_foundation_disaster_recovery_for_openshift_workloads/index)
*   [Metro-DR solution for {{ rh_storage }}](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html-single/configuring_openshift_data_foundation_disaster_recovery_for_openshift_workloads/index#metro-dr-solution)
*   [Regional-DR solution for {{ rh_storage }}](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/latest/html-single/configuring_openshift_data_foundation_disaster_recovery_for_openshift_workloads/index#rdr-solution)
*   [Use {{ rh_storage }} Disaster Recovery to Protect Virtual Machines (in the Red&#160;Hat Knowledgebase)](https://access.redhat.com/articles/7053115)
*   [Red&#160;Hat Advanced Cluster Management for Kubernetes 2.10](https://docs.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.10)