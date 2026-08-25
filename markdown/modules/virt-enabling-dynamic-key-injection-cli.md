{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling dynamic key injection by using the CLI {id="virt-enabling-dynamic-key-injection-cli_{{ context }}"}

You can enable dynamic key injection for a virtual machine (VM) by using the command line. Then, you can update the public SSH key at runtime. {._abstract}


:::note

Only {{ op_system_base_full }} 9 supports dynamic key injection.

:::


The key is added to the VM by the QEMU guest agent, which is installed automatically with {{ op_system_base }} 9.

**Prerequisites**

*   You generated an SSH key pair by running the `ssh-keygen` command.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a manifest file for a `VirtualMachine` object and a `Secret` object.

    Example manifest:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
      namespace: example-namespace
    spec:
      dataVolumeTemplates:
        - metadata:
            name: example-vm-volume
          spec:
            sourceRef:
              kind: DataSource
              name: rhel9
              namespace: openshift-virtualization-os-images
            storage:
              resources: {}
      instancetype:
        name: u1.medium
      preference:
        name: rhel.9
      runStrategy: Always
      template:
        spec:
          domain:
            devices: {}
          volumes:
            - dataVolume:
                name: example-vm-volume
              name: rootdisk
            - cloudInitNoCloud:
                userData: |-
                  #cloud-config
                  runcmd:
                  - [ setsebool, -P, virt_qemu_ga_manage_ssh, on ]
              name: cloudinitdisk
          accessCredentials:
            - sshPublicKey:
                propagationMethod:
                  qemuGuestAgent:
                    users: ["cloud-user"]
                source:
                  secret:
                    secretName: authorized-keys
    ---
    apiVersion: v1
    kind: Secret
    metadata:
      name: authorized-keys
    data:
      key: c3NoLXJzYSB...
    ```
    *   `spec.template.spec.volumes.cloudInitNoCloud` defines the data source, for example `userData`.
    *   `spec.template.spec.accessCredentials.sshPublicKey.source.secret.secretName` defines the `secret` object name.
    *   `data.key` within the `secret` object defines the full public SSH key.
1.  Create the `VirtualMachine` and `Secret` objects by running the following command:
    ```terminal
    $ oc create -f <manifest_file>.yaml
    ```
1.  Start the VM by running the following command:
    ```terminal
    $ virtctl start vm example-vm -n example-namespace
    ```

**Verification**

*   Get the VM configuration by running the following command:
    ```terminal
    $ oc describe vm example-vm -n example-namespace
    ```

    Example output:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
      namespace: example-namespace
    spec:
      template:
        spec:
          accessCredentials:
            - sshPublicKey:
                propagationMethod:
                  qemuGuestAgent:
                    users: ["cloud-user"]
                source:
                  secret:
                    secretName: authorized-keys
    # ...
    ```