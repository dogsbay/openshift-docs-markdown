{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ pac }} with Bitbucket Server {id="using-pipelines-as-code-with-bitbucket-server_{{ context }}"}

If your organization or project uses Bitbucket Server as the preferred platform, you can use {{ pac }} for your repository with a webhook on Bitbucket Server. {._abstract}

**Prerequisites**

*   Ensure that {{ pac }} is installed on the cluster.
*   Generate a personal access token as the manager of the project on Bitbucket Server, and save a copy of it in an alternate location.

    :::note

    *   The token must have the `PROJECT_ADMIN` and `REPOSITORY_ADMIN` permissions.
    *   The token must have access to forked repositories in pull requests.
    
    :::


**Procedure**

1.  On your OpenShift cluster, extract the public URL of the {{ pac }} controller.
    ```terminal
    $ echo https://$(oc get route -n openshift-pipelines pipelines-as-code-controller -o jsonpath='{.spec.host}')
    ```
1.  On Bitbucket Server, perform the following steps:
    1.  Use the left navigation pane of your Bitbucket Data Center repository to go to **Repository settings** –> **Webhooks** and click **Add webhook**.
    1.  Set a **Title**. For example, "Pipelines as Code".
    1.  Set the **URL** to the {{ pac }} controller public URL.
    1.  Add a webhook secret and save a copy of it in an alternate location. If you have `openssl` installed on your local machine, generate a random secret using the following command:
        ```terminal
        $ openssl rand -hex 20
        ```
    1.  Select the following events:
        *   **Repository: Push**
        *   **Repository: Modified**
        *   **Pull Request: Opened**
        *   **Pull Request: Source branch updated**
        *   **Pull Request: Comment added**
    1.  Click **Save**.
1.  On your OpenShift cluster, create a `Secret` object with the app password in the target namespace.
    ```terminal
    $ oc -n target-namespace create secret generic bitbucket-server-webhook-config \
      --from-literal provider.token="<PERSONAL_TOKEN>" \
      --from-literal webhook.secret="<WEBHOOK_SECRET>"
    ```
1.  Create a `Repository` CR.
    ```yaml title="Example: Repository CR"
    apiVersion: "pipelinesascode.tekton.dev/v1alpha1"
    kind: Repository
    metadata:
      name: my-repo
      namespace: target-namespace
    spec:
      url: "https://bitbucket.com/workspace/repo"
      git_provider:
        url: "https://bitbucket.server.api.url/rest" (1)
        user: "<BITBUCKET_USERNAME>" (2)
        secret: (3)
          name: "bitbucket-server-webhook-config"
          key: "provider.token" # Set this if you have a different key in your secret
        webhook_secret:
          name: "bitbucket-server-webhook-config"
          key: "webhook.secret" # Set this if you have a different key for your secret
    ```
    1.  Ensure that you have the right Bitbucket Server API URL without the `/api/v1.0` suffix. Usually, the default install has a `/rest` suffix.
    1.  You can only reference a user by the `ACCOUNT_ID` in an owner file.
    1.  {{ pac }} assumes that the secret referred in the `git_provider.secret` spec and the `Repository` CR is in the same namespace.

    :::note

    The `tkn pac create` and `tkn pac bootstrap` commands are not supported on Bitbucket Server.
    
    :::