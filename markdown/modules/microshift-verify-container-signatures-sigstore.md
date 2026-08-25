{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify container signatures using sigstore {id="microshift-verify-container-signatures-sigstore_{{ context }}"}

To secure your {{ microshift_short }} environment against unauthorized image deployments, you can configure the container runtime to verify container signatures. By using sigstore with Red&#160;Hat public keys, you ensure that only authentic, signed images from trusted registries are used. {._abstract}

You can access Red&#160;Hat public keys at the following link:

*   [Product Signing Keys](https://access.redhat.com/security/team/key)

You must use the release key 3 for verifying {{ microshift_short }} container signatures.

**Prerequisites**

*   You have admin access to the {{ microshift_short }} host.
*   You installed {{ microshift_short }}.

**Procedure**

1.  Download the relevant public key and save it as `/etc/containers/RedHat_ReleaseKey3.pub` by running the following command:
    ```terminal
    $ sudo curl -sL https://access.redhat.com/security/data/63405576.txt -o /etc/containers/RedHat_ReleaseKey3.pub
    ```
1.  To configure the container runtime to verify images from Red Hat sources, edit the `/etc/containers/policy.json` file to contain the following configuration:
    ```json title="Example policy JSON file"
    {
        "default": [
            {
                "type": "reject"
            }
        ],
        "transports": {
            "docker": {
                "quay.io/openshift-release-dev": [{
                    "type": "sigstoreSigned",
                    "keyPath": "/etc/containers/RedHat_ReleaseKey3.pub",
                    "signedIdentity": {
                        "type": "matchRepoDigestOrExact"
                    }
                }],
                "registry.redhat.io": [{
                    "type": "sigstoreSigned",
                    "keyPath": "/etc/containers/RedHat_ReleaseKey3.pub",
                    "signedIdentity": {
                        "type": "matchRepoDigestOrExact"
                    }
                }]
            }
        }
    }
    ```
1.  Configure Red Hat remote registries to use sigstore attachments when pulling images to the local storage, by editing the `/etc/containers/registries.d/registry.redhat.io.yaml` file to contain the following configuration:
    ```terminal
    $ cat /etc/containers/registries.d/registry.redhat.io.yaml
    docker:
         registry.redhat.io:
             use-sigstore-attachments: true
    ```
1.  Configure Red Hat remote registries to use sigstore attachments when pulling images to the local storage, by editing the `/etc/containers/registries.d/registry.quay.io.yaml` file to contain the following configuration:
    ```terminal
    $ cat /etc/containers/registries.d/quay.io.yaml
    docker:
      quay.io/openshift-release-dev:
        use-sigstore-attachments: true
    ```
1.  Create user-specific registry configuration files if your use case requires signature verification for those image sources. You can use the example here to start with and add your own requirements.

**Next steps**

1.  If you are using a mirror registry, enable sigstore attachments.
1.  Otherwise, proceed to wiping the local container storage clean.