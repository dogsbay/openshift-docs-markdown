{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure routing destinations and traffic weights {id="configuring-routing-destinations-weights_{{ context }}"}

To route traffic to your backends, you must define service destinations and traffic weights within your `HTTPRoute` custom resource (CR) to distribute requests across your applications.  {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create or edit an `HTTPRoute` YAML file to include your desired service destinations under the `spec.rules.backendRefs` field.
    The following example demonstrates a complete `HTTPRoute` custom resource (CR) with a single backend destination that routes traffic to a service named `<service_v1>`. For details on configuring weights and routing to multiple destinations, see [httproute-backendref-configuration_{{ context }}](#httproute-backendref-configuration_{{ context }}).

    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: <backend_route_example>
      namespace: <example_application>
    spec:
      parentRefs:
      - name: <example_gateway>
        namespace: openshift-ingress
      rules:
      - backendRefs:
        - name: <service_v1>
          port: 8080
    ```
1.  Apply the `HTTPRoute` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```