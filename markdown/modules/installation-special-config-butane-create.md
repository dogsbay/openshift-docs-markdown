{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a MachineConfig object by using Butane {id="installation-special-config-butane-create_{{ context }}"}

You can use Butane to produce a `MachineConfig` object so that you can configure compute or control plane nodes at installation time or through the Machine Config Operator. {._abstract}

**Prerequisites**

*   You have installed the `butane` utility.

**Procedure**

1.  Create a Butane config file. The following example creates a file named `99-worker-custom.bu` that configures kernel debug messages and specifies custom settings for the chrony time service:
    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 99-worker-custom
      labels:
        machineconfiguration.openshift.io/role: worker
    openshift:
      kernel_arguments:
        - loglevel=7
    storage:
      files:
        - path: /etc/chrony.conf
          mode: 0644
          overwrite: true
          contents:
            inline: |
              pool 0.rhel.pool.ntp.org iburst
              driftfile /var/lib/chrony/drift
              makestep 1.0 3
              rtcsync
              logdir /var/log/chrony
    ```

    :::note

    The `99-worker-custom.bu` file is set to create a machine config for compute nodes. To deploy on control plane nodes, change the role from `worker` to `master`. To configure both node types, repeat the procedure and specify different file names and roles for each node type.
    
    :::

1.  Create a `MachineConfig` object by giving Butane the file that you created in the previous step:
    ```terminal
    $ butane 99-worker-custom.bu -o ./99-worker-custom.yaml
    ```

    A `MachineConfig` object YAML file is created for you to finish configuring your machines.
1.  Save the Butane config in case you need to update the `MachineConfig` object in the future.
1.  Choose one of the following options:
    *   If the cluster is not running yet, generate manifest files and add the `MachineConfig` object YAML file to the `openshift` directory. 
    *   If the cluster is already running, apply the file as follows:
        ```terminal
        $ oc create -f 99-worker-custom.yaml
        ```