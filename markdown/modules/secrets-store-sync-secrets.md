{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling synchronization of mounted content as Kubernetes secrets {id="secrets-store-sync-secrets_{{ context }}"}

You can enable a synchronization process that creates `secret` objects from the content on a mounted volume. Using secrets protects information that you do not want developers to have. {._abstract}

An example where you might want to enable synchronization is to use an environment variable in your deployment to reference the Kubernetes secret.


:::warning

Do not enable synchronization if you do not want to store your secrets on your {{ product_title }} cluster and in etcd. Enable this functionality only if you require it, such as when you want to use environment variables to refer to the secret.

:::


If you enable synchronization, the secrets from the mounted volume are synchronized as Kubernetes secrets after you start a pod that mounts the secrets.

The synchronized Kubernetes secret is deleted when all pods that mounted the content are deleted.

**Prerequisites**

*   You have installed the {{ secrets_store_operator }}.
*   You have installed a secrets store provider.
*   You have created the secret provider class.
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Edit the `SecretProviderClass` resource by running the following command:
    ```terminal
    $ oc edit secretproviderclass my-azure-provider
    ```

    Replace `my-azure-provider` with the name of your secret provider class.
1.  Add the `secretsObjects` section with the configuration for the synchronized Kubernetes secrets:
    ```yaml
    apiVersion: secrets-store.csi.x-k8s.io/v1
    kind: SecretProviderClass
    metadata:
      name: my-azure-provider
      namespace: my-namespace
    spec:
      provider: azure
      secretObjects:
        - secretName: tlssecret
          type: kubernetes.io/tls
          labels:
            environment: "test"
          data:
            - objectName: tlskey
              key: tls.key
            - objectName: tlscrt
              key: tls.crt
      parameters:
        usePodIdentity: "false"
        keyvaultName: "kvname"
        objects:  |
          array:
            - |
              objectName: tlskey
              objectType: secret
            - |
              objectName: tlscrt
              objectType: secret
        tenantId: "tid"
    ```

    where:

    `spec.secretObjects`
    :   Specifies the configuration for synchronized Kubernetes secrets.

    `spec.secretObjects.secretname`
    :   Specifies the name of the Kubernetes `Secret` object to create.

    `spec.secretObjects.type`
    :   Specifies the type of Kubernetes `Secret` object to create. For example, `Opaque` or `kubernetes.io/tls`.

    `spec.secretObjects.data.object.name`
    :   Specifies the object name or alias of the mounted content to synchronize.

    `spec.secretObjects.data.object.key`
    :   Specifies the data field from the specified `objectName` to populate the Kubernetes secret with.

1.  Save the file to apply the changes.