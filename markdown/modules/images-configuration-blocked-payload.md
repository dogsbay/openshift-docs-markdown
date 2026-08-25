{%- set _mod_docs_content_type = "PROCEDURE" %}
# Blocking a payload registry {id="images-configuration-blocked-payload_{{ context }}"}

In a mirroring configuration, you can block upstream payload registries in a disconnected environment by using a `ImageContentSourcePolicy` (ICSP) object.
The following example procedure demonstrates how to block the `quay.io/openshift-payload` payload registry. {._abstract}

**Procedure**

1.  Create the mirror configuration using an `ImageContentSourcePolicy` (ICSP) object to mirror the payload to a registry in your instance. The following example ICSP file mirrors the payload `internal-mirror.io/openshift-payload`:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ImageContentSourcePolicy
    metadata:
      name: my-icsp
    spec:
      repositoryDigestMirrors:
      - mirrors:
        - internal-mirror.io/openshift-payload
        source: quay.io/openshift-payload
    ```
1.  After the object deploys onto your nodes, verify that the mirror configuration is set by checking the `/etc/containers/registries.conf` custom resource (CR):
    ```terminal title="Example output"
    [[registry]]
      prefix = ""
      location = "quay.io/openshift-payload"
      mirror-by-digest-only = true

    [[registry.mirror]]
      location = "internal-mirror.io/openshift-payload"
    ```
1.  Use the following command to edit the `image.config.openshift.io` CR:
    ```terminal
    $ oc edit image.config.openshift.io cluster
    ```
1.  To block the payload registry, add the following configuration to the `image.config.openshift.io` CR:
    ```yaml
    spec:
      registrySources:
        blockedRegistries:
         - quay.io/openshift-payload
    ```

**Verification**

*   Verify that the upstream payload registry is blocked by checking the `/etc/containers/registries.conf` file on the node.
    ```terminal title="Example /etc/containers/registries.conf file"
    [[registry]]
      prefix = ""
      location = "quay.io/openshift-payload"
      blocked = true
      mirror-by-digest-only = true

    [[registry.mirror]]
      location = "internal-mirror.io/openshift-payload"
    ```