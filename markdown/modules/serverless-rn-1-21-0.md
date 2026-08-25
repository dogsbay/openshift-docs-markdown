{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Red Hat {{ ServerlessProductName }} 1.21.0 {id="serverless-rn-1-21-0_{{ context }}"}

{{ ServerlessProductName }} 1.21.0 is now available. New features, changes, and known issues that pertain to {{ ServerlessProductName }} on {{ product_title }} are included in this topic.

## New features {id="new-features-1-21-0_{{ context }}"}

*   {{ ServerlessProductName }} now uses Knative Serving 1.0
*   {{ ServerlessProductName }} now uses Knative Eventing 1.0.
*   {{ ServerlessProductName }} now uses Kourier 1.0.
*   {{ ServerlessProductName }} now uses Knative (`kn`) CLI 1.0.
*   {{ ServerlessProductName }} now uses Knative Kafka 1.0.
*   The `kn func` CLI plugin now uses `func` 0.21.
*   The Kafka sink is now available as a Technology Preview.
*   The Knative open source project has begun to deprecate camel-cased configuration keys in favor of using kebab-cased keys consistently. As a result, the `defaultExternalScheme` key, previously mentioned in the {{ ServerlessProductName }} 1.18.0 release notes, is now deprecated and replaced by the `default-external-scheme` key. Usage instructions for the key remain the same.

## Fixed issues {id="fixed-issues-1-21-0_{{ context }}"}

*   In {{ ServerlessProductName }} 1.20.0, there was an event delivery issue affecting the use of `kn event send` to send events to a service. This issue is now fixed.
*   In {{ ServerlessProductName }} 1.20.0 (`func` 0.20), TypeScript functions created with the `http` template failed to deploy on the cluster. This issue is now fixed.
*   In {{ ServerlessProductName }} 1.20.0 (`func` 0.20), deploying a function using the `gcr.io` registry failed with an error. This issue is now fixed.
*   In {{ ServerlessProductName }} 1.20.0 (`func` 0.20), creating a Springboot function project directory with the `kn func create` command and then running the `kn func build` command failed with an error message. This issue is now fixed.
*   In {{ ServerlessProductName }} 1.19.0 (`func` 0.19), some runtimes were unable to build a function by using podman. This issue is now fixed.

## Known issues {id="known-issues-1-21-0_{{ context }}"}

*   Currently, the domain mapping controller cannot process the URI of a broker, which contains a path that is currently not supported.

    This means that, if you want to use a `DomainMapping` custom resource (CR) to map a custom domain to a broker, you must configure the `DomainMapping` CR with the broker’s ingress service, and append the exact path of the broker to the custom domain:
    ```yaml title="Example DomainMapping CR"
    apiVersion: serving.knative.dev/v1alpha1
    kind: DomainMapping
    metadata:
      name: <domain-name>
      namespace: knative-eventing
    spec:
      ref:
        name: broker-ingress
        kind: Service
        apiVersion: v1
    ```

    The URI for the broker is then `<domain-name>/<broker-namespace>/<broker-name>`.