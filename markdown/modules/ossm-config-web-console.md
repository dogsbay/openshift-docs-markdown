{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ SMProductShortName }} control plane with the web console {id="ossm-config-web-console_{{ context }}"}

You can configure the `ServiceMeshControlPlane` by using the {{ product_title }} web console.

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** → **Installed Operators**.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane, for example **istio-system**.
1.  Click the {{ SMProductName }} Operator. In the **Istio Service Mesh Control Plane** column, click the name of your `ServiceMeshControlPlane` resource, for example `basic`.
1.  On the **Details** page, click the toggle.
1.  Click **Save**.