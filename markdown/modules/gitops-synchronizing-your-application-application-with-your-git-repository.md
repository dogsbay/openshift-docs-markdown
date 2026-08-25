{%- set _mod_docs_content_type = "PROCEDURE" %}
# Synchronizing your application with your Git repository {id="synchronizing-your-application-application-with-your-git-repository_{{ context }}"}

**Procedure**

1.  In the Argo CD dashboard, notice that the **cluster-configs** Argo CD application has the statuses **Missing** and **OutOfSync**. Because the application was configured with a manual sync policy, Argo CD does not sync it automatically.
1.  Click **SYNC** on the **cluster-configs** tile, review the changes, and then click **SYNCHRONIZE**. Argo CD will detect any changes in the Git repository automatically. If the configurations are changed, Argo CD will change the status of the **cluster-configs** to **OutOfSync**. You can modify the synchronization policy for Argo CD to automatically apply changes from your Git repository to the cluster.
1.  Notice that the **cluster-configs** Argo CD application now has the statuses **Healthy** and **Synced**. Click the **cluster-configs** tile to check the details of the synchronized resources and their status on the cluster.
1.  Navigate to the {{ product_title }} web console and click {{ rh_app_icon }} to verify that a link to the **Red Hat Developer Blog - Kubernetes** is now present there.
1.  Navigate to the **Project** page and search for the `spring-petclinic` namespace to verify that it has been added to the cluster.

    Your cluster configurations have been successfully synchronized to the cluster.