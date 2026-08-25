{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a RolloutManager custom resource {id="gitops-deleting-rolloutmanager-custom-resource_{{ context }}"}

Uninstalling the {{ gitops_title }} Operator does not remove the resources that were created during installation. You must manually delete the `RolloutManager` custom resource (CR) before you uninstall the {{ gitops_title }} Operator.

**Prerequisites**

*   {{ gitops_title }} 1.9.0 or a newer version is installed in your cluster.
*   A `RolloutManager` CR exists in your namespace.

**Procedure**

1.  Log in to the {{ product_title }} web console as a cluster administrator.
1.  In the **Administrator** perspective, click **Ecosystem** -> **Installed Operators**.
1.  Click the **Project** drop-down menu and select the project that contains the `RolloutManager` CR.
1.  Select **OpenShift GitOps Operator** from the installed operators.
1.  Click the **RolloutManager** tab to find RolloutManager instances under the **RolloutManagers** section.
1.  Click the instance.
1.  Click **Actions** -> **Delete RolloutManager** from the drop-down menu, and click **Delete** to confirm in the dialog box.
1.  In the **RolloutManager** tab, under the **RolloutManagers** section, verify that the RolloutManager instance is not available anymore.
1.  In the left navigation pane, verify the deletion of the namespace-scoped supporting resources:
    *   Click **Workloads** -> **Deployments** to verify that the `argo-rollouts` deployment is deleted.
    *   Click **Workloads** -> **Secrets** to verify that the `argo-rollouts-notification-secret` secret is deleted.
    *   Click **Networking** -> **Services** to verify that the `argo-rollouts-metrics` service is deleted.
    *   Click **User Management** -> **Roles** to verify that the `argo-rollouts` role and `argo-rollouts-aggregate-to-admin`, `argo-rollouts-aggregate-to-edit`, and `argo-rollouts-aggregate-to-view` cluster roles are deleted.
    *   Click **User Management** -> **RoleBindings** to verify that the `argo-rollouts` role binding is deleted.