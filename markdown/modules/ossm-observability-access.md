{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing service mesh data {id="ossm-observability-access-console_{{ context }}"}

The Kiali operator works with the telemetry data gathered in {{ SMProductName }} to provide graphs and real-time network diagrams of the applications, services, and workloads in your namespace.

To access the Kiali console you must have {{ SMProductName }} installed and projects configured for the service mesh.

**Procedure**

1.  Use the perspective switcher to switch to the **Administrator** perspective.
1.  Click **Home** → **Projects**.
1.  Click the name of your project. For example, click `bookinfo`.
1.  In the **Launcher** section, click **Kiali**.
1.  Log in to the Kiali console with the same user name and password that you use to access the {{ product_title }} console.

When you first log in to the Kiali Console, you see the **Overview** page which displays all the namespaces in your service mesh that you have permission to view.

If you are validating the console installation, there might not be any data to display.