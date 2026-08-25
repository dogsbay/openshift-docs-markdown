{%- set _mod_docs_content_type = "CONCEPT" %}
# Reducing pod timeouts {id="storage_persistent_storage_change_policy_overview_{{ context }}"}

A volume with many files can cause pod startup delays and timeouts. You can set certain parameters to improve this issue. {._abstract}


fsGroup
:   Set `fsGroupChangePolicy` to `OnRootMismatch` to stop recursively changing ownership and permissions to match the fsGroup specified in a pod’s `securityContext`.


SELinux
:   Set `seLinuxChangePolicy` to `MountOption` to avoid runtime recursively relabeling all files on a volume to match the pod’s SELinux context.