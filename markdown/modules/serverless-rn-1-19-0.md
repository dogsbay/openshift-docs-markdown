{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Red Hat {{ ServerlessProductName }} 1.19.0 {id="serverless-rn-1-19-0_{{ context }}"}

{{ ServerlessProductName }} 1.19.0 is now available. New features, changes, and known issues that pertain to {{ ServerlessProductName }} on {{ product_title }} are included in this topic.

## New features {id="new-features-1-19-0_{{ context }}"}

*   {{ ServerlessProductName }} now uses Knative Serving 0.25.
*   {{ ServerlessProductName }} now uses Knative Eventing 0.25.
*   {{ ServerlessProductName }} now uses Kourier 0.25.
*   {{ ServerlessProductName }} now uses Knative (`kn`) CLI 0.25.
*   {{ ServerlessProductName }} now uses Knative Kafka 0.25.
*   The `kn func` CLI plugin now uses `func` 0.19.
*   The `KafkaBinding` API is deprecated in {{ ServerlessProductName }} 1.19.0 and will be removed in a future release.
*   HTTPS redirection is now supported and can be configured either globally for a cluster or per each Knative service.

## Fixed issues {id="fixed-issues-1-19-0_{{ context }}"}

*   In previous releases, the Kafka channel dispatcher waited only for the local commit to succeed before responding, which might have caused lost events in the case of an Apache Kafka node failure. The Kafka channel dispatcher now waits for all in-sync replicas to commit before responding.

## Known issues {id="known-issues-1-19-0_{{ context }}"}

*   In `func` version 0.19, some runtimes might be unable to build a function by using podman. You might see an error message similar to the following:
    ```terminal
    ERROR: failed to image: error during connect: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/info": EOF
    ```
    *   The following workaround exists for this issue:
        1.  Update the podman service by adding `--time=0` to the service `ExecStart` definition:
            ```terminal title="Example service configuration"
            ExecStart=/usr/bin/podman $LOGGING system service --time=0
            ```
        1.  Restart the podman service by running the following commands:
            ```terminal
            $ systemctl --user daemon-reload
            ```
            ```terminal
            $ systemctl restart --user podman.socket
            ```
    *   Alternatively, you can expose the podman API by using TCP:
        ```terminal
        $ podman system service --time=0 tcp:127.0.0.1:5534 &
        export DOCKER_HOST=tcp://127.0.0.1:5534
        ```