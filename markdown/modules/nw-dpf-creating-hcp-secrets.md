{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create secrets for the hosted cluster {id="nw-dpf-creating-hcp-secrets_{{ context }}"}

You must create a pull secret and an SSH key secret in the clusters namespace before provisioning the hosted cluster.
The `DPFHCPProvisioner` resource references these secrets during hosted cluster creation. {._abstract}


:::note

The BlueField {{ product_title }} layer image referenced by `BLUEFIELD_OCP_IMAGE` might require authentication to the Quay or Red&#160;Hat registry. Ensure that the pull secret includes credentials for that image registry.

:::


**Prerequisites**

*   You have set the environment variables described in "Hosted cluster provisioning environment variables".
*   You have a valid {{ product_title }} pull secret file at the path specified by `OPENSHIFT_PULL_SECRET`.
*   You have an SSH public key file at the path specified by `SSH_KEY`.

**Procedure**

1.  Create the clusters namespace:
    ```terminal
    $ oc create namespace $CLUSTERS_NAMESPACE
    ```
1.  Create the pull secret:
    ```terminal
    $ oc create secret generic $PULL_SECRET_NAME \
        --from-file=.dockerconfigjson=$OPENSHIFT_PULL_SECRET \
        --type=kubernetes.io/dockerconfigjson \
        -n $CLUSTERS_NAMESPACE
    ```
1.  Create the SSH key secret:
    ```terminal
    $ oc create secret generic $SSH_KEY_SECRET_NAME \
        --from-file=id_rsa.pub=$SSH_KEY \
        -n $CLUSTERS_NAMESPACE
    ```

**Verification**

*   Verify that the secrets were created in the clusters namespace:
    ```terminal
    $ oc get secrets -n $CLUSTERS_NAMESPACE
    ```
    ```terminal title="Example output"
    NAME          TYPE                             DATA   AGE
    pull-secret   kubernetes.io/dockerconfigjson   1      10s
    ssh-key       Opaque                           1      5s
    ```