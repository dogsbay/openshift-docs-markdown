{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting bootstrap resources from {{ rh_openstack }} {id="installation-osp-deleting-bootstrap-resources_{{ context }}"}

Delete the bootstrap resources that you no longer need. {._abstract}

**Prerequisites**

*   You downloaded the modules in "Downloading playbook dependencies".
*   You downloaded the playbooks in "Downloading the installation playbooks".
*   The `inventory.yaml`, `common.yaml`, and `down-bootstrap.yaml` Ansible playbooks are in a common directory.
*   The control plane machines are running.
    *   If you do not know the status of the machines, see "Verifying cluster status".

**Procedure**

1.  On a command line, change the working directory to the location of the playbooks.
1.  On a command line, run the `down-bootstrap.yaml` playbook:
    ```terminal
    $ ansible-playbook -i inventory.yaml down-bootstrap.yaml
    ```

    The bootstrap port, server, and floating IP address are deleted.

    :::warning

    If you did not disable the bootstrap Ignition file URL earlier, do so now.
    
    :::