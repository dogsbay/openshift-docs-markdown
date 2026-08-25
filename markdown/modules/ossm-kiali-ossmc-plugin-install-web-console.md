{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing OpenShift Service Mesh Console plugin using the {{ product_title }} web console {id="ossm-kiali-ossmc-plugin-install-web-console_{{ context }}"}

You can install the {{ SMPlugin }} using the {{ product_title }} web console.

**Prerequisites**

*   {{ product_title }} is installed.
*   {{ KialiProduct }} 1.73 is installed.
*   {{ SMProductName }} (OSSM) is installed.
*   `ServiceMeshControlPlane` 2.5 or later is installed.

**Procedure**

1.  Navigate to **Installed Operators**.
1.  Click **{{ KialiProduct }}**.
1.  Click **Create instance** on the **{{ SMProductName }}** tile.
1.  Use the **Create OSSMConsole** form to create an instance of the `OSSMConsole` custom resource (CR).
    *   **Name** and **Version** are required fields.

        :::note

        The **Version** field must match the `spec.version` field in your Kiali CR.
        
        :::

1.  Click **Create**.
1.  Navigate back to the {{ product_title }} web console and use the new menu options for visibility into your Service Mesh.