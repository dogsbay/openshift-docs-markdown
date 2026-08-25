{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a config map in the {{ product_title }} web console {id="nodes-pods-configmap-create-from-console_{{ context }}"}

To provide configuration data to your pods, you can create a config map by using the {{ product_title }} web console. You can use config maps to define key-value pairs that contain information for your applications. {._abstract}

**Procedure**

*   To create a config map as a cluster administrator:
    1.  In the Administrator perspective, select `Workloads` → `Config Maps`.
    1.  At the top right side of the page, select **Create Config Map**.
    1.  Enter the contents of your config map.
    1.  Select **Create**.
*   To create a config map as a developer:
    1.  In the Developer perspective, select `Config Maps`.
    1.  At the top right side of the page, select **Create Config Map**.
    1.  Enter the contents of your config map.
    1.  Select **Create**.