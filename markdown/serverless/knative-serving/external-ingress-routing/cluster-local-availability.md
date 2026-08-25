{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Cluster local availability {id="cluster-local-availability"}
{%- set context = "cluster-local-availability" %}

By default, Knative services are published to a public IP address.
Being published to a public IP address means that Knative services are public applications, and have a publicly accessible URL.

Publicly accessible URLs are accessible from outside of the cluster.
However, developers may need to build back-end services that are only be accessible from inside the cluster, known as _private services_.
Developers can label individual services in the cluster with the `networking.knative.dev/visibility=cluster-local` label to make them private.


:::important

For {{ ServerlessProductName }} 1.15.0 and newer versions, the `serving.knative.dev/visibility` label is no longer available. You must update existing services to use the `networking.knative.dev/visibility` label instead.

:::


{% leveloffset +1 %}{% include "./modules/knative-service-cluster-local.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-enabling-tls-local-services.md" %}{% endleveloffset %}