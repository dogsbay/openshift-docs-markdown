{%- set _mod_docs_content_type = "PROCEDURE" %}
# Destroying a hosted cluster by using the CLI {id="hosted-clusters-openstack-destroy_{{ context }}"}

You can destroy a hosted cluster and its associated resources on {{ rh_openstack_first }} by using the `hcp` CLI tool. {._abstract}

**Prerequisites**

*   You installed the hosted control planes CLI, `hcp`.

**Procedure**

*   To destroy the cluster and its associated resources, run the following command:
    ```terminal
    $ hcp destroy cluster openstack --name=<cluster_name>
    ```

    Replace `<cluster_name>` with the name of the hosted cluster.

    After the process completes, your cluster and all resources that are associated with it are destroyed.