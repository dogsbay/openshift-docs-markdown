{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a missing Azure internal load balancer {id="cpmso-ts-ilb-missing_{{ context }}"}

Add the required `internalLoadBalancer` parameter to Azure control plane resources to ensure proper load balancing configuration. {._abstract}

For more information about where this parameter is located in the Azure provider specification, see the sample Azure provider specification. The placement in the control plane `Machine` CR is similar.

**Procedure**

1.  List the control plane machines in your cluster by running the following command:
    ```terminal
    $ oc get machines \
      -l machine.openshift.io/cluster-api-machine-role==master \
      -n openshift-machine-api
    ```
1.  For each control plane machine, edit the CR by running the following command:
    ```terminal
    $ oc edit machine <control_plane_machine_name>
    ```
1.  Add the `internalLoadBalancer` parameter with the correct details for your cluster and save your changes.
1.  Edit your control plane machine set CR by running the following command:
    ```terminal
    $ oc edit controlplanemachineset.machine.openshift.io cluster \
      -n openshift-machine-api
    ```
1.  Add the `internalLoadBalancer` parameter with the correct details for your cluster and save your changes.

**Next steps**

*   For clusters that use the default `RollingUpdate` update strategy, the Operator automatically propagates the changes to your control plane configuration.
*   For clusters that are configured to use the `OnDelete` update strategy, you must replace your control plane machines manually.