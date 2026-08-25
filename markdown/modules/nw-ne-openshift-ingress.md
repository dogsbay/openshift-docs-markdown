{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ product_title }} Ingress Operator {id="nw-ne-openshift-ingress_{{ context }}"}

When you create your {{ product_title }} cluster, pods and services running on the cluster are each allocated their own IP addresses. The IP addresses are accessible to other pods and services running nearby but are not accessible to outside clients.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
The Ingress Operator makes it possible for external clients to access your service by deploying and managing one or more HAProxy-based
[Ingress Controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/) to handle routing. You can use the Ingress Operator to route traffic by specifying {{ product_title }} `Route` and Kubernetes `Ingress` resources. Configurations within the Ingress Controller, such as the ability to define `endpointPublishingStrategy` type and internal load balancing, provide ways to publish Ingress Controller endpoints.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
The Ingress Operator makes it possible for external clients to access your service by deploying and managing one or more HAProxy-based [Ingress Controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/) to handle routing.

Red Hat Site Reliability Engineers (SRE) manage the Ingress Operator for {{ product_title }} clusters. While you cannot alter the settings for the Ingress Operator, you may view the default Ingress Controller configurations, status, and logs as well as the Ingress Operator status.
{% endif %}