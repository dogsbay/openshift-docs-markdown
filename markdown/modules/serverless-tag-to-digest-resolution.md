{%- set _mod_docs_content_type = "CONCEPT" %}
# Tag-to-digest resolution {id="serverless-tag-to-digest-resolution_{{ context }}"}

To give the controller access to the container registry on {{ product_title }}, you must create a secret and then configure controller custom certificates. You can configure controller custom certificates by modifying the `controller-custom-certs` spec in the `KnativeServing` custom resource (CR). The secret must reside in the same namespace as the `KnativeServing` CR.

If a secret is not included in the `KnativeServing` CR, this setting defaults to using public key infrastructure (PKI). When using PKI, the cluster-wide certificates are automatically injected into the Knative Serving controller by using the `config-service-sa` config map. The {{ ServerlessOperatorName }} populates the `config-service-sa` config map with cluster-wide certificates and mounts the config map as a volume to the controller.