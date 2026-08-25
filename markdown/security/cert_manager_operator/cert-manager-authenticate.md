---
title: "Authenticating the {{ cert_manager_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Authenticating the {{ cert_manager_operator }} {id="cert-manager-authenticate"}
{%- set context = "cert-manager-authenticate" %}

To enable the operator to manage components on your cloud provider, authenticate the {{ cert_manager_operator }} by configuring cloud credentials. You can grant the Operator access to external services required for certificate issuance, such as DNS providers. {._abstract}

{% leveloffset +1 %}{% include "./modules/cert-manager-configure-cloud-credentials-aws-non-sts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-configure-cloud-credentials-aws-sts.md" %}{% endleveloffset %}

<a name="additional-resources_cert-manager-authenticate-gcp"></a>**Additional resources**
{._additional-resources}

*   [Configuring the Cloud Credential Operator utility](/installing/installing_aws/ipi/installing-aws-customizations#cco-ccoctl-configuring_installing-aws-customizations)

{% leveloffset +1 %}{% include "./modules/cert-manager-configure-cloud-credentials-gcp-non-sts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-configure-cloud-credentials-gcp-sts.md" %}{% endleveloffset %}

<a name="additional-resources_cert-manager-authenticate-gcp-workload-identity"></a>**Additional resources**
{._additional-resources}

*   [Configuring the Cloud Credential Operator utility](/installing/installing_gcp/installing-gcp-customizations#cco-ccoctl-configuring_installing-gcp-customizations)
*   [Manual mode with short-term credentials for components](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds)
*   [Default behavior of the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator-default_about-cloud-credential-operator)