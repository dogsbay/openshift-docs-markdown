{%- set _mod_docs_content_type = "PROCEDURE" %}
# Get catalogs and Operator container image references {id="microshift-oc-mirror-prep-ops-cat-images-disconnected-use_{{ context }}"}

After performing a dry run with the oc-mirror plugin to review the list of images that you want to mirror, you must get all of the container image references. Then you must format the output for adding to an image builder blueprint. {._abstract}


:::note

For catalogs made for proprietary Operators, you can format image references for the image builder blueprint without using the following procedure.

:::


**Prerequisites**

*   You have a catalog index for the Operators you want to use.
*   You have installed the `jq` CLI tool.
*   You are familiar with image builder blueprint files.
*   You have an image builder blueprint TOML file.

**Procedure**

1.  Parse the catalog `index.json` file to get the image references that you need to include in the image builder blueprint. You can use either the unfiltered catalog or you can filter out images that cannot be mirrored:
    1.  Parse the unfiltered catalog `index.json` file to get the image references by running the following command:
        ```terminal
        jq -r --slurp '.[] | select(.relatedImages != null) | "[[containers]]\nsource = \"" + .relatedImages[].image + "\"\n"'   ./oc-mirror-workspace/src/catalogs/registry.redhat.io/redhat/redhat-operator-index/v{{ product_version }}/index/index.json
        ```
    1.  If you want to filter out images that cannot be mirrored, filter and parse the catalog `index.json` file by running the following command:
        ```terminal
        $ jq -r --slurp '.[] | select(.relatedImages != null) | .relatedImages[] | select(.name |  contains("ppc") or contains("s390x") | not) | "[[containers]]\\nsource = \\"" + .image + "\\"\\n"' ./oc-mirror-workspace/src/catalogs/registry.redhat.io/redhat/redhat-operator-index/v{{ product_version }}/index/index.json
        ```

        :::note

        This step uses the AMQ Broker Operator as an example. You can add other criteria to the `jq` command for further filtering as required by your use case.
        
        :::

        ```terminal title="Example image-reference output"
        [[containers]]
        source = "registry.redhat.io/amq8/amq-broker-init-rhel9@sha256:0b2126cfb6054fdf428c1f43b69e36e93a09a49ce15350e9273c98cc08c6598b"

        [[containers]]
        source = "registry.redhat.io/amq8/amq-broker-init-rhel9@sha256:0dde839c2dce7cb684094bf26523c8e16677de03149a0fff468b8c3f106e1f4f"
        ...
        ...

        [[containers]]
        source = "registry.redhat.io/amq8/amq-broker-rhel9@sha256:e8fa2a00e576ecb95561ffbdbf87b1c82d479c8791ab2c6ce741dd0d0b496d15"

        [[containers]]
        source = "registry.redhat.io/amq8/amq-broker-rhel9@sha256:ff6fefad518a6c997d4c5a6e475ba89640260167f0bc27715daf3cc30116fad1"
        …
        EOF
        ```

        :::important

        For mirrored and disconnected use cases, ensure that all of the sources filtered from your catalog `index.json` file are digests. If any of the sources use tags instead of digests, the Operator installation fails. Tags require an internet connection.
        
        :::

1.  View the `imageset-config.yaml` to get the catalog image reference for the `CatalogSource` custom resource (CR) by running the following command:
    ```terminal
    $ cat imageset-config.yaml
    ```
    ```yaml title="Example output"
    kind: ImageSetConfiguration
    apiVersion: mirror.openshift.io/v2alpha1
    mirror:
      operators:
      - catalog: registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}
        packages:
        - name: amq-broker-rhel9
          channels:
          - name: 7.13.x
    ```

    Use the value in the `mirror.catalog` catalog image reference for the following `jq` command to get the image digest. In this example, _&lt;registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}>_.
1.  Get the SHA of the catalog index image by running the following command:
    ```terminal
    $ skopeo inspect docker://_<registry.redhat.io/redhat/redhat-operator-index:v{product-version}>_ | jq `.Digest`
    ```

    Use the value in the `mirror.catalog` catalog image reference for the `jq` command to get the image digest. In this example, _&lt;registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}>_.
    ```text title="Example output"
    "sha256:7a76c0880a839035eb6e896d54ebd63668bb37b82040692141ba39ab4c539bc6"
    ```
1.  To get ready to add the image references to your image builder blueprint file, format the catalog image reference by using the following example:
    ```text
    [[containers]]
    source = "registry.redhat.io/redhat/redhat-operator-index@sha256:7a76c0880a839035eb6e896d54ebd63668bb37b82040692141ba39ab4c539bc6"
    ```
1.  Add the image references from all of the previous steps to the image builder blueprint.
    ```text title="Generated image builder blueprint example snippet"
    name = "microshift_blueprint"
    description = "MicroShift {{ product_version }}.1 on x86_64 platform"
    version = "0.0.1"
    modules = []
    groups = []

    [[packages]] (1)
    name = "microshift"
    version = "{{ product_version }}.1"
    ...
    ...

    [customizations.services]
    enabled = ["microshift"]

    [customizations.firewall]
    ports = ["22:tcp", "80:tcp", "443:tcp", "5353:udp", "6443:tcp", "30000-32767:tcp", "30000-32767:udp"]
    ...
    ...

    [[containers]]
    source = "quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:f41e79c17e8b41f1b0a5a32c3e2dd7cd15b8274554d3f1ba12b2598a347475f4"

    [[containers]]
    source = "quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:dbc65f1fba7d92b36cf7514cd130fe83a9bd211005ddb23a8dc479e0eea645fd"
    ...
    ...

    [[containers]]
    source = "registry.redhat.io/redhat/redhat-operator-index@sha256:7a76c0880a839035eb6e896d54ebd63668bb37b82040692141ba39ab4c539bc6"
    ...
    ...

    [[containers]]
    source = "registry.redhat.io/amq8/amq-broker-init-rhel9@sha256:0dde839c2dce7cb684094bf26523c8e16677de03149a0fff468b8c3f106e1f4f"
    ...
    ...

    [[containers]]
    source = "registry.redhat.io/amq8/amq-broker-rhel9@sha256:e8fa2a00e576ecb95561ffbdbf87b1c82d479c8791ab2c6ce741dd0d0b496d15"

    [[containers]]
    source = "registry.redhat.io/amq8/amq-broker-rhel9@sha256:ff6fefad518a6c997d4c5a6e475ba89640260167f0bc27715daf3cc30116fad1"
    …
    EOF
    ```

    where:

    `packages`
    :   Specifies the references for all non-optional {{ microshift_short }} RPM packages using the same version compatible with the `microshift-release-info` RPM.

    `customizations.services`
    :   Specifies the references for automatically enabling {{ microshift_short }} on system startup and applying default networking settings.
    Ensure that you include the non-optional {{ microshift_short }} container images necessary for a disconnected deployment and references for the catalog index in your `containerfile`. For example, source = `<"quay.io/openshift-release-dev/ocp-v4.0-art-dev>` and source = `<"registry.redhat.io/redhat/redhat-operator-index>`."