{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Swift on {{ rh_openstack }} {id="installation-osp-enabling-swift_{{ context }}"}

Swift is operated by a user account with the `swiftoperator` role. Add the role to an account before you run the installation program. {._abstract}


:::important

If [the {{ rh_openstack_first }} object storage service](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.0/html-single/storage_guide/index#ch-manage-containers), commonly known as Swift, is available, {{ product_title }} uses Swift as the image registry storage. If Swift is unavailable, the installation program relies on the {{ rh_openstack }} block storage service, commonly known as Cinder.

If Swift is present and you want to use it, you must enable access to Swift. If Swift is not present, or if you do not want to use Swift, skip this section.

:::



:::important

{{ rh_openstack }} 17 sets the `rgw_max_attr_size` parameter of Ceph RGW to 256 characters. This setting causes issues with uploading container images to the {{ product_title }} registry. You must set the value of `rgw_max_attr_size` to at least 1024 characters.

Before installation, check if your {{ rh_openstack }} deployment is affected by this problem. If your deployment is affected by this problem, reconfigure Ceph RGW.

:::


**Prerequisites**

*   You have a {{ rh_openstack }} administrator account on the target environment.
*   The Swift service is installed.
*   On [Ceph RGW](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.0/html-single/deploying_an_overcloud_with_containerized_red_hat_ceph/index#ceph-rgw), the `account in url` option is enabled.

**Procedure**

*   As an administrator in the {{ rh_openstack }} CLI, add the `swiftoperator` role to the account that will access Swift:
    ```terminal
    $ openstack role add --user <user> --project <project> swiftoperator
    ```

    Your {{ rh_openstack }} deployment can now use Swift for the image registry.