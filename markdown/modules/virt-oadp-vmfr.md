{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ oadp_short }} virtual machine file restore (VMFR) {id="oadp-vmfr_{{ context }}"}

Restoring an entire virtual machine (VM) to recover a single file costs substantial cluster resources and time. The virtual machine file restore (VMFR) feature provides a Kubernetes-native way to recover individual files from VM backups created by {{ oadp_short }}. {._abstract}

By using standard tools such as a web browser or `rsync`, you can browse multiple backups simultaneously and recover only the files you need without restoring the entire VM.