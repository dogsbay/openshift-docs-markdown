---
title: Selecting a larger AWS instance type for control plane machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Selecting a larger AWS instance type for control plane machines {id="increasing-aws-flavor-size"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "increasing-aws-flavor-size" %}

If the control plane machines in an {{ aws_first }} cluster require more resources, you can select a larger {{ aws_short }} instance type for the control plane machines to use.


:::note

The procedure for clusters that use a control plane machine set is different from the procedure for clusters that do not use a control plane machine set.

If you are uncertain about the state of the `ControlPlaneMachineSet` CR in your cluster, you can verify the CR status.

:::


**Additional resources**

*   [Verify the CR status](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-checking-status_cpmso-getting-started)

{% leveloffset +1 %}{% include "./modules/cpms-changing-aws-instance-type.md" %}{% endleveloffset %}

**Additional resources**

*   [Managing control plane machines with control plane machine sets](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-managing-machines)

{% leveloffset +1 %}{% include "./modules/aws-console-changing-aws-instance-type.md" %}{% endleveloffset %}

**Additional resources**

*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backing-up-etcd)
*   [AWS documentation about changing the instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)