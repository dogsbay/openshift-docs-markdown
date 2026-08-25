{%- set _mod_docs_content_type = "PROCEDURE" %}
# Annotating a route with a cookie {id="nw-annotating-a-route-with-a-cookie-name_{{ context }}"}

To enable applications to manage session persistence and load distribution, annotate the route with a custom cookie name. Overwriting the default cookie allows the backend application to identify and delete the specific cookie, forcing endpoint re-selection when necessary. {._abstract}

When a server is overloaded, the server tries to remove the requests from the client and redistribute the requests to other endpoints.

**Procedure**

1.  Annotate the route with the specified cookie name:
    ```terminal
    $ oc annotate route <route_name> router.openshift.io/cookie_name="<cookie_name>"
    ```

    where:

    `<route_name>`
    :   Specifies the name of the route.

    `<cookie_name>`
    :   Specifies the name for the cookie.
    For example, to annotate the route `my_route` with the cookie name `my_cookie`:
    ```terminal
    $ oc annotate route my_route router.openshift.io/cookie_name="my_cookie"
    ```

1.  Capture the route hostname in a variable:
    ```terminal
    $ ROUTE_NAME=$(oc get route <route_name> -o jsonpath='{.spec.host}')
    ```

    where:

    `<route_name>`
    :   Specifies the name of the route.

1.  Save the cookie, and then access the route:
    ```terminal
    $ curl $ROUTE_NAME -k -c /tmp/cookie_jar
    ```

    Use the cookie saved by the previous command when connecting to the route:
    ```terminal
    $ curl $ROUTE_NAME -k -b /tmp/cookie_jar
    ```