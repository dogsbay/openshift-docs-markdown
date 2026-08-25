{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an OpenShift Update Service application by using the web console {id="update-service-delete-service-web-console_{{ context }}"}

You can use the {{ product_title }} web console to delete an OpenShift Update Service application by using the OpenShift Update Service Operator. {._abstract}

**Prerequisites**

*   The OpenShift Update Service Operator has been installed.

**Procedure**

1.  In the web console, click **Ecosystem** → **Installed Operators**.
1.  Choose **OpenShift Update Service** from the list of installed Operators.
1.  Click the **Update Service** tab.
1.  From the list of installed OpenShift Update Service applications, select the application to be deleted and then click **Delete UpdateService**.
1.  From the **Delete UpdateService?** confirmation dialog, click **Delete** to confirm the deletion.