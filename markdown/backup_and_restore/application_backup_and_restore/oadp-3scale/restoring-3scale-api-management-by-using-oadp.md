---
title: Restoring 3scale API Management by using OADP
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Restoring 3scale API Management by using OADP {id="restoring-3scale-api-management-by-using-oadp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "restoring-3scale-api-management-by-using-oadp" -%}
{%- set 3scaleProductVersion = "2.15" -%}
{%- set 3scaleDocInfoProductName = "red_hat_3scale_api_management" %}

Restore Red&#160;Hat 3scale API Management components by restoring the backed up 3scale operator resources, MySQL database, and Redis database. This helps you to recover your 3scale deployment and resume API management services.

After the data has been restored, you can scale up the 3scale operator and deployment. 

{% leveloffset +1 %}{% include "./modules/restoring-the-3scale-api-management-operator-secrets-and-apimanager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restoring-the-mysql-database.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restoring-the-backend-redis-database.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/scaling-up-the-3scale-api-management-operator-and-deployment.md" %}{% endleveloffset %}