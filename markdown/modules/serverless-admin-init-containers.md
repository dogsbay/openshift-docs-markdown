{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling init containers {id="serverless-admin-init-containers_{{ context }}"}

**Prerequisites**

*   You have installed {{ ServerlessOperatorName }} and Knative Serving on your cluster.

{% if openshift_enterprise %}
*   You have cluster administrator permissions.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have cluster or dedicated administrator permissions.
{% endif %}

**Procedure**

*   Enable the use of init containers by adding the `kubernetes.podspec-init-containers` flag to the `KnativeServing` CR:
    ```yaml title="Example KnativeServing CR"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    metadata:
      name: knative-serving
    spec:
      config:
        features:
          kubernetes.podspec-init-containers: enabled
    ...
    ```