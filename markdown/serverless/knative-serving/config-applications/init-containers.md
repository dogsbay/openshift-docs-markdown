{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Init containers {id="init-containers"}
{%- set context = "init-containers" %}

[Init containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) are specialized containers that are run before application containers in a pod. They are generally used to implement initialization logic for an application, which may include running setup scripts or downloading required configurations. You can enable the use of init containers for Knative services by modifying the `KnativeServing` custom resource (CR).


:::note

Init containers may cause longer application start-up times and should be used with caution for serverless applications, which are expected to scale up and down frequently.

:::


{% leveloffset +1 %}{% include "./modules/serverless-admin-init-containers.md" %}{% endleveloffset %}