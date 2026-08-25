{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing HAProxy error code response pages {id="nw-customize-ingress-error-pages_{{ context }}"}

As a cluster administrator, you can specify a custom error code response page for either 503, 404, or both error pages. The HAProxy router serves a 503 error page when the application pod is not running or a 404 error page when the requested URL does not exist. For example, if you customize the 503 error code response page, then the page is served when the application pod is not running, and the default 404 error code HTTP response page is served by the HAProxy router for an incorrect route or a non-existing route.

Custom error code response pages are specified in a config map then patched to the Ingress Controller. The config map keys have two available file names as follows:
`error-page-503.http` and `error-page-404.http`.

Custom HTTP error code response pages must follow the [HAProxy HTTP error page configuration guidelines](https://www.haproxy.com/documentation/hapee/latest/configuration/config-sections/http-errors/). Here is an example of the default {{ product_title }} HAProxy router [http 503 error code response page](https://raw.githubusercontent.com/openshift/router/master/images/router/haproxy/conf/error-page-503.http). You can use the default content as a template for creating your own custom page.

By default, the HAProxy router serves only a 503 error page when the application is not running or when the route is incorrect or non-existent. This default behavior is the same as the behavior on {{ product_title }} 4.8 and earlier. If a config map for the customization of an HTTP error code response is not provided, and you are using a custom HTTP error code response page, the router serves a default 404 or 503 error code response page.


:::note

If you use the {{ product_title }} default 503 error code page as a template for your customizations, the headers in the file require an editor that can use CRLF line endings.

:::


**Procedure**

1.  Create a config map named `my-custom-error-code-pages` in the `openshift-config` namespace:
    ```terminal
    $ oc -n openshift-config create configmap my-custom-error-code-pages \
      --from-file=error-page-503.http \
      --from-file=error-page-404.http
    ```

    :::important

    If you do not specify the correct format for the custom error code response page, a router pod outage occurs. To resolve this outage, you must delete or correct the config map and delete the affected router pods so they can be recreated with the correct information.
    
    :::

1.  Patch the Ingress Controller to reference the `my-custom-error-code-pages` config map by name:
    ```terminal
    $ oc patch -n openshift-ingress-operator ingresscontroller/default --patch '{"spec":{"httpErrorCodePages":{"name":"my-custom-error-code-pages"}}}' --type=merge
    ```

    The Ingress Operator copies the `my-custom-error-code-pages` config map from the `openshift-config` namespace to the `openshift-ingress` namespace. The Operator names the config map according to the pattern, `<your_ingresscontroller_name>-errorpages`, in the `openshift-ingress` namespace.
1.  Display the copy:
    ```terminal
    $ oc get cm default-errorpages -n openshift-ingress
    ```
    ```text title="Example output"
    NAME                       DATA   AGE
    default-errorpages         2      25s  (1)
    ```
    1.  The example config map name is `default-errorpages` because the `default` Ingress Controller custom resource (CR) was patched.
1.  Confirm that the config map containing the custom error response page mounts on the router volume where the config map key is the filename that has the custom HTTP error code response:
    *   For 503 custom HTTP custom error code response:
        ```terminal
        $ oc -n openshift-ingress rsh <router_pod> cat /var/lib/haproxy/conf/error_code_pages/error-page-503.http
        ```
    *   For 404 custom HTTP custom error code response:
        ```terminal
        $ oc -n openshift-ingress rsh <router_pod> cat /var/lib/haproxy/conf/error_code_pages/error-page-404.http
        ```

**Verification**

Verify your custom error code HTTP response:

1.  Create a test project and application:
    ```terminal
    $ oc new-project test-ingress
    ```
    ```terminal
    $ oc new-app django-psql-example
    ```
1.  For 503 custom http error code response:
    1.  Stop all the pods for the application.
    1.  Run the following curl command or visit the route hostname in the browser:
        ```terminal
        $ curl -vk <route_hostname>
        ```
1.  For 404 custom http error code response:
    1.  Visit a non-existent route or an incorrect route.
    1.  Run the following curl command or visit the route hostname in the browser:
        ```terminal
        $ curl -vk <route_hostname>
        ```
1.  Check if the `errorfile` attribute is properly in the `haproxy.config` file:
    ```terminal
    $ oc -n openshift-ingress rsh <router> cat /var/lib/haproxy/conf/haproxy.config | grep errorfile
    ```