{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting to a VM attached to a secondary network by using SSH {id="virt-connecting-secondary-network-ssh_{{ context }}"}

You can connect to a virtual machine (VM) attached to a secondary network by using SSH. {._abstract}

**Prerequisites**

*   You attached a VM to a secondary network with a DHCP server.
*   You have an SSH client installed.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Obtain the IP address of the VM by running the following command:
    ```terminal
    $ oc describe vm <vm_name> -n <namespace>
    ```

    Example output:
    ```terminal
    # ...
    Interfaces:
      Interface Name:  eth0
      Ip Address:      10.244.0.37/24
      Ip Addresses:
        10.244.0.37/24
        fe80::858:aff:fef4:25/64
      Mac:             0a:58:0a:f4:00:25
      Name:            default
    # ...
    ```
1.  Connect to the VM by running the following command:
    ```terminal
    $ ssh <user_name>@<ip_address> -i <ssh_key>
    ```

    Example command:
    ```terminal
    $ ssh cloud-user@10.244.0.37 -i ~/.ssh/id_rsa_cloud-user
    ```