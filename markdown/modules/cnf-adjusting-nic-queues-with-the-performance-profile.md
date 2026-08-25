{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adjusting the NIC queues with the performance profile {id="adjusting-nic-queues-with-the-performance-profile_{{ context }}"}

You can use a performance profile to adjust the queue count for each network device. By using the Node Tuning Operator, you can reduce NIC queues for enhanced performance.  {._abstract}

Supported network devices:

*   Non-virtual network devices
*   Network devices that support multiple queues (channels)

Unsupported network devices:

*   Pure software network interfaces
*   Block devices
*   Intel DPDK virtual functions

**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.
*   Install the {{ oc_first }}.

**Procedure**

1.  Log in to the {{ product_title }} cluster running the Node Tuning Operator as a user with `cluster-admin` privileges.
1.  Create and apply a performance profile appropriate for your hardware and topology. For guidance on creating a profile, see the "Creating a performance profile" section.
1.  Edit this created performance profile:
    ```terminal
    $ oc edit -f <your_profile_name>.yaml
    ```
1.  Populate the `spec` field with the `net` object. The object list can contain two fields:
    *   `userLevelNetworking` is a required field specified as a boolean flag. If `userLevelNetworking` is `true`, the queue count is set to the reserved CPU count for all supported devices. The default is `false`.
    *   `devices` is an optional field specifying a list of devices that will have the queues set to the reserved CPU count. If the device list is empty, the configuration applies to all network devices. The configuration is as follows:
        *   `interfaceName`: This field specifies the interface name, and it supports shell-style wildcards, which can be positive or negative.
            *   Example wildcard syntax is as follows: `<string> .*`
            *   Negative rules are prefixed with an exclamation mark. To apply the net queue changes to all devices other than the excluded list, use  `!<device>`, for example, `!eno1`.
        *   `vendorID`: The network device vendor ID represented as a 16-bit hexadecimal number with a `0x` prefix.
        *   `deviceID`: The network device ID (model) represented as a 16-bit hexadecimal number with a `0x` prefix.

            :::note

            When a `deviceID` is specified, the `vendorID` must also be defined. A device that matches all of the device identifiers specified in a device entry `interfaceName`, `vendorID`, or a pair of `vendorID` plus `deviceID` qualifies as a network device. This network device then has its net queues count set to the reserved CPU count.

            When two or more devices are specified, the net queues count is set to any net device that matches one of them.
            
            :::

1.  Set the queue count to the reserved CPU count for all devices by using this example performance profile:
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: manual
    spec:
      cpu:
        isolated: 3-51,55-103
        reserved: 0-2,52-54
      net:
        userLevelNetworking: true
      nodeSelector:
        node-role.kubernetes.io/worker-cnf: ""
    # ...
    ```
1.  Set the queue count to the reserved CPU count for all devices matching any of the defined device identifiers by using this example performance profile:
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: manual
    spec:
      cpu:
        isolated: 3-51,55-103
        reserved: 0-2,52-54
      net:
        userLevelNetworking: true
        devices:
        - interfaceName: "eth0"
        - interfaceName: "eth1"
        - vendorID: "0x1af4"
          deviceID: "0x1000"
      nodeSelector:
        node-role.kubernetes.io/worker-cnf: ""
    # ...
    ```
1.  Set the queue count to the reserved CPU count for all devices starting with the interface name `eth` by using this example performance profile:
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: manual
    spec:
      cpu:
        isolated: 3-51,55-103
        reserved: 0-2,52-54
      net:
        userLevelNetworking: true
        devices:
        - interfaceName: "eth*"
      nodeSelector:
        node-role.kubernetes.io/worker-cnf: ""
    # ...
    ```
1.  Set the queue count to the reserved CPU count for all devices with an interface named anything other than `eno1` by using this example performance profile:
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: manual
    spec:
      cpu:
        isolated: 3-51,55-103
        reserved: 0-2,52-54
      net:
        userLevelNetworking: true
        devices:
        - interfaceName: "!eno1"
      nodeSelector:
        node-role.kubernetes.io/worker-cnf: ""
    # ...
    ```
1.  Set the queue count to the reserved CPU count for all devices that have an interface name `eth0`, `vendorID` of `0x1af4`, and `deviceID` of `0x1000` by using this example performance profile:
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: manual
    spec:
      cpu:
        isolated: 3-51,55-103
        reserved: 0-2,52-54
      net:
        userLevelNetworking: true
        devices:
        - interfaceName: "eth0"
        - vendorID: "0x1af4"
          deviceID: "0x1000"
      nodeSelector:
        node-role.kubernetes.io/worker-cnf: ""
    # ...
    ```
1.  Apply the updated performance profile:
    ```terminal
    $ oc apply -f <your_profile_name>.yaml
    ```