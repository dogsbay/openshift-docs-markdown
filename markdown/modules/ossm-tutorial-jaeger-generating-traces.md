{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating example traces and analyzing trace data {id="generating-sample-traces-analyzing-trace-data_{{ context }}"}

Jaeger is an open source distributed tracing system. With Jaeger, you can perform a trace that follows the path of a request through various microservices which make up an application. Jaeger is installed by default as part of the {{ SMProductShortName }}.

This tutorial uses {{ SMProductShortName }} and the Bookinfo sample application to demonstrate how you can use Jaeger to perform distributed tracing.

**Prerequisites**

*   {{ product_title }} 4.1 or higher installed.
*   {{ SMProductName }} {{ SMProductVersion }} installed.
*   Jaeger enabled during the installation.
*   Bookinfo example application installed.

**Procedure**

1.  After installing the Bookinfo sample application, send traffic to the mesh. Enter the following command several times.
    ```terminal
    $ curl "http://$GATEWAY_URL/productpage"
    ```

    This command simulates a user visiting the `productpage` microservice of the application.
1.  In the {{ product_title }} console, navigate to **Networking** → **Routes** and search for the Jaeger route, which is the URL listed under **Location**.
    *   Alternatively, use the CLI to query for details of the route. In this example, `istio-system` is the {{ SMProductShortName }} control plane namespace:
        ```terminal
        $ export JAEGER_URL=$(oc get route -n istio-system jaeger -o jsonpath='{.spec.host}')
        ```
        1.  Enter the following command to reveal the URL for the Jaeger console. Paste the result in a browser and navigate to that URL.
            ```terminal
            echo $JAEGER_URL
            ```
1.  Log in using the same user name and password as you use to access the {{ product_title }} console.
1.  In the left pane of the Jaeger dashboard, from the **Service** menu, select **productpage.bookinfo** and click **Find Traces** at the bottom of the pane. A list of traces is displayed.
1.  Click one of the traces in the list to open a detailed view of that trace.  If you click the first one in the list, which is the most recent trace, you see the details that correspond to the latest refresh of the `/productpage`.