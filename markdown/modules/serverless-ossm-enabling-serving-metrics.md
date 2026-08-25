{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Knative Serving metrics when using Service Mesh with mTLS {id="serverless-ossm-enabling-serving-metrics_{{ context }}"}

If Service Mesh is enabled with mTLS, metrics for Knative Serving are disabled by default, because Service Mesh prevents Prometheus from scraping metrics. This section shows how to enable Knative Serving metrics when using Service Mesh and mTLS.

**Prerequisites**

*   You have installed the {{ ServerlessOperatorName }} and Knative Serving on your cluster.
*   You have installed {{ SMProductName }} with the mTLS functionality enabled.

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster or dedicated administrator access.
{% endif %}
*   Install the OpenShift CLI (`oc`).
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  Specify `prometheus` as the `metrics.backend-destination` in the `observability` spec of the Knative Serving custom resource (CR):
    ```yaml
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    metadata:
      name: knative-serving
    spec:
      config:
        observability:
          metrics.backend-destination: "prometheus"
    ...
    ```

    This step prevents metrics from being disabled by default.
1.  Apply the following network policy to allow traffic from the Prometheus namespace:
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: NetworkPolicy
    metadata:
      name: allow-from-openshift-monitoring-ns
      namespace: knative-serving
    spec:
      ingress:
      - from:
        - namespaceSelector:
            matchLabels:
              name: "openshift-monitoring"
      podSelector: {}
    ...
    ```
1.  Modify and reapply the default Service Mesh control plane in the `istio-system` namespace, so that it includes the following spec:
    ```yaml
    ...
    spec:
      proxy:
        networking:
          trafficControl:
            inbound:
              excludedPorts:
              - 8444
    ...
    ```