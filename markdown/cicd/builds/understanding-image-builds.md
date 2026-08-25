---
title: Understanding image builds
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding image builds {id="understanding-image-builds"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "understanding-image-builds" %}

{% leveloffset +1 %}{% include "./modules/builds-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-docker-build.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-s2i-build.md" %}{% endleveloffset %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +2 %}{% include "./modules/builds-strategy-custom-build.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +2 %}{% include "./modules/builds-strategy-pipeline-build.md" %}{% endleveloffset %}