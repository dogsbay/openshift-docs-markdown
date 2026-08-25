{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling each machine set to compute nodes {id="creating-scaling-machine-sets-compute-nodes-networking_{{ context }}"}

To scale each machine set to compute nodes, you must apply a customized `br-ex` bridge configuration to all compute nodes in your {{ product_title }} cluster. You must then edit your `MachineConfig` custom resource (CR) and modify its roles.  {._abstract}

Additionally, you must create a `BareMetalHost` CR that defines information for your bare-metal machine, such as hostname, credentials, and your other required parameters. After you configure these resources, you must scale machine sets, so that the machine sets can apply the resource configuration to each compute node and reboot the nodes.

**Prerequisites**

*   You created a `MachineConfig` manifest object that includes a customized `br-ex` bridge configuration.

**Procedure**

1.  Edit the `MachineConfig` CR by entering the following command:
    ```terminal
    $ oc edit mc <machineconfig_custom_resource_name>
    ```
1.  Add each compute node configuration to the CR, so that the CR can manage roles for each defined compute node in your cluster.
1.  Create a `Secret` object named `extraworker-secret` that has a minimal static IP configuration.
1.  Apply the `extraworker-secret` secret to each node in your cluster by entering the following command. This step provides each compute node access to the Ignition config file.
    ```terminal
    $ oc apply -f ./extraworker-secret.yaml
    ```
1.  Create a `BareMetalHost` resource and specify the network secret in the `preprovisioningNetworkDataName` parameter:
    ```yaml title="Example BareMetalHost resource with an attached network secret"
    apiVersion: metal3.io/v1alpha1
    kind: BareMetalHost
    spec:
    # ...
      preprovisioningNetworkDataName: ostest-extraworker-0-network-config-secret
    # ...
    ```
1.  To manage the `BareMetalHost` object within the `openshift-machine-api` namespace of your cluster, change to the namespace by entering the following command:
    ```terminal
    $ oc project openshift-machine-api
    ```
1.  Get the machine sets:
    ```terminal
    $ oc get machinesets
    ```
1.  Scale each machine set by entering the following command. You must run this command for each machine set.
    ```terminal
    $ oc scale machineset <machineset_name> --replicas=<n>
    ```

    where:

    `<machineset_name>`
    :   Specifies the name of the machine set.

    `<n>`
    :   Specifies the number of compute nodes.