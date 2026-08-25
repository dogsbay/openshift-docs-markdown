{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an LVMCluster CR by using the CLI {id="lvms-creating-lvms-cluster-using-cli_{{ context }}"}

You can create an `LVMCluster` custom resource (CR) on a worker node by using the OpenShift CLI (`oc`) to configure storage deployment and provision local storage for your workloads. {._abstract}


:::important

You can only create a single instance of the `LVMCluster` custom resource (CR) on an {{ product_title }} cluster.

:::


**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to {{ product_title }} as a user with `cluster-admin` privileges.
*   You have installed {{ lvms }}.
*   You have installed a worker node in the cluster.
*   You read "About the LVMCluster custom resource".

**Procedure**

1.  Create an `LVMCluster` custom resource (CR) YAML file:
    ```yaml title="Example LVMCluster CR YAML file"
    apiVersion: lvm.topolvm.io/v1alpha1
    kind: LVMCluster
    metadata:
      name: my-lvmcluster
      namespace: openshift-lvm-storage
    spec:
    # ...
      storage:
        deviceClasses:
    # ...
          nodeSelector:
    # ...
          deviceSelector: 
    # ...
          thinPoolConfig:
    # ...
    ```
    *   `spec.storage.deviceClasses`: Specifies the configuration to assign the local storage devices to the LVM volume groups.
    *   `spec...nodeSelector`: Specifies the configuration to choose the nodes on which you want to create the LVM volume group. If this field is empty, all nodes without no-schedule taints are considered.
    *   `spec...deviceSelector`: Specifies the configuration to specify the paths to the devices that you want to add to the LVM volume group, and force wipe the devices that are added to the LVM volume group.  
    *   `spec...thinPoolConfig`: Specifies the configuration to create a thin pool in the LVM volume group. If you exclude this field, logical volumes are thick provisioned.
1.  Create the `LVMCluster` CR by running the following command:
    ```terminal
    $ oc create -f <file_name>
    ```
    ```terminal title="Example output"
    lvmcluster/lvmcluster created
    ```

**Verification**

1.  Check that the `LVMCluster` CR is in the `Ready` state by running the following command:
    ```terminal
    $ oc get lvmclusters.lvm.topolvm.io -o jsonpath='{.items[*].status}' -n <namespace>
    ```
    ```json title="Example output"
    {"deviceClassStatuses":
    [ 
      {
        "name": "vg1", 
        "nodeStatus": [ 
            {
                "devices": [ 
                    "/dev/nvme0n1",
                    "/dev/nvme1n1",
                    "/dev/nvme2n1"
                ],
                "node": "kube-node", 
                "status": "Ready"
            }
        ]
      }
    ]
    "state":"Ready"}
    ```
    *   `deviceClassStatuses`: Specifies the status of the device class. 
    *   `nodeStatus`: Specifies the status of the LVM volume group on each node.
    *   `devices`: Specifies the list of devices used to create the LVM volume group.
    *   `node`: Specifies the node on which the device class is created.
    *   `status`: Specifies the status of the LVM volume group on the node.
    *   `state`: Specifies the status of the `LVMCluster` CR.

        :::note

        If the `LVMCluster` CR is in the `Failed` state, you can view the reason for failure in the `status` field.
       \
        Example of `status` field with the reason for failure:
        ```yaml
        status:
          deviceClassStatuses:
            - name: vg1
              nodeStatus:
                - node: my-node-1.example.com 
                  reason: no available devices found for volume group
                  status: Failed
          state: Failed
        ```
        
        :::

1.  To view the storage classes created by {{ lvms }} for each device class, run the following command:
    ```terminal
    $ oc get storageclass
    ```
    ```terminal title="Example output"
    NAME          PROVISIONER          RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
    lvms-vg1      topolvm.io           Delete          WaitForFirstConsumer   true                   31m
    ```
1.  To view the volume snapshot classes created by {{ lvms }} for each device class, run the following command:
    ```terminal
    $ oc get volumesnapshotclass
    ```
    ```terminal title="Example output"
    NAME          DRIVER               DELETIONPOLICY   AGE
    lvms-vg1      topolvm.io           Delete           24h
    ```