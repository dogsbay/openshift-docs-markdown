{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Overriding Knative Serving system deployment configurations {id="overriding-config-serving"}
{%- set context = "overriding-config-serving" %}

You can override the default configurations for some specific deployments by modifying the `deployments` spec in the `KnativeServing` custom resources (CRs).


:::note

You can only override probes that are defined in the deployment by default.

All Knative Serving deployments define a readiness and a liveness probe by default, with these exceptions:

*   `net-kourier-controller` and `3scale-kourier-gateway` only define a readiness probe.
*   `net-istio-controller` and `net-istio-webhook` define no probes.

:::


{% leveloffset +1 %}{% include "./modules/knative-serving-CR-system-deployments.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Probe configuration section of the Kubernetes API documentation](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.25/#probe-v1-core)