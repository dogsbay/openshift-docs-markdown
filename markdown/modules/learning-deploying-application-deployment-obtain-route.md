{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtain the route to your application {id="learning-deploying-application-deployment-obtain-route_{{ context }}"}

To access the OSToy application, obtain the route by using the {{ oc_first }}. {._abstract}

**Procedure**

*   Get the route to your application by running the following command:
    ```terminal
    $ oc get route
    ```

    **For example**:
    ```terminal
    NAME          HOST/PORT                                                 PATH   SERVICES             PORT    TERMINATION   WILDCARD
    ostoy-route   ostoy-route-ostoy.apps.<your-rosa-cluster>.abcd.p1.openshiftapps.com          ostoy-frontend-svc   <all>                 None
    ```