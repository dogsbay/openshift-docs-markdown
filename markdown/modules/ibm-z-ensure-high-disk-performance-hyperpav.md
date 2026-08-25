{%- set _mod_docs_content_type = "PROCEDURE" %}
# Ensure high disk performance with HyperPAV on z/VM {id="ibm-z-ensure-high-disk-performance-hyperpav_{{ context }}"}

To improve I/O performance for Direct Access Storage Devices (DASD) disks in z/VM environments, configure HyperPAV alias devices. To increase throughput for both control plane nodes and compute nodes, add YAML configurations with full-pack minidisks to the Machine Config Operator (MCO) profiles for {{ ibm_z_title }} clusters. {._abstract}

DASD and Extended Count Key Data (ECKD) devices are commonly used disk types in {{ ibm_z_name }} environments. In a typical {{ product_title }} setup in z/VM environments, DASD disks are commonly used to support the local storage for the nodes. You can set up HyperPAV alias devices to provide more throughput and overall better I/O performance for the DASD disks that support the z/VM guests.

Using HyperPAV for the local storage devices leads to a significant performance benefit. However, be aware of the trade-off between throughput and CPU costs.

**Procedure**

1.  Copy the following MCO sample profile into a YAML file for the control plane node. For example, `05-master-kernelarg-hpav.yaml`:
    ```terminal
    $ cat 05-master-kernelarg-hpav.yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      labels:
        machineconfiguration.openshift.io/role: master
      name: 05-master-kernelarg-hpav
    spec:
      config:
        ignition:
          version: 3.1.0
      kernelArguments:
        - rd.dasd=800-805
    # ...
    ```
1.  Copy the following MCO sample profile into a YAML file for the compute node. For example, `05-worker-kernelarg-hpav.yaml`:
    ```terminal
    $ cat 05-worker-kernelarg-hpav.yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      labels:
        machineconfiguration.openshift.io/role: worker
      name: 05-worker-kernelarg-hpav
    spec:
      config:
        ignition:
          version: 3.1.0
      kernelArguments:
        - rd.dasd=800-805
    # ...
    ```

    :::note

    You must modify the `rd.dasd` arguments to fit the device IDs.
    
    :::

1.  Create the MCO profiles by entering the following commands:
    ```terminal
    $ oc create -f 05-master-kernelarg-hpav.yaml
    ```
    ```terminal
    $ oc create -f 05-worker-kernelarg-hpav.yaml
    ```
1.  To deactivate the MCO profiles, enter the following commands:
    ```terminal
    $ oc delete -f 05-master-kernelarg-hpav.yaml
    ```
    ```terminal
    $ oc delete -f 05-worker-kernelarg-hpav.yaml
    ```