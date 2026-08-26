{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the back-end application {id="getting-started-web-console-deploying-python-app_{{ context }}"}

Deploy the back-end application that provides the service that queries the database to return the national park data required for your application. {._abstract}

The following procedure deploys `nationalparks`, which is the back-end component for the `national-parks-app` application. The Python application performs 2D geo-spatial queries against a MongoDB database to locate and return map coordinates of all national parks in the world.

**Prerequisites**

*   You have deployed the `parksmap` front-end application.

**Procedure**

1.  From the **Quick create** (![fa-plus-circle](/images/fa-plus-circle.png "Quick create menu")) menu in the upper right corner, click **Import from Git**.
1.  In the **Git Repo URL** field, enter `https://github.com/openshift-roadshow/nationalparks-py.git`.

    A builder image is automatically detected, but the import strategy defaults to Dockerfile instead of Python.
1.  Change the import strategy:
    1.  Click **Edit Import Strategy**.
    1.  Select **Builder Image**.
    1.  Select **Python**.
1.  Scroll to the **General** section.
1.  In the **Application** field, ensure that the value is `national-parks-app`.
1.  In the **Name** field, enter `nationalparks`.
1.  Scroll to the **Deploy** section.
1.  In the **Resource type** field, ensure that **Deployment** is selected.
1.  In the **Advanced options** section, ensure that **Create a route** is selected.

    By default, services running on {{ product_title }} are not accessible externally. You must select this option to create a route so that external clients can access your service.
1.  Click the **Labels** hyperlink.

    The application code requires certain labels to be set.
1.  Add the following labels to the text area and press Enter after each key/value pair:
    *   `app=national-parks-app`
    *   `component=nationalparks`
    *   `role=backend`
    *   `type=parksmap-backend`
1.  Click **Create**.

    You are redirected to the **Topology** page where you can see the `nationalparks` deployment in the `national-parks-app` application.

**Verification**

1.  Navigate to **Workloads** → **Topology**.
1.  Click the `nationalparks` deployment in the `national-parks-app` application.
1.  Click the **Resources** tab.

    Wait for the build to complete successfully.