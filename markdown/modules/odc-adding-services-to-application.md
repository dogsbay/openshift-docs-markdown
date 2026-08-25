{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding services to your application {id="odc-adding-services-to-your-application_{{ context }}"}

To add a service to your application use the **+Add** actions using the context menu in the topology **Graph view**.


:::note

In addition to the context menu, you can add services by using the sidebar or hovering and dragging the dangling arrow from the application group.

:::


**Procedure**

1.  Right-click an application group in the topology **Graph view** to display the context menu.
    **Figure 1. Add resource context menu**

    ![odc_context_menu](/_assets/images/odc_context_menu.png)
1.  Use **Add to Application** to select a method for adding a service to the application group, such as **From Git**, **Container Image**, **From Dockerfile**, **From Devfile**, **Upload JAR file**, **Event Source**, **Channel**, or **Broker**.
1.  Complete the form for the method you choose and click **Create**. For example, to add a service based on the source code in your Git repository, choose the **From Git** method, fill in the **Import from Git** form, and click **Create**.