{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ pac }} with a GitHub App {id="using-pipelines-as-code-with-a-github-app_{{ context }}"}

GitHub Apps act as a point of integration with {{ pipelines_title }} and bring the advantage of Git-based workflows to {{ pipelines_shortname }}. Cluster administrators can configure a single GitHub App for all cluster users. For GitHub Apps to work with {{ pac }}, ensure that the webhook of the GitHub App points to the {{ pac }} event listener route (or ingress endpoint) that listens for GitHub events. {._abstract}


:::note

When importing an application using **Import from Git** and the Git repository has a `.tekton` directory, you can configure `pipelines-as-code` for your application.

:::


## Configuring a GitHub App {id="configuring-github-app-for-pac"}

Cluster administrators can create a GitHub App by running the following command:

```terminal
$ tkn pac bootstrap github-app
```

If the `tkn pac` CLI plugin is not installed, you can create the GitHub App manually.

**Procedure**

To create and configure a GitHub App manually for {{ pac }}, perform the following steps:

1.  Sign in to your GitHub account.
1.  Go to **Settings** → **Developer settings** → **GitHub Apps**, and click **New GitHub App**.
1.  Provide the following information in the GitHub App form:
    *   **GitHub Application Name**: `{{ pipelines_shortname }}`{minja}
    *   **Homepage URL**: OpenShift Console URL
    *   **Webhook URL**: The {{ pac }} route or ingress URL. You can find it by running the following command:
        ```terminal
        $ echo https://$(oc get route -n openshift-pipelines pipelines-as-code-controller -o jsonpath='{.spec.host}')
        ```
    *   **Webhook secret**: An arbitrary secret. You can generate a secret by running the following command:
        ```terminal
        $ openssl rand -hex 20
        ```
1.  Select the following **Repository permissions**:
    *   **Checks**: `Read & Write`
    *   **Contents**: `Read & Write`
    *   **Issues**: `Read & Write`
    *   **Metadata**: `Read-only`
    *   **Pull request**: `Read & Write`
1.  Select the following **Organization permissions**:
    *   **Members**: `Readonly`
    *   **Plan**: `Readonly`
1.  Select the following **User permissions**:
    *   **Check run**
    *   **Issue comment**
    *   **Pull request**
    *   **Push**
1.  Click **Create GitHub App**.
1.  On the **Details** page of the newly created GitHub App, note the **App ID** displayed at the top.
1.  In the **Private keys** section, click **Generate Private key** to automatically generate and download a private key for the GitHub app. Securely store the private key for future reference and usage.
1.  Install the created App on a repository that you want to use with {{ pac }}.

## Configuring {{ pac }} to access a GitHub App {id="configuring-pac-for-github-app"}

To configure {{ pac }} to access the newly created GitHub App, execute the following command:

```terminal
$ oc -n openshift-pipelines create secret generic pipelines-as-code-secret \
        --from-literal github-private-key="$(cat <PATH_PRIVATE_KEY>)" \ (1)
        --from-literal github-application-id="<APP_ID>" \ (2)
        --from-literal webhook.secret="<WEBHOOK_SECRET>" (3)
```
1.  The path to the private key you downloaded while configuring the GitHub App.
1.  The **App ID** of the GitHub App.
1.  The webhook secret provided when you created the GitHub App.


:::note

{{ pac }} works automatically with GitHub Enterprise by detecting the header set from GitHub Enterprise and using it for the GitHub Enterprise API authorization URL.

:::