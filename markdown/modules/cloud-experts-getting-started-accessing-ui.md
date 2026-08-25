{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the cluster via the {{ hybrid_console_second }} {id="cloud-experts-getting-started-accessing-ui_{{ context }}"}

Access your {{ product_title }} cluster through the {{ hybrid_console_second }} web interface by logging in with your identity provider credentials. {._abstract}

**Procedure**

1.  Log in to the {{ cluster_manager_url }}.
    1.  To retrieve the {{ hybrid_console_second }} URL run:
        ```terminal
        rosa describe cluster -c <cluster-name> | grep Console
        ```
1.  Click your IDP. For example, "rosa-github".
    ![cloud-experts-getting-started-accessing-copy-token](/_assets/images/cloud-experts-getting-started-accessing-copy-token.png)
1.  Enter your user credentials.
1.  You should be logged in. If you are following the tutorials, you will be a cluster-admin and should see the {{ hybrid_console_second }} webpage with the **Administrator** panel visible.
    ![cloud-experts-getting-started-accessing-logged](/_assets/images/cloud-experts-getting-started-accessing-logged.png)