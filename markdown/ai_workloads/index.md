---
title: Overview of AI workloads on OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Overview of AI workloads on {{ product_title }} {id="ai-workloads-about"}

{%- set context = "ai-workloads-about" %}

{{ product_title }} provides a secure, scalable foundation for running artificial intelligence (AI) workloads across training, inference, and data science workflows. {._abstract}

{% leveloffset +1 %}{% include "./modules/ai-operators.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Introduction to {{ kueue_name }}](/ai_workloads/kueue/about-kueue#about-kueue)
*   [{{ lws_operator }} overview](/ai_workloads/leader_worker_set/index#lws-about)
*   [{{ js_operator }} overview](/ai_workloads/jobset_operator/index#js-about)