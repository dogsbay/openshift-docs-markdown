{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing a cluster from {{ rh_openstack }} that uses your own infrastructure {id="installation-uninstall-infra_{{ context }}"}

You can remove an {{ product_title }} cluster on {{ rh_openstack_first }} that uses your own infrastructure. To complete the removal process quickly, run several Ansible playbooks. {._abstract}

**Prerequisites**

*   Python 3 is installed on your machine.
*   You downloaded the modules in "Downloading playbook dependencies."
*   You have the playbooks that you used to install the cluster.
*   You modified the playbooks that are prefixed with `down-` to reflect any changes that you made to their corresponding installation playbooks. For example, changes to the `bootstrap.yaml` file are reflected in the `down-bootstrap.yaml` file.
*   All of the playbooks are in a common directory.

**Procedure**

1.  On a command line, run the playbooks that you downloaded by entering the following command:
    ```terminal
    $ ansible-playbook -i inventory.yaml  \
    	down-bootstrap.yaml      \
    	down-control-plane.yaml  \
    	down-compute-nodes.yaml  \
    	down-load-balancers.yaml \
    	down-network.yaml        \
    	down-security-groups.yaml
    ```
1.  Remove any DNS record changes you made for the {{ product_title }} installation.

    {{ product_title }} is removed from your infrastructure.