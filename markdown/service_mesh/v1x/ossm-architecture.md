{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding Service Mesh {id="ossm-architecture-v1x"}
{%- set context = "ossm-architecture-v1x" %}

{% include "./snippets/ossm-out-of-support.md" %}

{{ SMProductName }} provides a platform for behavioral insight and operational control over your networked microservices in a service mesh. With {{ SMProductName }}, you can connect, secure, and monitor microservices in your {{ product_title }} environment.

{% leveloffset +1 %}{% include "./modules/ossm-understanding-service-mesh.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-architecture-1x.md" %}{% endleveloffset %}

## Understanding Kiali {id="_understanding_kiali"}

Kiali provides visibility into your service mesh by showing you the microservices in your service mesh, and how they are connected.

{% leveloffset +2 %}{% include "./modules/ossm-kiali-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-kiali-architecture.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-kiali-features.md" %}{% endleveloffset %}

## Understanding Jaeger {id="_understanding_jaeger"}

Every time a user takes an action in an application, a request is executed by the architecture that may require dozens of different services to participate to produce a response.
The path of this request is a distributed transaction.
Jaeger lets you perform distributed tracing, which follows the path of a request through various microservices that make up an application.

{% include "./snippets/distr-tracing-assembly-tip-for-jaeger-replacements.md" %}

**Distributed tracing** is a technique that is used to tie the information about different units of work together—usually executed in different processes or hosts—to understand a whole chain of events in a distributed transaction.
Distributed tracing lets developers visualize call flows in large service oriented architectures.
It can be invaluable in understanding serialization, parallelism, and sources of latency.

Jaeger records the execution of individual requests across the whole stack of microservices, and presents them as traces. A **trace** is a data/execution path through the system. An end-to-end trace is comprised of one or more spans.

A **span** represents a logical unit of work in Jaeger that has an operation name, the start time of the operation, and the duration. Spans may be nested and ordered to model causal relationships.

{% leveloffset +2 %}{% include "./modules/distr-tracing-tempo-key-concepts-in-distributed-tracing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-jaeger-architecture.md" %}{% endleveloffset %}

## Next steps {id="_next_steps"}

*   [Prepare to install {{ SMProductName }}](/service_mesh/v1x/preparing-ossm-installation#preparing-ossm-installation-v1x) in your {{ product_title }} environment.