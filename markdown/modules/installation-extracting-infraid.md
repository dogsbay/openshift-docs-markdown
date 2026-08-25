{% if context == "installing-aws-user-infra" %}
{%- set cp_first = "Amazon Web Services" -%}
{%- set cp = "AWS" -%}
{%- set cp_template = "CloudFormation" -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set cp_first = "Amazon Web Services" -%}
{%- set cp = "AWS" -%}
{%- set cp_template = "CloudFormation" -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set cp_first = "Microsoft Azure" -%}
{%- set cp = "Azure" -%}
{%- set cp_template_first = "Azure Resource Manager" -%}
{%- set cp_template = "ARM" -%}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set cp_first = "Google Cloud" -%}
{%- set cp = "Google Cloud" -%}
{%- set cp_template = "Infrastructure Manager" -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set cp_first = "Google Cloud" -%}
{%- set cp = "Google Cloud" -%}
{%- set cp_template = "Infrastructure Manager" -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set cp_first = "Google Cloud" -%}
{%- set cp = "Google Cloud" -%}
{%- set cp_template = "Infrastructure Manager" -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set cp_first = "VMware vSphere" -%}
{%- set cp = "vSphere" -%}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-vsphere" %}
{%- set cp_first = "VMware vSphere" -%}
{%- set cp = "vSphere" -%}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installing-vsphere-network-customizations" %}
{%- set cp_first = "VMware vSphere" -%}
{%- set cp = "vSphere" -%}
{%- set vsphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Extracting the infrastructure name {id="installation-extracting-infraid_{{ context }}"}

To identify your cluster resources in {{ cp_first }}, extract the unique infrastructure name from the Ignition config files. {._abstract}

{% if aws or gcp %}
The infrastructure name is also used to locate the appropriate {{ cp }} resources during an {{ product_title }} installation. The provided {{ cp_template }} templates contain references to this infrastructure name, so you must extract it.
{% endif %}

{% if azure %}
The provided {{ cp_template_first }} ({{ cp_template }}) templates contain references to this infrastructure name, so you must extract it.
{% endif %}

{% if vsphere %}
If you plan to use the cluster identifier as the name of your virtual machine folder, you must extract it.
{% endif %}


:::warning

Do not run the `openshift-install create manifests` command again after creating any {{ gcp_short }} resources. Running the command again generates a new cluster identifier, which will cause errors in existing resources. If you need to regenerate the manifests because you modified the `install-config.yaml` file, delete any {{ gcp_short }} resources you created and recreate them with the new cluster identifier.

:::


**Prerequisites**

{%- if not gcp %}
*   You obtained the {{ product_title }} installation program and the pull secret for your cluster.
*   You generated the Ignition config files for your cluster.
{%- endif %}
* You installed the `jq` package.

**Procedure**

*   To extract and view the infrastructure name from the Ignition config file
metadata, run the following command:
    ```terminal
    $ jq -r .infraID <installation_directory>/metadata.json
    ```

    where `<installation_directory>` is the path to the directory that you stored the installation files in.
    ```terminal title="Example output"
    openshift-vw9j6
    ```

    The output of this command is your cluster name and a random string.

{% if context == "installing-aws-user-infra" %}
{%- set cp_first = "" -%}
{%- set cp = "" -%}
{%- set cp_template = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-aws" %}
{%- set cp_first = "" -%}
{%- set cp = "" -%}
{%- set cp_template = "" -%}
{%- set aws = "" -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set cp_first = "" -%}
{%- set cp = "" -%}
{%- set cp_template_first = "" -%}
{%- set cp_template = "" -%}
{%- set azure = "" -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set cp_first = "" -%}
{%- set cp = "" -%}
{%- set cp_template = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set cp_first = "" -%}
{%- set cp = "" -%}
{%- set cp_template = "" -%}
{%- set gcp = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-vsphere" %}
{%- set vsphere = "" -%}
{% endif %}
{% if context == "installing-vsphere" %}
{%- set vsphere = "" -%}
{% endif %}
{% if context == "installing-vsphere-network-customizations" %}
{%- set vsphere = "" -%}
{% endif %}