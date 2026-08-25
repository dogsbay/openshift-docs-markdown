{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using GitHub webhooks {id="builds-using-github-webhooks_{{ context }}"}

GitHub webhooks handle the call made by GitHub when a repository is updated. When defining the trigger, you must specify a secret, which is part of the URL you supply to GitHub when configuring the webhook.

Example GitHub webhook definition:

```yaml
type: "GitHub"
github:
  secretReference:
    name: "mysecret"
```


:::note

The secret used in the webhook trigger configuration is not the same as the `secret` field you encounter when configuring webhook in GitHub UI. The secret in the webhook trigger configuration makes the webhook URL unique and hard to predict. The secret configured in the GitHub UI is an optional string field that is used to create an HMAC hex digest of the body, which is sent as an `X-Hub-Signature` header.

:::


The payload URL is returned as the GitHub Webhook URL by the `oc describe`
command (see Displaying Webhook URLs), and is structured as follows:

```terminal title="Example output"
https://<openshift_api_host:port>/apis/build.openshift.io/v1/namespaces/<namespace>/buildconfigs/<name>/webhooks/<secret>/github
```

**Prerequisites**

*   Create a `BuildConfig` from a GitHub repository.
*   `system:unauthenticated` has access to the `system:webhook` role in the required namespaces. Or, `system:unauthenticated` has access to the `system:webhook` cluster role.

**Procedure**

1.  Configure a GitHub Webhook.
    1.  After creating a `BuildConfig` object from a GitHub repository, run the following command:
        ```terminal
        $ oc describe bc/<name_of_your_BuildConfig>
        ```

        This command generates a webhook GitHub URL.
        ```terminal title="Example output"
        https://api.starter-us-east-1.openshift.com:443/apis/build.openshift.io/v1/namespaces/<namespace>/buildconfigs/<name>/webhooks/<secret>/github
        ```
    1.  Cut and paste this URL into GitHub, from the GitHub web console.
    1.  In your GitHub repository, select **Add Webhook** from **Settings → Webhooks**.
    1.  Paste the URL output into the **Payload URL** field.
    1.  Change the **Content Type** from GitHub’s default `application/x-www-form-urlencoded` to `application/json`.
    1.  Click **Add webhook**.

        You should see a message from GitHub stating that your webhook was successfully configured.

        Now, when you push a change to your GitHub repository, a new build automatically starts, and upon a successful build a new deployment starts.

        :::note

        [Gogs](https://gogs.io) supports the same webhook payload format as GitHub. Therefore, if you are using a Gogs server, you can define a GitHub webhook trigger on your `BuildConfig` and trigger it by your Gogs server as well.
        
        :::

1.  Given a file containing a valid JSON payload, such as `payload.json`, you can manually trigger the webhook with the following `curl` command:
    ```terminal
    $ curl -H "X-GitHub-Event: push" -H "Content-Type: application/json" -k -X POST --data-binary @payload.json https://<openshift_api_host:port>/apis/build.openshift.io/v1/namespaces/<namespace>/buildconfigs/<name>/webhooks/<secret>/github
    ```

    The `-k` argument is only necessary if your API server does not have a properly
    signed certificate.


    :::note

    The build will only be triggered if the `ref` value from GitHub webhook event matches the `ref` value specified in the `source.git` field of the `BuildConfig` resource.
    
    :::


**Additional resources**
{._additional-resources}

*   [Gogs](https://gogs.io)