---
title: Operator Lifecycle Manager concepts and resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Operator Lifecycle Manager concepts and resources {id="olm-understanding-olm"}
{%- set context = "olm-understanding-olm" %}

Key concepts for understanding Operator Lifecycle Manager (OLM) include cluster service versions (CSVs), catalog sources, subscriptions, and Operator groups. {._abstract}

{% leveloffset +1 %}{% include "./modules/olm-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-crds.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-csv.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-catalogsource.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding the software catalog](/operators/understanding/olm-understanding-software-catalog#olm-understanding-software-catalog)
*   [Red Hat-provided Operator catalogs](/operators/understanding/olm-rh-catalogs#olm-rh-catalogs)
*   [Adding a catalog source to a cluster](/operators/admin/olm-managing-custom-catalogs#olm-creating-catalog-from-index_olm-managing-custom-catalogs)
*   [Catalog priority](/operators/understanding/olm/olm-understanding-dependency-resolution#olm-dependency-catalog-priority_olm-understanding-dependency-resolution)
*   [Viewing Operator catalog source status by using the CLI](/operators/admin/olm-status#olm-cs-status-cli_olm-status)
*   [States of Connectivity (gRPC documentation)](https://grpc.github.io/grpc/core/md_doc_connectivity-semantics-and-api.html)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Understanding and managing pod security admission](/authentication/understanding-and-managing-pod-security-admission#understanding-and-managing-pod-security-admission)
{%- endif %}
*   [Catalog source pod scheduling](/operators/admin/olm-cs-podsched#olm-cs-podsched)

{% leveloffset +3 %}{% include "./modules/olm-catalogsource-image-template.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/olm-cs-health.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

**Additional resources**
{._additional-resources}

*   [Removing custom catalogs](/operators/admin/olm-managing-custom-catalogs#olm-removing-catalogs_olm-managing-custom-catalogs)
*   [Disabling the default OperatorHub catalog sources](/operators/admin/olm-managing-custom-catalogs#olm-restricted-networks-operatorhub_olm-managing-custom-catalogs)
{% endif %}

{% leveloffset +2 %}{% include "./modules/olm-subscription.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Multitenancy and Operator colocation](/operators/understanding/olm/olm-colocation#olm-colocation)
{%- endif %}
*   [Viewing Operator subscription status by using the CLI](/operators/admin/olm-status#olm-status-viewing-cli_olm-status)

{% leveloffset +2 %}{% include "./modules/olm-installplan.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

**Additional resources**
{._additional-resources}

*   [Multitenancy and Operator colocation](/operators/understanding/olm/olm-colocation#olm-colocation)
*   [Allowing non-cluster administrators to install Operators](/operators/admin/olm-creating-policy#olm-creating-policy)
{% endif %}

{% leveloffset +2 %}{% include "./modules/olm-operatorgroups-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Operator groups](/operators/understanding/olm/olm-understanding-operatorgroups#olm-understanding-operatorgroups)

{% leveloffset +2 %}{% include "./modules/olm-operatorconditions-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Operator conditions](/operators/understanding/olm/olm-operatorconditions#olm-operatorconditions)