{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Overriding Knative Eventing system deployment configurations {id="overriding-config-eventing"}
{%- set context = "overriding-config-eventing" %}

You can override the default configurations for some specific deployments by modifying the `deployments` spec in the `KnativeEventing` custom resource (CR). Currently, overriding default configuration settings is supported for the `eventing-controller`, `eventing-webhook`, and `imc-controller` fields, as well as for the `readiness` and `liveness` fields for probes.


:::important

The `replicas` spec cannot override the number of replicas for deployments that use the Horizontal Pod Autoscaler (HPA), and does not work for the `eventing-webhook` deployment.

:::



:::note

You can only override probes that are defined in the deployment by default.

All Knative Serving deployments define a readiness and a liveness probe by default, with these exceptions:

*   `net-kourier-controller` and `3scale-kourier-gateway` only define a readiness probe.
*   `net-istio-controller` and `net-istio-webhook` define no probes.

:::


{% leveloffset +1 %}{% include "./modules/knative-eventing-CR-system-deployments.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Probe configuration section of the Kubernetes API documentation](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.25/#probe-v1-core)