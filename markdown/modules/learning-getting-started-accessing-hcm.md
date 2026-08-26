{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing the cluster via the {{ hybrid_console_second }} {id="learning-getting-started-accessing-hcm_{{ context }}"}

You can access your cluster by using the {{ hybrid_console_second }}, which serves as a primary portal for managing {{ product_title }} environments. Use {{ hybrid_console_second }} to access tools for cluster provisioning, registration, and health monitoring. {._abstract}

**Procedure**

1.  Log in to the {{ cluster_manager_url }}.
1.  To retrieve the {{ hybrid_console_second }} URL run:
    ```terminal
    $ rosa describe cluster -c <cluster-name> | grep Console
    ```
1.  Click your IDP. For example, "rosa-github".
    ![cloud-experts-getting-started-accessing-copy-token](/images/cloud-experts-getting-started-accessing-copy-token.png)
1.  Enter your user credentials.
1.  You should be logged in. If you are following the tutorials, you will be a cluster-admin and should see the {{ hybrid_console_second }} webpage with the **Administrator** panel visible.
    ![cloud-experts-getting-started-accessing-logged](/images/cloud-experts-getting-started-accessing-logged.png)