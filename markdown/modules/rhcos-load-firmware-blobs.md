{%- set _mod_docs_content_type = "PROCEDURE" %}
# Loading custom firmware blobs in the machine config manifest {id="rhcos-load-firmware-blobs_{{ context }}"}

You can load local firmware blobs that are not managed by {{ op_system }} into the machine config manifest by updating the search path with a machine config. {._abstract}

By default, the location for firmware blobs in `/usr/lib` is read-only.

**Procedure**

1.  Create a Butane config file, `98-worker-firmware-blob.bu`, that updates the search path so that it is root-owned and writable to local storage. The following example places the custom blob file from your local workstation onto nodes under `/var/lib/firmware`.

    :::note

{% include "./snippets/butane-version.md" %}
    
    :::

    ```yaml title="Butane config file for custom firmware blob"
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      labels:
        machineconfiguration.openshift.io/role: worker
      name: 98-worker-firmware-blob
    storage:
      files:
      - path: /var/lib/firmware/<package_name>
        contents:
          local: <package_name>
        mode: 0644
    openshift:
      kernel_arguments:
        - 'firmware_class.path=/var/lib/firmware'
    ```

    where:

    `storage.files.path`
    :   Specifies the path on the node where the firmware package is copied to.

    `storage.files.contents.local`
    :   Specifies a file with contents that are read from a local file directory on the system running Butane. The path of the local file is relative to a `files-dir` directory, which must be specified by using the `--files-dir` option with Butane in a subsequent step.

    `storage.files.mode`
    :   Specifies the permissions for the file on the {{ op_system }} node. Red&#160;Hat recommends setting `0644` permissions.

    `openshift.kernel_arguments`
    :   Specifies the kernel search path of where to look for the custom firmware blob that was copied from your local workstation onto the root file system of the node. This example uses `/var/lib/firmware` as the customized path.

1.  Run Butane to generate a `MachineConfig` object file that uses a copy of the firmware blob on your local workstation named `98-worker-firmware-blob.yaml`. The firmware blob contains the configuration to be delivered to the nodes. The following example uses the `--files-dir` option to specify the directory on your workstation where the local file or files are located:
    ```terminal
    $ butane 98-worker-firmware-blob.bu -o 98-worker-firmware-blob.yaml --files-dir <directory_including_package_name>
    ```
1.  Apply the configurations to the nodes in one of two ways:
    *   If the cluster is not running yet, after you generate manifest files, add the `MachineConfig` object file to the `<installation_directory>/openshift` directory, and then continue to create the cluster.
    *   If the cluster is already running, apply the file:
        ```terminal
        $ oc apply -f 98-worker-firmware-blob.yaml
        ```

        A `MachineConfig` object YAML file is created for you to finish configuring your machines.
1.  Save the Butane config in case you need to update the `MachineConfig` object in the future.