{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add worker nodes by using the Bare Metal Operator {id="nw-dpf-adding-workers-baremetal-operator_{{ context }}"}

You can add DPU-equipped worker nodes to the management cluster by using the Bare Metal Operator to automate provisioning through the cluster API. {._abstract}

**Prerequisites**

*   You have access to the management cluster as a user with the `cluster-admin` role.
*   You have installed the `oc` CLI.
*   You have installed the Bare Metal Operator on the management cluster.
*   Physical worker servers with Redfish-compatible BMC, iDRAC, or iLO access are available.
*   Network connectivity exists from the management cluster to the worker BMC interfaces.
*   You have the BMC IP address and access credentials for each server.
*   You have the MAC address of the management network interface for each server.
*   You have the name of the root disk device for each server.

**Procedure**

1.  Set the following environment variables for the worker node:
    ```terminal
    $ export BMC_IP=<bmc_ip_address>
    $ export BMC_USER=<bmc_username>
    $ export BMC_PASSWORD=<bmc_password>
    $ export WORKER_NAME=<worker_name>
    $ export BOOT_MAC=<management_interface_mac>
    $ export ROOT_DEVICE=<root_device_path>
    ```

    where:

    `<bmc_ip_address>`
    :   Specifies the IP address of the worker node BMC interface.

    `<bmc_username>`
    :   Specifies the username for BMC access.

    `<bmc_password>`
    :   Specifies the password for BMC access.

    `<worker_name>`
    :   Specifies a name for the worker node, such as `worker-01`.

    `<management_interface_mac>`
    :   Specifies the MAC address of the out-of-band management interface, such as `00:00:5E:00:53:01`.

    `<root_device_path>`
    :   Specifies the path to the root disk device, such as `/dev/nvme0n1`.
1.  Verify BMC connectivity from one of the control plane nodes:
    ```terminal
    $ ping $BMC_IP
    ```
    ```terminal
    $ curl -k https://$BMC_IP/redfish/v1/
    ```
    ```terminal
    $ curl -k -u $BMC_USER:$BMC_PASSWORD https://$BMC_IP/redfish/v1/Systems
    ```
1.  Verify that the Bare Metal Operator is available:
    ```terminal
    $ oc get clusteroperator baremetal
    ```
1.  Create a file named `provisioning.yaml` with the following content to disable the provisioning network:
    ```yaml
    apiVersion: metal3.io/v1alpha1
    kind: Provisioning
    metadata:
      name: provisioning-configuration
    spec:
      provisioningNetwork: "Disabled"
      watchAllNamespaces: false
    ```

    :::important

    When `provisioningNetwork` is set to `Disabled`, servers boot by using Redfish virtual media instead of PXE.
    
    :::

1.  Apply the `Provisioning` resource:
    ```terminal
    $ oc apply -f provisioning.yaml
    ```
1.  Create a file named `bmc-secret.yaml` with the following content to store the BMC credentials:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: ${WORKER_NAME}-bmc-secret
      namespace: openshift-machine-api
    type: Opaque
    stringData:
      username: ${BMC_USER}
      password: ${BMC_PASSWORD}
    ```
1.  Apply the BMC credentials secret:
    ```terminal
    $ envsubst < bmc-secret.yaml | oc apply -f -
    ```
1.  Create a file named `machineset-dpu.yaml` with the following content:
    ```yaml
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    metadata:
      name: worker-dpu
      namespace: openshift-machine-api
    spec:
      replicas: 1
      selector:
        matchLabels:
          machine.openshift.io/cluster-api-machineset: worker-dpu
      template:
        metadata:
          labels:
            machine.openshift.io/cluster-api-machineset: worker-dpu
            node-role.kubernetes.io/worker-dpu: ""
        spec:
          metadata:
            labels:
              node-role.kubernetes.io/worker-dpu: ""
          providerSpec:
            value:
              hostSelector:
                matchLabels:
                  dpu-capable: "true"
              customDeploy:
                method: install_coreos
              userData:
                name: worker-dpu-user-data-managed
                namespace: openshift-machine-api
    ```

    The `MachineSet` must be created before the `BareMetalHost` resources.
    It automatically selects `BareMetalHost` resources that are labeled `dpu-capable: "true"`, provisions them, and applies the `node-role.kubernetes.io/worker-dpu=""` label.
    Set `replicas` to match the number of DPU worker nodes.
1.  Apply the `MachineSet` resource:
    ```terminal
    $ oc apply -f machineset-dpu.yaml
    ```
1.  Create a file named `baremetalhost.yaml` with the following content:
    ```yaml
    apiVersion: metal3.io/v1alpha1
    kind: BareMetalHost
    metadata:
      name: $WORKER_NAME
      namespace: openshift-machine-api
      labels:
        dpu-capable: "true"
      annotations:
        inspect.metal3.io: disabled
    spec:
      online: false
      bootMACAddress: $BOOT_MAC
      rootDeviceHints:
        deviceName: $ROOT_DEVICE
      bmc:
        address: redfish-virtualmedia+https://$BMC_IP
        credentialsName: $WORKER_NAME-bmc-secret
        disableCertificateVerification: true
    ```
1.  Apply the `BareMetalHost` resource:
    ```terminal
    $ envsubst < baremetalhost.yaml | oc apply -f -
    ```

**Verification**

*   Monitor the provisioning progress:
    ```terminal
    $ oc get bmh -n openshift-machine-api -w
    ```
    ```terminal title="Example output"
    NAME        STATE          CONSUMER   ONLINE   ERROR   AGE
    worker-01   registering               true             10s
    worker-01   available                 true             30s
    worker-01   provisioning              true             1m
    worker-01   provisioned               true             10m
    ```