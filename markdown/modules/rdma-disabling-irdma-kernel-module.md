{%- set _mod_docs_content_type = "PROCEDURE" %}

# Disabling the IRDMA kernel module {id="rdma-disabling-irdma-kernel-module_{{ context }}"}

On some systems, including the DellR750xa, the IRDMA kernel module creates problems for the NVIDIA Network Operator when unloading and loading the DOCA drivers. Use the following procedure to disable the module.

**Procedure**

1.  Generate the following machine configuration file by running the following command:
    ```terminal
    $ cat <<EOF > 99-machine-config-blacklist-irdma.yaml 
    ```
    ```yaml title="Example output"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      labels:
        machineconfiguration.openshift.io/role: worker
      name: 99-worker-blacklist-irdma
    spec:
      kernelArguments:
        - "module_blacklist=irdma"
    ```
1.  Create the machine configuration on the cluster and wait for the nodes to reboot by running the following command:
    ```terminal
    $ oc create -f 99-machine-config-blacklist-irdma.yaml 
    ```
    ```terminal title="Example output"
    machineconfig.machineconfiguration.openshift.io/99-worker-blacklist-irdma created
    ```
1.  Validate in a debug pod on each node that the module has not loaded by running the following command:
    ```terminal
    $ oc debug node/nvd-srv-32.nvidia.eng.rdu2.dc.redhat.com
    Starting pod/nvd-srv-32nvidiaengrdu2dcredhatcom-debug-btfj2 ...
    To use host binaries, run `chroot /host`
    Pod IP: 10.6.135.11
    If you don't see a command prompt, try pressing enter.
    sh-5.1# chroot /host
    sh-5.1# lsmod|grep irdma
    sh-5.1# 
    ```