{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replacing control plane nodes in a two-node OpenShift cluster with fencing {id="installation-replacing-control-plane-nodes_{{ context }}"}

You can replace a failed control plane node in a two-node OpenShift cluster. The replacement node must use the same host name and IP address as the failed node. {._abstract}

**Prerequisites**

*   You have a functioning survivor control plane node.
*   You have verified that either the machine is not running or the node is not ready.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You know the host name and IP address of the failed node.


:::note

Do an etcd backup before proceeding to ensure that you can restore the cluster if any issues occur.

:::


**Procedure**

1.  Check the quorum state by running the following command:
    ```terminal
    $ sudo pcs quorum status
    ```
    ```terminal title="Example output"
    Quorum information
    ------------------
    Date:             Fri Oct  3 14:15:31 2025
    Quorum provider:  corosync_votequorum
    Nodes:            2
    Node ID:          1
    Ring ID:          1.16
    Quorate:          Yes

    Votequorum information
    ----------------------
    Expected votes:   2
    Highest expected: 2
    Total votes:      2
    Quorum:           1
    Flags:            2Node Quorate WaitForAll

    Membership information
    ----------------------
        Nodeid      Votes    Qdevice Name
             1          1         NR master-0 (local)
             2          1         NR master-1
    ```
    1.  If quorum is lost and one control plane node is still running, restore quorum manually on the survivor node by running the following command:
        ```terminal
        $ sudo pcs quorum unblock
        ```
    1.  If only one node failed, verify that etcd is running on the survivor node by running the following command:
        ```terminal
        $ sudo pcs resource status etcd
        ```
    1.  If etcd is not running, restart etcd by running the following command:
        ```terminal
        $ sudo pcs resource cleanup etcd
        ```

        If etcd still does not start, force it manually on the survivor node, skipping fencing:

        :::important

        Before running this commands, ensure that the node being replaced is inaccessible. Otherwise, you risk etcd corruption.
        
        :::

        ```terminal
        $ sudo pcs resource debug-stop etcd
        ```
        ```terminal
        $ sudo OCF_RESKEY_CRM_meta_notify_start_resource='etcd' pcs resource debug-start etcd
        ```

        After recovery, etcd must be running successfully on the survivor node.
1.  Delete etcd secrets for the failed node by running the following commands:
    ```terminal
    $ oc project openshift-etcd
    ```
    ```terminal
    $ oc delete secret etcd-peer-<node_name>
    ```
    ```terminal
    $ oc delete secret etcd-serving-<node_name>
    ```
    ```terminal
    $ oc delete secret etcd-serving-metrics-<node_name>
    ```

    :::note

    To replace the failed node, you must delete its etcd secrets first. When etcd is running, it might take some time for the API server to respond to these commands.
    
    :::

1.  Delete resources for the failed node:
    1.  If you have the `BareMetalHost` (BMH) objects, list them to identify the host you are replacing by running the following command:
        ```terminal
        $ oc get bmh -n openshift-machine-api
        ```
    1.  Delete the BMH object for the failed node by running the following command:
        ```terminal
        $ oc delete bmh/<bmh_name> -n openshift-machine-api
        ```
    1.  List the `Machine` objects to identify the object that maps to the node that you are replacing by running the following command:
        ```terminal
        $ oc get machines.machine.openshift.io -n openshift-machine-api
        ```
    1.  Get the label with the machine hash value from the `Machine` object by running the following command:
        ```terminal
        $ oc get machines.machine.openshift.io/<machine_name> -n openshift-machine-api \
          -o jsonpath='Machine hash label: {.metadata.labels.machine\.openshift\.io/cluster-api-cluster}{"\n"}'
        ```

        Replace `<machine_name>` with the name of a `Machine` object in your cluster. For example, `ostest-bfs7w-ctrlplane-0`.

        You need this label to provision a new `Machine` object.
    1.  Delete the `Machine` object for the failed node by running the following command:
        ```terminal
        $ oc delete machines.machine.openshift.io/<machine_name>-<failed nodename> -n openshift-machine-api
        ```

        :::note

        The node object is deleted automatically after deleting the `Machine` object.
        
        :::

1.  Recreate the failed host by using the same name and IP address:

    :::important

    You must perform this step only if you are using installer-provisioned infrastructure or the Machine API to create the original node.
    For information about replacing a failed bare-metal control plane node, see "Replacing an unhealthy etcd member on bare metal".
    
    :::

    1.  Remove the BMH and `Machine` objects. The machine controller automatically deletes the node object.
    1.  Provision a new machine by using the following sample configuration:
        ```yaml title="Example Machine object configuration"
        apiVersion: machine.openshift.io/v1beta1
        kind: Machine
        metadata:
          annotations:
            metal3.io/BareMetalHost: openshift-machine-api/{bmh_name}
          finalizers:
          - machine.machine.openshift.io
          labels:
            machine.openshift.io/cluster-api-cluster: {machine_hash_label}
            machine.openshift.io/cluster-api-machine-role: master
            machine.openshift.io/cluster-api-machine-type: master
          name: {machine_name}
          namespace: openshift-machine-api
        spec:
          authoritativeAPI: MachineAPI
          metadata: {}
          providerSpec:
            value:
              apiVersion: baremetal.cluster.k8s.io/v1alpha1
              customDeploy:
                method: install_coreos
              hostSelector: {}
              image:
                checksum: ""
                url: ""
              kind: BareMetalMachineProviderSpec
              metadata:
                creationTimestamp: null
              userData:
                name: master-user-data-managed
        ```
        *   `metadata.annotations.metal3.io/BareMetalHost`: Replace `{{ bmh_name }}` with the name of the BMH object that is associated with the host that you are replacing.
        *   `labels.machine.openshift.io/cluster-api-cluster`: Replace `{{ machine_hash_label }}` with the label that you fetched from the machine you deleted.
        *   `metadata.name`: Replace `{{ machine_name }}` with the name of the machine you deleted.
    1.  Create the new BMH object and the secret to store the BMC credentials by running the following command:
        ```terminal
        cat <<EOF | oc apply -f -
        apiVersion: v1
        kind: Secret
        metadata:
          name: <secret_name>
          namespace: openshift-machine-api
        data:
          password: <password>
          username: <username>
        type: Opaque
        ---
        apiVersion: metal3.io/v1alpha1
        kind: BareMetalHost
        metadata:
          name: {bmh_name}
          namespace: openshift-machine-api
        spec:
          automatedCleaningMode: disabled
          bmc:
            address: <redfish_url>/{uuid}
            credentialsName: <name>
            disableCertificateVerification: true
          bootMACAddress: {boot_mac_address}
          bootMode: UEFI
          externallyProvisioned: false
          online: true
          rootDeviceHints:
            deviceName: /dev/disk/by-id/scsi-<serial_number>
          userData:
            name: master-user-data-managed
            namespace: openshift-machine-api
        EOF
        ```
        *   `metadata.name`: Specify the name of the secret.
        *   `metadata.name`: Replace `{{ bmh_name }}` with the name of the BMH object that you deleted.
        *   `bmc.address`: Replace `{{ uuid }}` with the UUID of the node that you created.
        *   `bmc.credentialsName`: Replace `name` with the name of the secret that you created.
        *   `bootMACAddress`: Specify the MAC address of the provisioning network interface. This is the MAC address the node uses to identify itself when communicating with Ironic during provisioning.
1.  Verify that the new node has reached the `Provisioned` state by running the following command:
    ```terminal
    $ oc get bmh -o wide
    ```

    The value of the `STATUS` column in the output of this command must be `Provisioned`.

    :::note

    The provisioning process can take 10 to 20 minutes to complete.
    
    :::

1.  Verify that both control plane nodes are in the `Ready` state by running the following command:
    ```terminal
    $ oc get nodes
    ```

    The value of the `STATUS` column in the output of this command must be `Ready` for both nodes.
1.  Apply the `detached` annotation to the BMH object to prevent the Machine API from managing it by running the following command:
    ```terminal
    $ oc annotate bmh <bmh_name> -n openshift-machine-api baremetalhost.metal3.io/detached='' --overwrite
    ```
1.  Rejoin the replacement node to the pacemaker cluster by running the following command:

    :::note

    Run the following command on the survivor control plane node, not the node being replaced.
    
    :::

    ```terminal
    $ sudo pcs cluster node remove <node_name>
    ```
    ```terminal
    $ sudo pcs cluster node add <node_name> addr=<node_ip> --start --enable
    ```
1.  Delete stale jobs for the failed node by running the following command:
    ```terminal
    $ oc project openshift-etcd
    ```
    ```terminal
    $ oc delete job tnf-auth-job-<node_name>
    ```
    ```terminal
    $ oc delete job tnf-after-setup-job-<node_name>
    ```

**Verification**

For information about verifying that both control plane nodes and etcd are operating correctly, see "Verifying etcd health in a two-node OpenShift cluster with fencing".