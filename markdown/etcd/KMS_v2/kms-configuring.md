---
title: "Configuring {{ KMS }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring {{ KMS }} {id="kms-configuring"}
{%- set context = "kms-configuring" %}

You can configure external KMS encryption for etcd to centralize key management and meet regulatory compliance requirements. {._abstract}

{%- set FeatureName = "{{ KMS }}" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/proc_kms-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_kms-rotating-encryption-key.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_kms-migrating-from-local-encryption.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/proc_kms-monitoring-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ref_kms-troubleshooting.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_kms-configuring" ._additional-resources}

*   [Using a KMS provider for data encryption](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/)
*   [HashiCorp Vault Transit Secrets Engine](https://developer.hashicorp.com/vault/docs/secrets/transit)
*   [Use Vault as a Kubernetes KMS provider](https://developer.hashicorp.com/vault/docs/deploy/kubernetes/kms)
*   [HashiCorp Vault KMS plugin container image](https://hub.docker.com/r/hashicorp/vault-kube-kms)