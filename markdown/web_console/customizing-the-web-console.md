---
title: Customizing the web console in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Customizing the web console in {{ product_title }} {id="customizing-web-console"}

{%- set context = "customizing-web-console" %}

You can customize the
{%- if not (openshift_rosa_hcp or openshift_rosa or openshift_dedicated) %}
{{ product_title }}
{%- endif %}
{%- if openshift_rosa_hcp or openshift_rosa or openshift_dedicated %}
{{ product_title }}
{%- endif %}
web console to set
{%- if not (openshift_rosa_hcp or openshift_rosa or openshift_dedicated) %}
a custom logo, product name, links, notifications, and command-line downloads.
{%- endif %}
{%- if openshift_rosa_hcp or openshift_rosa or openshift_dedicated %}
a custom logo and product name.
{%- endif %}
This is especially helpful if you need to tailor the web console to meet specific corporate or government requirements. {._abstract}

{% leveloffset +1 %}{% include "./modules/adding-a-custom-logo.md" %}{% endleveloffset %}

{%- if not (openshift_rosa_hcp or openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/creating-custom-links.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customizing-console-and-download-routes-overview.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/customizing-the-console-route.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/customizing-the-download-route.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_rosa_hcp or openshift_rosa or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/customizing-the-login-page.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/defining-template-for-external-log-link.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/adding-custom-notification-banners.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customizing-cli-downloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/adding-yaml-examples-to-kube-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc-customizing-user-perspectives.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/odc-customizing-a-perspective-using-YAML-view.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/odc-customizing-a-perspective-using-form-view.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/odc_con_customizing-a-developer-catalog-or-its-sub-catalogs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/odc_customizing-a-developer-catalog-or-its-sub-catalogs-using-the-yaml-view.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/odc_customizing-a-developer-catalog-or-its-sub-catalogs-using-the-form-view.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/odc_con_example-yaml-file-changes.md" %}{% endleveloffset %}

{% endif %}