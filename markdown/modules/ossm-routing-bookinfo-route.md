{%- set _mod_docs_content_type = "PROCEDURE" %}
# Route based on user identity {id="ossm-routing-bookinfo-route_{{ context }}"}

Change the route configuration so that all traffic from a specific user is routed to a specific service version. In this case, all traffic from a user named `jason` will be routed to the service `reviews:v2`.

{{ SMProductShortName }} does not have any special, built-in understanding of user identity. This example is enabled by the fact that the `productpage` service adds a custom `end-user` header to all outbound HTTP requests to the reviews service.

**Procedure**

1.  Run the following command to enable user-based routing in the Bookinfo sample application.
    ```bash
    $ oc apply -f https://raw.githubusercontent.com/Maistra/istio/maistra-{{ MaistraVersion }}/samples/bookinfo/networking/virtual-service-reviews-test-v2.yaml
    ```
1.  Run the following command to confirm the rule is created. This command returns all resources of `kind: VirtualService` in YAML format.
    ```terminal
    $ oc get virtualservice reviews -o yaml
    ```
1.  On the `/productpage` of the Bookinfo app, log in as user `jason` with no password.
1.  Refresh the browser. The star ratings appear next to each review.
1.  Log in as another user (pick any name you want). Refresh the browser. Now the stars are gone. Traffic is now routed to `reviews:v1` for all users except Jason.

You have successfully configured the Bookinfo sample application to route traffic based on user identity.