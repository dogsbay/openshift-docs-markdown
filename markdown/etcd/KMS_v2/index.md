---
title: Kubernetes Key Management Service (KMS) v2 on OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Kubernetes Key Management Service (KMS) v2 on {{ product_title }} {id="kms_v2_index"}
{%- set context = "kms-v2-index" %}

You can configure Kubernetes Key Management Service (KMS) v2 on {{ product_title }} to centralize encryption key management and meet regulatory compliance requirements. {._abstract}

{%- set FeatureName = "{{ KMS }}" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/con_about-kms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ref_kms-technology-preview-phases.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_kms-v2-index" ._additional-resources}

*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
*   [Using a KMS provider for data encryption](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/)
*   [HashiCorp Vault Transit Secrets Engine](https://developer.hashicorp.com/vault/docs/secrets/transit)
*   [Use Vault as a Kubernetes KMS provider](https://developer.hashicorp.com/vault/docs/deploy/kubernetes/kms)