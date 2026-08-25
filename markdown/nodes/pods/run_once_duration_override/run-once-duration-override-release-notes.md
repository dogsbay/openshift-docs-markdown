---
title: Run Once Duration Override Operator release notes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Run Once Duration Override Operator release notes {id="run-once-duration-override-release-notes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "run-once-duration-override-release-notes" %}

The {{ run_once_operator }} sets a maximum active deadline on run-once pods, terminating pods that exceed the configured duration.

To apply the run-once duration override from the {{ run_once_operator }} to run-once pods, you must enable it on each applicable namespace.

These release notes track the development of the {{ run_once_operator }} for {{ product_title }}.

**Additional resources**

*   [About the {{ run_once_operator }}](/nodes/pods/run_once_duration_override/index#rodoo-about_run-once-duration-override-about)

{% leveloffset +1 %}{% include "./modules/rodoo-rn-1-4-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rodoo-rn-1-4-0.md" %}{% endleveloffset %}