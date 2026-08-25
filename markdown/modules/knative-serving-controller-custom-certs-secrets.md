{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring tag-to-digest resolution by using a secret {id="knative-serving-controller-custom-certs-secrets_{{ context }}"}

If the `controller-custom-certs` spec uses the `Secret` type, the secret is mounted as a secret volume. Knative components consume the secret directly, assuming that the secret has the required certificates.

**Prerequisites**

{% if openshift_enterprise %}
*   You have cluster administrator permissions on {{ product_title }}.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have cluster or dedicated administrator permissions on {{ product_title }}.
{% endif %}
*   You have installed the {{ ServerlessOperatorName }} and Knative Serving on your cluster.

**Procedure**

1.  Create a secret:
    ```yaml title="Example command"
    $ oc -n knative-serving create secret generic custom-secret --from-file=<secret_name>.crt=<path_to_certificate>
    ```
1.  Configure the `controller-custom-certs` spec in the `KnativeServing` custom resource (CR) to use the `Secret` type:
    ```yaml title="Example KnativeServing CR"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    metadata:
      name: knative-serving
      namespace: knative-serving
    spec:
      controller-custom-certs:
        name: custom-secret
        type: Secret
    ```