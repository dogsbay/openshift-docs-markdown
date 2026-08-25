{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring cluster networking and access {id="virt-install-ibm-cloud-cluster-network-access_{{ context }}"}

Configure networking and access to allow for remote management of the cluster. {._abstract}

**Procedure**

1.  Edit `/etc/samba/smb.conf` to use the following configuration:
    ```text
    [global]
          log level = 3
              workgroup = SAMBA
              security = user

              passdb backend = tdbsam

              printing = cups
              printcap name = cups
              load printers = yes
              cups options = raw

          server min protocol = NT1
          ntlm auth = yes

    [share]
          comment = ISO Files
          path = /root/share
          browseable = yes
          public = no
          read only = no
          directory mode = 0555
          valid users = root
    ```

    :::note

    For a more detailed example of the `smb.conf` file, see the `smb.conf.example` file in the same directory.
    
    :::

1.  Save the file.
1.  Verify the new Samba configuration:
    ```terminal
    $ testparm
    ```
1.  Restart the Samba service:
    ```terminal
    $ systemctl restart smb
    ```
1.  Verify that the Samba service is running and active:
    ```terminal
    $ systemctl status smb
    ```
1.  Configure SSL VPN access to {{ ibm_cloud_title }}:
    1.  Perform the procedure at [Getting started with {{ ibm_cloud_title }} Virtual Private Networking](https://cloud.ibm.com/docs/iaas-vpn?topic=iaas-vpn-getting-started) in the {{ ibm_cloud_title }} documentation.
    1.  Download and install the MotionPro SSL VPN client.
    1.  Connect to the appropriate {{ ibm_cloud_title }} endpoint:
        ```terminal
        $ sudo MotionPro --host $<vpn_endpoint> --user $<vpn_username> --passwd $<vpn_password>
        ```

        where:

        `<vpn_endpoint>`
        :   Specifies the appropriate SSL VPN endpoint.

        `<vpn_username>`
        :   Specifies the SSL VPN user name you configured.

        `<vpn_password>`
        :   Specifies the SSL VPN password you configured.

        :::note

        Connecting to the {{ ibm_cloud_title }} SSL VPN disconnects you from any open VPN connections.
        
        :::