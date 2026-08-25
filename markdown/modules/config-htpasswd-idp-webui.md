{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring an htpasswd identity provider {id="config-htpasswd-idp-webui_{{ context }}"}

You can create an htpasswd identity provider with the {{ cluster_manager }} web user interface (UI). {._abstract}

**Procedure**

1.  Select your cluster from the **Cluster List** page on {{ cluster_manager_url }}.
1.  Select **Access control** → **Identity providers**.
1.  Click **Add identity provider**.
1.  Select **htpasswd** from the **Identity Provider** list.
1.  Add a unique name in the **Name** field for the identity provider.
1.  Select **Add users manually**.
1.  Use the suggested username and password for the static user, or create your own.

    :::note

    You cannot retrieve the credentials defined in this step after you select **Add** in the following step. If you lose the credentials, you must re-create the identity provider and define the credentials again.
    
    :::

1.  You can create a single user account or you can create multiple user accounts:
    *   Select **Add** to create the htpasswd identity provider and the single, static user.
    *   Select **Add user** to create another username and password field. When you select **Add**, you create all of the users in the users list.

**Verification**

*   You can see your configured htpasswd identity provider on the **Access control** → **Identity providers** page.

    :::note

    After creating the identity provider, synchronization usually completes within two minutes. You can log in to the cluster as the user after the htpasswd identity provider becomes available.
    
    :::