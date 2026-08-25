{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project {id="getting-started-web-console-creating-new-project_{{ context }}"}

Create a new project to contain all required resources and application components for the tutorial. {._abstract}

A _project_ enables a community of users to organize and manage their content in isolation. Projects are {{ product_title }} extensions to Kubernetes namespaces. Projects have additional features that enable user self-provisioning. Each project has its own set of objects, policies, constraints, and service accounts.

Cluster administrators can allow developers to create their own projects. In most cases, you automatically have access to your own projects. Administrators can grant access to other projects as needed.

This procedure creates a new project called `user-getting-started`. You will use this project throughout the rest of this tutorial.


:::important

If you are using Developer Sandbox to complete this tutorial, skip this procedure. A project has already been created for you.

:::


**Prerequisites**

*   You have logged in to the {{ product_title }} web console.

**Procedure**

1.  Navigate to **Home** → **Projects**.
1.  Click **Create Project**.
1.  In the **Name** field, enter `user-getting-started`.
1.  Click **Create**.