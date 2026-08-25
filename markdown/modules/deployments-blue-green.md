{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up a blue-green deployment {id="deployments-blue-green_{{ context }}"}

To switch users from a stable application version to a new one in {{ product_title }}, you can set up a blue-green deployment.  {._abstract}

Run both versions at once, then point the production route at the new (green) service when you are ready, with the option to switch back to the blue version if needed.

Because many applications depend on persistent data, you must have an application that supports _N-1 compatibility_, which means it shares data and implements live migration between the database, store, or disk by creating two copies of the data layer.

Consider the data used in testing the new version. If it is the production data, a bug in the new version can break the production version.

Blue-green deployments use two `Deployment` objects. Both are running, and the one in production depends on the service the route specifies, with each `Deployment` object exposed to a different service.


:::note

Routes are intended for web (HTTP and HTTPS) traffic, so this technique is best suited for web applications.

:::


You can create a new route to the new version and test it. When ready, change the service in the production route to point to the new service and the new (green) version is live.

If necessary, you can roll back to the older (blue) version by switching the service back to the previous version.

**Procedure**

1.  Create two independent application components.
    1.  Create a copy of the example application running the `v1` image under the `example-blue` service:
        ```terminal
        $ oc new-app openshift/deployment-example:v1 --name=example-blue
        ```
    1.  Create a second copy that uses the `v2` image under the `example-green` service:
        ```terminal
        $ oc new-app openshift/deployment-example:v2 --name=example-green
        ```
1.  Create a route that points to the old service:
    ```terminal
    $ oc expose svc/example-blue --name=bluegreen-example
    ```
1.  Browse to the application at `bluegreen-example-<project>.<router_domain>` to verify you see the `v1` image.
1.  Edit the route and change the service name to `example-green`:
    ```terminal
    $ oc patch route/bluegreen-example -p '{"spec":{"to":{"name":"example-green"}}}'
    ```
1.  To verify that the route has changed, refresh the browser until you see the `v2` image.