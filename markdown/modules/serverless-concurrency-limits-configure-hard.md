{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a hard concurrency limit {id="serverless-concurrency-limits-configure-hard_{{ context }}"}

A hard concurrency limit is a strictly enforced upper bound requests limit. If concurrency reaches the hard limit, surplus requests are buffered and must wait until there is enough free capacity to execute the requests. You can specify a hard concurrency limit for your Knative service by modifying the `containerConcurrency` spec, or by using the `kn service` command with the correct flags.

**Procedure**

*   Optional: Set the `containerConcurrency` spec for your Knative service in the spec of the `Service` custom resource:
    ```yaml title="Example service spec"
    apiVersion: serving.knative.dev/v1
    kind: Service
    metadata:
      name: example-service
      namespace: default
    spec:
      template:
        spec:
          containerConcurrency: 50
    ```

    The default value is `0`, which means that there is no limit on the number of simultaneous requests that are permitted to flow into one replica of the service at a time.

    A value greater than `0` specifies the exact number of requests that are permitted to flow into one replica of the service at a time. This example would enable a hard concurrency limit of 50 requests.
*   Optional: Use the `kn service` command to specify the `--concurrency-limit` flag:
    ```terminal
    $ kn service create <service_name> --image <image_uri> --concurrency-limit <integer>
    ```
    ```terminal title="Example command to create a service with a concurrency limit of 50 requests"
    $ kn service create example-service --image quay.io/openshift-knative/knative-eventing-sources-event-display:latest --concurrency-limit 50
    ```