{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply processing filters to HTTP requests {id="applying-processing-filters-http-requests_{{ context }}"}

To modify how HTTP requests are processed before they reach your backend services, you can pre-configure filters within the rules of your `HTTPRoute` custom resource (CR). Configuring these filters allows you to automatically redirect traffic, modify headers, or mirror requests to achieve your desired routing behavior. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create or edit an `HTTPRoute` YAML file to include your desired processing directives under the `spec.rules.filters` field. 
    The following example demonstrates a complete `HTTPRoute` custom resource (CR) with a `requestRedirect` filter that issues a permanent redirect (301) from HTTP to HTTPS. For details on configuring other filter types, see [supported-httproute-filters_{{ context }}](#supported-httproute-filters_{{ context }}).

    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: HTTPRoute
    metadata:
      name: <http_filter_example>
      namespace: <example_application>
    spec:
      parentRefs:
      - name: <example_gateway>
        namespace: openshift-ingress
      hostnames:
      - "<example.com>"
      rules:
      - filters:
        - type: RequestRedirect
          requestRedirect:
            scheme: https
            statusCode: 301
    ```
1.  Apply the `HTTPRoute` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```