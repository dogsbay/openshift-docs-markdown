---
title: "Disabling {{ KMS }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Disabling {{ KMS }} {id="kms-disabling"}
{%- set context = "kms-disabling" %}

You can disable KMS encryption and migrate to local etcd encryption to simplify operations or resolve external KMS connectivity issues. {._abstract}

{%- set FeatureName = "{{ KMS }}" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/proc_kms-disabling-encryption.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_kms-disabling" ._additional-resources}

*   [Using a KMS provider for data encryption](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/)
*   [HashiCorp Vault Transit Secrets Engine](https://developer.hashicorp.com/vault/docs/secrets/transit)
*   [Use Vault as a Kubernetes KMS provider](https://developer.hashicorp.com/vault/docs/deploy/kubernetes/kms)