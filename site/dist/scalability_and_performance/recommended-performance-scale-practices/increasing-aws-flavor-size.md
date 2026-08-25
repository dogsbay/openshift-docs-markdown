---
title: Selecting a larger AWS instance type for control plane machines
---

# Selecting a larger AWS instance type for control plane machines {#increasing-aws-flavor-size}

If the control plane machines in an {{ aws_first }} cluster require more resources, you can select a larger {{ aws_short }} instance type for the control plane machines to use.

> [!NOTE]
> The procedure for clusters that use a control plane machine set is different from the procedure for clusters that do not use a control plane machine set.
>
> If you are uncertain about the state of the `ControlPlaneMachineSet` CR in your cluster, you can verify the CR status.

**Additional resources**

- [Verify the CR status](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-checking-status_cpmso-getting-started)

**Additional resources**

- [Managing control plane machines with control plane machine sets](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-managing-machines)

**Additional resources**

- [Backing up etcd](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backing-up-etcd)
- [AWS documentation about changing the instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)
