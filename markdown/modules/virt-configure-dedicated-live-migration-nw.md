{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure a dedicated network for live migration {id="virt-configure-dedicated-live-migration-nw_{{ context }}"}

You can configure a dedicated secondary network for virtual machine (VM) live migration to minimize the effects of network saturation on tenant workloads during migration. {._abstract}

## Additional resources {id="additional-resources-virt-configure-dedicated-live-migration-nw_{{ context }}" ._additional-resources}
*   [Configuring live migration limits and timeouts](/virt/live_migration/virt-configuring-live-migration#virt-configuring-live-migration)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Connecting a VM to a Linux bridge network](/virt/vm_networking/virt-connecting-vm-to-linux-bridge#virt-connecting-vm-to-linux-bridge)
{%- endif %}