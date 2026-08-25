{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a RolloutManager custom resource {id="gitops-creating-rolloutmanager-custom-resource_{{ context }}"}

To manage progressive delivery of deployments by using Argo Rollouts in {{ gitops_title }}, you must create and configure a `RolloutManager` custom resource (CR) in the namespace of your choice. By default, any new `argo-rollouts` instance has permission to manage resources only in the namespace where it is deployed, but you can use Argo Rollouts in multiple namespaces as required.

**Prerequisites**

*   {{ gitops_title }} 1.9.0 or a newer version is installed in your cluster.

**Procedure**

1.  Log in to the {{ product_title }} web console as a cluster administrator.
1.  In the **Administrator** perspective, click **Ecosystem** -> **Installed Operators**.
1.  Create or select the project where you want to create and configure a `RolloutManager` custom resource (CR) from the **Project** drop-down menu.
1.  Select **OpenShift GitOps Operator** from the installed operators.
1.  In the **Details** tab, under the **Provided APIs** section, click **Create instance** in the **RolloutManager** pane.
1.  On the **Create RolloutManager** page, select the **YAML view** and use the default YAML or edit it according to your requirements:
    ```yaml title="Example: RolloutManager CR"
    apiVersion: argoproj.io/v1alpha1
    kind: RolloutManager
    metadata:
      name: argo-rollout
      labels:
        example: basic
    spec: {}
    ```
1.  Click **Create**.
1.  In the **RolloutManager** tab, under the **RolloutManagers** section, verify that the **Status** field of the RolloutManager instance shows as **Phase: Available**.
1.  In the left navigation pane, verify the creation of the namespace-scoped supporting resources:
    *   Click **Workloads** -> **Deployments** to verify that the `argo-rollouts` deployment is available with the **Status** showing as `1 of 1 pods` running.
    *   Click **Workloads** -> **Secrets** to verify that the `argo-rollouts-notification-secret` secret is available.
    *   Click **Networking** -> **Services** to verify that the `argo-rollouts-metrics` service is available.
    *   Click **User Management** -> **Roles** to verify that the `argo-rollouts` role and `argo-rollouts-aggregate-to-admin`, `argo-rollouts-aggregate-to-edit`, and `argo-rollouts-aggregate-to-view` cluster roles are available.
    *   Click **User Management** -> **RoleBindings** to verify that the `argo-rollouts` role binding is available.

**Additional resources**

*   [`RolloutManager` Custom Resource specification](https://argo-rollouts-manager.readthedocs.io/en/latest/crd_reference/)