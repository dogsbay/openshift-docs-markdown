{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating or renewing an existing API server named certificate {id="customize-certificates-api-renew-named_{{ context }}"}

Update or renew an expired or expiring named certificate that has already been configured in your cluster to avoid API availability issues. The API server pods dynamically detect and reload the updated certificate asset without disruption. {._abstract}


:::note

When an existing API server named certificate is renewed by updating its corresponding secret, a new revision of the Kubernetes API server pods does not roll out. Node reboots are not required.

:::



:::warning

If the renewed certificate is signed by a different root CA than the previous certificate, internal applications or custom pods that communicate with the API server might encounter X509 certificate validation errors. If these client workloads do not automatically hot-reload their truststores, you must manually restart them to force them to pick up the new certificate chain.

:::


**Prerequisites**

*   You have the renewed certificate chain and private key files in PEM format.
*   The secret containing the old certificate already exists in the `openshift-config` namespace and is actively referenced by the `apiserver/cluster` configuration.

**Procedure**

1.  Log in to the CLI as the `kubeadmin` user.
1.  Update the existing secret resource in the `openshift-config` namespace with the newly issued certificate and private key:
    ```terminal
    $ oc create secret tls <existing_secret_name> \
         --cert=<path_to_new_cert>.crt \
         --key=<path_to_new_key>.key \
         -n openshift-config \
         --dry-run=client -o yaml | oc replace -f -
    ```

    where:

    `<existing_secret_name>`
    :   Specifies the target name of the existing active secret that you are replacing.

    `<path_to_new_cert>.crt`
    :   Specifies the absolute local file system path to the renewed certificate chain file.

    `<path_to_new_key>.key`
    :   Specifies the absolute local file system path to the corresponding unencrypted private key file.
1.  Verify that the `kube-apiserver` pods successfully hot-reload the updated assets without initiating a new cluster deployment revision:
    ```terminal
    $ oc get clusteroperators kube-apiserver
    ```

    Confirm that the `PROGRESSING` status column remains `False`. If the status changes to `True`, verify that your underlying `apiserver/cluster` resource parameters were not modified structural layout changes during the substitution.