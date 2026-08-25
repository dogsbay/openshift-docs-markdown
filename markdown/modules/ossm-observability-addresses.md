{%- set _mod_docs_content_type = "PROCEDURE" %}
# Discovering console addresses {id="ossm-observability-addresses_{{ context }}"}

{{ SMProductName }} provides the following consoles to view your service mesh data:

*   **Kiali console** - Kiali is the management console for {{ SMProductName }}.
*   **Jaeger console** - Jaeger is the management console for {{ DTProductName }}.
*   **Grafana console** - Grafana provides mesh administrators with advanced query and metrics analysis and dashboards for Istio data. Optionally, Grafana can be used to analyze service mesh metrics.
*   **Prometheus console** - {{ SMProductName }} uses Prometheus to store telemetry information from services.

When you install the {{ SMProductShortName }} control plane, it automatically generates routes for each of the installed components. Once you have the route address, you can access the Kiali, Jaeger, Prometheus, or Grafana console to view and manage your service mesh data.

**Prerequisite**

*   The component must be enabled and installed.  For example, if you did not install distributed tracing, you will not be able to access the Jaeger console.

**Procedure from OpenShift console**

1.  Log in to the {{ product_title }} web console as a user with cluster-admin rights. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
1.  Navigate to **Networking** → **Routes**.
1.  On the **Routes** page, select the {{ SMProductShortName }} control plane project, for example `istio-system`, from the **Namespace** menu.

    The **Location** column displays the linked address for each route.
1.  If necessary, use the filter to find the component console whose route you want to access.  Click the route **Location** to launch the console.
1.  Click **Log In With OpenShift**.

**Procedure from the CLI**

1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
    ```terminal
    $ oc login --username=<NAMEOFUSER> https://<HOSTNAME>:6443
    ```
1.  Switch to the {{ SMProductShortName }} control plane project. In this example, `istio-system` is the {{ SMProductShortName }} control plane project.  Run the following command:
    ```terminal
    $ oc project istio-system
    ```
1.  To get the routes for the various {{ SMProductName }} consoles, run the folowing command:
    ```terminal
    $ oc get routes
    ```

    This command returns the URLs for the Kiali, Jaeger, Prometheus, and Grafana web consoles, and any other routes in your service mesh. You should see output similar to the following:

    ```terminal
    NAME                    HOST/PORT                         SERVICES              PORT    TERMINATION
    bookinfo-gateway        bookinfo-gateway-yourcompany.com  istio-ingressgateway          http2
    grafana                 grafana-yourcompany.com           grafana               <all>   reencrypt/Redirect
    istio-ingressgateway    istio-ingress-yourcompany.com     istio-ingressgateway  8080
    jaeger                  jaeger-yourcompany.com            jaeger-query          <all>   reencrypt
    kiali                   kiali-yourcompany.com             kiali                 20001   reencrypt/Redirect
    prometheus              prometheus-yourcompany.com        prometheus            <all>   reencrypt/Redirect
    ```
1.  Copy the URL for the console you want to access from the `HOST/PORT` column into a browser to open the console.
1.  Click **Log In With OpenShift**.