{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply different BGP advertisement policies on a shared IP address pool {id="nw-metallb-service-selectors-shared-pool-bgp_{{ context }}"}

Use this procedure when many `BGPAdvertisement` resources reference the same `IPAddressPool` and each advertisement must apply different BGP settings to a different group of `LoadBalancer` services.
You match services with `spec.serviceSelectors` so each advertisement applies only where its selectors match. {._abstract}

**Prerequisites**

*   You created the `IPAddressPool` that your advertisements reference (for example, `doc-example-bgp-adv`).

**Procedure**

1.  Create two `BGPAdvertisement` resources that reference the same `IPAddressPool` but use different `serviceSelectors` and `localPref` values.

    The following example uses two `LoadBalancer` services that share one pool and use the labels `app: web` and `app: api`.
    It does not include a catch-all `BGPAdvertisement` with no `serviceSelectors`; for that behavior, see the description of `spec.serviceSelectors` in "About the BGPAdvertisement custom resource".

    :::note

    The label keys and values you set under `spec.serviceSelectors` must match the labels on each `LoadBalancer` service that should use this advertisement, and you must use the same keys and values consistently across both advertisement manifests in this procedure (for example, `app: web` and `app: api`).
    This procedure shows those selectors in the manifests first; add matching labels on your services in the next step.
    For how `spec.serviceSelectors` interacts with `spec.aggregationLength` on a `BGPAdvertisement` resource, see "About the BGPAdvertisement custom resource".
    
    :::

    1.  Create a file, such as `bgpadvertisement-web.yaml`, with content similar to the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: BGPAdvertisement
        metadata:
          name: bgpadvertisement-web
          namespace: metallb-system
        spec:
          ipAddressPools:
          - doc-example-bgp-adv
          localPref: 200
          serviceSelectors:
          - matchLabels:
              app: web
        ```

        where:

        `doc-example-bgp-adv`
        :   Specifies the name of the `IPAddressPool` that both advertisements share.

        `localPref`
        :   Specifies the BGP local preference for routes that this advertisement controls for matching services.

        `serviceSelectors`
        :   Specifies label selectors so MetalLB applies this advertisement only to `LoadBalancer` services whose labels include `app: web`.
    1.  Apply the configuration by running the following command:
        ```terminal
        $ oc apply -f bgpadvertisement-web.yaml
        ```
    1.  Create a file, such as `bgpadvertisement-api.yaml`, with content similar to the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: BGPAdvertisement
        metadata:
          name: bgpadvertisement-api
          namespace: metallb-system
        spec:
          ipAddressPools:
          - doc-example-bgp-adv
          localPref: 300
          serviceSelectors:
          - matchLabels:
              app: api
        ```

        where:

        `doc-example-bgp-adv`
        :   Specifies the same shared `IPAddressPool` name as the first advertisement.

        `localPref`
        :   Specifies the BGP local preference for routes that this advertisement controls for matching services.

        `serviceSelectors`
        :   Specifies label selectors so MetalLB applies this advertisement only to `LoadBalancer` services whose labels include `app: api`.
    1.  Apply the configuration by running the following command:
        ```terminal
        $ oc apply -f bgpadvertisement-api.yaml
        ```

        A `LoadBalancer` service whose labels include `app: web` receives the BGP policy from `bgpadvertisement-web`, including `localPref` `200`.
        A service whose labels include `app: api` receives the BGP policy from `bgpadvertisement-api`, including `localPref` `300`.
        Each advertisement applies only to services that satisfy its `serviceSelectors`.

        For the same pattern for Layer 2 advertisements on a shared pool, see **Apply different Layer 2 advertisement policies on a shared IP address pool**.
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