{%- set _mod_docs_content_type = "CONCEPT" %}
# Deletion policy {id="rosa-delete-policy_{{ context }}"}

Red&#160;Hat reserves the right to delete {{ product_title }} clusters within 15 days if the service notifications requiring actions are not addressed. These actions include upgrading the cluster to a supported OpenShift version or resolving cluster health issues so that the service can auto-upgrade the cluster to a supported OpenShift version.

{{ product_title }} services will notify you when the cluster is unhealthy and when the OpenShift version is approaching EOL.


:::important

{{ product_title }} clusters configured with delete protection enabled can still be deleted based on the deletion policy.

:::


If a {{ product_title }} cluster is deleted, any applications or business hosted on the cluster will be impacted. Additionally, cloud resources may remain in the AWS account after cluster deletion, which will continue to incur costs.