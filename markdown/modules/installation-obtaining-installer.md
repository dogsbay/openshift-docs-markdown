{% if context == "upi-ibm-z-preparing-to-install" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-default" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set private = true -%}
{% endif %}
{% if context == "ipi-vsphere-preparing-to-install" %}
{%- set vsphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining the installation program {id="installation-obtaining-installer_{{ context }}"}

Before you install {{ product_title }}, download the installation file on
{%- if restricted %}
the mirror host, so that installation assets exist for deployment in your environment.
{% endif %}
{% if not restricted %}
{% if ibm_z %}
 your provisioning machine.
{% endif %}
{% if not (ibm_z or private) %}
 the host you are using for installation.
{% endif %}
{% if private %}
a bastion host on your cloud network or a machine that has access to the to the network through a VPN. This ensures that installation assets exist for deployment in your environment. {._abstract}

For more information about private cluster installation requirements, see "Private clusters".
{% endif %}
{%- endif %}

**Prerequisites**

{% if ibm_z or private or vsphere %}
*   You have a machine that runs Linux, for example Red Hat Enterprise Linux 8, with 500 MB of local disk space.
{% endif %}
{% if vsphere %}

    :::important

    If you attempt to run the installation program on macOS, a known issue related to the `golang` compiler causes the installation of the {{ product_title }} cluster to fail. For more information about this issue, see the section named "Known Issues" in the _{{ product_title }} {{ product_version }} release notes_ document.
    
    :::

{% endif %}
{% if not (ibm_z or private or vsphere) %}
*   You have a computer that runs Linux or macOS, with 500 MB of local disk space.
{% endif %}

**Procedure**

{% if not openshift_origin %}
1.  Go to the [Cluster Type](https://console.redhat.com/openshift/install) page on the {{ hybrid_console }}. If you have a Red&#160;Hat account, log in with your credentials. If you do not, create an account.

    :::tip

    You can also [download the binaries for a specific {{ product_title }} release](https://mirror.openshift.com/pub/openshift-v4/clients/ocp/).
    
    :::

1.  Select your infrastructure provider from the **Run it yourself** section of the page.
1.  Select your host operating system and architecture from the dropdown menus under **OpenShift Installer** and click **Download Installer**.
1.  Place the downloaded file in the directory where you want to store the installation configuration files.
{% endif %}
{% if openshift_origin %}
1.  Download the installation program from https://github.com/openshift/okd/releases.
{%- endif %}

    :::important

    *   The installation program creates several files on the computer that you use to install your cluster. You must keep the installation program and the files that the installation program creates after you finish installing the cluster. Both of the files are required to delete the cluster.
    *   Deleting the files created by the installation program does not remove your cluster, even if the cluster failed during installation. To remove your cluster, complete the {{ product_title }} uninstallation procedures for your specific cloud provider.
    
    :::

1.  Extract the installation program. For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar -xvf openshift-install-linux.tar.gz
    ```
1.  Download your installation {{ cluster_manager_url_pull }}. This pull secret allows you to authenticate with the services that are provided by the included authorities, including Quay.io, which serves the container images for {{ product_title }} components.
{%- if openshift_origin %}

    Using a {{ cluster_manager_url_pull }} is not required. You can use a pull secret for another private registry. Or, if you do not need the cluster to pull images from a private registry, you can use `{"auths":{"fake":{"auth":"aWQ6cGFzcwo="}}}` as the pull secret when prompted during the installation.

    If you do not use the {{ cluster_manager_url_pull }}:
    *   Red&#160;Hat Operators are not available.
    *   The Telemetry and {{ insights_operator }}s do not send data to Red&#160;Hat.
    *   Content from the [Red&#160;Hat Ecosystem Catalog Container images](https://catalog.redhat.com/software/containers/explore) registry, such as image streams and Operators, are not available.
{% endif %}
{% if not openshift_origin %}

        :::tip

        Alternatively, you can retrieve the installation program from the [Red&#160;Hat Customer Portal](https://access.redhat.com/downloads/content/290/), where you can specify a version of the installation program to download.
        However, you must have an active subscription to access this page.
        
        :::

{% endif %}

{% if context == "upi-ibm-z-preparing-to-install" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-default" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-azure-stack-hub-network-customizations" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-private" %}
{%- set private = false -%}
{% endif %}
{% if context == "ipi-vsphere-preparing-to-install" %}
{%- set vsphere = false -%}
{% endif %}