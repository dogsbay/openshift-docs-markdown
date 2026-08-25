{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the Cluster Version Operator (CVO) {id="update-service-configure-cvo"}

After the OpenShift Update Service Operator has been installed and the OpenShift Update Service application has been created, the Cluster Version Operator (CVO) can be updated to pull graph data from the OpenShift Update Service installed in your environment. {._abstract}

**Prerequisites**

*   The OpenShift Update Service Operator has been installed.
*   The OpenShift Update Service graph data container image has been created and pushed to a repository that is accessible to the OpenShift Update Service.
*   The current release and update target releases have been mirrored to a registry in the disconnected environment.
*   The OpenShift Update Service application has been created.

**Procedure**

1.  Set the OpenShift Update Service target namespace, for example, `openshift-update-service`:
    ```terminal
    $ NAMESPACE=openshift-update-service
    ```
1.  Set the name of the OpenShift Update Service application, for example, `service`:
    ```terminal
    $ NAME=service
    ```
1.  Obtain the policy engine route:
    ```terminal
    $ POLICY_ENGINE_GRAPH_URI="$(oc -n "${NAMESPACE}" get -o jsonpath='{.status.policyEngineURI}/api/upgrades_info/v1/graph{"\n"}' updateservice "${NAME}")"
    ```
1.  Set the patch for the pull graph data:
    ```terminal
    $ PATCH="{\"spec\":{\"upstream\":\"${POLICY_ENGINE_GRAPH_URI}\"}}"
    ```
1.  Patch the CVO to use the OpenShift Update Service in your environment:
    ```terminal
    $ oc patch clusterversion version -p $PATCH --type merge
    ```


    :::note

    For more information about configuring the CA to trust the update server, see "Configuring the cluster-wide proxy". 
    
    :::