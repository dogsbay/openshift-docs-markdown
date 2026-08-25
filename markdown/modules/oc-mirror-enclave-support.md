{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirroring to an enclave {id="oc-mirror-enclave-support_{{ context }}"}

When you mirror to an enclave, you must first transfer the necessary images from one or more enclaves into the enterprise central registry. {._abstract}

The central registry is situated within a secure network, specifically a disconnected environment, and is not directly linked to the public internet. But the user must execute `oc mirror` in an environment with access to the public internet.

**Procedure**

1.  Before running oc-mirror plugin v2 in the disconnected environment, create a `registries.conf` file. The TOML format of the file is described in this specification:

    :::note

    It is recommended to store the file under `$HOME/.config/containers/registries.conf` or `/etc/containers/registries.conf`.
    
    :::

    ```toml title="Example registries.conf"
    [[registry]]
    location="registry.redhat.io"
    [[registry.mirror]]
    location="<enterprise-registry.in>"

    [[registry]]
    location="quay.io"
    [[registry.mirror]]
    location="<enterprise-registry.in>"
    ```
1.  Generate a mirror archive.
    1.  To collect all the {{ product_title }} content into an archive on the disk under `<file_path>/enterprise-content`, run the following command:
        ```terminal
        $ oc mirror --v2 -c isc.yaml file://<file_path>/enterprise-content
        ```
        ```yaml title="Example of isc.yaml"
        apiVersion: mirror.openshift.io/v2alpha1
        kind: ImageSetConfiguration
        mirror:
          platform:
            architectures:
              - "amd64"
            channels:
              - name: stable-4.15
                minVersion: 4.15.0
                maxVersion: 4.15.3
        ```

        After the archive is generated, it is transferred to the disconnected environment. The transport mechanism is not part of oc-mirror plugin v2. The enterprise network administrators determine the transfer strategy.

        In some cases, the transfer is done manually, in that the disk is physically unplugged from one location, and plugged to another computer in the disconnected environment. In other cases, the Secure File Transfer Protocol (SFTP) or other protocols are used.
1.  After the transfer of the archive is done, you can execute oc-mirror plugin v2 again in order to mirror the relevant archive contents to the registry (`entrerpise_registry.in` in the example) as demonstrated in the following example:
    ```terminal
    $ oc mirror --v2 -c isc.yaml --from file://<disconnected_environment_file_path>/enterprise-content docker://<enterprise_registry.in>/
    ```

    Where:
    *   `--from` points to the folder containing the archive. It starts with the `file://`.
    *   `docker://` is the destination of the mirroring is the final argument. Because it is a docker registry.
    *   `-c` (`--config`) is a mandatory argument. It enables oc-mirror plugin v2 to eventually mirror only sub-parts of the archive to the registry. One archive might contain several {{ product_title }} releases, but the disconnected environment or an enclave might mirror only a few.
1.  Prepare the `imageSetConfig` YAML file, which describes the content to mirror to the enclave:
    ```yaml title="Example isc-enclave.yaml"
    apiVersion: mirror.openshift.io/v2alpha1
    kind: ImageSetConfiguration
    mirror:
      platform:
        architectures:
          - "amd64"
        channels:
          - name: stable-4.15
            minVersion: 4.15.2
            maxVersion: 4.15.2
    ```

    You must run oc-mirror plugin v2 on a machine with access to the disconnected registry. In the previous example, the disconnected environment, `enterprise-registry.in`, is accessible.
1.  Update the graph URL

    If you are using `graph:true`, oc-mirror plugin v2 attempts to reach the `cincinnati` API endpoint. Because this environment is disconnected, be sure to export the environment variable `UPDATE_URL_OVERRIDE` to refer to the URL for the OpenShift Update Service (OSUS):
    ```terminal
    $ export UPDATE_URL_OVERRIDE=https://<osus.enterprise.in>/graph
    ```

    For more information on setting up OSUS on an OpenShift cluster, see "Updating a cluster in a disconnected environment using the OpenShift Update Service".

    :::note

    When updating between {{ product_title }} Extended Update Support (EUS) versions, you must also include images for an intermediate minor version between the current and target versions.
    The oc-mirror plugin v2 might not always detect this requirement automatically, so check the [Red&#160;Hat {{ product_title }} Update Graph page](https://access.redhat.com/labs/ocpupgradegraph/update_path) to confirm any required intermediate versions.

    Use the Update Graph page to find the intermediate minor versions suggested by the application, and include any of these versions in the `ImageSetConfiguration` file when using the oc-mirror plugin v2.
    
    :::

1.  Generate a mirror archive from the enterprise registry for the enclave.

    To prepare an archive for the `enclave1`, the user executes oc-mirror plugin v2 in the enterprise disconnected environment by using the `imageSetConfiguration` specific for that enclave. This ensures that only images needed by that enclave are mirrored:
    ```terminal
    $ oc mirror --v2 -c isc-enclave.yaml
    file:///disk-enc1/
    ```

    This action collects all the {{ product_title }} content into an archive and generates an archive on disk.
1.  After the archive is generated, it will be transferred to the `enclave1` network. The transport mechanism is not the responsibility of oc-mirror plugin v2.
1.  Mirror contents to the enclave registry

    After the transfer of the archive is done, the user can execute oc-mirror plugin v2 again in order to mirror the relevant archive contents to the registry.
    ```terminal
    $ oc mirror --v2 -c isc-enclave.yaml --from file://local-disk docker://registry.enc1.in
    ```

    The administrators of the {{ product_title }} cluster in `enclave1` are now ready to install or upgrade that cluster.