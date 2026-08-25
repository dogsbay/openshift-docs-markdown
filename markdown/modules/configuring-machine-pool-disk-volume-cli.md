{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring machine pool disk volume using the ROSA CLI {id="configuring-machine-pool-disk-volume-cli_{{ context }}"}

**Prerequisite for cluster creation**

*   You have the option to select the root disk sizing for the default machine pool during cluster installation.

**Procedure for cluster creation**

*   Run the following command when creating your OpenShift cluster for the desired root disk size:
    ```terminal
    $ rosa create cluster --worker-disk-size=<disk_size>
    ```

    The value can be in GB, GiB, TB, or TiB. Replace `<disk_size>` with a numeric value and unit, for example `--worker-disk-size=200GiB`. You cannot separate the digit and the unit. No spaces are allowed.

**Prerequisite for machine pool creation**

*   You have the option to select the root disk sizing for the new machine pool after the cluster has been installed.

**Procedure for machine pool creation**

1.  Scale up the cluster by executing the following command:
    ```terminal
    $ rosa create machinepool --cluster=<cluster_id> \// (1)
                              --disk-size=<disk_size> // (2)
    ```
    1.  Specifies the ID or name of your existing OpenShift cluster.
    1.  Specifies the worker node disk size. The value can be in GB, GiB, TB, or TiB. Replace `<disk_size>` with a numeric value and unit, for example `--disk-size=200GiB`. You cannot separate the digit and the unit. No spaces are allowed.
1.  Confirm new machine pool disk volume size by logging into the AWS console and find the EC2 virtual machine root volume size.