{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Red Hat {{ ServerlessProductName }} 1.26 {id="serverless-rn-1-26_{{ context }}"}

{{ ServerlessProductName }} 1.26 is now available. New features, changes, and known issues that pertain to {{ ServerlessProductName }} on {{ product_title }} are included in this topic.

## New features {id="new-features-1.26_{{ context }}"}

*   {{ FunctionsProductName }} with Quarkus is now GA.
*   {{ ServerlessProductName }} now uses Knative Serving 1.5.
*   {{ ServerlessProductName }} now uses Knative Eventing 1.5.
*   {{ ServerlessProductName }} now uses Kourier 1.5.
*   {{ ServerlessProductName }} now uses Knative (`kn`) CLI 1.5.
*   {{ ServerlessProductName }} now uses Knative Kafka 1.5.
*   {{ ServerlessProductName }} now uses Knative Operator 1.3.
*   The `kn func` CLI plugin now uses `func` 1.8.1.
*   Persistent volume claims (PVCs) are now GA. PVCs provide permanent data storage for your Knative services.
*   The new trigger filters feature is now available as a Developer Preview. It allows users to specify a set of filter expressions, where each expression evaluates to either true or false for each event.

    To enable new trigger filters, add the `new-trigger-filters: enabled` entry in the section of the `KnativeEventing` type in the operator config map:
    ```yaml
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeEventing
    ...
    ...
    spec:
      config:
        features:
          new-trigger-filters: enabled
    ...
    ```
*   Knative Operator 1.3 adds the updated `v1beta1` version of the API for `operator.knative.dev`.

    To update from `v1alpha1` to `v1beta1` in your `KnativeServing` and `KnativeEventing` custom resource config maps, edit the `apiVersion` key:
    ```yaml title="Example KnativeServing custom resource config map"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeServing
    ...
    ```
    ```yaml title="Example KnativeEventing custom resource config map"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeEventing
    ...
    ```

## Fixed issues {id="fixed-issues-1.26_{{ context }}"}

*   Previously, Federal Information Processing Standards (FIPS) mode was disabled for Kafka broker, Kafka source, and Kafka sink. This has been fixed, and FIPS mode is now available.

## Known issues {id="known-issues-1.26_{{ context }}"}

*   If you use `net-istio` for Ingress and enable mTLS via SMCP using `security.dataPlane.mtls: true`, Service Mesh deploys `DestinationRules` for the `*.local` host, which does not allow `DomainMapping` for {{ ServerlessProductName }}.

    To work around this issue, enable mTLS by deploying `PeerAuthentication` instead of using `security.dataPlane.mtls: true`.