{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring high availability replicas for Knative Serving {id="serverless-config-replicas-serving_{{ context }}"}

To specify three minimum replicas for the eligible deployment resources, set the value of the field `spec.high-availability.replicas` in the custom resource to `3`.

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster administrator or dedicated administrator access.
{% endif %}
*   The {{ ServerlessOperatorName }} and Knative Serving are installed on your cluster.

**Procedure**

1.  In the {{ product_title }} web console **Administrator** perspective, navigate to **OperatorHub** -> **Installed Operators**.
1.  Select the `knative-serving` namespace.
1.  Click **Knative Serving** in the list of **Provided APIs** for the {{ ServerlessOperatorName }} to go to the **Knative Serving** tab.
1.  Click **knative-serving**, then go to the **YAML** tab in the **knative-serving** page.
    ![Knative Serving YAML](/_assets/images/serving-YAML-HA.png)
1.  Modify the number of replicas in the `KnativeServing` CR:
    ```yaml title="Example YAML"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    metadata:
      name: knative-serving
      namespace: knative-serving
    spec:
      high-availability:
        replicas: 3
    ```