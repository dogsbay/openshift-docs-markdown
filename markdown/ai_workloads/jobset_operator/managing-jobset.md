---
title: "Managing workloads with the {{ js_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing workloads with the {{ js_operator }} {id="js-managing"}

{%- set context = "js-managing" %}

Use the {{ js_operator }} on {{ product_title }} to manage and run large-scale, coordinated workloads like high-performance computing (HPC) and AI training. Features like multi-template job support and stable networking can help you recover quickly and use resources efficiently. {._abstract}

{% leveloffset +1 %}{% include "./modules/jobset-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/jobset-coordinator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/jobset-failure-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/jobset-volume-claim-policies.md" %}{% endleveloffset %}

## Additional resources {id="js-managing_additional-resources" ._additional-resources}

*   [JobSet documentation (Kubernetes)](https://jobset.sigs.k8s.io/docs/overview/)
*   [Failure Policy (Kubernetes)](https://jobset.sigs.k8s.io/docs/tasks/failure_policy/)