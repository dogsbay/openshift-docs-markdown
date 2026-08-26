{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Grafana dashboard {id="ossm-tutorial-grafana-accessing_{{ context }}"}

The Grafana dashboard’s web-based interface lets you visualize your metrics data.

**Prerequisites**

*   {{ product_title }} 3.11 or higher installed.
*   {{ SMProductName }} {{ SMProductVersion }} installed.
*   `Bookinfo` demonstration application installed.

**Procedure**

1.  A route to access the Grafana dashboard already exists. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project. Query for details of the route:
    ```
      $ export GRAFANA_URL=$(oc get route -n istio-system grafana -o jsonpath='{.spec.host}')
    ```
1.  Launch a browser and navigate to navigate to `http://<GRAFANA_URL>`.  You see Grafana’s home screen, as shown in the following figure:
    ![ossm-grafana-home-screen](/images/ossm-grafana-home-screen.png)
1.  From the menu in the upper-left corner, select **Istio Mesh Dashboard** to see Istio mesh metrics.
    ![ossm-grafana-mesh-no-traffic](/images/ossm-grafana-mesh-no-traffic.png)
1.  Generate some traffic by accessing the Bookinfo application:
    ```
    $ curl -o /dev/null http://<GATEWAY_URL>/productpage
    ```

    The dashboard reflects the traffic through the mesh, similar to the following figure:
    ![ossm-grafana-mesh-with-traffic](/images/ossm-grafana-mesh-with-traffic.png)
1.  To see detailed metrics for a Service, click a Service name in the **Service** column. The Service dashboard resembles the following figure:
    ![ossm-grafana-services](/images/ossm-grafana-services.png)

    Note that **TCP Bandwidth** metrics are empty, because Bookinfo only uses http-based Services. The dashboard also displays metrics for Workloads that call the **Client Workloads** Service and for Workloads that process requests from the **Service Workloads**. You can switch to a different Service or filter metrics by client and Service Workloads by using the menus at the top of the dashboard.
1.  To switch to the Workloads dashboard, click **Istio Workload Dashboard** on the menu in the upper-left corner. You will see a screen resembling the following figure:
    ![ossm-grafana-workloads](/images/ossm-grafana-workloads.png)

    This dashboard shows Workload metrics and metrics for client (inbound) and Service (outbound) Workloads. You can switch to a different Workload; to filter metrics by inbound or outbound Workloads, use the menus at the top of the dashboard.