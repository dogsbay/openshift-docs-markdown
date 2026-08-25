{%- set _mod_docs_content_type = "REFERENCE" %}
# Controlling what image sources can be deployed {id="security-deploy-image-sources_{{ context }}"}

{{ product_title }} enables cluster administrators to apply security policy that is broad or narrow, reflecting deployment environment and security requirements. {._abstract}

It is important that the intended images are actually being deployed, that the images including the contained content are from trusted sources, and they have not been altered. Cryptographic signing provides this assurance. {{ product_title }} enables cluster administrators to apply security policy that is broad or narrow, reflecting deployment environment and security requirements. Two parameters define this policy:

*   one or more registries, with optional project namespace
*   trust type, such as accept, reject, or require public key(s)

You can use these policy parameters to allow, deny, or require a trust relationship for entire registries, parts of registries, or individual images. Using trusted public keys, you can ensure that the source is cryptographically verified. The policy rules apply to nodes. Policy might be applied uniformly across all nodes or targeted for different node workloads (for example, build, zone, or environment).

```json title="Example image signature policy file"
{
    "default": [{"type": "reject"}],
    "transports": {
        "docker": {
            "access.redhat.com": [
                {
                    "type": "signedBy",
                    "keyType": "GPGKeys",
                    "keyPath": "/etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release"
                }
            ]
        },
        "atomic": {
            "172.30.1.1:5000/openshift": [
                {
                    "type": "signedBy",
                    "keyType": "GPGKeys",
                    "keyPath": "/etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release"
                }
            ],
            "172.30.1.1:5000/production": [
                {
                    "type": "signedBy",
                    "keyType": "GPGKeys",
                    "keyPath": "/etc/pki/example.com/pubkey"
                }
            ],
            "172.30.1.1:5000": [{"type": "reject"}]
        }
    }
}
```

The policy can be saved onto a node as `/etc/containers/policy.json`. Saving this file to a node is best accomplished using a new `MachineConfig` object. This example enforces the following rules:

*   Require images from the Red Hat Registry (`registry.access.redhat.com`) to be
signed by the Red Hat public key.
*   Require images from your OpenShift Container Registry in the `openshift`
namespace to be signed by the Red Hat public key.
*   Require images from your OpenShift Container Registry in the `production`
namespace to be signed by the public key for `example.com`.
*   Reject all other registries not specified by the global `default` definition.