{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modify the install-config.yaml file to use the disconnected registry {id="ipi-modify-install-config-for-a-disconnected-registry_{{ context }}"}

On the provisioner node, the `install-config.yaml` file should use the newly created pull-secret from the `pull-secret-update.txt` file. The `install-config.yaml` file must also contain the disconnected registry node’s certificate and registry information. {._abstract}

**Procedure**

1.  Add the disconnected registry node’s certificate to the `install-config.yaml` file:
    ```terminal
    $ echo "additionalTrustBundle: |" >> install-config.yaml
    ```

    The certificate should follow the `"additionalTrustBundle: |"` line and be properly indented, usually by two spaces.
    ```terminal
    $ sed -e 's/^/  /' /opt/registry/certs/domain.crt >> install-config.yaml
    ```
1.  Add the mirror information for the registry to the `install-config.yaml` file:
    ```terminal
    $ echo "imageContentSources:" >> install-config.yaml
    ```
    ```terminal
    $ echo "- mirrors:" >> install-config.yaml
    ```
    ```terminal
    $ echo "  - registry.example.com:5000/ocp4/openshift4" >> install-config.yaml
    ```

    Replace `registry.example.com` with the registry’s fully qualified domain name.
    ```terminal
    $ echo "  source: quay.io/openshift-release-dev/ocp-release" >> install-config.yaml
    ```
    ```terminal
    $ echo "- mirrors:" >> install-config.yaml
    ```
    ```terminal
    $ echo "  - registry.example.com:5000/ocp4/openshift4" >> install-config.yaml
    ```

    Replace `registry.example.com` with the registry’s fully qualified domain name.
    ```terminal
    $ echo "  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev" >> install-config.yaml
    ```