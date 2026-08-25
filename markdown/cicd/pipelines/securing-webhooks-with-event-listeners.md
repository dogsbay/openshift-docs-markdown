{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Securing webhooks with event listeners {id="securing-webhooks-with-event-listeners"}
{%- set context = "securing-webhooks-with-event-listeners" %}

As an administrator, you can secure webhooks with event listeners. After creating a namespace, you enable HTTPS for the `Eventlistener` resource by adding the `operator.tekton.dev/enable-annotation=enabled` label to the namespace. Then, you create a `Trigger` resource and a secured route using the re-encrypted TLS termination.

Triggers in {{ pipelines_title }} support insecure HTTP and secure HTTPS connections to the `Eventlistener` resource. HTTPS secures connections within and outside the cluster.

{{ pipelines_title }} runs a `tekton-operator-proxy-webhook` pod that watches for the labels in the namespace. When you add the label to the namespace, the webhook sets the `service.beta.openshift.io/serving-cert-secret-name=<secret_name>` annotation on the `EventListener` object. This, in turn, creates secrets and the required certificates.

```terminal
service.beta.openshift.io/serving-cert-secret-name=<secret_name>
```

In addition, you can mount the created secret into the `Eventlistener` pod to secure the request.

{% leveloffset +1 %}{% include "./modules/op-providing-secure-connection.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-sample-eventlistener-resource.md" %}{% endleveloffset %}