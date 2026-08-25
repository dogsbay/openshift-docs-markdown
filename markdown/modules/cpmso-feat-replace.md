{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing a control plane machine {id="cpmso-feat-replace_{{ context }}"}

Replace a control plane machine to apply updated configurations or recover from hardware issues while maintaining cluster stability. The control plane machine set replaces the deleted machine with one using the specification in the control plane machine set custom resource (CR). {._abstract}

**Prerequisites**

*   If your cluster runs on {{ rh_openstack_first }} and you need to evacuate a compute server, such as for an upgrade, you must disable the {{ rh_openstack }} compute node that the machine runs on by running the following command:
    ```terminal
    $ openstack compute service set <target_node_host_name> nova-compute --disable
    ```

    For more information, see [Preparing to migrate](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_the_compute_service_for_instance_creation/assembly_migrating-virtual-machine-instances-between-compute-nodes_migrating-instances#proc_preparing-to-migrate_migrating-instances) in the {{ rh_openstack }} documentation.

**Procedure**

1.  List the control plane machines in your cluster by running the following command:
    ```terminal
    $ oc get machines \
      -l machine.openshift.io/cluster-api-machine-role==master \
      -n openshift-machine-api
    ```
1.  Delete a control plane machine by running the following command:
    ```terminal
    $ oc delete machine \
      -n openshift-machine-api \
      <control_plane_machine_name>
    ```

    where `<control_plane_machine_name>` specifies the name of the control plane machine to delete.

    :::note

    If you delete multiple control plane machines, the control plane machine set replaces them according to the configured update strategy:

    *   For clusters that use the default `RollingUpdate` update strategy, the Operator replaces one machine at a time until each machine is replaced.
    *   For clusters that are configured to use the `OnDelete` update strategy, the Operator creates all of the required replacement machines simultaneously.

    Both strategies maintain etcd health during control plane machine replacement.
    
    :::