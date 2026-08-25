{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a GitHub App in administrator perspective {id="creating-a-github-application-in-administrator-perspective_{{ context }}"}

As a cluster administrator, you can configure your GitHub App with the {{ product_title }} cluster to use {{ pac }}. This configuration allows you to execute a set of tasks required for build deployment.

**Prerequisites**

You have installed the {{ pipelines_title }} `{{ pipelines_ver }}` operator from the Operator Hub.

**Procedure**

1.  In the administrator perspective, navigate to **Pipelines** using the navigation pane.
1.  Click **Setup GitHub App** on the **Pipelines** page.
1.  Enter your GitHub App name. For example, `pipelines-ci-clustername-testui`.
1.  Click **Setup**.
1.  Enter your Git password when prompted in the browser.
1.  Click **Create GitHub App for &lt;username>**, where `<username>` is your GitHub user name.

**Verification**

After successful creation of the GitHub App, the {{ product_title }} web console opens and displays the details about the application.

![Github-app-details](/_assets/images/Github-app-details.png)

The details of the GitHub App are saved as a secret in the `openShift-pipelines` namespace.

To view details such as name, link, and secret associated with the GitHub applications, navigate to **Pipelines** and click **View GitHub App**.