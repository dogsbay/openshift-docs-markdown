{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting SELinux boolean for the TAP CNI plugin {id="nw-multus-tap-setting-boolean.adoc_{{ context }}"}

To create the tap device with the `container_t` SELinux context, enable the `container_use_devices` boolean on the host by using the Machine Config Operator (MCO). {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a new YAML file with the following details:
    ```yaml title="Example setsebool-container-use-devices.yaml"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      labels:
        machineconfiguration.openshift.io/role: worker
      name: 99-worker-setsebool
    spec:
      config:
        ignition:
          version: 3.2.0
        systemd:
          units:
          - enabled: true
            name: setsebool.service
            contents: |
              [Unit]
              Description=Set SELinux boolean for the TAP CNI plugin
              Before=kubelet.service

              [Service]
              Type=oneshot
              ExecStart=/usr/sbin/setsebool container_use_devices=on
              RemainAfterExit=true

              [Install]
              WantedBy=multi-user.target graphical.target
    ```
1.  Create the new `MachineConfig` object by running the following command:
    ```terminal
    $ oc apply -f setsebool-container-use-devices.yaml
    ```

    :::note

    Applying any changes to the `MachineConfig` object causes all affected nodes to gracefully reboot after the change is applied. The MCO might take some time to apply the update.
    
    :::


**Verification**

*   Verify that the change is applied by running the following command:
    ```terminal
    $ oc get machineconfigpools
    ```
    ```terminal
    NAME        CONFIG                                                UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
    master      rendered-master-e5e0c8e8be9194e7c5a882e047379cfa      True      False      False      3              3                   3                     0                      7d2h
    worker      rendered-worker-d6c9ca107fba6cd76cdcbfcedcafa0f2      True      False      False      3              3                   3                     0                      7d
    ```

    :::note

    All nodes should be in the `Updated` and `Ready` state.
    
    :::