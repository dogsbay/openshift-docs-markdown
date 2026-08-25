{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling {{ zero_trust_full }} resources by using the CLI {id="zero-trust-manager-uninstall-resources_{{ context }}"}

Remove {{ zero_trust_full }} resources from your cluster using the CLI. This deletes the remaining operands and definitions to help ensure a clean environment after you uninstall the product. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Uninstall the operands by running each of the following commands:
    1.  Delete the `SpireOIDCDiscoveryProvider` cluster by running the following command:
        ```terminal
        $ oc delete SpireOIDCDiscoveryProvider cluster
        ```
    1.  Delete the `SpiffeCSIDriver` cluster by running the following command:
        ```terminal
        $ oc delete SpiffeCSIDriver cluster -l
        ```
    1.  Delete the `SpireAgent` cluster by running the following command:
        ```terminal
        $ oc delete SpireAgent cluster
        ```
    1.  Delete the `SpireServer` cluster by running the following command:
        ```terminal
        $ oc delete SpireServer cluster
        ```
    1.  Delete the `ZeroTrustWorkloadIdentityManager` cluster by running the following command:
        ```terminal
        $ oc delete ZeroTrustWorkloadIdentityManager cluster
        ```
    1.  Delete the persistent volume claim (PVC) by running the following command:
        ```terminal
        $ oc delete pvc -l=app.kubernetes.io/name=spire-server
        ```
    1.  Delete the service by running the following command:
        ```terminal
        $ oc delete service -l=app.kubernetes.io/name=zero-trust-workload-identity-manager -n zero-trust-workload-identity-manager
        ```
    1.  Delete the namespace by running the following command:
        ```terminal
        $ oc delete ns zero-trust-workload-identity-manager
        ```
    1.  Delete the cluster role by running the following command:
        ```terminal
        $ oc delete clusterrole -l=app.kubernetes.io/name=zero-trust-workload-identity-manager
        ```
    1.  Delete the admission webhook configuration by running the following command:
        ```terminal
        $ oc delete validatingwebhookconfigurations -l=app.kubernetes.io/name=zero-trust-workload-identity-manager
        ```
1.  Delete the custom resource definitions (CRDs) by running each of the following commands:
    1.  Delete the SPIRE Server CRD by running the following command:
        ```terminal
        $ oc delete crd spireservers.operator.openshift.io
        ```
    1.  Delete the SPIRE Agent CRD by running the following command:
        ```terminal
        $ oc delete crd spireagents.operator.openshift.io
        ```
    1.  Delete the SPIFFEE CSI Drivers CRD by running the following command:
        ```terminal
        $ oc delete crd spiffecsidrivers.operator.openshift.io
        ```
    1.  Delete the SPIRE OIDC Discovery Provider CRD by running the following command:
        ```terminal
        $ oc delete crd spireoidcdiscoveryproviders.operator.openshift.io
        ```
    1.  Delete the SPIRE and SPIFFE cluster federated trust domains CRD by running the following command:
        ```terminal
        $ oc delete crd clusterfederatedtrustdomains.spire.spiffe.io
        ```
    1.  Delete the cluster SPIFFE IDs CRD by running the following command:
        ```terminal
        $ oc delete crd clusterspiffeids.spire.spiffe.io
        ```
    1.  Delete the SPIRE and SPIFFE cluster static entries CRD by running the following command:
        ```terminal
        $ oc delete crd clusterstaticentries.spire.spiffe.io
        ```
    1.  Delete the {{ zero_trust_full }} CRD by running the following command:
        ```terminal
        $ oc delete crd zerotrustworkloadidentitymanagers.operator.openshift.io
        ```

**Verification**

To verify that the resources have been deleted, replace each `oc delete` command with `oc get`, and then run the command. If no resources are returned, the deletion was successful.