---
title: Creating quick start tutorials in the web console
---

{% if not (openshift_rosa or openshift_dedicated) %}
{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating quick start tutorials in the web console {id="creating-quick-start-tutorials"}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "creating-quick-start-tutorials" -%}
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About quick start tutorials {id="creating-quick-start-tutorials"}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "creating-quick-start-tutorials" -%}
{% endif %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
If you are creating quick start tutorials for the {{ product_title }} web console, follow these guidelines to keep a consistent user experience across all quick starts.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
Quick start tutorials guide you through completing tasks in the {{ product_title }} web console.
{% endif %}

{% leveloffset +1 %}{% include "./modules/understanding-quick-starts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quick-start-user-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quick-start-components.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/contributing-quick-starts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/viewing-quick-start-api-documentation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/understanding-quick-start-elements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/quick-start-adding-custom-icon.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/quick-start-limiting-access.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/quick-starts-linking-to-others.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/quick-starts-supported-tags.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/quick-starts-highlighting-reference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/quick-starts-accessing-and-executing-code-snippets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quick-start-content-guidelines.md" %}{% endleveloffset %}

## Additional resources {id="quick-start-tutorials-additional-resources"}

*   [PatternFly’s brand voice and tone guidelines](https://www.patternfly.org/ux-writing/brand-voice-and-tone)
*   [PatternFly’s UX writing style guide](https://www.patternfly.org/ux-writing/about)
{% endif %}