{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Jaeger console {id="ossm-accessing-jaeger-console_{{ context }}"}

To access the Jaeger console you must have {{ SMProductName }} installed, {{ JaegerName }} installed and configured.

The installation process creates a route to access the Jaeger console.

If you know the URL for the Jaeger console, you can access it directly.  If you do not know the URL, use the following directions.


:::important

Starting with {{ SMProductName }} 2.5, {{ JaegerName }} and {{ es_op }} have been deprecated and will be removed in a future release. Red&#160;Hat will provide bug fixes and support for this feature during the current release lifecycle, but this feature will no longer receive enhancements and will be removed. As an alternative to {{ JaegerName }}, you can use {{ TempoName }} instead.

:::


**Procedure from OpenShift console**

1.  Log in to the {{ product_title }} web console as a user with cluster-admin rights. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
1.  Navigate to **Networking** -> **Routes**.
1.  On the **Routes** page, select the {{ SMProductShortName }} control plane project, for example `istio-system`, from the **Namespace** menu.

    The **Location** column displays the linked address for each route.
1.  If necessary, use the filter to find the `jaeger` route.  Click the route **Location** to launch the console.
1.  Click **Log In With OpenShift**.

**Procedure from Kiali console**

1.  Launch the Kiali console.
1.  Click **Distributed Tracing** in the left navigation pane.
1.  Click **Log In With OpenShift**.

**Procedure from the CLI**

1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
    ```terminal
    $ oc login --username=<NAMEOFUSER> https://<HOSTNAME>:6443
    ```
1.  To query for details of the route using the command line, enter the following command. In this example, `istio-system` is the {{ SMProductShortName }} control plane namespace.
    ```terminal
    $ oc get route -n istio-system jaeger -o jsonpath='{.spec.host}'
    ```
1.  Launch a browser and navigate to ``https://<JAEGER_URL>``, where `<JAEGER_URL>` is the route that you discovered in the previous step.
1.  Log in using the same user name and password that you use to access the {{ Product_title }} console.
1.  If you have added services to the service mesh and have generated traces, you can use the filters and **Find Traces** button to search your trace data.

    If you are validating the console installation, there is no trace data to display.