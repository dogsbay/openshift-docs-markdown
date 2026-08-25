{% if context == "persistent-storage-csi-secrets-store" %}
{%- set storage = true -%}
{% endif %}
{% if context == "nodes-pods-secrets-store" %}
{%- set nodes = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if storage %}
# Overview of Secrets Store CSI Driver Operator {id="persistent-storage-csi-secrets-store-driver-overview_{{ context }}"}

{% endif %}
{% if nodes %}
# About the {{ secrets_store_operator }} {id="_about_the_secrets_store_operator"}

{% endif %}

To store and manage your secrets securely, configure the {{ secrets_store_operator }} to mount secrets from an external secret management system, such as Azure Key Vault, by using a provider plugin. Applications can then use the secret, but the secret does not persist on the system after pod termination. {._abstract}

Secret objects are stored with Base64 encoding. etcd provides encryption at rest for these secrets, but when secrets are retrieved, they are decrypted and presented to the user. If role-based access control is not configured properly on your cluster, anyone with API or etcd access can retrieve or modify a secret. Additionally, anyone who is authorized to create a pod in a namespace can use that access to read any secret in that namespace.

The {{ secrets_store_operator }}, `secrets-store.csi.k8s.io`, enables {{ product_title }} to mount multiple secrets, keys, and certificates stored in enterprise-grade external secrets stores into pods as a volume. The {{ secrets_store_operator }} communicates with the provider using gRPC to fetch the mount contents from the specified external secrets store. After the volume is attached, the data in it is mounted into the container’s file system. Secrets store volumes are mounted in-line.

For more information about CSI inline volumes, see "CSI inline ephemeral volumes".

Familiarity with persistent storage and configuring CSI volumes is recommended when working with a CSI driver. For more information, see "Understanding persistent storage" and "Configuring CSI volumes".

{% if context == "persistent-storage-csi-secrets-store" %}
{%- set storage = false -%}
{% endif %}
{% if context == "nodes-pods-secrets-store" %}
{%- set nodes = false -%}
{% endif %}