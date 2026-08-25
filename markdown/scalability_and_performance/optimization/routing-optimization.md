---
title: Optimizing routing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Optimizing routing {id="routing-optimization"}
{%- set context = "routing-optimization" %}

You can scale or configure the {{ product_title }} HAProxy router to optimize routing performance. {._abstract}

{% leveloffset +1 %}{% include "./modules/baseline-router-performance.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Configuring Ingress Controller sharding by using route labels](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller#nw-ingress-sharding-route-labels_configuring-ingress-cluster-traffic-ingress-controller)
*   [Configuring Ingress Controller sharding by using namespace labels](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller#nw-ingress-sharding-namespace-labels_configuring-ingress-cluster-traffic-ingress-controller)
*   [Setting Ingress Controller thread count](/networking/networking_operators/ingress-operator#nw-ingress-setting-thread-count_configuring-ingress)
*   [Ingress Controller configuration parameters](/networking/networking_operators/ingress-operator#nw-ingress-controller-configuration-parameters_configuring-ingress)

{% leveloffset +1 %}{% include "./modules/ingress-liveness-readiness-startup-probes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-haproxy-interval.md" %}{% endleveloffset %}