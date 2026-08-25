---
title: Manually scaling a compute machine set
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Manually scaling a compute machine set {id="manually-scaling-machineset"}
{%- set context = "manually-scaling-machineset" %}

You can manually add or remove an instance of a machine in a compute machine set. Manually scaling a compute machine set gives you control over the resource utilization of that machine set. {._abstract}


:::note

If you need to modify aspects of a compute machine set outside of scaling, see "Modifying a compute machine set".

:::


## Prerequisites {id="_prerequisites"}

*   If you enabled the cluster-wide proxy and scale up compute machines not included in `networking.machineNetwork[].cidr` from the installation configuration, you must add the compute machines to the Proxy object’s `noProxy` field to prevent connection issues. See "Add the compute machines to the Proxy object’s `noProxy` field" for more information.

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-manually-scaling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-delete-policy.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_manually-scaling-machineset" ._additional-resources}
*   [Modifying a compute machine set](/machine_management/modifying-machineset#modifying-machineset)
*   [Add the compute machines to the Proxy object’s `noProxy` field](/networking/configuring_network_settings/enable-cluster-wide-proxy#nw-proxy-configure-object_config-cluster-wide-proxy)
*   [Lifecycle hooks for the machine deletion phase](/machine_management/deleting-machine#machine-lifecycle-hook-deletion_deleting-machine)