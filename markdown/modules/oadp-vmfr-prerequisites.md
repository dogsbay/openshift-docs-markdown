{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ oadp_short }} VMFR prerequisites {id="oadp-vmfr-prerequisites_{{ context }}"}

Configure your cluster environment to enable {{ oadp_short }} virtual machine file restore (VMFR) operations by meeting the following prerequisites. This helps you perform file-level restore from virtual machine backups. {._abstract}

*   You have installed the {{ oadp_short }} Operator.
*   You have configured the `DataProtectionApplication` (DPA) CR with the `vmFileRestore.enable` field set to `true`.
*   The DPA CR includes the `kubevirt` Velero plugin in the `defaultPlugins` list.
*   {{ VirtProductName }} is installed and running on the cluster.
*   You have a default storage class configured on the cluster.
*   You have existing Velero backups that contain virtual machine data.