{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring host network interfaces {id="configuring-host-network-interfaces-in-the-install-config-yaml-file_{{ context }}"}

Before installation, you can set the `networkConfig` configuration setting in the `install-config.yaml` file to use NMState to configure host network interfaces. {._abstract}

The most common use case for this functionality is to specify a static IP address on the bare-metal network, but you can also configure other networks such as a storage network. This functionality supports other NMState features such as VLAN, VXLAN, bridges, bonds, routes, MTU, and DNS resolver settings.


:::warning

Do not set the unsupported `rotate` option in the DNS resolver settings for your cluster. The option disrupts the DNS resolution function of the internal API.

:::


**Prerequisites**

*   Configure a `PTR` DNS record with a valid hostname for each node with a static IP address.
*   Install the NMState CLI (`nmstate`).


:::important

If you use a provisioning network, configure it by using the `dnsmasq` tool in Ironic. To do a fully static deployment, you must use virtual media.

:::


**Procedure**

1.  Optional: Consider testing the NMState syntax with `nmstatectl gc` before including the syntax in the `install-config.yaml` file, because the installation program does not check the NMState YAML syntax.

    :::note

    Errors in the YAML syntax might result in a failure to apply the network configuration. Additionally, maintaining the validated YAML syntax is useful when applying changes by using Kubernetes NMState after deployment or when expanding the cluster.
    
    :::

    1.  Create an NMState YAML file:
        ```yaml
        interfaces:
        - name: <nic1_name>
          type: ethernet
          state: up
          ipv4:
            address:
            - ip: <ip_address>
              prefix-length: 24
            enabled: true
        dns-resolver:
          config:
            server:
            - <dns_ip_address>
        routes:
          config:
          - destination: 0.0.0.0/0
            next-hop-address: <next_hop_ip_address>
            next-hop-interface: <next_hop_nic1_name>
        ```

        Replace `<nic1_name>`, `<ip_address>`, `<dns_ip_address>`, `<next_hop_ip_address>` and `<next_hop_nic1_name>` with appropriate values.
    1.  Test the configuration file by running the following command:
        ```terminal
        $ nmstatectl gc <nmstate_yaml_file>
        ```

        Replace `<nmstate_yaml_file>` with the configuration file name.
1.  Use the `networkConfig` configuration setting by adding the NMState configuration to hosts within the `install-config.yaml` file:
    ```yaml
        hosts:
          - name: openshift-master-0
            role: master
            bmc:
              address: redfish+http://<out_of_band_ip>/redfish/v1/Systems/
              username: <user>
              password: <password>
              disableCertificateVerification: null
            bootMACAddress: <NIC1_mac_address>
            bootMode: UEFI
            rootDeviceHints:
              deviceName: "/dev/sda"
            networkConfig:
              interfaces:
              - name: <nic1_name>
                type: ethernet
                state: up
                ipv4:
                  address:
                  - ip: <ip_address>
                    prefix-length: 24
                  enabled: true
              dns-resolver:
                config:
                  server:
                  - <dns_ip_address>
              routes:
                config:
                - destination: 0.0.0.0/0
                  next-hop-address: <next_hop_ip_address>
                  next-hop-interface: <next_hop_nic1_name>
    ```

    For `hosts.networkconfig.interfaces`, add the NMState YAML syntax to configure the host interfaces.

    Replace `<nic1_name>`, `<ip_address>`, `<dns_ip_address>`, `<next_hop_ip_address>` and `<next_hop_nic1_name>` with appropriate values.

    :::important

    After deploying the cluster, you cannot modify the `networkConfig` configuration setting of `install-config.yaml` file to make changes to the host network interface. Use the Kubernetes NMState Operator to make changes to the host network interface after deployment.
    
    :::