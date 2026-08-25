---
title: "{{ oadp_short }} recommended network settings"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# {{ oadp_short }} recommended network settings {id="oadp-recommended-network-settings"}

{%- set context = "oadp-recommended-network-settings" %}

Keep a stable network across your {{ OCP_short }} nodes, {{ aws_short }} Simple Storage Service (S3) storage, and cloud environments. Meeting these recommended network settings helps you ensure successful {{ oadp_first }} backup and restore operations, even when using remote {{ aws_short }} S3 buckets. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-performance-network-requirements.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Configuring network settings](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ ocp_version }}/html/configuring_network_settings/index)

{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   [About installing {{ oadp_short }}](/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)
*   [Troubleshooting](/backup_and_restore/application_backup_and_restore/troubleshooting/troubleshooting#troubleshooting)
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
*   [About installing {{ oadp_short }}](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ ocp_version }}/html/backup_and_restore/oadp-application-backup-and-restore#about-installing-oadp)
*   [Troubleshooting](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ ocp_version }}/html/backup_and_restore/oadp-application-backup-and-restore#troubleshooting)
{% endif %}