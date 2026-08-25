{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring high availability replicas for the Knative broker implementation for Apache Kafka {id="serverless-config-replicas-kafka_{{ context }}"}

High availability (HA) is available by default for the Knative broker implementation for Apache Kafka components `kafka-controller` and `kafka-webhook-eventing`, which are configured to have two each replicas by default. You can change the number of replicas for these components by modifying the `spec.high-availability.replicas` value in the `KnativeKafka` custom resource (CR).

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster administrator or dedicated administrator access.
{% endif %}
*   The {{ ServerlessOperatorName }} and Knative broker for Apache Kafka are installed on your cluster.

**Procedure**

1.  In the {{ product_title }} web console **Administrator** perspective, navigate to **OperatorHub** -> **Installed Operators**.
1.  Select the `knative-eventing` namespace.
1.  Click **Knative Kafka** in the list of **Provided APIs** for the {{ ServerlessOperatorName }} to go to the **Knative Kafka** tab.
1.  Click **knative-kafka**, then go to the **YAML** tab in the **knative-kafka** page.
    ![Knative Kafka YAML](/_assets/images/kafka-YAML-HA.png)
1.  Modify the number of replicas in the `KnativeKafka` CR:
    ```yaml title="Example YAML"
    apiVersion: operator.serverless.openshift.io/v1alpha1
    kind: KnativeKafka
    metadata:
      name: knative-kafka
      namespace: knative-eventing
    spec:
      high-availability:
        replicas: 3
    ```