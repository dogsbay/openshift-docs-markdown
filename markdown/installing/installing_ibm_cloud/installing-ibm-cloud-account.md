---
title: "Configuring an {{ ibm_cloud_title }} account"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an {{ ibm_cloud_title }} account {id="installing-ibm-cloud-account"}
{%- set context = "installing-ibm-cloud-account" %}

Before you can install {{ product_title }} on {{ ibm_cloud_name }}, you must configure your account by setting up DNS, IAM policies, and an API key.  {._abstract}

You must have a subscription account; free or trial accounts are not supported.

{% leveloffset +1 %}{% include "./modules/quotas-and-limits-ibm-cloud.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-cloud-dns-resolution-concept.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cis-ibm-cloud.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ ibm_cloud_name }} CLI ({{ ibm_cloud_name }} documentation)](https://www.ibm.com/cloud/cli)
*   [{{ ibm_name }} DNS documentation](https://cloud.ibm.com/docs/dns?topic=dns-getting-started)
*   [CIS web console ({{ ibm_cloud_name }} documentation)](https://cloud.ibm.com/catalog/services/internet-services)
*   [{{ ibm_cloud_name }} documentation for configuring name servers](https://cloud.ibm.com/docs/cis?topic=cis-getting-started#configure-your-name-servers-with-the-registrar-or-existing-dns-provider)

{% leveloffset +2 %}{% include "./modules/installation-dns-ibm-cloud.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ ibm_cloud_name }} CLI ({{ ibm_cloud_name }} documentation)](https://www.ibm.com/cloud/cli)
*   [{{ ibm_name }} DNS documentation](https://cloud.ibm.com/docs/dns?topic=dns-getting-started)

{% leveloffset +1 %}{% include "./modules/installation-ibm-cloud-iam-policies-api-key.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-ibm-cloud-creating-api-key.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-cloud-regions.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Configuring IAM for {{ ibm_cloud_name }}](/installing/installing_ibm_cloud/configuring-iam-ibm-cloud#configuring-iam-ibm-cloud)