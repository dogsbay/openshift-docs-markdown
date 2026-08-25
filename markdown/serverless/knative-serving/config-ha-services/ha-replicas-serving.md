{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# High availability for Knative services {id="ha-replicas-serving"}
{%- set context = "ha-replicas-serving" %}

High availability (HA) is available by default for the Knative Serving `activator`, `autoscaler`, `autoscaler-hpa`, `controller`, `webhook`, `kourier-control`, and `kourier-gateway` components, which are configured to have two replicas each by default. You can change the number of replicas for these components by modifying the `spec.high-availability.replicas` value in the `KnativeServing` custom resource (CR).

{% leveloffset +1 %}{% include "./modules/serverless-config-replicas-serving.md" %}{% endleveloffset %}