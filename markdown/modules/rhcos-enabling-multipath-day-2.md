{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling multipathing with kernel arguments on {{ op_system }} {id="rhcos-enabling-multipath-day-2_{{ context }}"}

You can achieve higher host availability by enabling multipathing on the primary disk, which allows stronger resilience to hardware failure, by using a `MachineConfig` object. {._abstract}


:::important

Enabling multipathing during installation is supported and recommended for nodes provisioned in {{ product_title }}. In setups where any I/O to non-optimized paths results in I/O system errors, you must enable multipathing at installation time. For more information about enabling multipathing during installation time, see "Enabling multipathing post installation" in the _Installing on bare metal_ documentation.

:::



:::important

On {{ ibm_z_name }} and {{ ibm_linuxone_name }}, you can enable multipathing only if you configured your cluster for it during installation. For more information, see "Installing {{ op_system }} and starting the {{ product_title }} bootstrap process" in _Installing a cluster with z/VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}_.

:::



:::important

When an {{ product_title }} cluster is installed or configured as a postinstallation activity on a single VIOS host with "vSCSI" storage on {{ ibm_power_name }} with multipath configured, the CoreOS nodes with multipath enabled fail to boot. This behavior is expected, as only one path is available to the node.

:::


**Prerequisites**

*   You have a running {{ product_title }} cluster.
*   You are logged in to the cluster as a user with administrative privileges.
*   You have confirmed that the disk is enabled for multipathing. Multipathing is only supported on hosts that are connected to a SAN via an HBA adapter.

**Procedure**

1.  To enable multipathing postinstallation on control plane nodes:
    *   Create a machine config file, such as `99-master-kargs-mpath.yaml`, that instructs the cluster to add the `master` label and that identifies the multipath kernel argument, for example:
        ```yaml
        apiVersion: machineconfiguration.openshift.io/v1
        kind: MachineConfig
        metadata:
          labels:
            machineconfiguration.openshift.io/role: "master"
          name: 99-master-kargs-mpath
        spec:
          kernelArguments:
            - 'rd.multipath=default'
            - 'root=/dev/disk/by-label/dm-mpath-root'
        ```
1.  To enable multipathing postinstallation on worker nodes:
    *   Create a machine config file, such as `99-worker-kargs-mpath.yaml`, that instructs the cluster to add the `worker` label and that identifies the multipath kernel argument, for example:
        ```yaml
        apiVersion: machineconfiguration.openshift.io/v1
        kind: MachineConfig
        metadata:
          labels:
            machineconfiguration.openshift.io/role: "worker"
          name: 99-worker-kargs-mpath
        spec:
          kernelArguments:
            - 'rd.multipath=default'
            - 'root=/dev/disk/by-label/dm-mpath-root'
        ```
1.  Create the new machine config by using either the master or worker YAML file you previously created:
    ```terminal
    $ oc create -f ./99-worker-kargs-mpath.yaml
    ```
1.  Check the machine configs to see that the new one was added:
    ```terminal
    $ oc get MachineConfig
    ```
    ```terminal title="Example output"
    NAME                                               GENERATEDBYCONTROLLER                      IGNITIONVERSION   AGE
    00-master                                          52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    00-worker                                          52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    01-master-container-runtime                        52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    01-master-kubelet                                  52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    01-worker-container-runtime                        52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    01-worker-kubelet                                  52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    99-master-generated-registries                     52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    99-master-ssh                                                                                 3.2.0             40m
    99-worker-generated-registries                     52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    99-worker-kargs-mpath                              52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             105s
    99-worker-ssh                                                                                 3.2.0             40m
    rendered-master-23e785de7587df95a4b517e0647e5ab7   52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    rendered-worker-5d596d9293ca3ea80c896a1191735bb1   52dd3ba6a9a527fc3ab42afac8d12b693534c8c9   3.5.0             33m
    ```
1.  Check the nodes:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                           STATUS                     ROLES    AGE   VERSION
    ip-10-0-136-161.ec2.internal   Ready                      worker   28m   v1.35.4
    ip-10-0-136-243.ec2.internal   Ready                      master   34m   v1.35.4
    ip-10-0-141-105.ec2.internal   Ready,SchedulingDisabled   worker   28m   v1.35.4
    ip-10-0-142-249.ec2.internal   Ready                      master   34m   v1.35.4
    ip-10-0-153-11.ec2.internal    Ready                      worker   28m   v1.35.4
    ip-10-0-153-150.ec2.internal   Ready                      master   34m   v1.35.4
    ```

    You can see that scheduling on each worker node is disabled as the change is being applied.
1.  Check that the kernel argument worked by going to one of the worker nodes and listing
the kernel command-line arguments (in `/proc/cmdline` on the host):
    ```terminal
    $ oc debug node/ip-10-0-141-105.ec2.internal
    ```
    ```terminal title="Example output"
    Starting pod/ip-10-0-141-105ec2internal-debug ...
    To use host binaries, run `chroot /host`

    sh-4.2# cat /host/proc/cmdline
    ...
    rd.multipath=default root=/dev/disk/by-label/dm-mpath-root
    ...

    sh-4.2# exit
    ```

    You should see the added kernel arguments.