{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrate from local encryption to KMS encryption {id="kms-migrating-from-local-encryption_{{ context }}"}

You can migrate from local etcd encryption to external KMS encryption to centralize key management and improve compliance. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have enabled the `TechPreviewNoUpgrade` feature set to enable the `KMSEncryption` feature gate.
*   Your cluster is currently using `aescbc` or `aesgcm` encryption.
*   You have deployed the KMS plugin on all control plane nodes.
*   Control plane nodes have network access to the KMS provider.


:::important

Create an etcd backup before migrating.

:::


**Procedure**

1.  Back up the current etcd encryption configuration by entering the following command:
    ```terminal
    $ oc get apiserver cluster -o yaml > apiserver-backup.yaml
    ```
1.  Edit the APIServer custom resource by entering the following command:
    ```terminal
    $ oc edit apiserver cluster
    ```
1.  Change the encryption type from `aescbc` or `aesgcm` to `KMS`:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: APIServer
    metadata:
      name: cluster
    spec:
      encryption:
        type: KMS
    ```
1.  Save and exit.

    Migration starts automatically and typically takes several minutes.
1.  Verify migration completion for all API servers by running the following commands:
    ```terminal
    $ oc get openshiftapiserver -o=jsonpath='{range .items[0].status.conditions[?(@.type=="Encrypted")]}{.reason}{"\n"}{end}'
    ```
    ```terminal
    $ oc get kubeapiserver -o=jsonpath='{range .items[0].status.conditions[?(@.type=="Encrypted")]}{.reason}{"\n"}{end}'
    ```
    ```terminal
    $ oc get authentication.operator.openshift.io -o=jsonpath='{range .items[0].status.conditions[?(@.type=="Encrypted")]}{.reason}{"\n"}{end}'
    ```

    All outputs should show `EncryptionCompleted`.