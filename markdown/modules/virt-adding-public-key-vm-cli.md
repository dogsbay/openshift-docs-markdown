{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a key when creating a VM by using the CLI {id="virt-adding-public-key-vm-cli_{{ context }}"}

You can add a statically managed public SSH key when you create a virtual machine (VM) by using the command line. The key is added to the VM at first boot. {._abstract}

The key is added to the VM as a cloud-init data source. This method separates the access credentials from the application data in the cloud-init user data. This method does not affect cloud-init user data.

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
                  user: cloud-user
              name: cloudinitdisk
          accessCredentials:
            - sshPublicKey:
                propagationMethod:
                  noCloud: {}
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
    *   `spec.template.spec.volumes.cloudInitNoCloud` specifies the `cloudInitNoCloud` data source.
    *   `spec.template.spec.accessCredentials.sshPublicKey.source.secret.secretName` specifies the `Secret` object name.
    *   `data.key` specifies the public SSH key.
1.  Create the `VirtualMachine` and `Secret` objects by running the following command:
    ```terminal
    $ oc create -f <manifest_file>.yaml
    ```
1.  Start the VM by running the following command:
    ```terminal
    $ virtctl start vm example-vm -n example-namespace
    ```

**Verification**

*   Get the VM configuration:
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
                  noCloud: {}
                source:
                  secret:
                    secretName: authorized-keys
    # ...
    ```