---
title: Providing sensitive data to pods by using an external secrets store
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Providing sensitive data to pods by using an external secrets store {id="nodes-pods-secrets-store"}
{%- set context = "nodes-pods-secrets-store" %}

As an alternative to using `secret` objects to provide sensitive information, such as passwords and user names, to applications, you can use an external secret management system to store the information. You can then use the {{ secrets_store_operator }} to access the information and mount the secret content as a pod volume. Using an external secret store protects information that you do not want developers to have and can be more secure than `secret` objects. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-driver-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [CSI inline ephemeral volumes](/storage/container_storage_interface/ephemeral-storage-csi-inline#ephemeral-storage-csi-inline)
*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)

{% leveloffset +2 %}{% include "./modules/secrets-store-providers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/secrets-store-auto-rotation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-driver-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/mounting-secrets-external-secrets-store.md" %}{% endleveloffset %}

{%- set secrets_store_provider = "AWS Secrets Manager" %}
{% leveloffset +2 %}{% include "./modules/secrets-store-aws.md" %}{% endleveloffset %}

{%- set secrets_store_provider = "" %}

{%- set context = "nodes-pods-secrets-store-parameter-store" %}

{%- set secrets_store_provider = "AWS Systems Manager Parameter Store" %}
{% leveloffset +2 %}{% include "./modules/secrets-store-aws.md" %}{% endleveloffset %}

{%- set secrets_store_provider = "" %}

{%- set context = "nodes-pods-secrets-store" %}

{% leveloffset +2 %}{% include "./modules/secrets-store-azure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/secrets-store-google.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/secrets-store-vault.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/secrets-store-sync-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/secrets-store-viewing-secret-versions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-secrets-store-driver-uninstall.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Configuring the Cloud Credential Operator utility](/installing/installing_aws/ipi/installing-aws-customizations#cco-ccoctl-configuring_installing-aws-customizations)
*   [Installing Helm](/applications/working_with_helm_charts/installing-helm#installing-helm)
*   [Red&#160;Hat third-party support policy](https://access.redhat.com/third-party-software-support)