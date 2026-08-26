{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Traffic splitting overview {id="traffic-splitting-overview"}
{%- set context = "traffic-splitting-overview" %}

In a Knative application, traffic can be managed by creating a traffic split. A traffic split is configured as part of a route, which is managed by a Knative service.

![Traffic management for a Knative application](/images/knative-service-architecture.png)

Configuring a route allows requests to be sent to different revisions of a service. This routing is determined by the `traffic` spec of the `Service` object.

A `traffic` spec declaration consists of one or more revisions, each responsible for handling a portion of the overall traffic. The percentages of traffic routed to each revision must add up to 100%, which is ensured by a Knative validation.

The revisions specified in a `traffic` spec can either be a fixed, named revision, or can point to the “latest” revision, which tracks the head of the list of all revisions for the service. The "latest" revision is a type of floating reference that updates if a new revision is created. Each revision can have a tag attached that creates an additional access URL for that revision.

The `traffic` spec can be modified by:

*   Editing the YAML of a `Service` object directly.
*   Using the Knative (`kn`) CLI `--traffic` flag.
*   Using the {{ product_title }} web console.

When you create a Knative service, it does not have any default `traffic` spec settings.