{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure CRI-O to use a registry mirror for Operators {id="microshift-oc-mirror-transform-imageset-to-crio_{{ context }}"}

To use a registry mirror for Operators with {{ microshift_short }}, you must transform the `ImageDigestMirrorSet` YAML file created by the oc-mirror plugin into a format that is compatible with the MicroShift CRI-O container runtime configuration.
.Prerequisites {._abstract}

*   The {{ oc_first }} is installed.
*   You installed Operator Lifecycle Manager (OLM).
*   You installed the oc-mirror plugin.
*   You installed the `yq` binary.
*   The `ImageDigestMirrorSet` and `CatalogSource` YAML files are available in the `cluster-resources` subdirectory.

**Procedure**

1.  Confirm the contents of the `ImageDigestMirrorSet` YAML file by running the following command:
    ```terminal
    $ cat _<v2_workspace>_/working-dir/cluster-resources/imagedigestmirrorset.yaml
    ```

    Replace _&lt;v2_workspace>_ with the directory name that you used when you generated mirroring resources.
    ```yaml title="Example output"
    apiVersion: config.openshift.io/v1
    kind: ImageDigestMirrorSet
    metadata:
      labels:
        operators.openshift.org/catalog: "true"
      name: operator-0
    spec:
      imageDigestMirrors:
      - mirrors:
        - registry.example.com/amq7
        source: registry.redhat.io/amq7
    ```
1.  Transform the `imagedigestmirrorset.yaml` into a format ready for CRI-O configuration by running the following command:
    ```terminal
    $ yq '.spec.imageDigestMirrors[] as $item ireduce([]; . + [{"mirror": $item.mirrors[], "source": ($item | .source)}]) | .[] |
      "[[registry]]
          prefix = \"" + .source + "\"
          location = \"" + .mirror + "\"
          mirror-by-digest-only = true
          insecure = true
          "' ./mirror1/working-dir/cluster-resources/imagedigestmirrorset.yaml
    ```
    ```terminal title="Example output"
    [[registry]]
          prefix = "registry.redhat.io/amq7"
          location = "registry.example.com/amq7"
          mirror-by-digest-only = true
          insecure = true
    ```
1.  Add the output to the CRI-O configuration file in the `/etc/containers/registries.conf.d/` directory:
    ```yaml title="Example crio-config.yaml mirror configuration file"
    [[registry]]
          prefix = "registry.redhat.io/amq7"
          location = "registry.example.com/amq7"
          mirror-by-digest-only = true
          insecure = true

    [[registry]]
        prefix = ""
        location = "quay.io"
        mirror-by-digest-only = true
    [[registry.mirror]]
        location = "<registry_host>:<port>"
        insecure = false
    ```

    where

    `registry.mirror.location`
    :   Specifies the hostname and port of your mirror registry server, for example `microshift-quay:8443`.

1.  Apply the CRI-O configuration changes by restarting {{ microshift_short }} with the following command:
    ```terminal
    $ sudo systemctl restart crio
    ```