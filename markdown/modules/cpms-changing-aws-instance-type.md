{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the {{ aws_full }} instance type by using a control plane machine set {id="cpms-changing-aws-instance-type_{{ context }}"}

If you need more resources for your control plane machines, you can change the {{ aws_first }} instance type that they use.
To change the instance type, you update the instance type value in the control plane machine set custom resource (CR). {._abstract}

**Prerequisites**

*   You have access to the {{ oc_first }} as a user with administrator privileges.
*   Your {{ aws_short }} cluster uses a control plane machine set.

**Procedure**

1.  Edit your control plane machine set CR by running the following command:
    ```terminal
    $ oc edit controlplanemachineset.machine.openshift.io cluster --namespace openshift-machine-api
    ```
1.  Update the CR to implement your configuration changes:
    ```yaml
    apiVersion: machine.openshift.io/v1
    kind: ControlPlaneMachineSet
    # ...
    spec:
      template:
        machines_v1beta1_machine_openshift_io:
          spec:
            providerSpec:
              value:
                instanceType: <compatible_aws_instance_type>
    ```

    where `<compatible_aws_instance_type>` specifies a larger {{ aws_short }} instance type with the same base.
    For example, you can change this value from `m6i.xlarge` to `m6i.2xlarge` or `m6i.4xlarge`.
1.  Save your changes and exit the object specification.

    When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
    *   For clusters that use the default `RollingUpdate` update strategy, the Operator automatically propagates the changes to your control plane configuration.
    *   For clusters that are configured to use the `OnDelete` update strategy, you must replace your control plane machines manually.