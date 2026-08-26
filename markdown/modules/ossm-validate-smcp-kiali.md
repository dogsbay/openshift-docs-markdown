{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validating your SMCP installation with Kiali {id="ossm-validate-control-plane-kiali_{{ context }}"}

You can use the Kiali console to validate your {{ SMProductShortName }} installation. The Kiali console offers several ways to validate your {{ SMProductShortName }} components are deployed and configured properly.

1.  Prerequisites
    *   The {{ SMProductName }} Operator must be installed.
    *   Access to the OpenShift CLI (`oc`).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    *   You are logged in to {{ product_title }} as`cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
    *   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure**

1.  In the {{ product_title }} web console, navigate to **Networking** → **Routes**.
1.  On the **Routes** page, select the {{ SMProductShortName }} control plane project, for example `istio-system`, from the **Namespace** menu.

    The **Location** column displays the linked address for each route.
1.  If necessary, use the filter to find the route for the Kiali console. Click the route **Location** to launch the console.
1.  Click **Log In With OpenShift**.

    When you first log in to the Kiali Console, you see the **Overview** page which displays all the namespaces in your service mesh that you have permission to view. When there are multiple namespaces shown on the **Overview** page, Kiali shows namespaces with health or validation problems first.

    **Figure 1. Kiali Overview page**

    ![Kiali Overview page showing istio-system](/images/ossm-kiali-overview.png)

    The tile for each namespace displays the number of labels, the **Istio Config** health, the number of and **Applications** health, and **Traffic** for the namespace. If you are validating the console installation and namespaces have not yet been added to the mesh, there might not be any data to display other than `istio-system`.
1.  Kiali has four dashboards specifically for the namespace where the {{ SMProductShortName }} control plane is installed.  To view these dashboards, click the Options menu {{ kebab }} on the tile for the control plane namespace, for example, `istio-system`, and select one of the following options:
    *   **Istio Mesh Dashboard**
    *   **Istio Control Plane Dashboard**
    *   **Istio Performance Dashboard**
    *   **Istio Wasm Exetension Dashboard**

        **Figure 2. Grafana Istio Control Plane Dashboard**

        ![Istio Control Plane Dashboard showing data for bookinfo sample project](/images/ossm-grafana-control-plane-dashboard.png)

        Kiali also installs two additional Grafana dashboards, available from the Grafana **Home** page:
    *   **Istio Workload Dashboard**
    *   **Istio Service Dashboard**
1.  To view the {{ SMProductShortName }} control plane nodes, click the **Graph** page, select the **Namespace** where you installed the `ServiceMeshControlPlane` from the menu, for example `istio-system`.
    1.  If necessary, click **Display idle nodes**.
    1.  To learn more about the **Graph** page, click the **Graph tour** link.
    1.  To view the mesh topology, select one or more additional namespaces from the Service Mesh Member Roll from the **Namespace** menu.
1.  To view the list of applications in the `istio-system` namespace, click the **Applications** page. Kiali displays the health of the applications.
    1.  Hover your mouse over the information icon to view any additional information noted in the **Details** column.
1.  To view the list of workloads in the `istio-system` namespace, click the **Workloads** page. Kiali displays the health of the workloads.
    1.  Hover your mouse over the information icon to view any additional information noted in the **Details** column.
1.  To view the list of services in the `istio-system` namespace, click the **Services** page. Kiali displays the health of the services and of the configurations.
    1.  Hover your mouse over the information icon to view any additional information noted in the **Details** column.
1.  To view a list of the Istio Configuration objects in the `istio-system` namespace, click the **Istio Config** page. Kiali displays the health of the configuration.
    1.  If there are configuration errors, click the row and Kiali opens the configuration file with the error highlighted.