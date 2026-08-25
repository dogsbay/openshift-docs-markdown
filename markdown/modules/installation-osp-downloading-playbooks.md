{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading the installation playbooks {id="installation-osp-downloading-playbooks_{{ context }}"}

Download Ansible playbooks that you can use to install {{ product_title }} on your own {{ rh_openstack_first }} infrastructure. {._abstract}

**Prerequisites**

*   The curl command-line tool is available on your machine.

**Procedure**

*   To download the playbooks to your working directory, run the following script from a command line:
    ```terminal {minja}
    $ xargs -n 1 curl -O <<< '
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/bootstrap.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/common.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/compute-nodes.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/control-plane.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/down-bootstrap.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/down-compute-nodes.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/down-control-plane.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/down-network.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/down-security-groups.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/down-containers.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/inventory.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/network.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/security-groups.yaml
            https://raw.githubusercontent.com/openshift/installer/release-{{ product_version }}/upi/openstack/update-network-resources.yaml'
    ```

    The playbooks are downloaded to your machine.

    :::important

    During the installation process, you can modify the playbooks to configure your deployment.

    Retain all playbooks for the life of your cluster. You must have the playbooks to remove your {{ product_title }} cluster from {{ rh_openstack }}.
    
    :::


    :::important

    You must match any edits you make in the `bootstrap.yaml`, `compute-nodes.yaml`, `control-plane.yaml`, `network.yaml`, and `security-groups.yaml` files to the corresponding playbooks that are prefixed with `down-`. For example, edits to the `bootstrap.yaml` file must be reflected in the `down-bootstrap.yaml` file, too. If you do not edit both files, the supported cluster removal process will fail.
    
    :::