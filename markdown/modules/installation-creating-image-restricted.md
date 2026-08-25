{% if context == "installing-openstack-installer-restricted" %}
{%- set osp = true -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set vsphere = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the {{ op_system }} image for restricted network installations {id="installation-creating-image-restricted_{{ context }}"}

Download the {{ op_system_first }} image to install {{ product_title }} on a restricted network
{%- if osp %}
{{ rh_openstack_first }}
{%- endif %}
{%- if vsphere %}
VMware vSphere
{%- endif %}
environment. {._abstract}

**Prerequisites**

*   Obtain the {{ product_title }} installation program. For a restricted network installation, the program is on your mirror registry host.

**Procedure**

1.  Log in to the Red Hat Customer Portal’s [Product Downloads page](https://access.redhat.com/downloads/content/290).
1.  Under **Version**, select the most recent release of {{ product_title }} {{ product_version }} for RHEL 8.

    :::important

    The {{ op_system }} images might not change with every release of {{ product_title }}. You must download images with the highest version that is less than or equal to the {{ product_title }} version that you install. Use the image versions that match your {{ product_title }} version if they are available.
    
    :::


{% if osp %}
1.  Download the **{{ op_system_first }} - OpenStack Image (QCOW)** image.
{% endif %}
{% if vsphere %}
1.  Download the **{{ op_system_first }} - vSphere** image.
{% endif %}

{% if osp %}
1.  Decompress the image.

    :::note

    You must decompress the image before the cluster can use it. The name of the downloaded file might not contain a compression extension, like `.gz` or `.tgz`. To find out if or how the file is compressed, in a command line, enter:

    ```terminal
    $ file <name_of_downloaded_file>
    ```
    
    :::

1.  Upload the image that you decompressed to a location that is accessible from the bastion server, like Glance. For example:
    ```
    $ openstack image create --file rhcos-44.81.202003110027-0-openstack.x86_64.qcow2 --disk-format qcow2 rhcos-${RHCOS_VERSION}
    ```

    :::important

    Depending on your {{ rh_openstack }} environment, you might be able to upload the image in either [`.raw` or `.qcow2` formats](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/15/html/instances_and_images_guide/index). If you use Ceph, you must use the `.raw` format.
    
    :::


    :::warning

    If the installation program finds multiple images with the same name, it chooses one of them at random. To avoid this behavior, create unique names for resources in {{ rh_openstack }}.
    
    :::


    The image is now available for a restricted installation. Note the image name or location for use in {{ product_title }} deployment.

{% endif %}
{% if vsphere %}
1.  Upload the image you downloaded to a location that is accessible from the bastion server.
{% endif %}

{% if context == "installing-openstack-installer-restricted" %}
{%- set osp = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set vsphere = "" -%}
{% endif %}