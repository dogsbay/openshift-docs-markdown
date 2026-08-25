{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a route using the default certificate through an Ingress object {id="nw-ingress-edge-route-default-certificate_{{ context }}"}

To generate a secure, edge-terminated route that uses the default ingress certificate, specify an empty TLS configuration in the Ingress object. This configuration overrides the default behavior, preventing the creation of an insecure route. {._abstract}

**Prerequisites**

*   You have a service that you want to expose.
*   You have access to the {{ oc_first }}.

**Procedure**

1.  Create a YAML file for the Ingress object. In the following example, the file is called `example-ingress.yaml`:
    ```yaml title="YAML definition of an Ingress object"
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: frontend
      ...
    spec:
      rules:
        ...
      tls:
      - {}
    ```

    where:

    `spec.tls`
    :   Specifies the TLS configuration. Use the exact syntax shown to specify TLS without specifying a custom certificate.

1.  Create the Ingress object by running the following command:
    ```terminal
    $ oc create -f example-ingress.yaml
    ```

**Verification**

*   Verify that {{ product_title }} has created the expected route for the Ingress object by running the following command:
    ```terminal
    $ oc get routes -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    items:
    - apiVersion: route.openshift.io/v1
      kind: Route
      metadata:
        name: frontend-j9sdd
    # ...
      spec:
      ...
        tls:
          insecureEdgeTerminationPolicy: Redirect
          termination: edge
    # ...
    ```

    where:

    `metadata.name`
    :   Specifies the name of the route, which includes the name of the Ingress object followed by a random suffix.

    `spec.tls`
    :   To use the default certificate, the route should not specify `spec.certificate`.

    `tls.termination`
    :   Specifies the termination policy for the route. The route should specify the `edge` termination policy.