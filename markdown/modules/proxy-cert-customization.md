{%- set _mod_docs_content_type = "REFERENCE" %}
# Proxy certificate customization {id="proxy-cert-customization_{{ context }}"}

Update proxy certificates by modifying the config map referenced by `trustedCA` or by using machine configs to write CA certificates to the {{ op_system }} trust bundle. {._abstract}

Updating the user-provided trust bundle consists of completing one of the following tasks:

*   Updating the PEM-encoded certificates in the config map referenced by `trustedCA`
*   Creating a config map in the namespace `openshift-config` that contains the new trust bundle and updating `trustedCA` to reference the name of the new config map.

The mechanism for writing CA certificates to the {{ op_system }} trust bundle is exactly the same as writing any other file to {{ op_system }}, which is done through the use of machine configs. When the Machine Config Operator (MCO) applies the new machine config that contains the new CA certificates, the MCO runs the `update-ca-trust` program and restarts the CRI-O service on the {{ op_system }} nodes. This update does not require a node reboot. Restarting the CRI-O service automatically updates the trust bundle with the new CA certificates. For example:

```yaml
apiVersion: machineconfiguration.openshift.io/v1
kind: MachineConfig
metadata:
  labels:
    machineconfiguration.openshift.io/role: worker
  name: 50-examplecorp-ca-cert
spec:
  config:
    ignition:
      version: 3.1.0
    storage:
      files:
      - contents:
          source: data:text/plain;charset=utf-8;base64,<base64_encoded_ca_certificate>
        mode: 0644
        overwrite: true
        path: /etc/pki/ca-trust/source/anchors/examplecorp-ca.crt
```

The `truststore` of machines must also support updating the `truststore` of nodes.