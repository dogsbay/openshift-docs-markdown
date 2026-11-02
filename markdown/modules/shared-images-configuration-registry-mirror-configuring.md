{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure image registry repository mirroring {id="shared-images-configuration-registry-mirror-configuring_{{ context }}"}

You can create postinstallation mirror configuration custom resources (CR) to redirect image pull requests from a source image registry to a mirrored image registry. {._abstract}


:::important

Windows images mirrored through `ImageDigestMirrorSet` and `ImageTagMirrorSet` objects have specific naming requirements as described in "Using Windows containers with a mirror registry".

:::


**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Configure mirrored repositories, by either:
    *   Setting up a mirrored repository with Red&#160;Hat Quay. You can copy images from one repository to another and also automatically sync those repositories repeatedly over time by using Red&#160;Hat Quay.
        *   [Red&#160;Hat Quay Repository Mirroring](https://docs.redhat.com/en/documentation/red_hat_quay/3/html/manage_red_hat_quay/arch-mirroring-intro#enabling-repository-mirroring-quay)
    *   Using a tool such as `skopeo` to copy images manually from the source repository to the mirrored repository.

        For example, after installing the skopeo RPM package on a {op-system-base-full system}, use the `skopeo` command as shown in the following example:
        ```terminal
        $ skopeo copy --all \
        docker://registry.access.redhat.com/ubi9/ubi-minimal:latest@sha256:5cf... \
        docker://example.io/example/ubi-minimal
        ```

        In this example, you have a container image registry named `example.io` and image repository named `example`. You want to copy the `ubi9/ubi-minimal` image from `registry.access.redhat.com` to `example.io`. After you create the mirrored registry, you can configure your {{ product_title }} cluster to redirect requests made to the source repository to the mirrored repository.

    :::important

    You must mirror the `mcr.microsoft.com/oss/kubernetes/pause:3.9` image. For example, you could use the following `skopeo` command to mirror the image:

    ```terminal
    $ skopeo copy \
    docker://mcr.microsoft.com/oss/kubernetes/pause:3.9\
    docker://example.io/oss/kubernetes/pause:3.9
    ```
    
    :::

1.  Log in to your {{ product_title }} cluster.
1.  Create an `ImageDigestMirrorSet` or `ImageTagMirrorSet` CR, as needed, replacing the source and mirrors with your own registry and repository pairs and images:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: ImageDigestMirrorSet
    metadata:
      name: ubi9repo
    spec:
      imageDigestMirrors:
      - mirrors:
        - example.io/example/ubi-minimal
        - example.com/example2/ubi-minimal
        source: registry.access.redhat.com/ubi9/ubi-minimal
        mirrorSourcePolicy: AllowContactingSource
      - mirrors:
        - mirror.example.com
        source: registry.redhat.io
        mirrorSourcePolicy: NeverContactSource
      - mirrors:
        - docker.io
        source: docker-mirror.internal
        mirrorSourcePolicy: AllowContactingSource
    ```
1.  Create the new object by running the following command:
    ```terminal
    $ oc create -f registryrepomirror.yaml
    ```
1.  To check that the mirrored configuration settings are applied, do the following on one of the nodes.
    1.  List your nodes:
        ```terminal
        $ oc get node
        ```
        ```terminal title="Example output"
        NAME                           STATUS                     ROLES    AGE  VERSION
        worker-1.compute.local         Ready                      worker   7m   v1.36.3
        master-1.compute.local         Ready                      master   11m  v1.36.3
        master-2.compute.local         Ready                      master   11m  v1.36.3
        worker-2.compute.local         Ready                      worker   7m   v1.36.3
        worker-3.compute.local         Ready                      worker   7m   v1.36.3
        master-3.compute.local         Ready                      master   11m  v1.36.3
        ```
    1.  Start the debugging process to access the node:
        ```terminal
        $ oc debug node/worker-1.compute.local
        ```
        ```terminal title="Example output"
        Starting pod/worker-1.compute.local-debug ...
        To use host binaries, run `chroot /host`
        ```
    1.  Change your root directory to `/host`:
        ```terminal
        sh-4.2# chroot /host
        ```
    1.  Check that the WMCO generated a `hosts.toml` file for each registry on each Windows instance. For the previous example IDMS object, there should be three files in the following file structure:
        ```terminal
        $ tree $config_path
        ```
        ```terminal title="Example output"
        C:/k/containerd/registries/
        |── registry.access.redhat.com
        |   └── hosts.toml
        |── mirror.example.com
        |   └── hosts.toml
        └── docker.io
            └── hosts.toml:
        ```

        The following output represents a `hosts.toml` containerd configuration file where the previous example IDMS object was applied.
        ```terminal title="Example host.toml files"
        $ cat "$config_path"/registry.access.redhat.com/host.toml
        server = "https://registry.access.redhat.com" # default fallback server since "AllowContactingSource" mirrorSourcePolicy is set

        [host."https://example.io/example/ubi-minimal"]
         capabilities = ["pull"]

        [host."https://example.com/example2/ubi-minimal"] # secondary mirror
         capabilities = ["pull"]


        $ cat "$config_path"/registry.redhat.io/host.toml
        # "server" omitted since "NeverContactSource" mirrorSourcePolicy is set

        [host."https://mirror.example.com"]
         capabilities = ["pull"]


        $ cat "$config_path"/docker.io/host.toml
        server = "https://docker.io"

        [host."https://docker-mirror.internal"]
         capabilities = ["pull", "resolve"] # resolve tags
        ```
    1.  Pull an image to the node from the source and check if it is resolved by the mirror.
        ```terminal
        sh-4.2# podman pull --log-level=debug registry.access.redhat.com/ubi9/ubi-minimal@sha256:5cf...
        ```

**Troubleshooting**

If the repository mirroring procedure does not work as described, use the following information about how repository mirroring works to help troubleshoot the problem:

*   The first working mirror is used to supply the pulled image.
*   The main registry is only used if no other mirror works.
*   From the system context, the `Insecure` flags are used as fallback.