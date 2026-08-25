{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rotating the etcd certificate {id="rotating-certificate-authority_{{ context }}"}

You can manually rotate the etcd certificate before its automatic, scheduled rotation by backing up and deleting the current signer certificate. {._abstract}

**Procedure**

1.  Make a backup copy of the current signer certificate by running the following command:
    ```terminal
    $ oc get secret -n openshift-etcd etcd-signer -oyaml > signer_backup_secret.yaml
    ```
1.  Delete the existing signer certificate by running the following command:
    ```terminal
    $ oc delete secret -n openshift-etcd etcd-signer
    ```

**Verification**

*   Wait for the static pod roll out by running the following command. The static pod roll out can take a few minutes to complete.
    ```terminal
    $ oc wait --for=condition=Progressing=False --timeout=15m clusteroperator/etcd
    ```