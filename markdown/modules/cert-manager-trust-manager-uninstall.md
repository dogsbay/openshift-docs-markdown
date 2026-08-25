{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the trust-manager operand {id="cert-manager-trust-manager-uninstall_{{ context }}"}

You can uninstall the trust-manager operand by deleting the TrustManager custom resource (CR). Deleting the TrustManager CR stops the operator from reconciling trust-manager resources, but does not automatically remove the trust-manager deployment or its associated resources. You must manually delete these resources after deleting the CR if you need a complete cleanup. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have enabled the trust manager feature.
*   You have created the `TrustManager` custom resource.

**Procedure**

1.  Delete any Bundle CRs that you created. Deleting a Bundle CR causes trust-manager to remove the corresponding target ConfigMap and Secret objects from the target namespaces.
    1.  Fetch the list of bundles created by running the following command:
        ```terminal
        $ oc get Bundle
        ```
    1.  Delete each Bundle in the list by running the following command:
        ```terminal
        $ oc delete Bundle <bundle_name>
        ```
1.  Delete the `TrustManager` custom resource by running the following command:
    ```terminal
    $ oc delete TrustManager cluster
    ```
1.  Delete all the labeled resources to complete the cleanup:
    1.  Delete the namespace-scoped resources in the `cert-manager` namespace:
        ```terminal
        $ oc delete deployments,services,serviceaccounts,configmaps,certificates,issuers -l "app.kubernetes.io/name=cert-manager-trust-manager" -n cert-manager
        ```
    1.  Delete the cluster-scoped resources:
        ```terminal
        $ oc delete clusterroles,clusterrolebindings,validatingwebhookconfigurations -l "app.kubernetes.io/name=cert-manager-trust-manager"
        ```
    1.  If you configured a custom trust namespace, delete the role and role binding resources in that namespace:
        ```terminal
        $ oc delete roles,rolebindings -l "app.kubernetes.io/name=cert-manager-trust-manager" -n <trust_namespace>
        ```