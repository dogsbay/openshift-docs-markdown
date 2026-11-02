{%- set _mod_docs_content_type = "CONCEPT" %}
# Protect application data with OADP {id="oadp-intro_{{ context }}"}

Use {{ oadp_first }} to safeguard applications, application-related cluster resources, persistent volumes, and internal images on {{ product_title }}. {{ oadp_short }} backs up containerized applications and virtual machines (VMs). This helps you ensure disaster recovery. {._abstract}

However, {{ oadp_short }} does not serve as a disaster recovery solution for `etcd` or OpenShift Operators.


:::important

{{ oadp_short }} support is applicable to customer workload namespaces and cluster scope resources.

Full cluster `backup` and `restore` are not supported.

:::



{{ oadp_short }} APIs
:   {{ oadp_short }} provides APIs that enable multiple approaches to customizing backups and preventing the inclusion of unnecessary or inappropriate resources. {{ oadp_short }} provides the following APIs:
    *   `Backup`
    *   `Restore`
    *   `Schedule`
    *   `BackupStorageLocation`
    *   `VolumeSnapshotLocation`