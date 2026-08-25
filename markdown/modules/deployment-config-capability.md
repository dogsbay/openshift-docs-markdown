{%- set _mod_docs_content_type = "REFERENCE" %}
# DeploymentConfig capability {id="deployment-config-capability_{{ context }}"}

The `DeploymentConfig` capability enables and manages the `DeploymentConfig` API. {._abstract}


:::important

If you disable the `DeploymentConfig` capability, the following resources will not be available in the cluster:

*   `DeploymentConfig` resources
*   The `deployer` service account

Disable the `DeploymentConfig` capability only if you do not require `DeploymentConfig` resources and the `deployer` service account in the cluster.

:::