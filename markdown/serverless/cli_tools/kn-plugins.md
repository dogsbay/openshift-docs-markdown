{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Knative CLI plugins {id="kn-plugins"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "kn-plugins" %}

The Knative (`kn`) CLI supports the use of plugins, which enable you to extend the functionality of your `kn` installation by adding custom commands and other shared commands that are not part of the core distribution. Knative (`kn`) CLI plugins are used in the same way as the main `kn` functionality.

Currently, Red Hat supports the `kn-source-kafka` plugin and the `kn-event` plugin.

{%- set FeatureName = "The `kn-event` plugin" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-build-events-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-send-events-kn.md" %}{% endleveloffset %}