{%- set _mod_docs_content_type = "PROCEDURE" %}
# Initializing the new cluster configuration {id="virt-install-ibm-cloud-initialize-new-cluster_{{ context }}"}

Initialize the new cluster configuration using the {{ VirtProductName }} Assisted Installer service and Samba on the Bastion virtual server instance. {._abstract}

**Procedure**

1.  Log in to the **Assisted Installer** service.
1.  Create a new cluster. The new cluster has the following properties:
    *   **Cluster name**: The name used to identify the cluster under the base domain.
    *   **Base domain**: The domain used to provision the bare-metal nodes.
1.  Click **Next**.
1.  Click **Generate Discovery ISO**.
1.  Provide your public SSH RSA key when prompted. 
1.  Copy and save the generated `wget` command for the ISO file. This will be used later to connect to the cluster nodes.
1.  Install Samba server on the Bastion virtual server instance:
    ```terminal
    $ dnf install samba
    ```
1.  Enable Samba server on the Bastion virtual server instance:
    ```terminal
    $ systemctl enable smb --now
    ```
1.  Configure NAT rules for the Samba server:
    ```terminal
    $ firewall-cmd --permanent --zone=FedoraWorkstation --add-service=samba
    $ firewall-cmd --reload
    ```
1.  Configure a root user password:
    ```terminal
    $ sudo smbpasswd -a root
    ```
1.  Create a share directory:
    ```terminal
    $ mkdir <share_directory>
    ```

    Replace `<share_directory>` with the share directory name.
1.  Navigate to the share directory and download the Assisted Installer ISO file using the generated `wget` command.