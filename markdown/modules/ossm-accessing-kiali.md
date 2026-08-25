{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the Kiali console {id="ossm-accessing-kiali_{{ context }}"}

The deployment process creates a route to access the Kiali console.

**Procedure**

1.  Log in to the {{ Product_title }} console.
1.  Use the perspective switcher to switch to the **Administrator** perspective.
1.  Click **Home** -> **Projects**.
1.  Click the name of your project. For example click `bookinfo`.
1.  In the **Launcher** section, click **Kiali**.
1.  Log in to the Kiali console with the same user name and password that you use to access the {{ product_title }} console.

When you first log in to the Kiali Console, you see the **Overview** page which displays all the namespaces in your service mesh that you have permission to view.

If you are validating the console installation, there might not be any data to display.