{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the control plane machines on {{ rh_openstack }} {id="installation-osp-creating-control-plane_{{ context }}"}

Create three control plane machines by using the Ignition config files that you generated. Red Hat provides an Ansible playbook that you run to simplify this process. {._abstract}

**Prerequisites**

*   You downloaded the modules in "Downloading playbook dependencies".
*   You downloaded the playbooks in "Downloading the installation playbooks".
*   The infrastructure ID from the installation program’s metadata file is set as an environment variable (`$INFRA_ID`).
*   The `inventory.yaml`, `common.yaml`, and `control-plane.yaml` Ansible playbooks are in a common directory.
*   You have the three Ignition files that were created in "Creating control plane Ignition config files".

**Procedure**

1.  On a command line, change the working directory to the location of the playbooks.
1.  If the control plane Ignition config files are not already in your working directory, copy them into it.
1.  On a command line, run the `control-plane.yaml` playbook:
    ```terminal
    $ ansible-playbook -i inventory.yaml control-plane.yaml
    ```
1.  Run the following command to monitor the bootstrapping process:
    ```terminal
    $ openshift-install wait-for bootstrap-complete
    ```

    You will see messages that confirm that the control plane machines are running and have joined the cluster:
    ```terminal
    INFO API v1.35.4 up
    INFO Waiting up to 45m0s for bootstrapping to complete...
    ...
    INFO It is now safe to remove the bootstrap resources
    ```