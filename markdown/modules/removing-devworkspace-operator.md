{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the {{ devworkspace_op }} {id="removing-devworkspace-operator_{{ context }}"}

To completely uninstall the web terminal, you must also remove the {{ devworkspace_op }} and custom resources used by the Operator. {._abstract}


:::important

The {{ devworkspace_op }} is a standalone Operator and might be required as a dependency for other Operators installed in the cluster. Follow the steps below only if you are sure that the {{ devworkspace_op }} is no longer needed.

:::


**Prerequisites**

*   You have access to 
{%- if not (openshift_rosa_hcp or openshift_rosa) %}
an {{ product_title }} 
{%- endif %}
{%- if openshift_rosa_hcp or openshift_rosa %}
a {{ product_title }} 
{%- endif %}
cluster with cluster administrator permissions.
*   You have installed the `oc` CLI.

**Procedure**

1.  Remove the `DevWorkspace` custom resources used by the Operator, along with any related Kubernetes objects:
    ```terminal
    $ oc delete devworkspaces.workspace.devfile.io --all-namespaces --all --wait
    ```
    ```terminal
    $ oc delete devworkspaceroutings.controller.devfile.io --all-namespaces --all --wait
    ```

    :::warning

    If this step is not complete, finalizers make it difficult to fully uninstall the Operator.
    
    :::


{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Remove the CRDs used by the Operator:

    :::warning

    The DevWorkspace Operator provides custom resource definitions (CRDs) that use conversion webhooks. Failing to remove these CRDs can cause issues in the cluster.
    
    :::

    ```terminal
    $ oc delete customresourcedefinitions.apiextensions.k8s.io devworkspaceroutings.controller.devfile.io
    ```
    ```terminal
    $ oc delete customresourcedefinitions.apiextensions.k8s.io devworkspaces.workspace.devfile.io
    ```
    ```terminal
    $ oc delete customresourcedefinitions.apiextensions.k8s.io devworkspacetemplates.workspace.devfile.io
    ```
    ```terminal
    $ oc delete customresourcedefinitions.apiextensions.k8s.io devworkspaceoperatorconfigs.controller.devfile.io
    ```
1.  Verify that all involved custom resource definitions are removed. The following command should not display any output:
    ```terminal
    $ oc get customresourcedefinitions.apiextensions.k8s.io | grep "devfile.io"
    ```
1.  Remove the `devworkspace-webhook-server` deployment, mutating, and validating webhooks:
    ```terminal
    $ oc delete deployment/devworkspace-webhook-server -n openshift-operators
    ```
    ```terminal
    $ oc delete mutatingwebhookconfigurations controller.devfile.io
    ```
    ```terminal
    $ oc delete validatingwebhookconfigurations controller.devfile.io
    ```

    :::note

    If you remove the `devworkspace-webhook-server` deployment without removing the mutating and validating webhooks, you cannot use `oc exec` commands to run commands in a container in the cluster. After you remove the webhooks you can use the `oc exec` commands again.
    
    :::

{% endif %}
1.  Remove any remaining services, secrets, and config maps. Depending on the installation, some resources included in the following commands might not exist in the cluster.
    ```terminal
    $ oc delete all --selector app.kubernetes.io/part-of=devworkspace-operator,app.kubernetes.io/name=devworkspace-webhook-server -n openshift-operators
    ```
    ```terminal
    $ oc delete serviceaccounts devworkspace-webhook-server -n openshift-operators
    ```
    ```terminal
    $ oc delete clusterrole devworkspace-webhook-server
    ```
    ```terminal
    $ oc delete clusterrolebinding devworkspace-webhook-server
    ```
1.  Uninstall the {{ devworkspace_op }}:
    1.  In the **Administrator** perspective of the web console, navigate to **Ecosystem** → **Installed Operators**.
    1.  Scroll the filter list or type a keyword into the **Filter by name** box to find the {{ devworkspace_op }}.
    1.  Click the Options menu {{ kebab }} for the Operator, and then select **Uninstall Operator**.
    1.  In the **Uninstall Operator** confirmation dialog box, click **Uninstall** to remove the Operator, Operator deployments, and pods from the cluster. The Operator stops running and no longer receives updates.