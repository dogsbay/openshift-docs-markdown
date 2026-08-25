{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing exported virtual machine manifests {id="virt-accessing-exported-vm-manifests_{{ context }}"}

After you export a virtual machine (VM) or snapshot, you can get the `VirtualMachine` manifest and related information from the export server. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You exported a virtual machine or VM snapshot by creating a `VirtualMachineExport` custom resource (CR).

    :::note

    `VirtualMachineExport` objects that have the `spec.source.kind: PersistentVolumeClaim` parameter do not generate virtual machine manifests.
    
    :::


**Procedure**

1.  To access the manifests, you must first copy the certificates from the source cluster to the target cluster.
    1.  Log in to the source cluster.
    1.  Save the certificates to the `cacert.crt` file by running the following command:
        ```terminal
        $ oc get vmexport <export_name> -o jsonpath={.status.links.external.cert} > cacert.crt
        ```

        Replace `<export_name>` with the `metadata.name` value from the `VirtualMachineExport` object.
    1.  Copy the `cacert.crt` file to the target cluster.
1.  Decode the token in the source cluster and save it to the `token_decode` file by running the following command:
    ```terminal
    $ oc get secret export-token-<export_name> -o jsonpath={.data.token} | base64 --decode > token_decode
    ```

    Replace `<export_name>` with the `metadata.name` value from the `VirtualMachineExport` object.
1.  Copy the `token_decode` file to the target cluster.
1.  Get the `VirtualMachineExport` custom resource by running the following command:
    ```terminal
    $ oc get vmexport <export_name> -o yaml
    ```
1.  Review the `status.links` stanza, which is divided into `external` and `internal` sections. Note the `manifests.url` fields within each section, for example:
    ```yaml
    apiVersion: export.kubevirt.io/v1beta1
    kind: VirtualMachineExport
    metadata:
      name: example-export
    spec:
      source:
        apiGroup: "kubevirt.io"
        kind: VirtualMachine
        name: example-vm
      tokenSecretRef: example-token
    status:
    #...
      links:
        external:
    #...
          manifests:
          - type: all
            url: https://vmexport-proxy.test.net/api/export.kubevirt.io/v1beta1/namespaces/example/virtualmachineexports/example-export/external/manifests/all
          - type: auth-header-secret
            url: https://vmexport-proxy.test.net/api/export.kubevirt.io/v1beta1/namespaces/example/virtualmachineexports/example-export/external/manifests/secret
        internal:
    #...
          manifests:
          - type: all
            url: https://virt-export-export-pvc.default.svc/internal/manifests/all
          - type: auth-header-secret
            url: https://virt-export-export-pvc.default.svc/internal/manifests/secret
      phase: Ready
      serviceName: virt-export-example-export
    ```
    *   `status.links.external.manifests.url` where the `type` is `all` contains the `VirtualMachine` manifest, `DataVolume` manifest, if present, and a `ConfigMap` manifest that contains the public certificate for the external URL’s ingress or route.
    *   `status.links.external.manifests.url` where the `type` is `auth-header-secret` contains a secret containing a header that is compatible with Containerized Data Importer (CDI). The header contains a text version of the export token.
1.  Log in to the target cluster.
1.  Get the `Secret` manifest by running the following command:
    ```terminal
    $ curl --cacert cacert.crt <secret_manifest_url> -H \
    "x-kubevirt-export-token:token_decode" -H \
    "Accept:application/yaml"
    ```
    *   Replace `<secret_manifest_url>` with an `auth-header-secret` URL from the `VirtualMachineExport` YAML output.
    *   Reference the `token_decode` file that you created earlier.

        For example:
        ```terminal
        $ curl --cacert cacert.crt https://vmexport-proxy.test.net/api/export.kubevirt.io/v1beta1/namespaces/example/virtualmachineexports/example-export/external/manifests/secret -H "x-kubevirt-export-token:token_decode" -H "Accept:application/yaml"
        ```
1.  Get the manifests of `type: all`, such as the `ConfigMap` and `VirtualMachine` manifests, by running the following command:
    ```terminal
    $ curl --cacert cacert.crt <all_manifest_url> -H \
    "x-kubevirt-export-token:token_decode" -H \
    "Accept:application/yaml"
    ```
    *   Replace `<all_manifest_url>` with a URL from the `VirtualMachineExport` YAML output.
    *   Reference the `token_decode` file that you created earlier.

        For example:
        ```terminal
        $ curl --cacert cacert.crt https://vmexport-proxy.test.net/api/export.kubevirt.io/v1beta1/namespaces/example/virtualmachineexports/example-export/external/manifests/all -H "x-kubevirt-export-token:token_decode" -H "Accept:application/yaml"
        ```

**Next steps**

*   You can now create the `ConfigMap` and `VirtualMachine` objects on the target cluster by using the exported manifests.