{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ KMS }} encryption {id="kms-about_{{ context }}"}

{{ KMS }} uses external Key Management Services to encrypt etcd data and centralize key management. {._abstract}

{{ KMS }} provides:

*   Customer-managed encryption keys that never leave the external KMS
*   Centralized key management and auditing
*   Regulatory compliance support

## Encrypted resources {id="kms-encrypted-resources_{{ context }}"}

When you enable KMS encryption, {{ product_title }} encrypts the following sensitive resources in etcd:

*   Secrets
*   ConfigMaps
*   Routes
*   OAuth access tokens
*   OAuth authorize tokens


:::note

Resource types, namespaces, and object names are not encrypted.

:::


**Additional resources**
{._additional-resources}

*   [Using a KMS provider for data encryption](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/)