{%- set _mod_docs_content_type = "PROCEDURE" %}

# Using an Argo CD instance to manage cluster-scoped resources {id="using-argo-cd-instance-to-manage-cluster-scoped-resources_{{ context }}"}

To manage cluster-scoped resources, update the existing `Subscription` object for the {{ gitops_title }} Operator and add the namespace of the Argo CD instance to the `ARGOCD_CLUSTER_CONFIG_NAMESPACES` environment variable in the `spec` section.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Operators** → **Installed Operators** → **{{ gitops_title }}** → **Subscription**.
1.  Click the **Actions** drop-down menu then click **Edit Subscription**.
1.  On the **openshift-gitops-operator** Subscription details page, under the **YAML** tab, edit the `Subscription` YAML file by adding the namespace of the Argo CD instance to the `ARGOCD_CLUSTER_CONFIG_NAMESPACES` environment variable in the `spec` section:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-gitops-operator
      namespace: openshift-operators
    ...
    spec:
      config:
        env:
        - name: ARGOCD_CLUSTER_CONFIG_NAMESPACES
          value: openshift-gitops, <list of namespaces of cluster-scoped Argo CD instances>
    ...
    ```
1.  To verify that the Argo instance is configured with a cluster role to manage cluster-scoped resources, perform the following steps:
    1.  Navigate to **User Management** → **Roles** and from the **Filter**  drop-down menu select **Cluster-wide Roles**.
    1.  Search for the `argocd-application-controller` by using the **Search by name** field.

        The **Roles** page displays the created cluster role.

        :::tip

        Alternatively, in the OpenShift CLI, run the following command:

        ```terminal
        oc auth can-i create oauth -n openshift-gitops --as system:serviceaccount:openshift-gitops:openshift-gitops-argocd-application-controller
        ```

        The output `yes` verifies that the Argo instance is configured with a cluster role to manage cluster-scoped resources. Else, check your configurations and take necessary steps as required.
        
        :::