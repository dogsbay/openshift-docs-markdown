{%- set _mod_docs_content_type = "PROCEDURE" %}
# Update the registry certificate authority in the AgentServiceConfig resource with the mirror registry {id="hcp-ibm-z-update-registry-ca_{{ context }}"}

When you use a mirror registry for images, agents need to trust the registry’s certificate to securely pull images. You can add the certificate authority of the mirror registry to the `AgentServiceConfig` custom resource by creating a `ConfigMap`. {._abstract}

**Prerequisites**

*   You must have installed {{ mce }}.

**Procedure**

1.  In the same namespace where you installed {{ mce_short }}, create a `ConfigMap` resource with the mirror registry details. This `ConfigMap` resource ensures that you grant the hosted cluster workers the capability to retrieve images from the mirror registry.
    ```yaml title="Example ConfigMap file"
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: mirror-config
      namespace: multicluster-engine
      labels:
        app: assisted-service
    data:
      ca-bundle.crt: |
        -----BEGIN CERTIFICATE-----
        -----END CERTIFICATE-----
      registries.conf: |

        [[registry]]
          location = "registry.stage.redhat.io"
          insecure = false
          blocked = false
          mirror-by-digest-only = true
          prefix = ""

          [[registry.mirror]]
            location = "<mirror_registry>"
            insecure = false

        [[registry]]
          location = "registry.redhat.io/multicluster-engine"
          insecure = false
          blocked = false
          mirror-by-digest-only = true
          prefix = ""

          [[registry.mirror]]
            location = "<mirror_registry>/multicluster-engine"
            insecure = false
    ```

    Replace `<mirror_registry>` with the name of the mirror registry.
1.  Patch the `AgentServiceConfig` resource to include the `ConfigMap` resource that you created. If the `AgentServiceConfig` resource is not present, create the `AgentServiceConfig` resource with the following content embedded into it:
    ```terminal
    spec:
      mirrorRegistryRef:
        name: mirror-config
    ```