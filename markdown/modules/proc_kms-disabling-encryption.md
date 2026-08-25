{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable KMS encryption {id="kms-disabling-encryption_{{ context }}"}

You can disable external KMS encryption and migrate to local encryption to simplify operations or resolve KMS connectivity issues. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have created an etcd backup.


:::warning

Re-encryption of all etcd data will occur.

:::


**Procedure**

1.  Edit the `APIServer` custom resource by entering the following command:
    ```terminal
    $ oc edit apiserver cluster
    ```
1.  Change the encryption configuration:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: APIServer
    metadata:
      name: cluster
    spec:
      encryption:
        type: <encryption>
    ```

    Replace `<encryption>` with `aescbc`, `aesgcm`, or `identity`.
1.  Save and exit.

    {{ product_title }} automatically migrates etcd data. Migration time depends on etcd size and secret count.
1.  Monitor the migration progress by entering the following command:
    ```terminal
    $ oc get openshiftapiserver -o=jsonpath='{range .items[0].status.conditions[?(@.type=="Encrypted")]}{.reason}{"\n"}{.message}{"\n"}{end}'
    ```

    Wait until the output shows `EncryptionCompleted`.
1.  Verify kube-apiserver pods rolled out by entering the following command:
    ```terminal
    $ oc get pods -n openshift-kube-apiserver -l app=openshift-kube-apiserver
    ```
1.  Remove the static pod manifest from each control plane node by running the following command:
    ```terminal
    $ for node in $(oc get nodes --selector=node-role.kubernetes.io/master -o name | cut -d/ -f2); do
        echo "Removing static pod from $node..."
        oc debug node/$node -- chroot /host \
          rm -f /etc/kubernetes/manifests/vault-kms-plugin.yaml
      done
    ```

    The kubelet automatically stops static pods when their manifest is removed from `/etc/kubernetes/manifests/`.
1.  Clean up the socket directory by running the following command:
    ```terminal
    $ for node in $(oc get nodes --selector=node-role.kubernetes.io/master -o name | cut -d/ -f2); do
        oc debug node/$node -- chroot /host rm -rf /var/run/kmsplugin
      done
    ```
1.  After backup retention period passes, decommission the KMS key.

**Verification**

1.  Verify the encryption type by entering the following command:
    ```terminal
    $ oc get apiserver cluster -o jsonpath='{.spec.encryption.type}'
    ```
1.  Verify that a test secret uses the new encryption type:
    1.  Create a test secret by entering the following command:
        ```terminal
        $ oc create secret generic encryption-test --from-literal=key=value -n default
        ```
    1.  Get an etcd pod name by entering the following command:
        ```terminal
        $ oc get pods -n openshift-etcd -l app=etcd -o name | head -1
        ```
    1.  Check the encryption prefix by entering the following command:
        ```terminal
        $ oc exec -n openshift-etcd <etcd_pod_name> -- etcdctl get /kubernetes.io/secrets/default/encryption-test --print-value-only | hexdump -C | head -1
        ```

        Output should begin with `k8s:enc:aescbc:v1:`, `k8s:enc:aesgcm:v1:`, or show readable JSON for `identity`.
    1.  Delete the test secret by entering the following command:
        ```terminal
        $ oc delete secret encryption-test -n default
        ```


:::note

Do not delete the KMS key until migration completes successfully.

:::