{%- set _mod_docs_content_type = "REFERENCE" %}
# Configure VM SSH access {id="virt-nw-overview-vm-ssh-config_{{ context }}"}

You can use SSH to securely access your virtual machines (VMs) from the command line.  {._abstract}

To set up your SSH configuration, use one of the following methods:


Use the `virtctl ssh` command
:   You create an SSH key pair, add the public key to a VM, and connect to the VM by running the `virtctl ssh` command with the private key.

    You can add public SSH keys to {{ op_system_base_full }} 9 VMs at runtime or at first boot to VMs with guest operating systems that can be configured by using a cloud-init data source.


Use the `virtctl port-forward` command
:   You add the `virtctl port-foward` command to your `.ssh/config` file and connect to the VM by using OpenSSH.


Service
:   You create a service, associate the service with the VM, and connect to the IP address and port exposed by the service.


Secondary network
:   You configure a secondary network, attach a VM to the secondary network interface, and connect to its allocated IP address.