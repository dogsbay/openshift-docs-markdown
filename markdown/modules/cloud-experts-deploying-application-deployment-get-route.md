{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting the route {id="cloud-experts-deploying-application-deployment-get-route_{{ context }}"}

You must get the route to access the application. {._abstract}

**Procedure**

*   Get the route to your application by running the following command:
    ```terminal
    $ oc get route
    ```

    ***Example output***
    ```terminal
    NAME          HOST/PORT                                                 PATH   SERVICES             PORT    TERMINATION   WILDCARD
    ostoy-route   ostoy-route-ostoy.apps.<your-rosa-cluster>.abcd.p1.openshiftapps.com          ostoy-frontend-svc   <all>                 None
    ```