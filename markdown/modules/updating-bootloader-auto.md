{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the boot loader automatically by using a machine config {id="updating-bootloader-auto_{{ context }}"}

You can automatically update the boot loader with `bootupd` by creating a systemd service unit that will update the boot loader as needed on every boot.
This unit will run the `bootupctl update` command during the boot process and will be installed on the nodes via a machine config. {._abstract}


:::note

This configuration is not enabled by default because unexpected interruptions of the update operation might lead to unbootable nodes.
If you enable this configuration, make sure to avoid interrupting nodes during the boot process while the boot loader update is in progress.
The boot loader update operation generally completes quickly thus the risk is low.

:::


**Procedure**

1.  Create a Butane config file, `99-worker-bootupctl-update.bu`, including the contents of the `bootupctl-update.service` systemd unit.

    :::note

    {% include "./snippets/butane-version.md" %}

    
    :::

    ```yaml title="Example output" {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 99-worker-chrony
      labels:
        machineconfiguration.openshift.io/role: worker
    systemd:
      units:
      - name: bootupctl-update.service
        enabled: true
        contents: |
          [Unit]
          Description=Bootupd automatic update

          [Service]
          ExecStart=/usr/bin/bootupctl update
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    ```

    On control plane nodes, substitute `master` for `worker` in `metadata.name` and `metadata.labels.machineconfiguration.openshift.io/role`.
1.  Generate a `MachineConfig` object file, `99-worker-bootupctl-update.yaml`, containing the configuration to be delivered to the nodes by running the following command:
    ```terminal
    $ butane 99-worker-bootupctl-update.bu -o 99-worker-bootupctl-update.yaml
    ```
1.  Apply the configurations in one of two ways:
    *   If the cluster is not running yet, after you generate manifest files, add the `MachineConfig` object file to the `<installation_directory>/openshift` directory, and then continue to create the cluster.
    *   If the cluster is already running, apply the file by running the following command:
        ```terminal
        $ oc apply -f ./99-worker-bootupctl-update.yaml
        ```