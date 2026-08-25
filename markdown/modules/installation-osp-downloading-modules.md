{% if context == "installing-openstack-user" %}
{%- set osp_user = true -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_user = true -%}
{% endif %}
{% if context == "uninstalling-openstack-user" %}
{%- set osp_user_uninstall = true -%}
{% endif %}
{% if context == "uninstalling-cluster-openstack" %}
{%- set osp_user_uninstall = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading playbook dependencies {id="installation-osp-downloading-modules_{{ context }}"}

{% if osp_user %}
The Ansible playbooks that simplify the installation process on user-provisioned infrastructure require several ansible collections and Python modules. On the machine where you will run the installation program, add the {{ rh_openstack_first }} repositories and then install the packages. {._abstract}

The following dependencies are required:

*   Python modules:
    *   `openstackclient`
    *   `openstacksdk`
    *   `netaddr`
    *   `pip`
*   Ansible collections:
    *   `ansible-collections-openstack`, which installs Ansible Core
    *   `ansible-collection-community-general`
    *   `ansible-collection-ansible-netcommon`
{% endif %}
{% if osp_user_uninstall %}
    The Ansible playbooks that simplify the removal process on user-provisioned
    infrastructure require several Python modules. On the machine where you will run the process,
    add the modules' repositories and then download them.
{% endif %}


:::note

These instructions assume that you are using {{ op_system_base_full }} 8.

:::


**Prerequisites**

*   Python 3 is installed on your machine.

**Procedure**

1.  On a command line, add the following repositories:
    1.  Register with Red Hat Subscription Manager:
        ```terminal
        $ sudo subscription-manager register # If not done already
        ```
    1.  Pull the latest subscription data:
        ```terminal
        $ sudo subscription-manager attach --pool=$YOUR_POOLID # If not done already
        ```
    1.  Disable the current repositories:
        ```terminal
        $ sudo subscription-manager repos --disable=* # If not done already
        ```
    1.  Add the required repositories:
        ```terminal
        $ sudo subscription-manager repos \
          --enable=rhel-9-for-x86_64-appstream-rpms \
          --enable=rhel-9-for-x86_64-baseos-rpms \
          --enable=openstack-17.1-for-rhel-9-x86_64-rpms
        ```

{% if osp_user %}
1.  Install the modules:
    ```terminal
    $ sudo dnf install ansible-collection-ansible-netcommon \
        ansible-collection-community-general \
        ansible-collections-openstack \
        python3-netaddr \
        python3-openstackclient \
        python3-openstacksdk \
        python3-pip
    ```
{% endif %}

{% if osp_user_uninstall %}
1.  Install the modules:
    ```terminal
    $ sudo yum install python3-openstackclient ansible python3-openstacksdk
    ```
{% endif %}
1.  Ensure that the `python` command points to `python3`:
    ```terminal
    $ sudo alternatives --set python /usr/bin/python3
    ```

{% if context == "installing-openstack-user" %}
{%- set osp_user = "" -%}
{% endif %}
{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_user = "" -%}
{% endif %}
{% if context == "uninstalling-cluster-openstack" %}
{%- set osp_user_uninstall = "" -%}
{% endif %}
{% if context == "uninstalling-openstack-user" %}
{%- set osp_user_uninstall = "" -%}
{% endif %}