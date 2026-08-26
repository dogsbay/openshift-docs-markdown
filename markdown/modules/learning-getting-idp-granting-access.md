{%- set _mod_docs_content_type = "PROCEDURE" %}
# Granting other users access to the cluster {id="learning-getting-started-idp-granting-access_{{ context }}"}

To grant access to other cluster users, you will need to add their GitHub user ID to the GitHub organization used for this cluster. {._abstract}

**Procedure**

1.  In GitHub, go to the **Your organizations** page.
1.  Click your **profile icon**, then **Your organizations**. Then click **&lt;your-organization-name>**.  In our example, it is `my-rosa-cluster`.
    ![cloud-experts-getting-started-idp-org](/images/cloud-experts-getting-started-idp-org.png)
1.  Click **Invite someone**.
    ![cloud-experts-getting-started-idp-invite](/images/cloud-experts-getting-started-idp-invite.png)
1.  Enter the GitHub ID of the new user, select the correct user, and click **Invite**.
1.  Once the new user accepts the invitation, they will be able to log in to the {{ product_title }} cluster using the {{ hybrid_console_second }} link and their GitHub credentials.