{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set timeouts for HTTP requests {id="setting-timeouts-http-requests_{{ context }}"}

To prevent hanging connections and ensure your application remains responsive, you can set strict timeouts for the entire request and the backend hop within your `HTTPRoute` custom resource (CR). {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create or edit an `HTTPRoute` YAML file to include your desired timeout configurations under the `spec.rules.timeouts` field.
    The following example demonstrates a complete `HTTPRoute` custom resource (CR) where the entire request must complete within 30 seconds. For details on timeout formatting rules and backend request timeouts, see [httproute-timeout-configuration_{{ context }}](#httproute-timeout-configuration_{{ context }}).

    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: <timeout_example>
      namespace: <example_application>
    spec:
      parentRefs:
      - name: <example_gateway>
        namespace: openshift-ingress
      rules:
      - matches:
        - path:
            type: PathPrefix
            value: /<timeout_path>
        timeouts:
          request: 30s
        backendRefs:
        - name: <example_service>
          port: 8080
    ```
1.  Apply the `HTTPRoute` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```