---
title: OpenShift Container Platform 4.22 Documentation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ product_title }} {{ product_version }} Documentation {id="welcome-index"}

{%- set context = "welcome-index" %}
{{ toc_title }}

Welcome to the official {{ product_title }}
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
{{ product_version }}
{%- endif %}
documentation, where you can learn about {{ product_title }} and start exploring its features. {._abstract}

{% if openshift_rosa or openshift_rosa_hcp %}
To learn about {{ product_title }}, interacting with {{ product_title }} by using {{ cluster_manager_first }} and command-line interface (CLI) tools, consumption experience, and integration with Amazon Web Services (AWS) services, start with
{%- if openshift_rosa_hcp %}
{{ product_title }} overview.
{%- endif %}
{%- if openshift_rosa %}
the "Introduction to ROSA" documentation.
{%- endif %}

![{{ product_title }}](/images/291_OpenShift_on_AWS_Intro_1122_docs.png)
{% endif %}

{% if openshift_rosa %}
To navigate the {{ product_title }} documentation, use the left navigation bar.
{% endif %}

{% if not (openshift_rosa or openshift_dedicated) %}
To navigate the {{ product_title }} {{ product_version }} documentation, you can use one of the following methods:

*   Use the navigation bar to browse the documentation.
*   Select the task that interests you from "Learn more about {{ product_title }}".
*   {{ product_title }} has a variety of layered offerings to add additional functionality and extend the capabilities of a cluster. For more information, see "{{ product_title }} Operator Life Cycles".
{% endif %}

{% if openshift_dedicated %}
To navigate the {{ product_title }} documentation, use the navigation bar.
{% endif %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

{% if openshift_rosa_hcp %}
*   [{{ product_title }} overview](/rosa_architecture/about-hcp#about-hcp)
{% endif %}
{% if openshift_rosa %}
*   [Introduction to ROSA](/rosa_architecture/rosa-understanding#rosa-understanding)
{% endif %}
{% if not (openshift_rosa or openshift_dedicated) %}
*   [Learn more about {{ product_title }}](/welcome/learn_more_about_openshift#learn_more_about_openshift)
{%- endif %}
*   [{{ product_title }} Operator Life Cycles](https://access.redhat.com/support/policy/updates/openshift_operators)