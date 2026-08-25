{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring TLS authentication for Knative channels for Apache Kafka {id="serverless-kafka-tls-channels_{{ context }}"}

_Transport Layer Security_ (TLS) is used by Apache Kafka clients and servers to encrypt traffic between Knative and Kafka, as well as for authentication. TLS is the only supported method of traffic encryption for the Knative broker implementation for Apache Kafka.

**Prerequisites**

*   You have cluster or dedicated administrator permissions on {{ product_title }}.
*   The {{ ServerlessOperatorName }}, Knative Eventing, and the `KnativeKafka` CR are installed on your {{ product_title }} cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have a Kafka cluster CA certificate stored as a `.pem` file.
*   You have a Kafka cluster client certificate and a key stored as `.pem` files.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Create the certificate files as secrets in your chosen namespace:
    ```terminal
    $ oc create secret -n <namespace> generic <kafka_auth_secret> \
      --from-file=ca.crt=caroot.pem \
      --from-file=user.crt=certificate.pem \
      --from-file=user.key=key.pem
    ```

    :::important

    Use the key names `ca.crt`, `user.crt`, and `user.key`. Do not change them.
    
    :::

1.  Start editing the `KnativeKafka` custom resource:
    ```terminal
    $ oc edit knativekafka
    ```
1.  Reference your secret and the namespace of the secret:
    ```yaml
    apiVersion: operator.serverless.openshift.io/v1alpha1
    kind: KnativeKafka
    metadata:
      namespace: knative-eventing
      name: knative-kafka
    spec:
      channel:
        authSecretName: <kafka_auth_secret>
        authSecretNamespace: <kafka_auth_secret_namespace>
        bootstrapServers: <bootstrap_servers>
        enabled: true
      source:
        enabled: true
    ```

    :::note

    Make sure to specify the matching port in the bootstrap server.
    
    :::


    For example:
    ```yaml
    apiVersion: operator.serverless.openshift.io/v1alpha1
    kind: KnativeKafka
    metadata:
      namespace: knative-eventing
      name: knative-kafka
    spec:
      channel:
        authSecretName: tls-user
        authSecretNamespace: kafka
        bootstrapServers: eventing-kafka-bootstrap.kafka.svc:9094
        enabled: true
      source:
        enabled: true
    ```