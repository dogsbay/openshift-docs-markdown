{%- set _mod_docs_content_type = "CONCEPT" %}
# Pull images from third-party registries {id="pull-images-from-third-party-registries-con_{{ context }}"}

To pull images from a registry that requires authentication, you create an image pull secret from the registry credentials and make it available to your workloads. You can attach the secret to a service account or pod, or add the credentials to the global cluster pull secret.