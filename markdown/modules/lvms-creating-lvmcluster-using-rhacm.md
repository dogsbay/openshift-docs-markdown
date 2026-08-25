{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an LVMCluster CR by using {{ rh_rhacm }} {id="lvms-creating-lvmcluster-using-rhacm_{{ context }}"}

After installing {{ lvms_first }} by using {{ rh_rhacm }}, create an `LVMCluster` custom resource (CR) to configure storage deployment, specify devices and volume groups, and provision storage for your workloads. {._abstract}

**Prerequisites**

*   You have installed {{ lvms }} by using {{ rh_rhacm }}.
*   You have access to the {{ rh_rhacm }} cluster using an account with `cluster-admin` permissions.
*   You read the "About the LVMCluster custom resource" section.

**Procedure**

1.  Log in to the {{ rh_rhacm }} CLI using your {{ product_title }} credentials.
1.  Create a `ConfigurationPolicy` CR YAML file with the configuration to create an `LVMCluster` CR:
    ```yaml title="Example ConfigurationPolicy CR YAML file to create an LVMCluster CR"
    apiVersion: policy.open-cluster-management.io/v1
    kind: ConfigurationPolicy
    metadata:
      name: lvms
      namespace: openshift-lvm-storage
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
    # ...
                thinPoolConfig:
    # ...
                nodeSelector:
    # ...
      remediationAction: enforce
      severity: low
    ```
    *   `spec.object-templates.objectDefinition.spec.storage.deviceClasses`: Specifies the configuration to assign the local storage devices to the LVM volume groups.
    *   `spec...deviceSelector`: Contains the configuration to specify the paths to the devices that you want to add to the LVM volume group, and force wipe the devices that are added to the LVM volume group. 
    *   `spec...thinPoolConfig`: Contains the configuration to create a thin pool in the LVM volume group. If you exclude this field, logical volumes are thick provisioned.
    *   `spec...nodeSelector`: Contains the configuration to choose the nodes on which you want to create the LVM volume groups. If this field is empty, then all nodes without no-schedule taints are considered.
1.  Create the `ConfigurationPolicy` CR by running the following command:
    ```terminal
    $ oc create -f <file_name> -n <cluster_namespace>
    ```

    `<cluster_namespace>` is the namespace of the {{ product_title }} cluster on which {{ lvms }} is installed.