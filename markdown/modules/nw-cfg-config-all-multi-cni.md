{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling all-multicast mode by using the tuning CNI {id="nw-enabling-all-multi-cni_{{ context }}"}

To enable all-multicast mode on network interfaces in {{ product_title }}, you can use the tuning Container Network Interface (CNI) meta plugin in a network attachment definition. When enabled, the interface receives all multicast packets on the network. {._abstract}

**Procedure**

1.  Create a network attachment definition, such as `tuning-example.yaml`, with the following content:
    ```yaml
    apiVersion: "k8s.cni.cncf.io/v1"
    kind: NetworkAttachmentDefinition
    metadata:
      name: <name>
      namespace: default
    spec:
      config: '{
        "cniVersion": "0.4.0",
        "name": "<name>",
        "plugins": [{
           "type": "<main_CNI_plugin>"
          },
          {
           "type": "tuning",
           "allmulti": true
            }
          }
         ]
    }
    ```

    where:


    `<name>`
    :   Specifies the name for the additional network attachment to create. The name must be unique within the specified namespace.

    `default`
    :   Specifies the namespace that the object is associated with.

    `"0.4.0"`
    :   Specifies the CNI specification version.

    `"<name>"`
    :   Specifies the name for the configuration. Match the configuration name to the name value of the network attachment definition.

    `"<main_CNI_plugin>"`
    :   Specifies the name of the main CNI plugin to configure.

    `"tuning"`
    :   Specifies the name of the CNI meta plugin.

    `"true"`
    :   Specifies the all-multicast mode of interface. If enabled, all multicast packets on the network will be received by the interface.
    ```yaml title="Example network attachment definition"
    apiVersion: "k8s.cni.cncf.io/v1"
    kind: NetworkAttachmentDefinition
    metadata:
      name: setallmulti
      namespace: default
    spec:
      config: '{
        "cniVersion": "0.4.0",
        "name": "setallmulti",
        "plugins": [
          {
            "type": "bridge"
          },
          {
            "type": "tuning",
            "allmulti": true
          }
        ]
      }'
    ```
1.  Apply the settings specified in the YAML file by running the following command:
    ```terminal
    $ oc apply -f tuning-allmulti.yaml
    ```
    ```terminal title="Example output"
    networkattachmentdefinition.k8s.cni.cncf.io/setallmulti created
    ```
1.  Create a pod with a network attachment definition similar to that specified in the following `examplepod.yaml` sample file:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: allmultipod
      namespace: default
      annotations:
        k8s.v1.cni.cncf.io/networks: setallmulti
    spec:
      containers:
      - name: podexample
        image: centos
        command: ["/bin/bash", "-c", "sleep INF"]
        securityContext:
          runAsUser: 2000
          runAsGroup: 3000
          allowPrivilegeEscalation: false
          capabilities:
            drop: ["ALL"]
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
    ```

    where:


    `metadata.annotations.k8s.v1.cni.cncf.io/networks`
    :   Specifies the name of the configured `NetworkAttachmentDefinition`.

    `spec.containers.securityContext.runAsUser`
    :   Specifies which user ID the container is run with.

    `spec.containers.securityContext.runAsGroup`
    :   Specifies which primary group ID the containers is run with.

    `spec.containers.securityContext.allowPrivilegeEscalation`
    :   Specifies if a pod can request to allow privilege escalation. If unspecified, it defaults to true. This boolean directly controls whether the `no_new_privs` flag gets set on the container process.

    `spec.containers.securityContext.capabilities`
    :   Specifies privileged actions without giving full root access. This policy ensures all capabilities are dropped from the pod.

    `spec.containers.securityContext.runAsNonRoot: true`
    :   Specifies that the container will run with a user with any UID other than 0.

    `spec.containers.securityContext.seccompProfile`
    :   Specifies the default seccomp profile for a pod or container workload.
1.  Apply the settings specified in the YAML file by running the following command:
    ```terminal
    $ oc apply -f examplepod.yaml
    ```
1.  Verify that the pod is created by running the following command:
    ```terminal
    $ oc get pod
    ```
    ```terminal title="Example output"
    NAME          READY   STATUS    RESTARTS   AGE
    allmultipod   1/1     Running   0          23s
    ```
1.  Log in to the pod by running the following command:
    ```terminal
    $ oc rsh allmultipod
    ```
1.  List all the interfaces associated with the pod by running the following command:
    ```terminal
    sh-4.4# ip link
    ```
    ```terminal title="Example output"
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    2: eth0@if22: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 8901 qdisc noqueue state UP mode DEFAULT group default
        link/ether 0a:58:0a:83:00:10 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    3: net1@if24: <BROADCAST,MULTICAST,ALLMULTI,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DEFAULT group default
        link/ether ee:9b:66:a4:ec:1d brd ff:ff:ff:ff:ff:ff link-netnsid 0
    ```

    where:

    `eth0@if22`
    :   Specifies the primary interface.

    `net1@if24`
    :   Specifies the secondary interface configured with the network-attachment-definition that supports the all-multicast mode (ALLMULTI flag).