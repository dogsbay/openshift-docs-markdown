{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the install-config.yaml file {id="configuring-the-install-config-file_{{ context }}"}

To configure {{ product_title }} for {{ ibm_cloud_bm }} infrastructure, you can edit the `install-config.yaml` file to set the required IPMI privilege level and hardware parameters for your bare-metal nodes. {._abstract}

The `install-config.yaml` file requires some additional details. Most of the information is teaching the installation program and the resulting cluster enough about the available {{ ibm_cloud_bm }} hardware so that it is able to fully manage it. The material difference between installing on bare metal and installing on {{ ibm_cloud_bm }} is that you must explicitly set the privilege level for IPMI in the BMC section of the `install-config.yaml` file.

**Procedure**

1.  Configure `install-config.yaml`. Change the appropriate variables to match the environment, including `pullSecret` and `sshKey`.
    ```yaml
    apiVersion: v1
    baseDomain: <domain>
    metadata:
      name: <cluster_name>
    networking:
      machineNetwork:
      - cidr: <public-cidr>
      networkType: OVNKubernetes
    compute:
    - name: worker
      replicas: 2
    controlPlane:
      name: master
      replicas: 3
      platform:
        baremetal: {}
    platform:
      baremetal:
        apiVIP: <api_ip>
        ingressVIP: <wildcard_ip>
        provisioningNetworkInterface: <NIC1>
        provisioningNetworkCIDR: <CIDR>
        hosts:
          - name: openshift-master-0
            role: master
            bmc:
              address: ipmi://10.196.130.145?privilegelevel=OPERATOR
              username: root
              password: <password>
            bootMACAddress: 00:e0:ed:6a:ca:b4
            rootDeviceHints:
              deviceName: "/dev/sda"
          - name: openshift-worker-0
            role: worker
            bmc:
              address: ipmi://<out-of-band-ip>?privilegelevel=OPERATOR
              username: <user>
              password: <password>
            bootMACAddress: <NIC1_mac_address>
            rootDeviceHints:
              deviceName: "/dev/sda"
    pullSecret: '<pull_secret>'
    sshKey: '<ssh_pub_key>'
    ```

    where:

    `bmc.address`
    :   Specifies the IPMI address with `privilegelevel=OPERATOR`. {{ ibm_cloud_bm }} infrastructure requires this privilege level.


`bootMACAddress`
:   Specifies the MAC address of the private `provisioning` network NIC for the corresponding node.

    :::note

    You can use the `ibmcloud` command-line utility to retrieve the password.

    ```terminal
    $ ibmcloud sl hardware detail <id> --output JSON | \
      jq '"(.networkManagementIpAddress) (.remoteManagementAccounts[0].password)"'
    ```

    Replace `<id>` with the ID of the node.
    
    :::


1.  Create a directory to store the cluster configuration:
    ```terminal
    $ mkdir ~/clusterconfigs
    ```
1.  Copy the `install-config.yaml` file into the directory:
    ```terminal
    $ cp install-config.yaml ~/clusterconfigs
    ```
1.  Power off all bare-metal nodes before installing the {{ product_title }} cluster:
    ```terminal
    $ ipmitool -I lanplus -U <user> -P <password> -H <management_server_ip> power off
    ```
1.  Remove old bootstrap resources if any remain from an earlier deployment try:
    ```bash
    for i in $(sudo virsh list | tail -n +3 | grep bootstrap | awk {'print $2'});
    do
      sudo virsh destroy $i;
      sudo virsh undefine $i;
      sudo virsh vol-delete $i --pool $i;
      sudo virsh vol-delete $i.ign --pool $i;
      sudo virsh pool-destroy $i;
      sudo virsh pool-undefine $i;
    done
    ```