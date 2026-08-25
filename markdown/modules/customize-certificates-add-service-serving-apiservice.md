{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add the service CA bundle to an API service {id="add-service-certificate-apiservice_{{ context }}"}

To allow the Kubernetes API server in {{ product_title }} to validate the service Certificate Authority (CA) certificate that secures an API service endpoint, you can annotate an `APIService` object to inject the service CA bundle into the `spec.caBundle` field. {._abstract}

**Procedure**

1.  Annotate the API service with `service.beta.openshift.io/inject-cabundle=true`:
    ```terminal
    $ oc annotate apiservice <api_service_name> \
         service.beta.openshift.io/inject-cabundle=true
    ```
    *   Replace `<api_service_name>` with the name of the API service to annotate.

        For example, use the following command to annotate the API service `test1`:
        ```terminal
        $ oc annotate apiservice test1 service.beta.openshift.io/inject-cabundle=true
        ```
1.  View the API service to ensure that the service CA bundle has been injected:
    ```terminal
    $ oc get apiservice <api_service_name> -o yaml
    ```

    The CA bundle is displayed in the `spec.caBundle` field in the YAML output:
    ```terminal
    apiVersion: apiregistration.k8s.io/v1
    kind: APIService
    metadata:
      annotations:
        service.beta.openshift.io/inject-cabundle: "true"
    ...
    spec:
      caBundle: <CA_BUNDLE>
    ...
    ```