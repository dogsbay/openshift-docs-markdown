{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling signature verification for oc-mirror plugin v2 {id="oc-mirror-about-sig-mirroring-verification_{{ context }}"}

Starting with {{ product_title }} 4.19, the oc-mirror plugin v2 supports signature verification, which is disabled by default. {._abstract}

When enabled, the plugin verifies that container images match their signatures, ensuring they have not been altered and come from trusted sources. If a signature mismatch is detected, the mirroring workflow will fail.

**Procedure**

1.  If you want to enable signature verification for all images, run the following command:
    ```terminal
    $ oc mirror --secure-policy=true
    ```
1.  If you want to enable or disable signature verification for specific elements — such as a transport protocol, registry, namespace, or image — follow these steps:
    1.  Create a `policy.json` file in either the `$HOME/.config/containers/` or `/etc/containers/` directory.

        :::note

        If your policy configuration file is located outside the default directory, you can specify its path by using the `--policy` flag with the `oc mirror` command.

        For more information, see [`containers-policy.json(5)`](https://github.com/containers/image/blob/main/docs/containers-policy.json.5.md).
        
        :::

    1.  Define verification rules for the desired scope (for example, registry or image) using the appropriate policy configuration. You can set the verification requirement by specifying the desired rule under each element.
        ```json title="Example: Enable verification for only a specific image, and reject all other images"
        {
          "default": [{"type": "reject"}],
          "transports": {
            "docker": {
              "hostname:5000/myns/sigstore-signed-image": [
                {
                  "type": "sigstoreSigned",
                  "keyPath": "/path/to/sigstore-pubkey.pub",
                  "signedIdentity": {"type": "matchRepository"}
                }
              ]
            }
          }
        }
        ```