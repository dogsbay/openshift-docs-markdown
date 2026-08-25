{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the cluster for the mirror registry {id="connected-to-disconnected-config-registry_{{ context }}"}

After creating and mirroring the images to the mirror registry, you must modify your cluster so that pods can pull images from the mirror registry. {._abstract}

You must:

*   Add the mirror registry credentials to the global pull secret.
*   Add the mirror registry server certificate to the cluster.
*   Create an `ImageContentSourcePolicy` custom resource (ICSP), which associates the mirror registry with the source registry.

**Procedure**

1.  Add mirror registry credential to the cluster global pull-secret:
    ```terminal
    $ oc set data secret/pull-secret -n openshift-config --from-file=.dockerconfigjson=<pull_secret_location>
    ```

    For `<pull_secret_location>`, provide the path to the new pull secret file.

    For example:
    ```terminal
    $ oc set data secret/pull-secret -n openshift-config --from-file=.dockerconfigjson=.mirrorsecretconfigjson
    ```
1.  Add the CA-signed mirror registry server certificate to the nodes in the cluster:
    1.  Create a config map that includes the server certificate for the mirror registry:
        ```terminal
        $ oc create configmap <config_map_name> --from-file=<mirror_address_host>..<port>=$path/ca.crt -n openshift-config
        ```

        For example:
        ```terminal
        $ oc create configmap registry-config --from-file=mirror.registry.com..443=/root/certs/ca-chain.cert.pem -n openshift-config
        ```
    1.  Use the config map to update the `image.config.openshift.io/cluster` custom resource (CR). {{ product_title }} applies the changes to this CR to all nodes in the cluster:
        ```terminal
        $ oc patch image.config.openshift.io/cluster --patch '{"spec":{"additionalTrustedCA":{"name":"<config_map_name>"}}}' --type=merge
        ```

        For example:
        ```terminal
        $ oc patch image.config.openshift.io/cluster --patch '{"spec":{"additionalTrustedCA":{"name":"registry-config"}}}' --type=merge
        ```
1.  Create an ICSP to redirect container pull requests from the online registries to the mirror registry:
    1.  Create the `ImageContentSourcePolicy` custom resource:
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: ImageContentSourcePolicy
        metadata:
          name: mirror-ocp
        spec:
          repositoryDigestMirrors:
          - mirrors:
            - mirror.registry.com:443/ocp/release
            source: quay.io/openshift-release-dev/ocp-release
          - mirrors:
            - mirror.registry.com:443/ocp/release
            source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
        ```

        where:

        `spec.mirrors`
        :   Specifies the name of the mirror image registry and repository.

        `spec.source`
        :   Specifies the online registry and repository containing the content that is mirrored.

    1.  Create the ICSP object:
        ```terminal
        $ oc create -f registryrepomirror.yaml
        ```
        ```terminal title="Example output"
        imagecontentsourcepolicy.operator.openshift.io/mirror-ocp created
        ```

        {{ product_title }} applies the changes to this CR to all nodes in the cluster.
1.  Verify that the credentials, CA, and ICSP for mirror registry are added:
    1.  Log in to a node:
        ```terminal
        $ oc debug node/<node_name>
        ```
    1.  Set `/host` as the root directory within the debug shell:
        ```terminal
        sh-4.4# chroot /host
        ```
    1.  Check the `config.json` file for the credentials:
        ```terminal
        sh-4.4# cat /var/lib/kubelet/config.json
        ```
        ```terminal title="Example output"
        {"auths":{"brew.registry.redhat.io":{"xx=="},"brewregistry.stage.redhat.io":{"auth":"xxx=="},"mirror.registry.com:443":{"auth":"xx="}}}
        ```

        Ensure that the mirror registry and credentials are present.
    1.  Change to the `certs.d` directory:
        ```terminal
        sh-4.4# cd /etc/docker/certs.d/
        ```
    1.  List the certificates in the `certs.d` directory:
        ```terminal
        sh-4.4# ls
        ```
        ```terminal title="Example output"
        image-registry.openshift-image-registry.svc.cluster.local:5000
        image-registry.openshift-image-registry.svc:5000
        mirror.registry.com:443
        ```

        For `mirror.registry.com:443`, ensure that the mirror registry is in the list.
    1.  Check that the ICSP added the mirror registry to the `registries.conf` file:
        ```terminal
        sh-4.4# cat /etc/containers/registries.conf
        ```
        ```terminal title="Example output"
        unqualified-search-registries = ["registry.access.redhat.com", "docker.io"]

        [[registry]]
          prefix = ""
          location = "quay.io/openshift-release-dev/ocp-release"
          mirror-by-digest-only = true

          [[registry.mirror]]
            location = "mirror.registry.com:443/ocp/release"

        [[registry]]
          prefix = ""
          location = "quay.io/openshift-release-dev/ocp-v4.0-art-dev"
          mirror-by-digest-only = true

          [[registry.mirror]]
            location = "mirror.registry.com:443/ocp/release"
        ```

        The `registry.mirror` parameters indicate that the mirror registry is searched before the original registry.
    1.  Exit the node.
        ```terminal
        sh-4.4# exit
        ```