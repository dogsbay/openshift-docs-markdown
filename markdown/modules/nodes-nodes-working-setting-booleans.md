{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting SELinux booleans {id="nodes-nodes-working-setting-booleans_{{ context }}"}

{{ product_title }} allows you to enable and disable an SELinux boolean on a {{ op_system_first }} node. The following procedure explains how to modify SELinux booleans on nodes using the Machine Config Operator (MCO). This procedure uses `container_manage_cgroup` as the example boolean. You can modify this value to whichever boolean you need. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a new YAML file with a `MachineConfig` object, displayed in the following example:
    ```yaml
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
          - contents: |
              [Unit]
              Description=Set SELinux booleans
              Before=kubelet.service

              [Service]
              Type=oneshot
              ExecStart=/sbin/setsebool container_manage_cgroup=on
              RemainAfterExit=true

              [Install]
              WantedBy=multi-user.target graphical.target
            enabled: true
            name: setsebool.service
    #...
    ```
1.  Create the new `MachineConfig` object by running the following command:
    ```terminal
    $ oc create -f 99-worker-setsebool.yaml
    ```

    :::note

    Applying any changes to the `MachineConfig` object causes all affected nodes to gracefully reboot after the change is applied.
    
    :::