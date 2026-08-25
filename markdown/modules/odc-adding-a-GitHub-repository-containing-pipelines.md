{%- set _mod_docs_content_type = "PROCEDURE" %}

# Adding a GitHub repository containing pipelines {id="odc-adding-a-GitHub-repository-containing-pipelines_{{ context }}"}

In the **Developer** perspective, you can add your GitHub repository containing pipelines to the {{ product_title }} cluster. This allows you to run pipelines and tasks from your GitHub repository on the cluster when relevant Git events, such as push or pull requests, are triggered.


:::note

You can add both public and private GitHub repositories.

:::


**Prerequisites**

*   Ensure that your cluster administrator has configured the required GitHub applications in the administrator perspective.

**Procedure**

1.  In the **Developer** perspective, choose the namespace or project in which you want to add your GitHub repository.
1.  Navigate to **Pipelines** using the left navigation pane.
1.  Click **Create** → **Repository** on the right side of the **Pipelines** page.
1.  Enter your **Git Repo URL** and the console automatically fetches the repository name.
1.  Click **Show configuration options**. By default, you see only one option **Setup a webhook**. If you have a GitHub application configured, you see two options:
    *   **Use GitHub App**: Select this option to install your GitHub application in your repository.
    *   **Setup a webhook**: Select this option to add a webhook to your GitHub application.
1.  Set up a webhook using one of the following options in the **Secret** section:
    *   Setup a webhook using **Git access token**:
        1.  Enter your personal access token.
        1.  Click **Generate** corresponding to the **Webhook secret** field to generate a new webhook secret.
            ![Git-access-token](/_assets/images/Git-access-token.png)

            :::note

            You can click the link below the **Git access token** field if you do not have a personal access token and want to create a new one.
            
            :::

    *   Setup a webhook using **Git access token secret**:
        *   Select a secret in your namespace from the dropdown list. Depending on the secret you selected, a webhook secret is automatically generated.
            ![Git-access-token-secret](/_assets/images/Git-access-token-secret.png)
1.  Add the webhook secret details to your GitHub repository:
    1.  Copy the **webhook URL** and navigate to your GitHub repository settings.
    1.  Click **Webhooks** → **Add webhook**.
    1.  Copy the **Webhook URL** from the developer console and paste it in the **Payload URL** field of the GitHub repository settings.
    1.  Select the **Content type**.
    1.  Copy the **Webhook secret** from the developer console and paste it in the **Secret** field of the GitHub repository settings.
    1.  Select one of the **SSL verification** options.
    1.  Select the events to trigger this webhook.
    1.  Click **Add webhook**.
1.  Navigate back to the developer console and click **Add**.
1.  Read the details of the steps that you have to perform and click **Close**.
1.  View the details of the repository you just created.


:::note

When importing an application using **Import from Git** and the Git repository has a `.tekton` directory, you can configure `pipelines-as-code` for your application.

:::