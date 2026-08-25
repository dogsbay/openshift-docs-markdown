---
title: Creating applications using Ruby on Rails
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating applications using Ruby on Rails {id="templates-using-ruby-on-rails"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "templates-ruby-on-rails" %}

You can build and deploy a Ruby on Rails 4 application on {{ product_title }} by developing it locally.

Store the source in Git, then deploy the database, frontend, and route services. With this process, you can validate your application locally before deploying it to the cluster as a set of distinct services.


:::warning

You must complete each part of this tutorial in order to before you deploy your application on {{ product_title }}. If a step fails, confirm that every preceding step completed successfully before you continue.

:::


## Prerequisites {id="_prerequisites"}

*   You have basic Ruby on Rails knowledge.
*   You have Ruby 2.0.0+, Rubygems, and Bundler installed locally.
*   You have basic Git knowledge.
{%- if not openshift_online %}
*   You have a running instance of {{ product_title }} 4.
{% endif %}
{% if openshift_online %}
*   You have a provisioned account in OpenShift Online.
{%- endif %}
*   The {{ oc_first }} installed.
*   You are logged into a running {{ product_title }} cluster.

{% leveloffset +1 %}{% include "./modules/templates-rails-setting-up-database.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/templates-rails-writing-application.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-rails-creating-welcome-page.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-rails-configuring-application.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-rails-storing-application-in-git.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/templates-rails-deploying-application.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-rails-creating-database-service.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-rails-creating-frontend-service.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/templates-rails-creating-route-for-application.md" %}{% endleveloffset %}