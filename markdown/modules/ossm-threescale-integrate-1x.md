{%- set _mod_docs_content_type = "PROCEDURE" %}
# Integrate the 3scale adapter with {{ SMProductName }} {id="ossm-threescale-integrate-1x_{{ context }}"}

You can use these examples to configure requests to your services using the 3scale Istio Adapter.

**Prerequisites**

*   {{ SMProductName }} version 1.x
*   A working 3scale account ([SaaS](https://www.3scale.net/signup/) or [3scale 2.5 On-Premises](https://access.redhat.com/documentation/en-us/red_hat_3scale_api_management/2.5/html/installing_3scale/onpremises-installation))
*   Enabling backend cache requires 3scale 2.9 or greater
*   {{ SMProductName }} prerequisites


:::note

To configure the 3scale Istio Adapter, refer to {{ SMProductName }} custom resources for instructions on adding adapter parameters to the custom resource file.

:::



:::note

Pay particular attention to the `kind: handler` resource. You must update this with your 3scale account credentials. You can optionally add a `service_id` to a handler, but this is kept for backwards compatibility only, since it would render the handler only useful for one service in your 3scale account. If you add `service_id` to a handler, enabling 3scale for other services requires you to create more handlers with different `service_ids`.

:::


Use a single handler per 3scale account by following the steps below:

**Procedure**

1.  Create a handler for your 3scale account and specify your account credentials. Omit any service identifier.
    ```yaml
      apiVersion: "config.istio.io/v1alpha2"
      kind: handler
      metadata:
       name: threescale
      spec:
       adapter: threescale
       params:
         system_url: "https://<organization>-admin.3scale.net/"
         access_token: "<ACCESS_TOKEN>"
       connection:
         address: "threescale-istio-adapter:3333"
    ```

    Optionally, you can provide a `backend_url` field within the _params_ section to override the URL provided by the 3scale configuration. This may be useful if the adapter runs on the same cluster as the 3scale on-premise instance, and you wish to leverage the internal cluster DNS.
1.  Edit or patch the Deployment resource of any services belonging to your 3scale account as follows:
    1.  Add the `"service-mesh.3scale.net/service-id"` label with a value corresponding to a valid `service_id`.
    1.  Add the `"service-mesh.3scale.net/credentials"` label with its value being the _name of the handler resource_ from step 1.
1.  Do step 2 to link it to your 3scale account credentials and to its service identifier, whenever you intend to add more services.
1.  Modify the rule configuration with your 3scale configuration to dispatch the rule to the threescale handler.
    ```yaml title="Rule configuration example"
      apiVersion: "config.istio.io/v1alpha2"
      kind: rule
      metadata:
        name: threescale
      spec:
        match: destination.labels["service-mesh.3scale.net"] == "true"
        actions:
          - handler: threescale.handler
            instances:
              - threescale-authorization.instance
    ```