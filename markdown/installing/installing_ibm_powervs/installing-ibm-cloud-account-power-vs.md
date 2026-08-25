---
title: "Configuring an {{ ibm_cloud_title }} account"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an {{ ibm_cloud_title }} account {id="installing-ibm-cloud-account-power-vs"}
{%- set context = "installing-ibm-cloud-account-power-vs" %}

To install {{ product_title }} on {{ ibm_power_server_name }}, you must configure an {{ ibm_cloud_name }} account with the correct quotas, DNS resolution, and IAM policies.

## Prerequisites {id="_prerequisites"}

*   You have an {{ ibm_cloud_name }} account with a subscription. You cannot install {{ product_title }} on a free or on a trial {{ ibm_cloud_name }} account.

{% leveloffset +1 %}{% include "./modules/quotas-and-limits-ibm-power-vs.md" %}{% endleveloffset %}

**Additional resources**

*   [Quotas and service limits](https://cloud.ibm.com/docs/vpc?topic=vpc-quotas)
*   [Creating an {{ ibm_power_server_title }}](https://cloud.ibm.com/docs/power-iaas?topic=power-iaas-creating-power-virtual-server)

{% leveloffset +1 %}{% include "./modules/configuring-dns-resolution-powervs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-cis-ibm-cloud.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-cloud-iam-policies-api-key.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ ibm_cloud_name }} IAM overview](https://cloud.ibm.com/docs/account?topic=account-iamoverview)
{%- if ibm_vpc %}
*   [{{ ibm_name }} resource groups documentation](https://cloud.ibm.com/docs/account?topic=account-rgs)
{%- endif %}
*   [Access groups ({{ ibm_cloud_name }} documentation)](https://cloud.ibm.com/docs/account?topic=account-groups)
*   [Users and service IDs ({{ ibm_cloud_name }} documentation)](https://cloud.ibm.com/docs/account?topic=account-assign-access-resources)

{% leveloffset +2 %}{% include "./modules/installation-ibm-cloud-creating-api-key.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-cloud-regions.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Creating an {{ ibm_power_server_name }} workspace](/installing/installing_ibm_powervs/creating-ibm-power-vs-workspace#creating-ibm-power-vs-workspace)