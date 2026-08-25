{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling signature mirroring for oc-mirror plugin v2 {id="oc-mirror-signature-mirroring-procedure_{{ context }}"}

You can disable signature mirroring for all images by providing the `--remove-signatures` flag for the `oc mirror` command. You can disable signature mirroring when your destination registry does not support signature storage or when you need to bypass failures caused by invalid or expired signatures at the source. {._abstract}

**Procedure**

1.  If you want to disable signature mirroring for all images, add `remove-signatures` flag while mirroring images. For example:
    ```terminal
    $ oc mirror --config=imageset-config.yaml <destination_registry> --remove-signatures
    ```
1.  If you want to enable or disable signature mirroring for specific elements, such as transport protocol, registry, namespace or image, use the following steps:
    1.  Create a YAML file in either the `$HOME/.config/containers/registries.d/` or `/etc/containers/registries.d/` directory.
    1.  Specify the `use-sigstore-attachments` parameter and set it to either `true` or `false` under the specific element you want to control, as seen in the following examples:
        ```yaml title="Example: Disable signature mirroring for the quay.io registry"
        # ...
        docker:
          quay.io:
            use-sigstore-attachments: false
        # ...
        ```
        ```yaml title="Example: Enable signature mirroring for all registries"
        # ...
        default-docker:
          use-sigstore-attachments: true
        # ...
        ```