{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring NTP for disconnected clusters {id="configuring-ntp-for-disconnected-clusters_{{ context }}"}

You can configure NTP servers on control plane nodes and set compute nodes as NTP clients to ensure time synchronization in disconnected clusters that lack access to external NTP servers. {._abstract}

{{ product_title }} installs the `chrony` Network Time Protocol (NTP) service on the cluster nodes.
{%- if context == "ipi-install-configuration-files" %}
Use the following procedure to configure NTP servers on the control plane nodes and configure compute nodes as NTP clients of the control plane nodes before deployment.
{%- endif %}
{%- if context == "bare-metal-postinstallation-configuration" %}
Use the following procedure to configure NTP servers on the control plane nodes and configure compute nodes as NTP clients of the control plane nodes after a successful deployment.
{%- endif %}

**Figure 1. Configuring NTP for disconnected clusters**

![Configuring NTP for disconnected clusters](/images/152_OpenShift_Config_NTP_0421.png)

{{ product_title }} nodes must agree on a date and time to run properly. When compute nodes retrieve the date and time from the NTP servers on the control plane nodes, it enables the installation and operation of clusters that are not connected to a routable network and thereby do not have access to a higher stratum NTP server.

**Procedure**

1.  Install Butane on your installation host by using the following command:
    ```terminal
    $ sudo dnf -y install butane
    ```
1.  Create a Butane config, `99-master-chrony-conf-override.bu`, including the contents of the `chrony.conf` file for the control plane nodes.

    :::note

    See "Creating machine configs with Butane" for information about Butane.
    
    :::

    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 99-master-chrony-conf-override
      labels:
        machineconfiguration.openshift.io/role: master
    storage:
      files:
        - path: /etc/chrony.conf
          mode: 0644
          overwrite: true
          contents:
            inline: |
              # Use public servers from the pool.ntp.org project.
              # Please consider joining the pool (https://www.pool.ntp.org/join.html).

              # The Machine Config Operator manages this file
              server openshift-master-0.<cluster-name>.<domain> iburst
              server openshift-master-1.<cluster-name>.<domain> iburst
              server openshift-master-2.<cluster-name>.<domain> iburst

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

              # Configure the control plane nodes to serve as local NTP servers
              # for all compute nodes, even if they are not in sync with an
              # upstream NTP server.

              # Allow NTP client access from the local network.
              allow all
              # Serve time even if not synchronized to a time source.
              local stratum 3 orphan
    ```

    where:

    `<cluster-name>`
    :   Specifies the name of the cluster.

    `<domain>`
    :   Specifies the fully qualified domain name.

1.  Use Butane to generate a `MachineConfig` object file, `99-master-chrony-conf-override.yaml`, containing the configuration to be delivered to the control plane nodes:
    ```terminal
    $ butane 99-master-chrony-conf-override.bu -o 99-master-chrony-conf-override.yaml
    ```
1.  Create a Butane config, `99-worker-chrony-conf-override.bu`, including the contents of the `chrony.conf` file for the compute nodes that references the NTP servers on the control plane nodes.
    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 99-worker-chrony-conf-override
      labels:
        machineconfiguration.openshift.io/role: worker
    storage:
      files:
        - path: /etc/chrony.conf
          mode: 0644
          overwrite: true
          contents:
            inline: |
              # The Machine Config Operator manages this file.
              server openshift-master-0.<cluster-name>.<domain> iburst
              server openshift-master-1.<cluster-name>.<domain> iburst
              server openshift-master-2.<cluster-name>.<domain> iburst

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

    where:

    `<cluster-name>`
    :   Specifies the name of the cluster.

    `<domain>`
    :   Specifies the fully qualified domain name.

1.  Use Butane to generate a `MachineConfig` object file, `99-worker-chrony-conf-override.yaml`, containing the configuration to be delivered to the worker nodes:
    ```terminal
    $ butane 99-worker-chrony-conf-override.bu -o 99-worker-chrony-conf-override.yaml
    ```

{% if context == "ipi-install-configuration-files" %}
1.  Copy the `99-master-chrony-conf-override.yaml` file to the `~/clusterconfigs/manifests` directory.
    ```
    $ cp 99-master-chrony-conf-override.yaml ~/clusterconfigs/manifests
    ```
1.  Copy the `99-worker-chrony-conf-override.yaml` file to the `~/clusterconfigs/manifests` directory.
    ```
    $ cp 99-worker-chrony-conf-override.yaml ~/clusterconfigs/manifests
    ```
{% endif %}

{% if context == "bare-metal-postinstallation-configuration" %}
1.  Apply the `99-master-chrony-conf-override.yaml` policy to the control plane nodes.
    ```terminal
    $ oc apply -f 99-master-chrony-conf-override.yaml
    ```
    ```terminal title="Example output"
    machineconfig.machineconfiguration.openshift.io/99-master-chrony-conf-override created
    ```
1.  Apply the `99-worker-chrony-conf-override.yaml` policy to the compute nodes.
    ```terminal
    $ oc apply -f 99-worker-chrony-conf-override.yaml
    ```
    ```terminal title="Example output"
    machineconfig.machineconfiguration.openshift.io/99-worker-chrony-conf-override created
    ```
1.  Check the status of the applied NTP settings.
    ```terminal
    $ oc describe machineconfigpool
    ```
{% endif %}