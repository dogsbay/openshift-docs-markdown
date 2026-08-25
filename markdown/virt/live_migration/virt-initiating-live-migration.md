---
title: Initiating and canceling live migration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Initiating and canceling live migration {id="virt-initiating-live-migration"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-initiating-live-migration" %}

To move a running virtual machine (VM) to a different node without interrupting the workload, you can initiate a live migration. You can also cancel an ongoing migration to keep the VM on its original node.

You can initiate the live migration of a virtual machine (VM) to another node by using the {{ product_title }} web console or the command line.

You can cancel a live migration by using the web console or the command line. The VM remains on its original node.


:::tip

You can also initiate and cancel live migration by using the `virtctl migrate <vm_name>` and `virtctl migrate-cancel <vm_name>` commands.

:::


{% leveloffset +1 %}{% include "./modules/virt-initiating-vm-migration-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-initiating-vm-migration-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-canceling-vm-migration-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-canceling-vm-migration-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [About live migration permissions](/virt/live_migration/virt-about-live-migration#virt-about-live-migration-permissions_virt-about-live-migration)
*   [Initiating live migration by using the web console](/virt/live_migration/virt-initiating-live-migration#virt-initiating-vm-migration-web_virt-initiating-live-migration)
*   [Initiating live migration by using the CLI](/virt/live_migration/virt-initiating-live-migration#virt-initiating-vm-migration-cli_virt-initiating-live-migration)
*   [Canceling live migration by using the web console](/virt/live_migration/virt-initiating-live-migration#virt-canceling-vm-migration-web_virt-initiating-live-migration)
*   [Canceling live migration by using the CLI](/virt/live_migration/virt-initiating-live-migration#virt-canceling-vm-migration-cli_virt-initiating-live-migration)