{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring SASL authentication for Apache Kafka brokers {id="serverless-kafka-broker-sasl-default-config_{{ context }}"}

_Simple Authentication and Security Layer_ (SASL) is used by Apache Kafka for authentication. If you use SASL authentication on your cluster, users must provide credentials to Knative for communicating with the Kafka cluster; otherwise events cannot be produced or consumed.

**Prerequisites**

*   You have cluster or dedicated administrator permissions on {{ product_title }}.
*   The {{ ServerlessOperatorName }}, Knative Eventing, and the `KnativeKafka` CR are installed on your {{ product_title }} cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have a username and password for a Kafka cluster.
*   You have chosen the SASL mechanism to use, for example, `PLAIN`, `SCRAM-SHA-256`, or `SCRAM-SHA-512`.
*   If TLS is enabled, you also need the `ca.crt` certificate file for the Kafka cluster.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Create the certificate files as a secret in the `knative-eventing` namespace:
    ```terminal
    $ oc create secret -n knative-eventing generic <secret_name> \
      --from-literal=protocol=SASL_SSL \
      --from-literal=sasl.mechanism=<sasl_mechanism> \
      --from-file=ca.crt=caroot.pem \
      --from-literal=password="SecretPassword" \
      --from-literal=user="my-sasl-user"
    ```
    *   Use the key names `ca.crt`, `password`, and `sasl.mechanism`. Do not change them.
    *   If you want to use SASL with public CA certificates, you must use the `tls.enabled=true` flag, rather than the `ca.crt` argument, when creating the secret. For example:
        ```terminal
        $ oc create secret -n <namespace> generic <kafka_auth_secret> \
          --from-literal=tls.enabled=true \
          --from-literal=password="SecretPassword" \
          --from-literal=saslType="SCRAM-SHA-512" \
          --from-literal=user="my-sasl-user"
        ```
1.  Edit the `KnativeKafka` CR and add a reference to your secret in the `broker` spec:
    ```yaml
    apiVersion: operator.serverless.openshift.io/v1alpha1
    kind: KnativeKafka
    metadata:
      namespace: knative-eventing
      name: knative-kafka
    spec:
      broker:
        enabled: true
        defaultConfig:
          authSecretName: <secret_name>
    ...
    ```