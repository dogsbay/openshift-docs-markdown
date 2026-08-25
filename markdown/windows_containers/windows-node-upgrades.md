---
title: Windows node updates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Windows node updates {id="windows-node-upgrades"}
{%- set context = "windows-node-upgrades" %}

You can ensure your Windows nodes have the latest updates by updating the Windows Machine Config Operator (WMCO). {._abstract}

You can update the WMCO in any of the following scenarios:

*   Within the current version. for example, from &lt;10.y.z> to &lt;10.y.z+1>.
*   To a new, contiguous version. For example, from &lt;10.y> to &lt;10.y+1>.
*   From an EUS version to another EUS version by using a Control Plane Only update. For example, from &lt;10.y> to &lt;10.y+2>.

{% leveloffset +1 %}{% include "./modules/wmco-upgrades.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/windows-upgrades-eus.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/wmco-upgrades-eus-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/wmco-upgrades-eus-using-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
*   [Performing a Control Plane Only update](/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update)
*   [Installing the Windows Machine Config Operator using the CLI](/windows_containers/enabling-windows-container-workloads#installing-wmco-using-cli_enabling-windows-container-workloads)
*   [Deleting Operators from a cluster using the CLI](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operator-from-a-cluster-using-cli_olm-deleting-operators-from-a-cluster)