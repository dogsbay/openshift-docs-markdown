---
title: "Uninstalling {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling {{ VirtProductName }} {id="uninstalling-virt"}
{%- set context = "uninstalling-virt" %}

You can uninstall {{ VirtProductName }} by using the web console or the command-line interface (CLI) to delete {{ VirtProductName }} workloads, the Operator, and its resources. {._abstract}

To uninstall {{ VirtProductName }}, perform the following tasks:

1.  Delete the `HyperConverged` CR.
1.  Delete the {{ VirtProductName }} Operator.
1.  Delete the `openshift-cnv` namespace.
1.  Delete the {{ VirtProductName }} custom resource definitions (CRDs).

## Prerequisites {id="prerequisites_{{ context }}"}

*   Delete all virtual machine instances. You cannot uninstall {{ VirtProductName }} while its workloads remain on the cluster.

{% leveloffset +1 %}{% include "./modules/virt-deleting-deployment-custom-resource.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/olm-deleting-operators-from-a-cluster-using-web-console.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/deleting-a-namespace-using-the-web-console.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-deleting-virt-crds-web.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/virt-deleting-virt-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Deleting the `HyperConverged` custom resource](/virt/install/uninstalling-virt#virt-deleting-deployment-custom-resource_uninstalling-virt)
*   [Deleting Operators from a cluster using the web console](/virt/install/uninstalling-virt#olm-deleting-operators-from-a-cluster-using-web-console_uninstalling-virt)
*   [Deleting a namespace using the web console](/virt/install/uninstalling-virt#deleting-a-namespace-using-the-web-console_uninstalling-virt)
*   [Deleting {{ VirtProductName }} custom resource definitions](/virt/install/uninstalling-virt#virt-deleting-virt-crds-web_uninstalling-virt)
*   [Deleting a virtual machine using the web console](/virt/managing_vms/virt-delete-vms#virt-delete-vm-web_virt-delete-vms)
*   [Deleting a standalone virtual machine instance using the CLI](/virt/managing_vms/virt-manage-vmis#virt-deleting-vmis-cli_virt-manage-vmis)