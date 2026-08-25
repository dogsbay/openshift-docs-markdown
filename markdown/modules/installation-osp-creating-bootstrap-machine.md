{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the bootstrap machine on {{ rh_openstack }} {id="installation-osp-creating-bootstrap-machine_{{ context }}"}

Create a bootstrap machine and give it the network access it needs to run on {{ rh_openstack_first }}. Red Hat provides an Ansible playbook that you run to simplify this process. {._abstract}

**Prerequisites**

*   You downloaded the modules in "Downloading playbook dependencies".
*   You downloaded the playbooks in "Downloading the installation playbooks".
*   The `inventory.yaml`, `common.yaml`, and `bootstrap.yaml` Ansible playbooks are in a common directory.
*   The `metadata.json` file that the installation program created is in the same directory as the Ansible playbooks.

**Procedure**

1.  On a command line, change the working directory to the location of the playbooks.
1.  On a command line, run the `bootstrap.yaml` playbook:
    ```terminal
    $ ansible-playbook -i inventory.yaml bootstrap.yaml
    ```
1.  After the bootstrap server is active, view the logs to verify that the Ignition files were received:
    ```terminal
    $ openstack console log show "$INFRA_ID-bootstrap"
    ```