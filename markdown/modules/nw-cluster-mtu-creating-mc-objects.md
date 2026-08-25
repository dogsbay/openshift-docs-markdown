{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating MachineConfig objects {id="nw-cluster-mtu-creating-mc-objects_{{ context }}"}

To prepare your nodes for a hardware MTU change, you must create `MachineConfig` objects for both control plane and compute nodes. Creating these objects ensures that the updated network interface settings are ready for deployment without causing immediate cluster instability. {._abstract}

**Procedure**

1.  Create two `MachineConfig` objects, one for the control plane nodes and another for the worker nodes in your cluster:
    1.  Create the following Butane config in the `control-plane-interface.bu` file:

        :::note

{% include "./snippets/butane-version.md" %}
        
        :::

        ```yaml
        variant: openshift
        version: {{ product_version }}.0
        metadata:
          name: 01-control-plane-interface
          labels:
            machineconfiguration.openshift.io/role: master
        storage:
          files:
            - path: /etc/NetworkManager/conf.d/99-<interface>-mtu.conf
              contents:
                local: <interface>-mtu.conf
              mode: 0600
        ```

        where:

        `storage.files.path`
        :   Specifies the `NetworkManager` connection name for the primary network interface.

        `storage.files.local`
        :   Specifies the local filename for the updated `NetworkManager` configuration file from an earlier step.
    1.  Create the following Butane config in the `worker-interface.bu` file:

        :::note

{% include "./snippets/butane-version.md" %}
        
        :::

        ```yaml
        variant: openshift
        version: {{ product_version }}.0
        metadata:
          name: 01-worker-interface
          labels:
            machineconfiguration.openshift.io/role: worker
        storage:
          files:
            - path: /etc/NetworkManager/conf.d/99-<interface>-mtu.conf
              contents:
                local: <interface>-mtu.conf
              mode: 0600
        ```

        where:

        `storage.files.path`
        :   Specifies the `NetworkManager` connection name for the primary network interface.

        `storage.files.local`
        :   Specifies the local filename for the updated `NetworkManager` configuration file from an earlier step.
1.  Create `MachineConfig` objects from the Butane configs by running the following command:
    ```terminal
    $ for manifest in control-plane-interface worker-interface; do
        butane --files-dir . $manifest.bu > $manifest.yaml
      done
    ```

    :::warning

    Do not apply these machine configs until explicitly instructed later in this procedure. Applying these machine configs now causes a loss of stability for the cluster.
    
    :::