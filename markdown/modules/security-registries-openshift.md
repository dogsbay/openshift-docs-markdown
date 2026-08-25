{%- set _mod_docs_content_type = "CONCEPT" %}
# OpenShift Container Registry {id="security-registries-openshift_{{ context }}"}

To manage your container images, you can use the _OpenShift Container Registry_, a private registry in {{ product_title }} that runs as an integrated component of the platform. The registry provides role-based access controls that allow you to manage who can pull and push which container images. {._abstract}

{{ product_title }} also supports integration with other private registries that you might already be using, such as {{ quay }}.