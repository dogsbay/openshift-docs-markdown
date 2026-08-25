{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using Bitbucket webhooks {id="builds-using-bitbucket-webhooks_{{ context }}"}

[Bitbucket webhooks](https://confluence.atlassian.com/bitbucket/manage-webhooks-735643732.html) handle the call made by Bitbucket when a repository is updated. Similar to GitHub and GitLab triggers, you must specify a secret. The following example is a trigger definition YAML within the `BuildConfig`:

```yaml
type: "Bitbucket"
bitbucket:
  secretReference:
    name: "mysecret"
```

The payload URL is returned as the Bitbucket Webhook URL by the `oc describe` command, and is structured as follows:

```terminal title="Example output"
https://<openshift_api_host:port>/apis/build.openshift.io/v1/namespaces/<namespace>/buildconfigs/<name>/webhooks/<secret>/bitbucket
```

**Prerequisites**

*   `system:unauthenticated` has access to the `system:webhook` role in the required namespaces. Or, `system:unauthenticated` has access to the `system:webhook` cluster role.

**Procedure**

1.  Configure a Bitbucket Webhook.
    1.  Get the webhook URL by entering the following command:
        ```terminal
        $ oc describe bc <name>
        ```
    1.  Copy the webhook URL, replacing `<secret>` with your secret value.
    1.  Follow the [Bitbucket setup instructions](https://confluence.atlassian.com/bitbucket/manage-webhooks-735643732.html) to paste the webhook URL into your Bitbucket repository settings.
1.  Given a file containing a valid JSON payload, such as `payload.json`, you can
manually trigger the webhook by entering the following `curl` command:
    ```terminal
    $ curl -H "X-Event-Key: repo:push" -H "Content-Type: application/json" -k -X POST --data-binary @payload.json https://<openshift_api_host:port>/apis/build.openshift.io/v1/namespaces/<namespace>/buildconfigs/<name>/webhooks/<secret>/bitbucket
    ```

    The `-k` argument is only necessary if your API server does not have a properly signed certificate.