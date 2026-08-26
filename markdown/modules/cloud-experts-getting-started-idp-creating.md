{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an identiy provider using GitHub {id="cloud-experts-getting-started-idp-creating_{{ context }}"}

You need to configure an identity provider to access your cluster. {._abstract}

**Procedure**

1.  View all IDP options, run the following command:
    ```terminal
    rosa create idp --help
    ```

    This tutorial uses GitHub to create your IDP.
1.  Log in to your GitHub account.
1.  Create a new GitHub organization where you are an administrator.

    :::tip

    If you are already an administrator in an existing organization and you want to use that organization, skip to step 9.
    
    :::


    Click the **+** icon, then click **New Organization**.
    ![cloud-experts-getting-started-idp-new-org](/images/cloud-experts-getting-started-idp-new-org.png)
1.  Choose the most applicable plan for your situation or click **Join for free**.
1.  Enter an organization account name, an email, and whether it is a personal or business account. Then, click **Next**.
    ![cloud-experts-getting-started-idp-team](/images/cloud-experts-getting-started-idp-team.png)
1.  **Optional:** Add the GitHub IDs of other users to grant additional access to your ROSA cluster. You can also add them later.
1.  Click **Complete Setup**.
1.  **Optional:** Enter the requested information on the following page.
1.  Click **Submit**.
1.  Go back to the terminal and enter the following command to set up the GitHub IDP:
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