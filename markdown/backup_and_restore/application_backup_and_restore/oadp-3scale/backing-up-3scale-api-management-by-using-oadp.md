---
title: Backing up 3scale API Management by using OADP
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Backing up 3scale API Management by using OADP {id="backing-up-3scale-api-management-by-using-oadp"}
{%- set context = "backing-up-3scale-api-management-by-using-oadp" -%}
{%- set 3scaleProductVersion = "2.15" -%}
{%- set 3scaleDocInfoProductName = "red_hat_3scale_api_management" -%}
{%- set Link3scaleInstalling3scale = "https://docs.redhat.com/en/documentation/{{ 3scaleDocInfoProductName }}/{{ 3scaleProductVersion }}/html-single/installing_red_hat_3scale_api_management/index" %}

Back up Red&#160;Hat 3scale API Management components, including the 3scale Operator, MySQL database, and Redis database, by using {{ oadp_first }}. This helps you protect your API management infrastructure and provides recovery in case of data loss. {._abstract}

For more information about installing and configuring Red&#160;Hat 3scale API Management, see _Installing 3scale API Management on OpenShift_ and _Red Hat 3scale API Management_.

{% leveloffset +1 %}{% include "./modules/creating-the-data-protection-application.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/backing-up-the-3scale-operator-secret-apimanager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/backing-up-the-mysql-database.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/backing-up-the-backend-redis-database.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing 3scale API Management on OpenShift](https://docs.redhat.com/en/documentation/{{ 3scaleDocInfoProductName }}/{{ 3scaleProductVersion }}/html/installing_red_hat_3scale_api_management/install-threescale-on-openshift-guide)
*   [Red Hat 3scale API Management](https://docs.redhat.com/en/documentation/red_hat_3scale_api_management)
*   [Installing the Data Protection Application](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-aws#oadp-installing-dpa_installing-oadp-aws)
*   [Creating a Backup CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-cr#oadp-creating-backup-cr-doc)