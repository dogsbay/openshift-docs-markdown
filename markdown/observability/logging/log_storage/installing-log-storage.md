{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing log storage {id="installing-log-storage"}
{%- set context = "installing-log-storage" %}

You can use the {{ oc_first }} or the {{ product_title }} web console to deploy a log store on your {{ product_title }} cluster.

{% include "./snippets/logging-elastic-dep-snip.md" %}

## Deploying a Loki log store {id="installing-log-storage-loki"}

You can use the {{ loki_op }} to deploy an internal Loki log store on your {{ product_title }} cluster.
After install the {{ loki_op }}, you must configure Loki object storage by creating a secret, and create a `LokiStack` custom resource (CR).

{% leveloffset +2 %}{% include "./modules/loki-deployment-sizing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/logging-loki-gui-install.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/loki-create-object-storage-secret-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Loki object storage](/observability/logging/log_storage/installing-log-storage#logging-loki-storage_installing-log-storage)

{% if openshift_enterprise %}
## Deploying a Loki log store on a cluster that uses short-term credentials {id="installing-log-storage-loki-sts" ._additional-resources}

For some storage providers, you can use the CCO utility (`ccoctl`) during installation to implement short-term credentials. These credentials are created and managed outside the {{ product_title }} cluster. [Manual mode with short-term credentials for components](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds).


:::note

Short-term credential authentication must be configured during a new installation of {{ loki_op }}, on a cluster that uses this credentials strategy. You cannot configure an existing cluster that uses a different credentials strategy to use this feature.

:::

{% endif %}

{% leveloffset +2 %}{% include "./modules/logging-identity-federation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/logging-create-loki-cr-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/logging-loki-cli-install.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/loki-create-object-storage-secret-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Loki object storage](/observability/logging/log_storage/installing-log-storage#logging-loki-storage_installing-log-storage)

{% leveloffset +2 %}{% include "./modules/logging-create-loki-cr-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-loki-storage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/logging-loki-storage-aws.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/logging-loki-storage-azure.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/logging-loki-storage-gcp.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/logging-loki-storage-minio.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/logging-loki-storage-odf.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/logging-loki-storage-swift.md" %}{% endleveloffset %}

## Deploying an Elasticsearch log store {id="installing-log-storage-es" ._additional-resources}

You can use the {{ es_op }} to deploy an internal Elasticsearch log store on your {{ product_title }} cluster.

{% include "./snippets/logging-elastic-dep-snip.md" %}
{% leveloffset +2 %}{% include "./modules/logging-es-storage-considerations.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/logging-install-es-operator.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/cluster-logging-deploy-es-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-log-storage-cr.md" %}{% endleveloffset %}