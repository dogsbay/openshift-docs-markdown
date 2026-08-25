{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Release notes {id="serverless-release-notes"}
{%- set context = "serverless-release-notes" %}


:::note

For additional information about the {{ ServerlessProductName }} life cycle and supported platforms, refer to the [Platform Life Cycle Policy](https://access.redhat.com/support/policy/updates/openshift#ossrvless).

:::


Release notes contain information about new and deprecated features, breaking changes, and known issues. The following release notes apply for the most recent {{ ServerlessProductName }} releases on {{ product_title }}.

For an overview of {{ ServerlessProductName }} functionality, see [About {{ ServerlessProductName }}](/serverless/about/about-serverless#about-serverless).


:::note

{{ ServerlessProductName }} is based on the open source Knative project.

For details about the latest Knative component releases, see the [Knative blog](https://knative.dev/blog/).

:::


{% leveloffset +1 %}{% include "./modules/serverless-api-versions.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-tech-preview-features.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-deprecated-removed-features.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-rn-1-28-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-rn-1-27-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-rn-1-26-0.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Knative documentation on new trigger filters](https://knative.dev/docs/eventing/experimental-features/new-trigger-filters/)

{% leveloffset +1 %}{% include "./modules/serverless-rn-1-25-0.md" %}{% endleveloffset %}
{%- if openshift_enterprise %}

**Additional resources**
{._additional-resources}

*   [Configuring TLS authentication](/serverless/knative-serving/config-applications/serverless-config-tls#serverless-config-tls) {._additional-resources}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/serverless-rn-1-24-0.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-rn-1-23-0.md" %}{% endleveloffset %}

{%- if openshift_enterprise %}

**Additional resources**
{._additional-resources}

*   [Source-to-Image](/openshift_images/using_images/using-s21-images#using-s21-images) {._additional-resources}
{%- endif %}

{%- if openshift_enterprise or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/serverless-rn-1-22-0.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-rn-1-21-0.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-rn-1-20-0.md" %}{% endleveloffset %}
{%- endif %}

{% if openshift_enterprise %}
{% leveloffset +1 %}{% include "./modules/serverless-rn-1-19-0.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-rn-1-18-0.md" %}{% endleveloffset %}
{% endif %}