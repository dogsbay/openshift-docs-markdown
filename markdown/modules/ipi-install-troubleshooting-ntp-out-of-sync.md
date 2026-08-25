{%- set _mod_docs_content_type = "PROCEDURE" %}

# Addressing the NTP out of sync error {id="ipi-install-troubleshooting-ntp-out-of-sync_{{ context }}"}

The deployment of {{ product_title }} clusters depends on NTP synchronized clocks among the cluster nodes. Without synchronized clocks, the deployment may fail due to clock drift if the time difference is greater than two seconds. {._abstract}

**Procedure**

1.  Check for differences in the `AGE` of the cluster nodes by running the following command:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                         STATUS   ROLES    AGE   VERSION
    master-0.cloud.example.com   Ready    master   145m   v1.35.4
    master-1.cloud.example.com   Ready    master   135m   v1.35.4
    master-2.cloud.example.com   Ready    master   145m   v1.35.4
    worker-2.cloud.example.com   Ready    worker   100m   v1.35.4
    ```
1.  Check for inconsistent timing delays due to clock drift by running the following command:
    ```terminal
    $ oc get bmh -n openshift-machine-api
    ```
    ```terminal title="Example output showing registration error due to clock drift"
    master-1   error registering master-1  ipmi://<out_of_band_ip>
    ```
1.  Check `System clock synchronized` on a node by running the following command:
    ```terminal
    $ sudo timedatectl
    ```
    ```terminal title="Example output"
                   Local time: Tue 2020-03-10 18:20:02 UTC
               Universal time: Tue 2020-03-10 18:20:02 UTC
                     RTC time: Tue 2020-03-10 18:36:53
                    Time zone: UTC (UTC, +0000)
    System clock synchronized: no
                  NTP service: active
              RTC in local TZ: no
    ```

    Ensure that the `System clock synchronized` value is ***yes*** before proceeding with the installation. 
1.  Resolve clock drift based on your deployment stage:
    *   ***Addressing clock synchronization for clock drift in an existing cluster:***
        1.  Create a Butane config file including the contents of the `chrony.conf` file to be delivered to the nodes. In the following example, create `99-master-chrony.bu` to add the file to the control plane nodes. You can modify the file for compute nodes or repeat this procedure for the compute role.

            :::note

            See "Creating machine configs with Butane" for information about Butane.
            
            :::

            ```yaml
            variant: openshift
            version: {{ product_version }}.0
            metadata:
              name: 99-master-chrony
              labels:
                machineconfiguration.openshift.io/role: master
            storage:
              files:
              - path: /etc/chrony.conf
                mode: 0644
                overwrite: true
                contents:
                  inline: |
                    server <NTP_server> iburst
                    stratumweight 0
                    driftfile /var/lib/chrony/drift
                    rtcsync
                    makestep 10 3
                    bindcmdaddress 127.0.0.1
                    bindcmdaddress ::1
                    keyfile /etc/chrony.keys
                    commandkey 1
                    generatecommandkey
                    noclientlog
                    logchange 0.5
                    logdir /var/log/chrony
            ```

            Replace `<NTP_server>` with the IP address of the NTP server.
        1.  Use Butane to generate a `MachineConfig` object file, `99-master-chrony.yaml`, containing the configuration to be delivered to the nodes by running the following command:
            ```terminal
            $ butane 99-master-chrony.bu -o 99-master-chrony.yaml
            ```
        1.  Apply the `MachineConfig` object file by running the following command:
            ```terminal
            $ oc apply -f 99-master-chrony.yaml
            ```
        1.  Ensure the `System clock synchronized` value is ***yes*** by running the following command:
            ```terminal
            $ sudo timedatectl
            ```
            ```terminal title="Example output"
                           Local time: Tue 2020-03-10 19:10:02 UTC
                       Universal time: Tue 2020-03-10 19:10:02 UTC
                             RTC time: Tue 2020-03-10 19:36:53
                            Time zone: UTC (UTC, +0000)
            System clock synchronized: yes
                          NTP service: active
                      RTC in local TZ: no
            ```
    *   ***Addressing clock synchronization for clock drift before deployment:***
        1.  Generate the manifest files and add this file to the `openshift` directory.

            For example:
            ```terminal
            $ cp chrony-masters.yaml ~/clusterconfigs/openshift/99_masters-chrony-configuration.yaml
            ```
        1.  Continue to create the cluster.