{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the provisioner node on {{ ibm_cloud_bm }} infrastructure {id="preparing-the-provisioner-node-for-openshift-install-on-ibm-cloud_{{ context }}"}

Before you install {{ product_title }} on {{ ibm_cloud_bm }} infrastructure, prepare the provisioner node by creating a non-root user, configuring network bridges, registering the node, installing required packages, and downloading the pull secret. {._abstract}

**Procedure**

1.  Log in to the provisioner node via `ssh`.
1.  Create a non-root user (`kni`) and give that user `sudo` privileges:
    ```terminal
    # useradd kni
    ```
    ```terminal
    # passwd kni
    ```
    ```terminal
    # echo "kni ALL=(root) NOPASSWD:ALL" | tee -a /etc/sudoers.d/kni
    ```
    ```terminal
    # chmod 0440 /etc/sudoers.d/kni
    ```
1.  Create an `ssh` key for the new user:
    ```terminal
    # su - kni -c "ssh-keygen -f /home/kni/.ssh/id_rsa -N ''"
    ```
1.  Log in as the new user on the provisioner node:
    ```terminal
    # su - kni
    ```
1.  Use Red Hat Subscription Manager to register the provisioner node:
    ```terminal
    $ sudo subscription-manager register --username=<user> --password=<pass> --auto-attach
    ```
    ```terminal
    $ sudo subscription-manager repos --enable=rhel-8-for-x86_64-appstream-rpms \
                                      --enable=rhel-8-for-x86_64-baseos-rpms
    ```

    :::note

    For more information about Red Hat Subscription Manager, see [Registering a {{ op_system_base }} system with command-line tools](https://docs.redhat.com/en/documentation/subscription_central/1-latest/html/getting_started_with_rhel_system_registration/basic-reg-rhel-cli).
    
    :::

1.  Install the following packages:
    ```terminal
    $ sudo dnf install -y libvirt qemu-kvm mkisofs python3-devel jq ipmitool
    ```
1.  Change the user to add the `libvirt` group to the newly created user:
    ```terminal
    $ sudo usermod --append --groups libvirt kni
    ```
1.  Start `firewalld`:
    ```terminal
    $ sudo systemctl start firewalld
    ```
1.  Enable `firewalld`:
    ```terminal
    $ sudo systemctl enable firewalld
    ```
1.  Start the `http` service:
    ```terminal
    $ sudo firewall-cmd --zone=public --add-service=http --permanent
    ```
    ```terminal
    $ sudo firewall-cmd --reload
    ```
1.  Start and enable the `libvirtd` service:
    ```terminal
    $ sudo systemctl enable libvirtd --now
    ```
1.  Set the ID of the provisioner node:
    ```terminal
    $ PRVN_HOST_ID=<ID>
    ```

    You can view the ID with the following `ibmcloud` command:
    ```terminal
    $ ibmcloud sl hardware list
    ```
1.  Set the ID of the public subnet:
    ```terminal
    $ PUBLICSUBNETID=<ID>
    ```

    You can view the ID with the following `ibmcloud` command:
    ```terminal
    $ ibmcloud sl subnet list
    ```
1.  Set the ID of the private subnet:
    ```terminal
    $ PRIVSUBNETID=<ID>
    ```

    You can view the ID with the following `ibmcloud` command:
    ```terminal
    $ ibmcloud sl subnet list
    ```
1.  Set the provisioner node public IP address:
    ```terminal
    $ PRVN_PUB_IP=$(ibmcloud sl hardware detail $PRVN_HOST_ID --output JSON | jq .primaryIpAddress -r)
    ```
1.  Set the CIDR for the public network:
    ```terminal
    $ PUBLICCIDR=$(ibmcloud sl subnet detail $PUBLICSUBNETID --output JSON | jq .cidr)
    ```
1.  Set the IP address and CIDR for the public network:
    ```terminal
    $ PUB_IP_CIDR=$PRVN_PUB_IP/$PUBLICCIDR
    ```
1.  Set the gateway for the public network:
    ```terminal
    $ PUB_GATEWAY=$(ibmcloud sl subnet detail $PUBLICSUBNETID --output JSON | jq .gateway -r)
    ```
1.  Set the private IP address of the provisioner node:
    ```terminal
    $ PRVN_PRIV_IP=$(ibmcloud sl hardware detail $PRVN_HOST_ID --output JSON | \
                     jq .primaryBackendIpAddress -r)
    ```
1.  Set the CIDR for the private network:
    ```terminal
    $ PRIVCIDR=$(ibmcloud sl subnet detail $PRIVSUBNETID --output JSON | jq .cidr)
    ```
1.  Set the IP address and CIDR for the private network:
    ```terminal
    $ PRIV_IP_CIDR=$PRVN_PRIV_IP/$PRIVCIDR
    ```
1.  Set the gateway for the private network:
    ```terminal
    $ PRIV_GATEWAY=$(ibmcloud sl subnet detail $PRIVSUBNETID --output JSON | jq .gateway -r)
    ```
1.  Set up the bridges for the `baremetal` and `provisioning` networks:
    ```terminal
    $ sudo nohup bash -c "
        nmcli --get-values UUID con show | xargs -n 1 nmcli con delete
        nmcli connection add ifname provisioning type bridge con-name provisioning
        nmcli con add type bridge-slave ifname eth1 master provisioning
        nmcli connection add ifname baremetal type bridge con-name baremetal
        nmcli con add type bridge-slave ifname eth2 master baremetal
        nmcli connection modify baremetal ipv4.addresses $PUB_IP_CIDR ipv4.method manual ipv4.gateway $PUB_GATEWAY
        nmcli connection modify provisioning ipv4.addresses 172.22.0.1/24,$PRIV_IP_CIDR ipv4.method manual
        nmcli connection modify provisioning +ipv4.routes \"10.0.0.0/8 $PRIV_GATEWAY\"
        nmcli con down baremetal
        nmcli con up baremetal
        nmcli con down provisioning
        nmcli con up provisioning
        init 6
    "
    ```

    :::note

    For `eth1` and `eth2`, substitute the appropriate interface name, as needed.
    
    :::

1.  If required, SSH back into the `provisioner` node:
    ```terminal
    # ssh kni@provisioner.<cluster_name>.<domain>
    ```
1.  Verify the connection bridges have been properly created:
    ```terminal
    $ sudo nmcli con show
    ```
    ```terminal title="Example output"
    NAME               UUID                                  TYPE      DEVICE
    baremetal          4d5133a5-8351-4bb9-bfd4-3af264801530  bridge    baremetal
    provisioning       43942805-017f-4d7d-a2c2-7cb3324482ed  bridge    provisioning
    virbr0             d9bca40f-eee1-410b-8879-a2d4bb0465e7  bridge    virbr0
    bridge-slave-eth1  76a8ed50-c7e5-4999-b4f6-6d9014dd0812  ethernet  eth1
    bridge-slave-eth2  f31c3353-54b7-48de-893a-02d2b34c4736  ethernet  eth2
    ```
1.  Create a `pull-secret.txt` file:
    ```terminal
    $ vim pull-secret.txt
    ```

    Go to [Install on Bare Metal with user-provisioned infrastructure](https://console.redhat.com/openshift/install/metal/user-provisioned). In step 1, click **Download pull secret**. Paste the contents into the `pull-secret.txt` file and save the contents in the `kni` user’s home directory.