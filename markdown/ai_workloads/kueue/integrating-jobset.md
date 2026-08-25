---
title: "Integrating the {{ js_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Integrating the {{ js_operator }} {id="integrating-jobset"}
{%- set context = "integrating-jobset" %}

You can integrate {{ js_operator }} with {{ kueue_name }} so you can leverage the scheduling and resource management functionality provided by {{ kueue_name }} when running the {{ js_operator }}. {._abstract}

You can use the {{ js_operator }} to manage and run large-scale, coordinated workloads like high-performance computing (HPC) and AI training.

The {{ js_operator }} models a distributed batch workload as a group of Kubernetes Jobs. This allows you to easily specify different pod templates for different distinct groups of pods, for example, a leader, workers, parameter servers, and so on. 

{% leveloffset +1 %}{% include "./modules/kueue-installing-jobset.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the {{ js_operator }}](/ai_workloads/jobset_operator/index#js-about_js-about)
*   [Run A JobSet (Kubernetes documentation)](https://kueue.sigs.k8s.io/docs/tasks/run/jobsets/)
*   [Installing the {{ cert_manager_operator }} by using the web console](/security/cert_manager_operator/cert-manager-operator-install#installing-the-cert-manager-operator-for-red-hat-openshift)

{% leveloffset +1 %}{% include "./modules/kueue-running-jobset.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring a cluster queue](/ai_workloads/kueue/configuring-quotas#configuring-clusterqueues_configuring-quotas)
*   [Configuring a resource flavor](/ai_workloads/kueue/configuring-quotas#configuring-resourceflavors_configuring-quotas)
*   [Configuring a local queue](/ai_workloads/kueue/configuring-quotas#configuring-localqueues_configuring-quotas)