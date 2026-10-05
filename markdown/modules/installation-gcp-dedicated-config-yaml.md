{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample install-config.yaml file for Google Cloud Dedicated {id="installation-gcp-dedicated-config-yaml_{{ context }}"}

You can configure disk types, encryption keys, and OS images specific to Google Cloud Dedicated (GCD) deployments in the `install-config.yaml` file. {._abstract}

```yaml title="Example install-config.yaml file for GCD"
apiVersion: v1
baseDomain: example.com
metadata:
  name: gcd-cluster
platform:
  gcp:
    projectID: eu0:my-project-id
    region: u-germany-northeast1
    defaultMachinePlatform:
      osDisk:
        diskType: hyperdisk-balanced
        encryptionKey:
          kmsKey:
            name: my-regional-key
            keyRing: my-key-ring
            location: u-germany-northeast1
            projectID: eu0:my-project-id
      osImage:
        project: eu0:my-project-id
        name: my-rhcos-image
publish: Internal
pullSecret: '{"auths": ...}'
sshKey: 'ssh-rsa AAAA...'
```

where:


`baseDomain`
:   Specifies the base domain for your cluster. Use a domain that you control.

`platform.gcp.projectID`
:   Specifies the Google Cloud project ID for your GCD environment. This value must include the domain-scoped prefix, such as `eu0:my-project-id`.

`platform.gcp.defaultMachinePlatform.osDisk.diskType`
:   Specifies the disk type for machine storage. For GCD, this value must be `hyperdisk-balanced`.

`platform.gcp.defaultMachinePlatform.osDisk.encryptionKey.kmsKey.name`
:   Specifies the name of your regional KMS key. In GCD, global keys are not supported.

`platform.gcp.defaultMachinePlatform.osImage.project`
:   Specifies the Google Cloud project ID where your custom {{ op_system }} image is stored. This value is required. The {{ op_system }} image is not pre-published in GCD regions.

`publish`
:   Specifies the cluster publishing strategy. For GCD, you must use `Internal`.

`pullSecret`
:   Specifies your Red&#160;Hat pull secret.

`sshKey`
:   Specifies your SSH public key for accessing cluster nodes.


:::note

Before you use a custom {{ op_system }} image, verify that it is compatible with your {{ product_title }} version and has been properly imported into your GCD project.

:::