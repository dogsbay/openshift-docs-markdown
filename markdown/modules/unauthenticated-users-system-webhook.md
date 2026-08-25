{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding unauthenticated users to the system:webhook role binding {id="unauthenticated-users-system-webhook_{{ context }}"}

As a cluster administrator, you can add unauthenticated users to the `system:webhook` role binding in {{ product_title }} for specific namespaces. The `system:webhook` role binding allows users to trigger builds from external systems that do not use 
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
an {{ product_title }} 
{%- endif %}
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
a {{ product_title }} 
{%- endif %}
authentication mechanism. Unauthenticated users do not have access to non-public role bindings by default. This is a change from {{ product_title }} versions before 4.16.

Adding unauthenticated users to the `system:webhook` role binding is required to successfully trigger builds from GitHub, GitLab, and Bitbucket.

If it is necessary to allow unauthenticated users access to a cluster, you can do so by adding unauthenticated users to the `system:webhook` role binding in each required namespace. This method is more secure than adding unauthenticated users to the `system:webhook` cluster role binding. However, if you have a large number of namespaces, it is possible to add unauthenticated users to the `system:webhook` cluster role binding which would apply the change to all namespaces.


:::important

Always verify compliance with your organization’s security standards when modifying unauthenticated access.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create a YAML file named `add-webhooks-unauth.yaml` and add the following content:
    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: RoleBinding
    metadata:
      annotations:
        rbac.authorization.kubernetes.io/autoupdate: "true"
      name: webhook-access-unauthenticated
      namespace: <namespace> (1)
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: "system:webhook"
    subjects:
      - apiGroup: rbac.authorization.k8s.io
        kind: Group
        name: "system:unauthenticated"
    ```
    1.  The namespace of your `BuildConfig`.
1.  Apply the configuration by running the following command:
    ```terminal
    $ oc apply -f add-webhooks-unauth.yaml
    ```