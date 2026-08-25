{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring SASL authentication for Apache Kafka sources {id="serverless-kafka-sasl-source_{{ context }}"}

_Simple Authentication and Security Layer_ (SASL) is used by Apache Kafka for authentication. If you use SASL authentication on your cluster, users must provide credentials to Knative for communicating with the Kafka cluster; otherwise events cannot be produced or consumed.

**Prerequisites**

*   You have cluster or dedicated administrator permissions on {{ product_title }}.
*   The {{ ServerlessOperatorName }}, Knative Eventing, and the `KnativeKafka` CR are installed on your {{ product_title }} cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have a username and password for a Kafka cluster.
*   You have chosen the SASL mechanism to use, for example, `PLAIN`, `SCRAM-SHA-256`, or `SCRAM-SHA-512`.
*   If TLS is enabled, you also need the `ca.crt` certificate file for the Kafka cluster.
*   You have installed the OpenShift (`oc`) CLI.

**Procedure**

1.  Create the certificate files as secrets in your chosen namespace:
    ```terminal
    $ oc create secret -n <namespace> generic <kafka_auth_secret> \
      --from-file=ca.crt=caroot.pem \
      --from-literal=password="SecretPassword" \
      --from-literal=saslType="SCRAM-SHA-512" \ (1)
      --from-literal=user="my-sasl-user"
    ```
    1.  The SASL type can be `PLAIN`, `SCRAM-SHA-256`, or `SCRAM-SHA-512`.
1.  Create or modify your Kafka source so that it contains the following `spec` configuration:
    ```yaml
    apiVersion: sources.knative.dev/v1beta1
    kind: KafkaSource
    metadata:
      name: example-source
    spec:
    ...
      net:
        sasl:
          enable: true
          user:
            secretKeyRef:
              name: <kafka_auth_secret>
              key: user
          password:
            secretKeyRef:
              name: <kafka_auth_secret>
              key: <password>
          type:
            secretKeyRef:
              name: <kafka_auth_secret>
              key: saslType
        tls:
          enable: true
          caCert: (1)
            secretKeyRef:
              name: <kafka_auth_secret>
              key: ca.crt
    ...
    ```
    1.  The `caCert` spec is not required if you are using a public cloud Kafka service.