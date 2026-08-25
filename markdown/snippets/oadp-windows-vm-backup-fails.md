{%- set _mod_docs_content_type = "SNIPPET" %}


:::warning

If you run a backup of a Microsoft Windows virtual machine (VM) immediately after the VM reboots, the backup might fail with a `PartiallyFailed` error. This is because, immediately after a VM boots, the Microsoft Windows Volume Shadow Copy Service (VSS) and Guest Agent (GA) service are not ready. The VSS and GA service being unready causes the backup to fail. In such a case, retry the backup a few minutes after the VM boots.

:::