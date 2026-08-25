{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling TLS authentication for internal traffic {id="serverless-enabling-tls-internal-traffic_{{ context }}"}

{{ ServerlessProductName }} supports TLS edge termination by default, so that HTTPS traffic from end users is encrypted. However, internal traffic behind the OpenShift route is forwarded to applications by using plain data. By enabling TLS for internal traffic, the traffic sent between components is encrypted, which makes this traffic more secure.


:::note

If you want to enable internal TLS with a {{ SMProductName }} integration, you must enable {{ SMProductShortName }} with mTLS instead of the internal encryption explained in the following procedure.

:::


{%- set FeatureName = "Internal TLS encryption support" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have installed the {{ ServerlessOperatorName }} and Knative Serving.
*   You have installed the OpenShift (`oc`) CLI.

**Procedure**

1.  Create a Knative service that includes the `internal-encryption: "true"` field in the spec:
    ```yaml
    ...
    spec:
      config:
        network:
          internal-encryption: "true"
    ...
    ```
1.  Restart the activator pods in the `knative-serving` namespace to load the certificates:
    ```terminal
    $ oc delete pod -n knative-serving --selector app=activator
    ```