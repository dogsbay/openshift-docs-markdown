{%- set _mod_docs_content_type = "PROCEDURE" %}

# Signing using skopeo {id="chains-signing-secrets-skopeo_{{ context }}"}

You can generate keys using the `skopeo` tool and use them in the `cosign` signing scheme with {{ tekton_chains }}.

**Prerequisites**

*   You installed the [skopeo](https://github.com/containers/skopeo) tool.

**Procedure**

1.  Generate a public/private key pair by running the following command:
    ```terminal
    $ skopeo generate-sigstore-key --output-prefix <mykey> (1)
    ```
    1.  Replace `<mykey>` with a key name of your choice.

        Skopeo prompts you for a passphrase for the private key and then creates the key files named `<mykey>.private` and `<mykey>.pub`.
1.  Encode the `<mykey>.pub` file using the `base64` tool by running the following command:
    ```terminal
    $ base64 -w 0 <mykey>.pub > b64.pub
    ```
1.  Encode the `<mykey>.private` file using the `base64` tool by running the following command:
    ```terminal
    $ base64 -w 0 <mykey>.private > b64.private
    ```
1.  Encode the passhprase using the `base64` tool by running the following command:
    ```terminal
    $ echo -n '<passphrase>' | base64 -w 0 > b64.passphrase (1)
    ```
    1.  Replace `<passphrase>` with the passphrase that you used for the key pair.
1.  Create the `signing-secrets` secret in the `openshift-pipelines` namespace by running the following command:
    ```terminal
    $ oc create secret generic signing-secrets -n openshift-pipelines
    ```
1.  Edit the `signing-secrets` secret by running the following command:
    ```
    $ oc edit secret -n openshift-pipelines signing-secrets
    ```

    Add the encoded keys in the data of the secret in the following way:
    ```yaml
    apiVersion: v1
    data:
      cosign.key: <Encoded <mykey>.private> (1)
      cosign.password: <Encoded passphrase> (2)
      cosign.pub: <Encoded <mykey>.pub> (3)
    immutable: true
    kind: Secret
    metadata:
      name: signing-secrets
    # ...
    type: Opaque
    ```
    1.  Replace `<Encoded <mykey>.private>` with the content of the `b64.private` file.
    1.  Replace `<Encoded passphrase>` with the content of the `b64.passphrase` file.
    1.  Replace `<Encoded <mykey>.pub>` with the content of the `b64.pub` file.