{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using GitLab webhooks {id="builds-using-gitlab-webhooks_{{ context }}"}

GitLab webhooks handle the call made by GitLab when a repository is updated. As with the GitHub triggers, you must specify a secret. The following example is a trigger definition YAML within the `BuildConfig`:

```yaml
type: "GitLab"
gitlab:
  secretReference:
    name: "mysecret"
```

The payload URL is returned as the GitLab Webhook URL by the `oc describe` command, and is structured as follows:

```terminal title="Example output"
https://<openshift_api_host:port>/apis/build.openshift.io/v1/namespaces/<namespace>/buildconfigs/<name>/webhooks/<secret>/gitlab
```

**Prerequisites**

*   `system:unauthenticated` has access to the `system:webhook` role in the required namespaces. Or, `system:unauthenticated` has access to the `system:webhook` cluster role.

**Procedure**

1.  Configure a GitLab Webhook.
    1.  Get the webhook URL by entering the following command:
        ```terminal
        $ oc describe bc <name>
        ```
    1.  Copy the webhook URL, replacing `<secret>` with your secret value.
    1.  Follow the [GitLab setup instructions](https://docs.gitlab.com/ce/user/project/integrations/webhooks.html#webhooks)
    to paste the webhook URL into your GitLab repository settings.
1.  Given a file containing a valid JSON payload, such as `payload.json`, you can
manually trigger the webhook with the following `curl` command:
    ```terminal
    $ curl -H "X-GitLab-Event: Push Hook" -H "Content-Type: application/json" -k -X POST --data-binary @payload.json https://<openshift_api_host:port>/apis/build.openshift.io/v1/namespaces/<namespace>/buildconfigs/<name>/webhooks/<secret>/gitlab
    ```

    The `-k` argument is only necessary if your API server does not have a properly
    signed certificate.