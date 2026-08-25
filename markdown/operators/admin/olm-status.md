---
title: Viewing Operator status
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Viewing Operator status {id="olm-status"}
{%- set context = "olm-status" %}

You can view the status of installed Operators in {{ product_title }} through Operator Lifecycle Manager (OLM). OLM reports subscription and catalog source conditions to help you assess Operator health. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-status-conditions.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Refreshing failing subscriptions](/operators/admin/olm-deleting-operators-from-cluster#olm-refresh-subs_olm-deleting-operators-from-a-cluster)

{% leveloffset +1 %}{% include "./modules/olm-status-viewing-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-cs-status-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Operator Lifecycle Manager concepts and resources → Catalog source](/operators/understanding/olm/olm-understanding-olm#olm-catalogsource_olm-understanding-olm)
*   [gRPC documentation: States of Connectivity](https://grpc.github.io/grpc/core/md_doc_connectivity-semantics-and-api.html)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Accessing images for Operators from private registries](/operators/admin/olm-managing-custom-catalogs#olm-accessing-images-private-registries_olm-managing-custom-catalogs)
{%- endif %}