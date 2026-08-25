{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an OpenShift Update Service application by using the web console {id="update-service-create-service-web-console_{{ context }}"}

You can use the {{ product_title }} web console to create an OpenShift Update Service application by using the OpenShift Update Service Operator. {._abstract}

**Prerequisites**

*   The OpenShift Update Service Operator has been installed.
*   The OpenShift Update Service graph data container image has been created and pushed to a repository that is accessible to the OpenShift Update Service.
*   The current release and update target releases have been mirrored to a registry in the disconnected environment.

**Procedure**

1.  In the web console, click **Ecosystem** -> **Installed Operators**.
1.  Choose **OpenShift Update Service** from the list of installed Operators.
1.  Click the **Update Service** tab.
1.  Click **Create UpdateService**.
1.  Enter a name in the **Name** field, for example, `service`.
1.  Enter the local pullspec in the **Graph Data Image** field to the graph data container image created in "Creating the OpenShift Update Service graph data container image", for example, `registry.example.com/openshift/graph-data:latest`.
1.  In the **Releases** field, enter the registry and repository created to contain the release images in "Mirroring the {{ product_title }} image repository", for example, `registry.example.com/ocp4/openshift4-release-images`.
1.  Enter `2` in the **Replicas** field.
1.  Click **Create** to create the OpenShift Update Service application.
1.  Verify the OpenShift Update Service application:
    *   From the **UpdateServices** list in the **Update Service** tab, click the Update Service application just created.
    *   Click the **Resources** tab.
    *   Verify each application resource has a status of **Created**.