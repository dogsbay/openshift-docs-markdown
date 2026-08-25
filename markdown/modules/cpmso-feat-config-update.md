{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the control plane configuration {id="cpmso-feat-config-update_{{ context }}"}

Update the control plane machine set specification to modify control plane machine configuration and trigger automatic or manual replacements. {._abstract}

The Control Plane Machine Set Operator monitors the control plane machines and compares their configuration with the specification in the control plane machine set CR. When there is a discrepancy between the specification in the CR and the configuration of a control plane machine, the Operator marks that control plane machine for replacement.


:::note

For more information about the parameters in the CR, see "Control plane machine set configuration".

:::


**Prerequisites**

*   Your cluster has an activated and functioning Control Plane Machine Set Operator.

**Procedure**

1.  Edit your control plane machine set CR by running the following command:
    ```terminal
    $ oc edit controlplanemachineset.machine.openshift.io cluster \
      -n openshift-machine-api
    ```
1.  Change the values of any fields that you want to update in your cluster configuration.
1.  Save your changes.

**Next steps**

*   For clusters that use the default `RollingUpdate` update strategy, the control plane machine set propagates changes to your control plane configuration automatically.
*   For clusters that are configured to use the `OnDelete` update strategy, you must replace your control plane machines manually.