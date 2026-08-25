---
title: Troubleshooting the Source-to-Image process
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting the Source-to-Image process {id="troubleshooting-s2i"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "troubleshooting-s2i" %}

A cluster administrator can observe the S2I stages to determine where in the S2I process a failure occurred and gather diagnostic data to resolve Source-to-Image issues.

{% leveloffset +1 %}{% include "./modules/strategies-for-s2i-troubleshooting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gathering-s2i-diagnostic-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gathering-application-diagnostic-data.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated) %}
## Additional resources {id="_additional_resources"}

*   [Source-to-Image (S2I) build](/cicd/builds/build-strategies#build-strategy-s2i_build-strategies)
{% endif %}