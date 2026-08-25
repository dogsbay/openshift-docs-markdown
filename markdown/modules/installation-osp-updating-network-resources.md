{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating network resources on {{ rh_openstack }} {id="installation-osp-updating-network-resources_{{ context }}"}

Update the network resources that an {{ product_title }} on {{ rh_openstack_first }} installation on your own infrastructure requires. {._abstract}

**Prerequisites**

*   Python 3 is installed on your machine.
*   You downloaded the modules in "Downloading playbook dependencies".
*   You downloaded the playbooks in "Downloading the installation playbooks".

**Procedure**

1.  Optional: Add an external network value to the `inventory.yaml` playbook:
    ```yaml title="Example external network value in the inventory.yaml Ansible Playbook"
    ...
          # The public network providing connectivity to the cluster. If not
          # provided, the cluster external connectivity must be provided in another
          # way.

          # Required for os_api_fip, os_ingress_fip, os_bootstrap_fip.
          os_external_network: 'external'
    ...
    ```

    :::important

    If you did not provide a value for `os_external_network` in the `inventory.yaml` file, you must ensure that VMs can access Glance and an external connection yourself.
    
    :::

1.  Optional: Add external network and floating IP (FIP) address values to the `inventory.yaml` playbook:
    ```yaml title="Example FIP values in the inventory.yaml Ansible Playbook"
    ...
          # OpenShift API floating IP address. If this value is non-empty, the
          # corresponding floating IP will be attached to the Control Plane to
          # serve the OpenShift API.
          os_api_fip: '203.0.113.23'

          # OpenShift Ingress floating IP address. If this value is non-empty, the
          # corresponding floating IP will be attached to the worker nodes to serve
          # the applications.
          os_ingress_fip: '203.0.113.19'

          # If this value is non-empty, the corresponding floating IP will be
          # attached to the bootstrap machine. This is needed for collecting logs
          # in case of install failure.
          os_bootstrap_fip: '203.0.113.20'
    ```

    :::important

    If you do not define values for `os_api_fip` and `os_ingress_fip`, you must perform postinstallation network configuration.

    If you do not define a value for `os_bootstrap_fip`, the installation program cannot download debugging information from failed installations.

    See "Enabling access to the environment" for more information.
    
    :::

1.  On a command line, create security groups by running the `security-groups.yaml` playbook:
    ```terminal
    $ ansible-playbook -i inventory.yaml security-groups.yaml
    ```
1.  On a command line, update the network resources by running the `update-network-resources.yaml` playbook:
    ```terminal
    $ ansible-playbook -i inventory.yaml update-network-resources.yaml
    ```
    *   The playbook adds tags to the network, subnets, ports, and router. The playbook also attaches floating IP addresses to the API and Ingress ports and sets the security groups for those ports.
1.  Optional: If you want to control the default resolvers that Nova servers use, run the {{ rh_openstack }} CLI command:
    ```terminal
    $ openstack subnet set --dns-nameserver <server_1> --dns-nameserver <server_2> "$INFRA_ID-nodes"
    ```
1.  Optional: You can use the `inventory.yaml` file that you created to customize your installation. For example, you can deploy a cluster that uses bare-metal machines.