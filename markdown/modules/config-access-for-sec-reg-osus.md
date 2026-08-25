{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring access to a secured registry for the OpenShift Update Service {id="registry-configuration-for-update-service_{{ context }}"}

If your release images are contained in a registry whose HTTPS X.509 certificate is signed by a custom certificate authority, you must configure additional trust stores for image registry access for the update service. {._abstract}

**Prerequisites**

*   You must have the `oc` command-line interface (CLI) tool installed.
*   You must provision a container image registry in your environment with the container images for your update.

**Procedure**

1.  Complete the steps in "Configuring additional trust stores for image registry access" along with the following changes for the update service.
    ```yaml title="Image registry CA config map example for the update service"
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: my-registry-ca
    data:
      updateservice-registry: |
        -----BEGIN CERTIFICATE-----
        ...
        -----END CERTIFICATE-----
      registry-with-port.example.com..5000: |
        -----BEGIN CERTIFICATE-----
        ...
        -----END CERTIFICATE-----
    ```

    where: 

    `data.updateservice-registry`
    :   Specifies the required config map key name containing the registry certificate authority (CA) certificate.

    :::note

    If a registry has the port, such as `registry-with-port.example.com:5000`, `:` should be replaced with `..`.
    
    :::