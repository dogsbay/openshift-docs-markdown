{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the {{ op_system_first }} image {id="installation-osp-creating-image_{{ context }}"}

The {{ product_title }} installation program requires that a {{ op_system_first }} image be present in the {{ rh_openstack_first }} cluster. Retrieve the latest {{ op_system }} image, then upload it using the {{ rh_openstack }} CLI. {._abstract}

**Prerequisites**

*   The {{ rh_openstack }} CLI is installed.

**Procedure**

1.  Log in to the Red Hat Customer Portal’s [Product Downloads page](https://access.redhat.com/downloads/content/290).
1.  Under **Version**, select the most recent release of {{ product_title }} {{ product_version }} for {{ op_system_base_full }} 8.

    :::important

    The {{ op_system }} images might not change with every release of {{ product_title }}.
    You must download images with the highest version that is less than or equal to
    the {{ product_title }} version that you install. Use the image versions that match
    your {{ product_title }} version if they are available.
    
    :::

1.  Download the _{{ op_system_first }} - OpenStack Image (QCOW)_.
1.  Decompress the image.

    :::note

    You must decompress the {{ rh_openstack }} image before the cluster can use it. The name of the downloaded file might not contain a compression extension, like `.gz` or `.tgz`. To find out if or how the file is compressed, in a command line, enter:

    ```terminal
    $ file <name_of_downloaded_file>
    ```

    
    :::

1.  From the image that you downloaded, create an image that is named `rhcos` in your cluster by using the {{ rh_openstack }} CLI:
    ```terminal
    $ openstack image create --container-format=bare --disk-format=qcow2 --file rhcos-${RHCOS_VERSION}-openstack.qcow2 rhcos
    ```

    :::important

    Depending on your {{ rh_openstack }} environment, you might be able to upload the image in either [`.raw` or `.qcow2` formats](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/15/html/instances_and_images_guide/index). If you use Ceph, you must use the `.raw` format.
    
    :::


    :::warning

    If the installation program finds multiple images with the same name, the program chooses one of them at random. To avoid this behavior, create unique names for resources in {{ rh_openstack }}.

    After you upload the image to {{ rh_openstack }}, the image is usable in the installation process.
    
    :::