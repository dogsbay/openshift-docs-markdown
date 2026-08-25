{%- set _mod_docs_content_type = "PROCEDURE" %}
## Removing the certificates {id="ossm-cert-cleanup_{{ context }}"}

To remove the certificates you added, follow these steps.

1.  Remove the secret `cacerts`. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.
    ```terminal
    $ oc delete secret cacerts -n istio-system
    ```
1.  Redeploy {{ SMProductShortName }} with a self-signed root certificate in the `ServiceMeshControlPlane` resource.
    ```yaml
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    spec:
      security:
        dataPlane:
          mtls: true
    ```