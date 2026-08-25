---
title: Using templates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using templates {id="using-templates"}
{%- set context = "using-templates" %}

You can use templates to deploy preconfigured applications and create reusable object definitions on your {{ product_title }} cluster. Upload, instantiate, and author templates from the web console or CLI to speed up application creation. {._abstract}

{% leveloffset +1 %}{% include "./modules/templates-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/templates-uploading.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/templates-creating-from-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/templates-using-the-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-cli-labels.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-cli-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-cli-generating-list-of-objects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/templates-modifying-uploaded-template.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/templates-using-instant-app-quickstart.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-quickstart.md" %}{% endleveloffset %}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/templates-writing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-writing-description.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-writing-labels.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-writing-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-writing-object-list.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-marking-as-bindable.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-exposing-object-fields.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-waiting-for-readiness.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-create-from-existing-object.md" %}{% endleveloffset %}