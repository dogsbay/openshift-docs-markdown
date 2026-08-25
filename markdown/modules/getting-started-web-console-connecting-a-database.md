{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the database application {id="getting-started-web-console-connecting-database_{{ context }}"}

Deploy a MongoDB database application to contain the information that your application requires. For this tutorial, you will deploy a database application called `mongodb-nationalparks` that holds the national park location information. {._abstract}

**Prerequisites**

*   You have deployed the `parksmap` front-end application.
*   You have deployed the `nationalparks` back-end application.

**Procedure**

1.  From the **Quick create** (![title="Quick create menu"](/_assets/images/fa-plus-circle.png)) menu in the upper right corner, click **Container images**.
1.  Select **Image name from external registry** and enter `registry.redhat.io/rhmap47/mongodb`.
1.  In the **Runtime icon** field, search for and select `mongodb`.
1.  Scroll to the **General** section.
1.  In the **Application name** field, enter `national-parks-app`.
1.  In the **Name** field, enter `mongodb-nationalparks`.
1.  Scroll to the **Deploy** section.
1.  In the **Resource type** field, ensure that **Deployment** is selected.
1.  Click **Show advanced Deployment option**.
1.  Under **Environment variables (runtime only)**, add the following names and values:
    **Environment variable names and values**

    | Name | Value |
    | --- | --- |
    | `MONGODB_USER` | `mongodb` |
    | `MONGODB_PASSWORD` | `mongodb` |
    | `MONGODB_DATABASE` | `mongodb` |
    | `MONGODB_ADMIN_PASSWORD` | `mongodb` |

    :::tip

    Click **Add value** to add each additional environment variable.
    
    :::

1.  In the **Advanced options** section, clear **Create a route**.

    The database application does not need to be accessed externally, so a route is not required.
1.  Click **Create**.

    You are redirected to the **Topology** page where you can see the `mongodb-nationalparks` deployment in the `national-parks-app` application.