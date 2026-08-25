{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Jaeger console {id="ossm-accessing-jaeger_{{ context }}"}

The deployment process creates a route to access the Jaeger console.


:::important

Starting with {{ SMProductName }} 2.5, {{ JaegerName }} and {{ es_op }} have been deprecated and will be removed in a future release. Red&#160;Hat will provide bug fixes and support for this feature during the current release lifecycle, but this feature will no longer receive enhancements and will be removed. As an alternative to {{ JaegerName }}, you can use {{ TempoName }} instead.

:::


**Procedure**

1.  Log in to the {{ Product_title }} console.
1.  Navigate to **Networking** -> **Routes** and
search for the Jaeger route, which is the URL listed under **Location**.
1.  To query for details of the route using the command line, enter the following command. In this example, `istio-system` is the {{ SMProductShortName }} control plane namespace.
    ```terminal
    $ oc get route -n istio-system jaeger -o jsonpath='{.spec.host}'
    ```
1.  Launch a browser and navigate to ``https://<JAEGER_URL>``, where `<JAEGER_URL>` is the route that you discovered in the previous step.
1.  Log in using the same user name and password that you use to access the {{ Product_title }} console.
1.  If you have added services to the service mesh and have generated traces, you can use the filters and **Find Traces** button to search your trace data.

    If you are validating the console installation, there is no data to display until you start collecting traces.