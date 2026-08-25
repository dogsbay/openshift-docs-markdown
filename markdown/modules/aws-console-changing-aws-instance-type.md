{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the Amazon Web Services instance type by using the AWS console {id="aws-console-changing-aws-instance-type_{{ context }}"}

You can change the {{ aws_first }} instance type that your control plane machines use by updating the instance type in the AWS console. {._abstract}

**Prerequisites**

*   You have access to the {{ aws_short }} console with the permissions required to modify the EC2 Instance for your cluster.
*   You have access to the {{ product_title }} cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Open the {{ aws_short }} console and fetch the instances for the control plane machines.
1.  Choose one control plane machine instance.
    1.  For the selected control plane machine, back up the etcd data by creating an etcd snapshot. For more information, see "Backing up etcd".
    1.  In the {{ aws_short }} console, stop the control plane machine instance.
    1.  Select the stopped instance, and click **Actions** → **Instance Settings** → **Change instance type**.
    1.  Change the instance to a larger type, ensuring that the type is the same base as the previous selection, and apply changes. For example, you can change `m6i.xlarge` to `m6i.2xlarge` or `m6i.4xlarge`.
    1.  Start the instance.
    1.  If your {{ product_title }} cluster has a corresponding `Machine` object for the instance, update the instance type of the object to match the instance type set in the {{ aws_short }} console.
1.  Repeat this process for each control plane machine.