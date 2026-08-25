{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the provisioner node for {{ product_title }} installation {id="preparing-the-provisioner-node-for-openshift-install_{{ context }}"}

Begin to set up your environment for cluster installation by preparing the provisioner node. {._abstract}

**Procedure**

1.  Log in to the provisioner node via `ssh`.
1.  Create a non-root user (`kni`) and provide that user with `sudo` privileges:
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
    # su - kni -c "ssh-keygen -t ed25519 -f /home/kni/.ssh/id_rsa -N ''"
    ```
1.  Log in as the new user on the provisioner node:
    ```terminal
    # su - kni
    ```

{% if not openshift_origin %}
1.  Use Red Hat Subscription Manager to register the provisioner node:
    ```terminal
    $ sudo subscription-manager register --username=<user> --password=<pass> --auto-attach
    ```
    ```terminal
    $ sudo subscription-manager repos --enable=rhel-9-for-<architecture>-appstream-rpms --enable=rhel-9-for-<architecture>-baseos-rpms
    ```

    :::note

    For more information about Red Hat Subscription Manager, see [Registering a {{ op_system_base }} system with command-line tools](https://docs.redhat.com/en/documentation/subscription_central/1-latest/html/getting_started_with_rhel_system_registration/basic-reg-rhel-cli).
    
    :::

{% endif %}
1.  Install the following packages:
    ```terminal
    $ sudo dnf install -y libvirt qemu-kvm mkisofs python3-devel jq ipmitool
    ```
1.  Modify the user to add the `libvirt` group to the newly created user:
    ```terminal
    $ sudo usermod --append --groups libvirt <user>
    ```
1.  Restart `firewalld` and enable the `http` service:
    ```terminal
    $ sudo systemctl start firewalld
    ```
    ```terminal
    $ sudo firewall-cmd --zone=public --add-service=http --permanent
    ```
    ```terminal
    $ sudo firewall-cmd --reload
    ```
1.  Start the modular `libvirt` daemon sockets:
    ```terminal
    $ for drv in qemu interface network nodedev nwfilter secret storage; do sudo systemctl start virt${drv}d{,-ro,-admin}.socket; done
    ```
1.  Create the `default` storage pool and start it:
    ```terminal
    $ sudo virsh pool-define-as --name default --type dir --target /var/lib/libvirt/images
    ```
    ```terminal
    $ sudo virsh pool-start default
    ```
    ```terminal
    $ sudo virsh pool-autostart default
    ```
1.  Create a `pull-secret.txt` file:
    ```terminal
    $ vim pull-secret.txt
    ```

    In a web browser, navigate to [Install OpenShift on Bare Metal with installer-provisioned infrastructure](https://console.redhat.com/openshift/install/metal/installer-provisioned). Click **Copy pull secret**. Paste the contents into the `pull-secret.txt` file and save the contents in the `kni` user’s home directory.