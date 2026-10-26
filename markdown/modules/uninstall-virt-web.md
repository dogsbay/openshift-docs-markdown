{%- set _mod_docs_content_type = "CONCEPT" %}
# Uninstallation of {{ VirtProductName }} by using the web console {id="uninstall-virt_{{ context }}"}

You can uninstall {{ VirtProductName }} by using the web console to delete {{ VirtProductName }} workloads, the Operator, and its resources. {._abstract}

To uninstall {{ VirtProductName }}, perform the following tasks:

1.  Delete the `HyperConverged` CR.
1.  Delete the {{ VirtProductName }} Operator.
1.  Delete the `{{ CNVNamespace }}`{minja} namespace.
1.  Delete the {{ VirtProductName }} custom resource definitions (CRDs).

**Prerequisites**

*   All virtual machine instances are deleted. You cannot uninstall {{ VirtProductName }} while its workloads remain on the cluster.

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Delete a virtual machine using the web console](/virt/managing_vms/virt-delete-vms#virt-delete-vm-web_virt-delete-vms)
*   [Delete a standalone virtual machine instance using the CLI](/virt/managing_vms/virt-manage-vmis#virt-deleting-vmis-cli_virt-manage-vmis)