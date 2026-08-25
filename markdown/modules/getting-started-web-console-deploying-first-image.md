{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the front-end application {id="getting-started-web-console-deploying-first-image_{{ context }}"}

Deploy the front-end application that provides the external-facing web component for the tutorial. {._abstract}

The simplest way to deploy an application in {{ product_title }} is to run a provided container image.

The following procedure deploys `parksmap`, which is the front-end component of the `national-parks-app` application. The web application displays an interactive map of the locations of national parks across the world.

**Procedure**

1.  From the **Quick create** (![title="Quick create menu"](/_assets/images/fa-plus-circle.png)) menu in the upper right corner, click **Container images**.
1.  Select **Image name from external registry** and enter `quay.io/openshiftroadshow/parksmap:latest`.
1.  Scroll to the **General** section.
1.  In the **Application name** field, enter `national-parks-app`.
1.  In the **Name** field, ensure that the value is `parksmap`.
1.  Scroll to the **Deploy** section.
1.  In the **Resource type** field, ensure that **Deployment** is selected.
1.  In the **Advanced options** section, ensure that **Create a route** is selected.

    By default, services running on {{ product_title }} are not accessible externally. You must select this option to create a route so that external clients can access your service.
1.  Click the **Labels** hyperlink.

    The application code requires certain labels to be set.
1.  Add the following labels to the text area and press Enter after each key/value pair:
    *   `app=national-parks-app`
    *   `component=parksmap`
    *   `role=frontend`
1.  Click **Create**.

    You are redirected to the **Topology** page where you can see the `parksmap` deployment in the `national-parks-app` application.