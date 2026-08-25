{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure HTTP request matching conditions {id="configuring-http-request-matching-conditions_{{ context }}"}

To ensure traffic is routed to the correct application when multiple services share a gateway, you can define request matching conditions within your `HTTPRoute` custom resource (CR). You can match HTTP requests based on paths, headers, query parameters, or methods. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create or edit an `HTTPRoute` YAML file to include your desired match conditions under the `spec.rules.matches` field. 
    The following example demonstrates a complete `HTTPRoute` custom resource (CR) configured with path-based matching to route requests for `/<example_app>` to a backend service. For details on configuring other match types, see [#!supported-httproute-match-types_{{ context }}](#supported-httproute-match-types_{{ context }}).

    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: <path_match_example>
      namespace: <example_application>
    spec:
      parentRefs:
      - name: <example_gateway>
        namespace: openshift-ingress
      hostnames:
      - "<example.com>"
      rules:
      - matches:
        - path:
            type: Exact
            value: /<example_app>
        backendRefs:
        - name: <example_backend>
          port: 8080
    ```
1.  Apply the `HTTPRoute` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```