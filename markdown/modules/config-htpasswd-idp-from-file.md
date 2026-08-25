{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configuring an htpasswd identity provider by using the file upload {id="config-htpasswd-idp-from-file_{{ context }}"}

You can create an htpasswd identity provider by uploading a user file in the {{ cluster_manager }} web user interface (UI). {._abstract}


:::note

Ensure that you correctly hashed your htpasswd file by using the [htpasswd tool](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/authentication_and_authorization/configuring-identity-providers#creating-htpasswd-file) to create this file.

:::


**Procedure**

1.  Select your cluster from the **Cluster List** page on {{ cluster_manager_url }}.
1.  Select **Access control** -> **Identity providers**.
1.  Click **Add identity provider**.
1.  Select **htpasswd** from the **Identity Provider** list.
1.  Add a unique name in the **Name** field for the identity provider.
1.  Select **Upload an htpasswd file**.
1.  In the **htpasswd file** field, drag your configured htpasswd file or select **Browse** to locate the file on your local drive.
1.  Select **Add** to create the htpasswd identity provider and add the users from the uploaded file.

**Verification**

*   You can see your configured htpasswd identity provider on the **Access control** -> **Identity providers** page.

    :::note

    After creating the identity provider, synchronization usually completes within two minutes. You can log in to the cluster as the user after the htpasswd identity provider becomes available.
    
    :::