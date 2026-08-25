{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add the service CA bundle to a mutating webhook configuration {id="add-service-certificate-mutating-webhook_{{ context }}"}

To allow the Kubernetes API server in {{ product_title }} to validate the service Certificate Authority (CA) certificate that secures a mutating webhook endpoint, you can annotate a `MutatingWebhookConfiguration` object to inject the service CA bundle into each webhook `clientConfig.caBundle` field. {._abstract}


:::note

Do not set this annotation for admission webhook configurations that need to specify different CA bundles for different webhooks. If you do, then the service CA bundle will be injected for all webhooks.

:::


**Procedure**

1.  Annotate the mutating webhook configuration with `service.beta.openshift.io/inject-cabundle=true`:
    ```terminal
    $ oc annotate mutatingwebhookconfigurations <mutating_webhook_name> \
         service.beta.openshift.io/inject-cabundle=true
    ```
    *   Replace `<mutating_webhook_name>` with the name of the mutating webhook configuration to annotate.

        For example, use the following command to annotate the mutating webhook configuration `test1`:
        ```terminal
        $ oc annotate mutatingwebhookconfigurations test1 service.beta.openshift.io/inject-cabundle=true
        ```
1.  View the mutating webhook configuration to ensure that the service CA bundle has been injected:
    ```terminal
    $ oc get mutatingwebhookconfigurations <mutating_webhook_name> -o yaml
    ```

    The CA bundle is displayed in the `clientConfig.caBundle` field of all webhooks in the YAML output:
    ```terminal
    apiVersion: admissionregistration.k8s.io/v1
    kind: MutatingWebhookConfiguration
    metadata:
      annotations:
        service.beta.openshift.io/inject-cabundle: "true"
    ...
    webhooks:
    - myWebhook:
      - v1beta1
      clientConfig:
        caBundle: <CA_BUNDLE>
    ...
    ```