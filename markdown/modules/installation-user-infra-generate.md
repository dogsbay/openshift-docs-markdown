{% if context == "installing-restricted-networks-aws" %}
{%- set restricted = true -%}
{%- set cp_first = "Amazon Web Services" -%}
{%- set cp = "AWS" -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set cp_first = "Amazon Web Services" -%}
{%- set cp = "AWS" -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-localzone" %}
{%- set cp_first = "Amazon Web Services" -%}
{%- set cp = "AWS" -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set cp_first = "Amazon Web Services" -%}
{%- set cp = "AWS" -%}
{%- set aws = true -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set cp_first = "Microsoft Azure" -%}
{%- set cp = "Azure" -%}
{%- set azure = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set cp_first = "Microsoft Azure Stack Hub" -%}
{%- set cp = "Azure Stack Hub" -%}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set cp_first = "Google Cloud" -%}
{%- set cp = "Google Cloud" -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set cp_first = "Google Cloud" -%}
{%- set cp = "Google Cloud" -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set cp_first = "Google Cloud" -%}
{%- set cp = "Google Cloud" -%}
{%- set gcp_shared = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set cp_first = "Google Cloud" -%}
{%- set cp = "Google Cloud" -%}
{%- set gcp = true -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{%- set cp_first = "Red Hat OpenStack Platform" -%}
{%- set cp = "RHOSP" -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set cp_first = "Red Hat OpenStack Platform" -%}
{%- set cp = "RHOSP" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set cp_first = "Microsoft Azure" -%}
{%- set cp = "Azure" -%}
{%- set azure = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating the installation files for {{ cp }} {id="installation-user-infra-generate_{{ context }}"}

{% if azure %}
To install {{ product_title }} on {{ cp_first }} by using user-provisioned infrastructure, you must generate the files that the installation program needs to deploy your cluster and modify them so that the cluster creates only the machines that it will use. {._abstract}

You generate and customize the `install-config.yaml` file, Kubernetes manifests, and Ignition config files. You also have the option to first set up a separate `var` partition during the preparation phases of installation.
{% endif %}
{% if ash %}
To install {{ product_title }} on {{ cp_first }} by using user-provisioned infrastructure, you must generate the files that the installation program needs to deploy your cluster and modify them so that the cluster creates only the machines that it will use. You manually create the `install-config.yaml` file, and then generate and customize the Kubernetes manifests and Ignition config files. You also have the option to first set up a separate `var` partition during the preparation phases of installation.
{% endif %}
{% if aws or gcp %}
To install {{ product_title }} on {{ cp_first }} by using user-provisioned infrastructure, you must generate the files that the installation program needs to deploy your cluster and modify them so that the cluster creates only the machines that it will use. {._abstract}

You generate and customize the `install-config.yaml` file, Kubernetes manifests, and Ignition config files. You also have the option to first set up a separate `var` partition during the preparation phases of installation.
{% endif %}
{% if gcp_shared %}
To install {{ product_title }} on {{ cp_first }} into a shared VPC, you must generate the `install-config.yaml` file and modify it so that the cluster uses the correct VPC networks, DNS zones, and project names.
{% endif %} {._abstract}

{% if context == "installing-restricted-networks-aws" %}
{%- set restricted = false -%}
{%- set cp_first = false -%}
{%- set cp = false -%}
{%- set aws = false -%}
{% endif %}
{% if context == "installing-aws-user-infra" %}
{%- set cp_first = false -%}
{%- set cp = false -%}
{%- set aws = false -%}
{% endif %}
{% if context == "installing-aws-localzone" %}
{%- set aws = false -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set aws = false -%}
{% endif %}
{% if context == "installing-azure-user-infra" %}
{%- set cp_first = false -%}
{%- set cp = false -%}
{%- set azure = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-gcp-user-infra" %}
{%- set cp_first = false -%}
{%- set cp = false -%}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-gcp-user-infra-vpc" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-gcp-shared-vpc" %}
{%- set gcp_shared = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp" %}
{%- set cp_first = false -%}
{%- set cp = false -%}
{%- set gcp = false -%}
{% endif %}
{% if context == "installing-openstack-user" %}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{% endif %}
{% if context == "installing-restricted-networks-azure-user-provisioned" %}
{%- set azure = false -%}
{% endif %}