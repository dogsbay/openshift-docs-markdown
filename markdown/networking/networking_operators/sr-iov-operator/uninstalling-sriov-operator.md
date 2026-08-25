---
title: Uninstalling the SR-IOV Network Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling the SR-IOV Network Operator {id="uninstalling-sriov-operator"}
{%- set context = "uninstalling-sr-iov-operator" %}

To uninstall the SR-IOV Network Operator, you must delete any running SR-IOV workloads, uninstall the Operator, and delete the webhooks that the Operator used. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-sriov-operator-uninstall.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Deleting Operators from a cluster](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster)