{%- set _mod_docs_content_type = "CONCEPT" %}
# When to use {{ oadp_short }} VMFR {id="oadp-vmfr-use-scenarios_{{ context }}"}

Review the following scenarios where {{ oadp_short }} virtual machine file restore (VMFR) addresses common file recovery challenges. This helps you determine whether VMFR is the appropriate solution for your use case. {._abstract}


Configuration issue investigation
:   You have a production virtual machine (VM) that has a configuration issue. You need to compare configuration files from before and after the incident. Without VMFR, you have to restore multiple full VMs and perform manual file comparisons, which uses significant time and resources. With VMFR, you can browse files from multiple backup versions simultaneously and compare configurations without restoring any VMs.


Selective file recovery
:   You accidentally delete critical documents from a VM. The files exist in a recent backup, but restoring the entire VM would overwrite changes made since that backup. With VMFR, you can recover the specific files you need without losing the current VM state or overwriting recent modifications.


Multi-VM backup discovery
:   You have a namespace that runs multiple VMs with daily backups over several weeks. You need to recover a file from a specific VM but do not know which backup contains it. Without VMFR, you must inspect each backup individually or attempt multiple restores. With VMFR, you can create a `VirtualMachineBackupsDiscovery` CR to identify which backups contain the target VM and then restore files from the target backup.