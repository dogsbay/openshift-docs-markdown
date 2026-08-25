{% if context == "installing-restricted-networks-bare-metal" %}
{%- set user_infra = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set user_infra = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-customizations" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installing-gcp-customizations" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-default" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-bare-metal" %}
{%- set user_infra = true -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set user_infra = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set user_infra = true -%}
{% endif %}
{% if context == "installing-openstack-installer-custom" %}
{%- set osp = true -%}
{% endif %}
{% if context == "installing-openstack-installer" %}
{%- set osp = true -%}
{% endif %}
{% if context == "upi-ibm-z-preparing-to-install" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-platform-agnostic" %}
{%- set user_infra = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set user_infra = true -%}
{% endif %}
{% if context == "upi-vsphere-preparing-to-install" %}
{%- set user_infra = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating a key pair for cluster node SSH access {id="ssh-agent-using_{{ context }}"}

During an {{ product_title }} installation, you can provide an SSH public key to the installation program. The key is passed to the {{ op_system_first }} nodes through their Ignition config files and is used to authenticate SSH access to the nodes. The key is added to the `~/.ssh/authorized_keys` list for the `core` user on each node, which enables password-less authentication. {._abstract}

The key is added to the `~/.ssh/authorized_keys` list for the `core` user on each node, which enables password-less authentication. After the key is passed to the nodes, you can use the key pair to SSH in to the {{ op_system }} nodes as the user `core`. To access the nodes through SSH, the private key identity must be managed by SSH for your local user.

If you want to SSH in to your cluster nodes to perform installation debugging or disaster recovery, you must provide the SSH public key during the installation process. The `./openshift-install gather` command also requires the SSH public key to be in place on the cluster nodes.


:::important

Do not skip this procedure in production environments, where disaster recovery and debugging is required.

:::


{% if not (osp or ibm_z) %}

:::note

You must use a local key, not one that you configured with platform-specific approaches.

:::

{% endif %}

{% if openshift_origin %}

:::note

On clusters running {{ op_system_first }}, the SSH keys specified in the Ignition config files are written to the `/home/core/.ssh/authorized_keys.d/core` file. However, the Machine Config Operator manages SSH keys in the `/home/core/.ssh/authorized_keys` file and configures **sshd** to ignore the `/home/core/.ssh/authorized_keys.d/core` file.
As a result, newly provisioned {{ product_title }} nodes are not accessible using SSH until the Machine Config Operator reconciles the machine configs with the `authorized_keys` file. After you can access the nodes using SSH, you can delete the `/home/core/.ssh/authorized_keys.d/core` file.

:::

{% endif %}

**Procedure**

1.  If you do not have an existing SSH key pair on your local machine to use for authentication onto your cluster nodes, create one. For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ ssh-keygen -t ed25519 -N '' -f <path>/<file_name>
    ```

    Specifies the path and file name, such as `~/.ssh/id_ed25519`, of the new SSH key. If you have an existing key pair, ensure your public key is in the your `~/.ssh` directory.
{%- if not ibm_power_vs %}

    :::note

    If you plan to install an {{ product_title }} cluster that uses the {{ op_system_base }} cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on only the `x86_64`, `ppc64le`, and `s390x` architectures, do not create a key that uses the `ed25519` algorithm. Instead, create a key that uses the `rsa` or `ecdsa` algorithm.
    
    :::

{% endif %}
1.  View the public SSH key:
    ```terminal
    $ cat <path>/<file_name>.pub
    ```

    For example, run the following to view the `~/.ssh/id_ed25519.pub` public key:
    ```terminal
    $ cat ~/.ssh/id_ed25519.pub
    ```
1.  Add the SSH private key identity to the SSH agent for your local user, if it has not already been added. SSH agent management of the key is required for password-less SSH authentication onto your cluster nodes, or if you want to use the `./openshift-install gather` command.

    :::note

    On some distributions, default SSH private key identities such as `~/.ssh/id_rsa` and `~/.ssh/id_dsa` are managed automatically.
    
    :::

    1.  If the `ssh-agent` process is not already running for your local user, start it as a background task:
        ```terminal
        $ eval "$(ssh-agent -s)"
        ```
        ```terminal title="Example output"
        Agent pid 31874
        ```
{%- if not ibm_power_vs %}

        :::note

        If your cluster is in FIPS mode, only use FIPS-compliant algorithms to generate the SSH key. The key must be either RSA or ECDSA.
        
        :::

{% endif %}
1.  Add your SSH private key to the `ssh-agent`:
    ```terminal
    $ ssh-add <path>/<file_name>
    ```

    Specifies the path and file name for your SSH private key, such as `~/.ssh/id_ed25519`
    ```terminal title="Example output"
    Identity added: /home/<you>/<path>/<file_name> (<computer_name>)
    ```

**Next steps**

*   When you install {{ product_title }}, provide the SSH public key to the installation program.
{%- if user_infra %}
If you install a cluster on infrastructure that you provision, you must provide the key to the installation program.
{% endif %}

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set user_infra = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set user_infra = false -%}
{% endif %}
{% if context == "installing-ibm-power-vs-customizations" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-ibm-power-vs-private-cluster" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installing-gcp-customizations" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-gcp-default" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-gcp-network-customizations" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-gcp-private" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-gcp-vpc" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-bare-metal" %}
{%- set user_infra = false -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set user_infra = false -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set user_infra = false -%}
{% endif %}
{% if context == "installing-openstack-installer-custom" %}
{%- set osp = false -%}
{% endif %}
{% if context == "installing-openstack-installer" %}
{%- set osp = false -%}
{% endif %}
{% if context == "upi-ibm-z-preparing-to-install" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-platform-agnostic" %}
{%- set user_infra = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set user_infra = false -%}
{% endif %}
{% if context == "upi-vsphere-preparing-to-install" %}
{%- set user_infra = false -%}
{% endif %}