{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing the application configuration using the Developer perspective {id="odc-editing-application-configuration-using-developer-perspective_{{ context }}"}

You can use the **Topology** view in the **Developer** perspective to edit the configuration of your application.


:::note

Currently, only configurations of applications created by using the **From Git**, **Container Image**, **From Catalog**, or **From Dockerfile** options in the **Add** workflow of the **Developer** perspective can be edited. Configurations of applications created by using the CLI or the **YAML** option from the **Add** workflow cannot be edited.

:::


**Prerequisites**

Ensure that you have created an application using  the **From Git**, **Container Image**, **From Catalog**, or **From Dockerfile** options in the **Add** workflow.

**Procedure**

1.  After you have created an application and it is displayed in the **Topology** view, right-click the application to see the edit options available.

    **Figure 1. Edit application**

    ![odc_edit_app](/_assets/images/odc_edit_app.png)
1.  Click **Edit _application-name_** to see the **Add** workflow you used to create the application. The form is pre-populated with the values you had added while creating the application.
1.  Edit the necessary values for the application.

    :::note

    You cannot edit the **Name** field in the **General** section, the CI/CD pipelines, or the **Create a route to the application** field in the **Advanced Options** section.
    
    :::

1.  Click **Save** to restart the build and deploy a new image.

    **Figure 2. Edit and redeploy application**

    ![odc_edit_redeploy](/_assets/images/odc_edit_redeploy.png)