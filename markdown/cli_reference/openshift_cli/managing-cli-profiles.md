---
title: Managing CLI profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing CLI profiles {id="managing-cli-profiles"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "managing-cli-profiles" %}

You can use a CLI configuration file to create different profiles, or contexts, for use with the {{ oc_first }}. A context consists of user authentication and a {{ product_title }} server information associated with a _nickname_.

{% leveloffset +1 %}{% include "./modules/about-cli-profiles-switch.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manual-configuration-of-cli-profiles-example.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manual-configuration-of-cli-profiles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/load-and-merge-rules.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_managing-cli-profiles"}

*   [CLI tools overview](/cli_reference/index#cli-tools-overview)
{%- if not (microshift or openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Understanding authentication](/authentication/understanding-authentication#understanding-authentication)
{% endif %}