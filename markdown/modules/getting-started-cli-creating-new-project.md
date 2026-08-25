{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project {id="getting-started-cli-creating-new-project_{{ context }}"}

Create a new project to contain all required resources and application components for the tutorial. {._abstract}

A _project_ enables a community of users to organize and manage their content in isolation. Projects are {{ product_title }} extensions to Kubernetes namespaces. Projects have additional features that enable user self-provisioning. Each project has its own set of objects, policies, constraints, and service accounts.

Cluster administrators can allow developers to create their own projects. In most cases, you automatically have access to your own projects. Administrators can grant access to other projects as needed.

This procedure creates a new project called `user-getting-started`. You will use this project throughout the rest of this tutorial.


:::important

If you are using Developer Sandbox to complete this tutorial, skip this procedure. A project has already been created for you.

:::


**Prerequisites**

*   You have logged in to the {{ oc_first }}.

**Procedure**

*   Create a project by running the following command:
    ```terminal
    $ oc new-project user-getting-started
    ```

    ```terminal title="Example output"
    Now using project "user-getting-started" on server "https://openshift.example.com:6443".
    ...
    ```