---
title: Planning your environment according to object maximums
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Planning your environment according to object maximums {id="planning-your-environment-according-to-object-maximums"}
{%- set context = "object-limits" %}

To ensure your cluster meets performance and scalability requirements, plan your environment according to tested object maximums. By reviewing these limits, you can design a {{ product_title }} deployment that operates reliably within supported boundaries. {._abstract}

The example guidelines are based on the largest possible cluster. For smaller clusters, the maximums are lower. There are many factors that influence the stated thresholds, including the etcd version or storage data format. In most cases, exceeding these numbers results in lower overall performance but might not cause your cluster to fail.


:::warning

Clusters that experience rapid change, such as those with many starting and stopping pods, can have a lower practical maximum size than documented.

:::


{% leveloffset +1 %}{% include "./modules/openshift-cluster-maximums-major-releases.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/openshift-cluster-maximums-environment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/how-to-plan-your-environment-according-to-cluster-maximums.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/how-to-plan-your-environment-according-to-application-requirements.md" %}{% endleveloffset %}