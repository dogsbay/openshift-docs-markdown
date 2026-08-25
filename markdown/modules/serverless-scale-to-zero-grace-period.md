{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the scale-to-zero grace period {id="serverless-scale-to-zero-grace-period_{{ context }}"}

Knative Serving provides automatic scaling down to zero pods for applications. You can use the `scale-to-zero-grace-period` spec to define an upper bound time limit that Knative waits for scale-to-zero machinery to be in place before the last replica of an application is removed.

**Prerequisites**

*   You have installed {{ ServerlessOperatorName }} and Knative Serving on your cluster.

{% if openshift_enterprise %}
*   You have cluster administrator permissions.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have cluster or dedicated administrator permissions.
{% endif %}
*   You are using the default Knative Pod Autoscaler. The scale-to-zero feature is not available if you are using the Kubernetes Horizontal Pod Autoscaler.

**Procedure**

*   Modify the `scale-to-zero-grace-period` spec in the `KnativeServing` custom resource (CR):
    ```yaml title="Example KnativeServing CR"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    metadata:
      name: knative-serving
    spec:
      config:
        autoscaler:
          scale-to-zero-grace-period: "30s" (1)
    ```
    1.  The grace period time in seconds. The default value is 30 seconds.