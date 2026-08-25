{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating webhooks {id="creating-webhooks_{{ context }}"}

_Webhooks_ are HTTP POST messages that are received by the event listeners whenever a configured event occurs in your repository. The event payload is then mapped to trigger bindings, and processed by trigger templates. The trigger templates eventually start one or more pipeline runs, leading to the creation and deployment of Kubernetes resources.

In this section, you will configure a webhook URL on your forked Git repositories `pipelines-vote-ui` and `pipelines-vote-api`. This URL points to the publicly accessible `EventListener` service route.


:::note

Adding webhooks requires administrative privileges to the repository. If you do not have administrative access to your repository, contact your system administrator for adding webhooks.

:::


**Procedure**

1.  Get the webhook URL:
    *   For a secure HTTPS connection:
        ```discrete
        $ echo "URL: $(oc  get route el-vote-app --template='https://{{.spec.host}}')"
        ```
    *   For an HTTP (insecure) connection:
        ```
        $ echo "URL: $(oc  get route el-vote-app --template='http://{{.spec.host}}')"
        ```

        Note the URL obtained in the output.
1.  Configure webhooks manually on the front-end repository:
    1.  Open the front-end Git repository `pipelines-vote-ui` in your browser.
    1.  Click **Settings** -> **Webhooks** -> **Add Webhook**
    1.  On the **Webhooks/Add Webhook** page:
        1.  Enter the webhook URL from step 1 in **Payload URL** field
        1.  Select **application/json** for the **Content type**
        1.  Specify the secret in the **Secret** field
        1.  Ensure that the **Just the push event** is selected
        1.  Select **Active**
        1.  Click **Add Webhook**
1.  Repeat step 2 for the back-end repository `pipelines-vote-api`.