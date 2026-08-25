{% if context == "installing-openstack-installer-custom" %}
{%- set osp_ipi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a cluster with bare-metal machines {id="installation-osp-deploying-bare-metal-machines_{{ context }}"}

If you want your cluster to use bare-metal machines, modify the
{%- if osp_ipi %}
`install-config.yaml`
{%- endif %}
{%- if not osp_ipi %}
`inventory.yaml`
{%- endif %}
file. Your cluster can have compute machines running on bare metal. {._abstract}


:::note

Be sure that your `install-config.yaml` file reflects whether the {{ rh_openstack }} network that you use for bare-metal workers supports floating IP addresses or not.

:::


**Prerequisites**

*   The Bare Metal service (Ironic) is enabled and accessible via the {{ rh_openstack }} Compute API.
*   Bare metal is available as a {{ rh_openstack }} flavor.
*   If your cluster runs on an {{ rh_openstack }} version that is more than 16.1.6 and less than 16.2.4, bare-metal workers do not function due to a [known issue](https://bugzilla.redhat.com/show_bug.cgi?id=2033953) that causes the metadata service to be unavailable for services on {{ product_title }} nodes.
*   The {{ rh_openstack }} network supports both VM and bare-metal server attachment.
*   If you want to deploy the machines on a pre-existing network, a {{ rh_openstack }} subnet is provisioned.
*   If you want to deploy the machines on an installer-provisioned network, the {{ rh_openstack }} Bare Metal service (Ironic) is able to listen for and interact with Preboot eXecution Environment (PXE) boot machines that run on tenant networks.

{% if osp_ipi %}
*   You created an `install-config.yaml` file as part of the {{ product_title }} installation process.
{% endif %}

{% if not osp_ipi %}
*   You created an `inventory.yaml` file as part of the {{ product_title }} installation process.
{% endif %}

**Procedure**

{% if osp_ipi %}
1.  In the `install-config.yaml` file, edit the flavors for machines:
    1.  Change the value of `compute.platform.openstack.type` to a bare-metal flavor.
    1.  If you want to deploy your machines on a pre-existing network, change the value of `platform.openstack.machinesSubnet` to the {{ rh_openstack }} subnet UUID of the network.
        ```yaml title="An example bare metal install-config.yaml file"
        compute:
          - architecture: amd64
            hyperthreading: Enabled
            name: worker
            platform:
              openstack:
                type: <bare_metal_compute_flavor>
            replicas: 3
        ...

        platform:
            openstack:
              machinesSubnet: <subnet_UUID>
        ...
        ```

        where:

        `compute.platform.openstack.type`
        :   Specifies a bare-metal flavor to use for compute machines.

        `platform.openstack.machinesSubnet`
        :   If you want to use a pre-existing network, change this value to the UUID of the {{ rh_openstack }} subnet.
        Use the updated `install-config.yaml` file to complete the installation process.
        The compute machines that are created during deployment use the flavor that you
        added to the file.
{% endif %}

{% if not osp_ipi %}
1.  In the `inventory.yaml` file, edit the flavors for machines:
    1.  Change the value of `os_flavor_worker` to a bare-metal flavor.
        ```yaml title="An example bare metal inventory.yaml file"
        all:
          hosts:
            localhost:
              ansible_connection: local
              ansible_python_interpreter: "{{ansible_playbook_python}}"

              # User-provided values
              os_subnet_range: '10.0.0.0/16'
              os_flavor_master: 'my-vm-flavor'
              os_flavor_worker: 'my-bare-metal-flavor'
              os_image_rhcos: 'rhcos'
              os_external_network: 'external'
        ...
        ```

        where:

        `all.hosts.localhost.os_flavor_worker`
        :   Specifies a bare-metal flavor to use for compute machines.
        Use the updated `inventory.yaml` file to complete the installation process.
        Machines that are created during deployment use the flavor that you
        added to the file.
{% endif %}
        +

        :::note

        The installation program may time out while waiting for bare-metal machines to boot.

        If the installation program times out, restart and then complete the deployment by using the `wait-for` command of the installation program. For example:

        ```terminal
        $ ./openshift-install wait-for install-complete --log-level debug
        ```
        
        :::


{% if context == "installing-openstack-installer-custom" %}
{%- set osp_ipi = "" -%}
{% endif %}