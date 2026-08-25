{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply different Layer 2 advertisement policies on a shared IP address pool {id="nw-metallb-service-selectors-shared-pool-l2_{{ context }}"}

Use this procedure when many `L2Advertisement` resources reference the same `IPAddressPool` and each advertisement must apply different Layer 2 settings to a different group of `LoadBalancer` services.
You match services with `spec.serviceSelectors` so each advertisement applies only where its selectors match. {._abstract}

**Prerequisites**

*   You created the `IPAddressPool` that your advertisements reference (for example, `doc-example-l2-label`).

**Procedure**

1.  Create two `L2Advertisement` resources that reference the same `IPAddressPool` but use different `serviceSelectors` so that each advertisement applies Layer 2 settings to a different group of services.

    The following example uses two `LoadBalancer` services that share one pool and use the labels `app: web` and `app: api`.
    It does not include a catch-all `L2Advertisement` with no `serviceSelectors`; for that behavior, see the description of `spec.serviceSelectors` in "About the L2Advertisement custom resource".
    Each manifest lists `ipAddressPools` and `serviceSelectors`; add other fields such as `interfaces` or `nodeSelectors` when your deployment requires them.

    :::note

    The label keys and values you set under `spec.serviceSelectors` must match the labels on each `LoadBalancer` service that should use this advertisement, and you must use the same keys and values consistently across both advertisement manifests in this procedure (for example, `app: web` and `app: api`).
    This procedure shows those selectors in the manifests first; add matching labels on your services in the next step.
    For how `spec.serviceSelectors` interacts with the `metallb.io/allow-shared-ip` annotation, see "About the L2Advertisement custom resource".
    
    :::

    1.  Create a file, such as `l2advertisement-web.yaml`, with content similar to the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: L2Advertisement
        metadata:
          name: l2advertisement-web
          namespace: metallb-system
        spec:
          ipAddressPools:
          - doc-example-l2-label
          serviceSelectors:
          - matchLabels:
              app: web
        ```

        where:

        `doc-example-l2-label`
        :   Specifies the name of the `IPAddressPool` that both Layer 2 advertisements share.

        `serviceSelectors`
        :   Specifies label selectors so MetalLB applies this advertisement only to `LoadBalancer` services whose labels include `app: web`.
    1.  Apply the configuration by running the following command:
        ```terminal
        $ oc apply -f l2advertisement-web.yaml
        ```
    1.  Create a file, such as `l2advertisement-api.yaml`, with content similar to the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: L2Advertisement
        metadata:
          name: l2advertisement-api
          namespace: metallb-system
        spec:
          ipAddressPools:
          - doc-example-l2-label
          serviceSelectors:
          - matchLabels:
              app: api
        ```

        where:

        `doc-example-l2-label`
        :   Specifies the same shared `IPAddressPool` name as the first Layer 2 advertisement.

        `serviceSelectors`
        :   Specifies label selectors so MetalLB applies this advertisement only to `LoadBalancer` services whose labels include `app: api`.
    1.  Apply the configuration by running the following command:
        ```terminal
        $ oc apply -f l2advertisement-api.yaml
        ```

        A `LoadBalancer` service whose labels include `app: web` receives the Layer 2 settings from `l2advertisement-web`.
        A service whose labels include `app: api` receives the Layer 2 settings from `l2advertisement-api`.
        Each advertisement applies only to services that satisfy its `serviceSelectors`.

        For the same pattern for BGP on a shared pool, see **Apply different BGP advertisement policies on a shared IP address pool**.
1.  Add labels to each `LoadBalancer` service that must match the advertisements.
    1.  Label the service that should match `app: web` by running the following command:
        ```terminal
        $ oc label service <service_web_name> app=web -n <project>
        ```

        where:

        `<service_web_name>`
        :   Specifies the name of the `LoadBalancer` service.

        `<project>`
        :   Specifies the namespace that contains the service.
    1.  Label the service that should match `app: api` by running the following command:
        ```terminal
        $ oc label service <service_api_name> app=api -n <project>
        ```

        where:

        `<service_api_name>`
        :   Specifies the name of the `LoadBalancer` service.

        `<project>`
        :   Specifies the namespace that contains the service.