{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Kiali console {id="ossm-accessing-kiali-console_{{ context }}"}

You can view your application’s topology, health, and metrics in the Kiali console. If your service is experiencing problems, the Kiali console lets you view the data flow through your service. You can view insights about the mesh components at different levels, including abstract applications, services, and workloads. Kiali also provides an interactive graph view of your namespace in real time.

To access the Kiali console you must have {{ SMProductName }} installed, Kiali installed and configured.

The installation process creates a route to access the Kiali console.

If you know the URL for the Kiali console, you can access it directly.  If you do not know the URL, use the following directions.

**Procedure for administrators**

1.  Log in to the {{ product_title }} web console with an administrator role.
1.  Click **Home** -> **Projects**.
1.  On the **Projects** page, if necessary, use the filter to find the name of your project.
1.  Click the name of your project, for example, `bookinfo`.
1.  On the **Project details** page, in the **Launcher** section, click the **Kiali** link.
1.  Log in to the Kiali console with the same user name and password that you use to access the {{ product_title }} console.

    When you first log in to the Kiali Console, you see the **Overview** page which displays all the namespaces in your service mesh that you have permission to view.

    If you are validating the console installation and namespaces have not yet been added to the mesh, there might not be any data to display other than `istio-system`.

**Procedure for developers**

1.  Log in to the {{ product_title }} web console with a developer role.
1.  Click **Project**.
1.  On the **Project Details** page, if necessary, use the filter to find the name of your project.
1.  Click the name of your project, for example, `bookinfo`.
1.  On the **Project** page, in the **Launcher** section, click the **Kiali** link.
1.  Click **Log In With OpenShift**.