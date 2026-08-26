{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up an IDP with GitHub {id="learning-getting-started-idp-creating_{{ context }}"}

To streamline the login process and allow users to authenticate with their existing credentials, configure GitHub as an identity provider (IDP). This integration simplifies access management across your organization by centralizing user authentication. {._abstract}

**Procedure**

1.  Log in to your GitHub account.

    :::tip

    If you are not an administrator in an existing organization, see the previous section "Creating a GitHub organization".
    
    :::

1.  In the terminal, enter the following command to set up the GitHub IDP:
    ```terminal
    rosa create idp --cluster=<cluster name> --interactive
    ```
1.  Enter the following values:
    ```terminal
    Type of identity provider: github
    Identity Provider Name: <IDP-name>
    Restrict to members of: organizations
    GitHub organizations: <organization-account-name>
    ```
1.  The CLI will provide you with a link. Copy and paste the link into a browser and press **Enter**. This will fill the required information to register this application for OAuth. You do not need to modify any of the information.
    ![cloud-experts-getting-started-idp-link](/images/cloud-experts-getting-started-idp-link.png)
1.  Click **Register application**.
    ![cloud-experts-getting-started-idp-register](/images/cloud-experts-getting-started-idp-register.png)
1.  The next page displays a **Client ID**.  Copy the ID and paste it in the terminal where it asks for **Client ID**.

    :::note

    Do not close the tab.
    
    :::

1.  The CLI will ask for a **Client Secret**. Go back in your browser and click **Generate a new client secret**.
    ![cloud-experts-getting-started-idp-secret](/images/cloud-experts-getting-started-idp-secret.png)
1.  A secret is generated for you. Copy your secret because it will never be visible again.
1.  Paste your secret into the terminal and press **Enter**.
1.  Leave **GitHub Enterprise Hostname** blank.
1.  Select **claim**.
1.  Wait approximately 1 minute for the IDP to be created and the configuration to land on your cluster.
    ![cloud-experts-getting-started-idp-inputs](/images/cloud-experts-getting-started-idp-inputs.png)
1.  Copy the returned link and paste it into your browser. The new IDP should be available under your chosen name. Click your IDP and use your GitHub credentials to access the cluster.
    ![cloud-experts-getting-started-idp-login](/images/cloud-experts-getting-started-idp-login.png)