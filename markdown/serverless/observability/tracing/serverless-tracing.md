{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Tracing requests {id="serverless-tracing"}
{%- set context = "serverless-tracing" %}

Distributed tracing records the path of a request through the various services that make up an application. It is used to tie information about different units of work together, to understand a whole chain of events in a distributed transaction. The units of work might be executed in different processes or hosts.

{% if openshift_enterprise %}
{% leveloffset +1 %}{% include "./modules/distr-tracing-tempo-key-concepts-in-distributed-tracing.md" %}{% endleveloffset %}
{% endif %}

{% if openshift_enterprise %}
## Additional resources {id="additional-resources_serverless-tracing" ._additional-resources}
*   [{{ DTProductName }} architecture](https://docs.redhat.com/en/documentation/red_hat_openshift_distributed_tracing_platform/latest/html/about_the_distributed_tracing_platform/distr-tracing-tempo-architecture)
*   [Installing {{ DTProductName }}](https://docs.redhat.com/en/documentation/red_hat_openshift_distributed_tracing_platform/latest/html/installing_the_distributed_tracing_platform/distr-tracing-tempo-installing)
{% endif %}