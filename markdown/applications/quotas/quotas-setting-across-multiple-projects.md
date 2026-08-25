---
title: Resource quotas across multiple projects
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Resource quotas across multiple projects {id="setting-quotas-across-multiple-projects"}
{%- set context = "setting-quotas-across-multiple-projects" %}

A multi-project quota, defined by a `ClusterResourceQuota` object, shares quotas across multiple projects. The system aggregates the resources used in each selected project and applies the aggregate limit across all selected projects. {._abstract}

This guide describes how cluster administrators can set and manage resource quotas across multiple projects.

{% include "./snippets/default-projects.md" %}

{% leveloffset +1 %}{% include "./modules/quotas-selecting-projects.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-viewing-clusterresourcequotas.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/quotas-selection-granularity.md" %}{% endleveloffset %}