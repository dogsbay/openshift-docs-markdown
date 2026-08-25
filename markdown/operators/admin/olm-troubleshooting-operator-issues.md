---
title: Troubleshooting Operator issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting Operator issues {id="olm-troubleshooting-operator-issues"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-troubleshooting-operator-issues" %}

If you experience Operator issues, verify Operator subscription status. Check Operator pod health across the cluster and gather Operator logs for diagnosis.

{% leveloffset +1 %}{% include "./modules/olm-status-conditions.md" %}{% endleveloffset %}

**Additional resources**

*   [Catalog health requirements](/operators/understanding/olm/olm-understanding-olm#olm-cs-health_olm-understanding-olm)

{% leveloffset +1 %}{% include "./modules/olm-status-viewing-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-cs-status-cli.md" %}{% endleveloffset %}

**Additional resources**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Operator Lifecycle Manager concepts and resources -> Catalog source](/operators/understanding/olm/olm-understanding-olm#olm-catalogsource_olm-understanding-olm)
{%- endif %}
*   [gRPC documentation: States of Connectivity](https://grpc.github.io/grpc/core/md_doc_connectivity-semantics-and-api.html)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Accessing images for Operators from private registries](/operators/admin/olm-managing-custom-catalogs#olm-accessing-images-private-registries_olm-managing-custom-catalogs)
{% endif %}

{% leveloffset +1 %}{% include "./modules/querying-operator-pod-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gathering-operator-logs.md" %}{% endleveloffset %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/troubleshooting-disabling-autoreboot-mco.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/troubleshooting-disabling-autoreboot-mco-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/troubleshooting-disabling-autoreboot-mco-cli.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/olm-refresh-subs.md" %}{% endleveloffset %}

{% endif %}

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/olm-reinstall.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

**Additional resources**

*   [Deleting Operators from a cluster](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster)
*   [Adding Operators to a cluster](/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)
{% endif %}