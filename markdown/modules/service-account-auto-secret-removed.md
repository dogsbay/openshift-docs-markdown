{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatically generated image pull secrets {id="auto-generated-sa-token-secrets_{{ context }}"}

{{ product_title }} automatically creates image pull secrets for each service account to integrate the internal image registry with user authentication. {._abstract}


:::note

Prior to {{ product_title }} 4.16, a long-lived service account API token secret was also generated for each service account that was created. Starting with {{ product_title }} 4.16, this service account API token secret is no longer created.

After upgrading to {{ product_version }}, any existing long-lived service account API token secrets are not deleted and will continue to function. For information about detecting long-lived API tokens that are in use in your cluster or deleting them if they are not needed, see "Long-lived service account API tokens in {{ product_title }} (Red Hat Knowledgebase)".

:::


This image pull secret is necessary to integrate the {{ product_registry }} into the cluster’s user authentication and authorization system.

However, if you do not enable the `ImageRegistry` capability or if you disable the integrated {{ product_registry }} in the Cluster Image Registry Operator’s configuration, an image pull secret is not generated for each service account.

When the integrated {{ product_registry }} is disabled on a cluster that previously had it enabled, the previously generated image pull secrets are deleted automatically.