---
title: Disabling Windows container workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Disabling Windows container workloads {id="disabling-windows-container-workloads"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "disabling-windows-container-workloads" %}

You can disable the capability to run Windows container workloads by uninstalling the Windows Machine Config Operator (WMCO) and deleting the namespace that was added by default when you installed the WMCO.

{% leveloffset +1 %}{% include "./modules/uninstalling-wmco.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deleting-wmco-namespace.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Deleting Operators from a cluster](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster)
*   [Removing Windows nodes](/windows_containers/removing-windows-nodes#removing-windows-nodes)