{% if context == "installing-azure-user-infra" %}
{%- set cp = "Azure" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set cp = "Azure Stack Hub" -%}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set cp = "Azure" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exporting common variables for ARM templates {id="installation-user-infra-exporting-common-variables-arm-templates_{{ context }}"}

To deploy Azure infrastructure with the provided ARM templates, you must export a common set of variables that are used with the provided Azure Resource Manager (ARM) templates used to assist in completing a user-provided infrastructure install on Microsoft {{ cp }}. {._abstract}


:::note

Specific ARM templates can also require additional exported variables, which are detailed in their related procedures.

:::


**Prerequisites**

*   Obtain the {{ product_title }} installation program and the pull secret for your cluster.

**Procedure**

1.  Export common variables found in the `install-config.yaml` to be used by the provided ARM templates:
    ```terminal
    $ export CLUSTER_NAME=<cluster_name>
    ```

    where:

    `<cluster_name>`
    :   The value of the `.metadata.name` attribute from the `install-config.yaml` file.
    ```terminal
    $ export AZURE_REGION=<azure_region>
    ```
    where:
{% if not ash %}

    `<azure_region>`
    :   The region to deploy the cluster into, for example `centralus`. This is the value of the `.platform.azure.region` attribute from the `install-config.yaml` file.
{% endif %}
{% if ash %}
    `<azure_region>`:: The region to deploy the cluster into. This is the value of the `.platform.azure.region` attribute from the `install-config.yaml` file.
{% endif %}
    ```terminal
    $ export SSH_KEY=<ssh_key>
    ```
    where:
    `<ssh_key>`:: The SSH RSA public key file as a string. You must enclose the SSH key in quotes since it contains spaces. This is the value of the `.sshKey` attribute from the `install-config.yaml` file.
    ```terminal
    $ export BASE_DOMAIN=<base_domain>
    ```
    where:
{% if not ash %}

    `<base_domain>`
    :   The base domain to deploy the cluster to. The base domain corresponds to the public DNS zone that you created for your cluster. This is the value of the `.baseDomain` attribute from the `install-config.yaml` file.
{% endif %}
{% if ash %}
    `<base_domain>`:: The base domain to deploy the cluster to. The base domain corresponds to the DNS zone that you created for your cluster. This is the value of the `.baseDomain` attribute from the `install-config.yaml` file.
{% endif %}
    ```terminal
    $ export BASE_DOMAIN_RESOURCE_GROUP=<base_domain_resource_group>
    ```
    where:
{% if not ash %}

    `<base_domain_resource_group>`
    :   The resource group where the public DNS zone exists. This is the value of the `.platform.azure.baseDomainResourceGroupName` attribute from the `install-config.yaml` file.
{% endif %}
{% if ash %}
    `<base_domain_resource_group>`:: The resource group where the DNS zone exists. This is the value of the `.platform.azure.baseDomainResourceGroupName` attribute from the `install-config.yaml` file.
{% endif %}
    For example:
    ```terminal
    $ export CLUSTER_NAME=test-cluster
    ```
    ```terminal
    $ export AZURE_REGION=centralus
    ```
    ```terminal
    $ export SSH_KEY="ssh-rsa xxx/xxx/xxx= user@email.com"
    ```
    ```terminal
    $ export BASE_DOMAIN=example.com
    ```
    ```terminal
    $ export BASE_DOMAIN_RESOURCE_GROUP=ocp-cluster
    ```

1.  Export the kubeadmin credentials:
    ```terminal
    $ export KUBECONFIG=<installation_directory>/auth/kubeconfig
    ```

    where:

    `<installation_directory>`
    :   Specify the path to the directory that you stored the installation files in.

{% if context == "installing-azure-user-infra" %}
{%- set cp = "" -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set cp = "" -%}
{%- set ash = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set cp = "" -%}
{% endif %}