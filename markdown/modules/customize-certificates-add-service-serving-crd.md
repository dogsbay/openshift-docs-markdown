{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add the service CA bundle to a custom resource definition {id="add-service-certificate-crd_{{ context }}"}

You can annotate a `CustomResourceDefinition` (CRD) object with `service.beta.openshift.io/inject-cabundle=true` to have its `spec.conversion.webhook.clientConfig.caBundle` field populated with the service Certificate Authority (CA) bundle. This allows the Kubernetes API server to validate the service CA certificate used to secure the targeted endpoint. {._abstract}


:::note

The service CA bundle will only be injected into the CRD if the CRD is configured to use a webhook for conversion. It is only useful to inject the service CA bundle if a CRD’s webhook is secured with a service CA certificate.

:::


**Procedure**

1.  Annotate the CRD with `service.beta.openshift.io/inject-cabundle=true`:
    ```terminal
    $ oc annotate crd <crd_name> \
         service.beta.openshift.io/inject-cabundle=true
    ```
    *   Replace `<crd_name>` with the name of the CRD to annotate.

        For example, use the following command to annotate the CRD `test1`:
        ```terminal
        $ oc annotate crd test1 service.beta.openshift.io/inject-cabundle=true
        ```
1.  View the CRD to ensure that the service CA bundle has been injected:
    ```terminal
    $ oc get crd <crd_name> -o yaml
    ```

    The CA bundle is displayed in the `spec.conversion.webhook.clientConfig.caBundle` field in the YAML output:
    ```terminal
    apiVersion: apiextensions.k8s.io/v1
    kind: CustomResourceDefinition
    metadata:
      annotations:
        service.beta.openshift.io/inject-cabundle: "true"
    ...
    spec:
      conversion:
        strategy: Webhook
        webhook:
          clientConfig:
            caBundle: <CA_BUNDLE>
    ...
    ```