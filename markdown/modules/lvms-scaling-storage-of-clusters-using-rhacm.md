{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling up the storage of clusters by using {{ rh_rhacm }} {id="lvms-scaling-storage-of-clusters-using-rhacm_{{ context }}"}

Scale up worker node storage capacity when running out of space, adding new applications, or expanding cluster capacity by using {{ rh_rhacm }} to add new devices or worker nodes. {._abstract}

**Prerequisites**

*   You have access to the {{ rh_rhacm }} cluster using an account with `cluster-admin` privileges.
*   You have created an `LVMCluster` custom resource (CR) by using {{ rh_rhacm }}.
*   You have additional unused devices on each cluster to be used by {{ lvms_first }}.

**Procedure**

1.  Log in to the {{ rh_rhacm }} CLI using your {{ product_title }} credentials.
1.  Edit the `LVMCluster` CR that you created using {{ rh_rhacm }} by running the following command:
    ```terminal
    $ oc edit -f <file_name> -n <namespace>
    ```

    Replace `<file_name>` with the name of the `LVMCluster` CR.
1.  In the `LVMCluster` CR, add the path to the new device in the `deviceSelector` field.
    ```yaml title="Example LVMCluster CR"
    apiVersion: policy.open-cluster-management.io/v1
    kind: ConfigurationPolicy
    metadata:
      name: lvms
    spec:
      object-templates:
         - complianceType: musthave
           objectDefinition:
             apiVersion: lvm.topolvm.io/v1alpha1
             kind: LVMCluster
             metadata:
               name: my-lvmcluster
               namespace: openshift-lvm-storage
             spec:
               storage:
                 deviceClasses:
    # ...
                   deviceSelector:
                     paths:
                     - /dev/disk/by-path/pci-0000:87:00.0-nvme-1
                     optionalPaths:
                     - /dev/disk/by-path/pci-0000:89:00.0-nvme-1
    # ...
    ```
    *   `deviceSelector`: Contains the configuration to specify the paths to the devices that you want to add to the LVM volume group.
    You can specify the device paths in the `paths` field, the `optionalPaths` field, or both. If you do not specify the device paths in both `paths` and `optionalPaths`, {{ lvms_first }} adds the supported unused devices to the LVM volume group. {{ lvms }} adds the devices to the LVM volume group only if the following conditions are met:
        *   The device path exists.
        *   The device is supported by {{ lvms }}. For information about unsupported devices, see "Devices not supported by {{ lvms }}".
    *   `paths`: Specifies the device paths. If the device path specified in this field does not exist, or the device is not supported by {{ lvms }}, the `LVMCluster` CR moves to the `Failed` state.
    *   `optionalPaths`: Specifies the optional device paths. If the device path specified in this field does not exist, or the device is not supported by {{ lvms }}, {{ lvms }} ignores the device without causing an error. 

        :::important

        After a device is added to the LVM volume group, it cannot be removed.
        
        :::

1.  Save the `LVMCluster` CR.