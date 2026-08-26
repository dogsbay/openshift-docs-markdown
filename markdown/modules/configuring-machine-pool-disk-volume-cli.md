{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring machine pool disk volume using the ROSA CLI {id="configuring-machine-pool-disk-volume-cli_{{ context }}"}

Configure the disk volume size for machine pools during cluster creation or when adding new machine pools by using the {{ rosa_cli_first }}. {._abstract}

**Prerequisites**

*   You installed and configured the latest {{ rosa_cli }} on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.

**Procedure**

*   To configure disk volume during cluster creation, run the following command:
    ```terminal
    $ rosa create cluster --worker-disk-size=<disk_size>
    ```

    The value can be in GB, GiB, TB, or TiB. Replace `<disk_size>` with a numeric value and unit, for example `--worker-disk-size=200GiB`. You cannot separate the digit and the unit. No spaces are allowed.
*   To configure disk volume for a new machine pool after cluster installation, scale up the cluster by running the following command:
    ```terminal
    $ rosa create machinepool --cluster=<cluster_id> \
                              --disk-size=<disk_size>
    ```

    where:

    `<cluster_id>`
    :   Specifies the ID or name of your existing {{ OCP_short }} cluster.

    `<disk_size>`
    :   Specifies the worker node disk size. The value can be in GB, GiB, TB, or TiB. Replace `<disk_size>` with a numeric value and unit, for example `--disk-size=200GiB`. You cannot separate the digit and the unit. No spaces are allowed.

**Verification**

*   Confirm new machine pool disk volume size by logging into the AWS console and find the EC2 virtual machine root volume size.