{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exposing the front-end service {id="getting-started-cli-creating-route_{{ context }}"}

By default, services running on {{ product_title }} are not accessible externally. To expose your service so that external clients can access it, you can create a _route_. {._abstract}

A `Route` object is a {{ product_title }} networking resource similar to a Kubernetes `Ingress` object. The default {{ product_title }} router (HAProxy) uses the HTTP header of the incoming request to determine where to proxy the connection.

Optionally, you can define security, such as TLS, for the route.

**Prerequisites**

*   You have deployed the `parksmap` front-end application.
*   You have `cluster-admin` or project-level `admin` privileges.

**Procedure**

*   Create a route to expose the `parksmap` front-end application by running the following command:

    ```terminal
    $ oc create route edge parksmap --service=parksmap
    ```

**Verification**

*   Verify that the application route was successfully created by running the following command:
    ```terminal
    $ oc get route parksmap
    ```
    ```terminal title="Example output"
    NAME        HOST/PORT                                                   PATH   SERVICES   PORT       TERMINATION   WILDCARD
    parksmap    parksmap-user-getting-started.apps.cluster.example.com             parksmap   8080-tcp   edge          None
    ```