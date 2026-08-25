---
title: Understanding update channels and releases
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding update channels and releases {id="understanding-update-channels-releases"}
{%- set context = "understanding-update-channels-releases" %}

Update channels are the mechanism by which users declare the {{ product_title }} minor version they intend to update their clusters to. They also allow users to choose the timing and level of support their updates will have through the `fast`, `stable`, `candidate`, and `eus` channel options. {._abstract}

The Cluster Version Operator uses an update graph based on the channel declaration, along with other conditional information, to provide a list of recommended and conditional updates available to the cluster.

{% leveloffset +1 %}{% include "./modules/understanding-update-channels-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/understanding-update-channels.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/understanding-update-channels-restricted.md" %}{% endleveloffset %}

{% if not openshift_origin %}
{% leveloffset +1 %}{% include "./modules/understanding-update-recs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/understanding-update-recs-conditional.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/understanding-update-channels-choosing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/understanding-update-channels-switching.md" %}{% endleveloffset %}

{% endif %}