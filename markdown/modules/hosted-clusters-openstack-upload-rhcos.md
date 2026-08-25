{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uploading the RHCOS image to OpenStack {id="hosted-clusters-openstack-upload-rhcos_{{ context }}"}

If you want to specify the {{ op_system }} image to use when deploying node pools on {{ hcp }} and {{ rh_openstack_first }} deployment, upload the image to the {{ rh_openstack }} cloud.  {._abstract}

If you do not upload the image, the OpenStack Resource Controller (ORC) downloads an image from the {{ product_title }} mirror and deletes the image after deletion of the hosted cluster.

**Prerequisites**

*   You downloaded the {{ op_system }} image from the {{ product_title }} mirror.
*   You have access to your {{ rh_openstack }} cloud.

**Procedure**

*   Upload an {{ op_system }} image to {{ rh_openstack }} by running the following command:
    ```terminal
    $ openstack image create --disk-format qcow2 --file <image_file_name> rhcos
    ```
    where:


    `<image_file_name>`
    :   Specifies the file name of the {{ op_system }} image.