{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a higher process ID limit on a machine pool in a {{ product_title }} cluster {id="setting-higher-pid-limit-on-machine-pool_{{ context }}"}

You can set a higher `podPidsLimit` for machine pools in an existing {{ product_title }} cluster by creating or editing a `KubeletConfig` object that changes the `--pod-pids-limit` parameter. {._abstract}


:::important

Changing the `podPidsLimit` on an existing machine pool triggers nodes in the machine pool to reboot one at a time. Make this change outside of peak usage hours for workloads in your machine pool and avoid upgrading or hibernating your cluster until all nodes have rebooted.

:::


**Prerequisites**

*   You have a {{ product_title }} cluster.
*   You have installed the {{ rosa_cli_first }}.
*   You have logged in to your Red Hat account by using the {{ rosa_cli }}.

**Procedure**

1.  Create a new `KubeletConfig` object for your cluster that specifies a new `--pod-pids-limit`:
    ```terminal
    $ rosa create kubeletconfig -c <cluster_name> --name=<kubeletconfig_name> --pod-pids-limit=<value>
    ```

    For example, the following command creates a `set-high-pids` `KubeletConfig` object for the `my-cluster` cluster that sets a maximum of 16,384 PIDs per pod:
    ```terminal
    $ rosa create kubeletconfig -c my-cluster --name=set-high-pids --pod-pids-limit=16384
    ```
1.  Associate the new `KubeletConfig` object with a new or existing machine pool.
    *   For a new machine pool:
        ```terminal
        $ rosa create machinepool -c <cluster_name> --name <machinepool_name> --kubelet-configs=<kubeletconfig_name>
        ```
    *   For an existing machine pool:
        ```terminal
        $ rosa edit machinepool -c <cluster_name> --kubelet-configs=<kubeletconfig_name> <machinepool_name>
        ```
        ```terminal title="Example output"
        Editing the kubelet config will cause the Nodes for your Machine Pool to be recreated. This may cause outages to your applications. Do you wish to continue? (y/N)
        ```

    For example, the following command associates the `set-high-pids` `KubeletConfig` object with the `high-pid-pool` machine pool in the `my-cluster` cluster:
    ```terminal
    $ rosa edit machinepool -c my-cluster --kubelet-configs=set-high-pids high-pid-pool
    ```

    A rolling reboot of worker nodes is triggered when a new `KubeletConfig` object is attached to an existing machine pool. You can check the progress of the rollout in the machine pool description:
    ```terminal
    $ rosa describe machinepool --cluster <cluster_name> --machinepool <machinepool_name>
    ```

**Verification**

*   Confirm that the new setting is in place on nodes in the machine pool:
    ```terminal
    $ rosa describe kubeletconfig --cluster=<cluster_name> --name <kubeletconfig_name>
    ```

    The new PIDs limit appears in the output, as shown in the following example:
    ```terminal title="Example output"
    Pod Pids Limit:                       16384
    ```