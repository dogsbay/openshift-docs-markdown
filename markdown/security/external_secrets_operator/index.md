---
title: "{{ external_secrets_operator }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ external_secrets_operator }} overview {id="external-secrets-operator-about"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-secrets-operator-about" %}

The {{ external_secrets_operator }} operates as a cluster-wide service to deploy and manage the `external-secrets` application. The `external-secrets` application integrates with external secrets management systems and performs secret fetching, refreshing, and provisioning within the cluster.

{% leveloffset +1 %}{% include "./modules/external-secrets-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-provider-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-fips-support.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-proxy-considerations.md" %}{% endleveloffset %}

## Additional resources {id="external-secrets-operator-about_additional-resources"}

*   [external-secrets application](https://external-secrets.io/latest/)
*   [Understanding compliance](/security/container_security/security-compliance#security-compliance)
*   [Installing a cluster in FIPS mode](/installing/overview/installing-fips#installing-fips-mode_installing-fips)
*   [Do you need extra security for your cluster?](/installing/overview/installing-preparing#installing-preparing-security_installing-preparing)
*   [Security considerations](https://docs.redhat.com/en/documentation/red_hat_openshift_data_foundation/4.19/html/planning_your_deployment/security-considerations_rhodf)
*   [Security Best Practices](https://external-secrets.io/latest/guides/security-best-practices/)
*   [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
*   [HashiCorp Vault](https://developer.hashicorp.com/vault)
*   [Google Secret Manager](https://cloud.google.com/security/products/secret-manager)
*   [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault/)
*   [{{ ibm_cloud_title }} Secrets Manager](https://www.ibm.com/products/secrets-manager)
*   [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)
*   [Cryptographic module validation program](https://csrc.nist.gov/Projects/cryptographic-module-validation-program/validated-modules)
*   [Compliance activities and government standards](https://access.redhat.com/articles/2918071#fips-140-2-and-fips-140-3-2)
*   [Red Hat third-party support policy](https://access.redhat.com/third-party-software-support)