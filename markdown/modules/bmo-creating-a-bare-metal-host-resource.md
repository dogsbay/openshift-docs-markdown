{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a bare-metal host resource {id="bmo-creating-a-bare-metal-host-resource_{{ context }}"}

To deploy a bare-metal host, you must create a `BareMetalHost` resource. {._abstract}

**Procedure**

1.  Create a `BareMetalHost` custom resource (CR) file by running the following command:
    ```terminal
    $ vim bmaas-<name>-bmh.yaml
    ```

    &lt;name>
    :       Replace `<name>` with the name of the bare-metal host.

1.  Edit the CR: 
    ```yaml
    apiVersion: metal3.io/v1alpha1
    kind: BareMetalHost
    metadata:
      name: bmaas-<name>
      namespace:  bmaas
    spec:
      online: true
      bootMACAddress: <mac_addr>
      bmc:
        address: redfish-virtualmedia+<address>/redfish/v1/Systems/System.Embedded.1 
        credentialsName: bmaas-<num>-bmc-secret
    ```

    &lt;mac_addr>
    :       Replace `<mac_addr>` with the MAC address of the first NIC on the bare-metal host.

    &lt;address>
    :       Replace `<address>` with IP address or FQDN of the host.

1.  Apply the CR by running the following command:
    ```terminal
    $ oc apply -f bmaas-<name>-bmh.yaml
    ```

**Verification**

*   Check the `BareMetalHost` state by running the following command: 
    ```terminal
    $ oc get baremetalhost -n bmaas
    ```

    The state progresses from **registering**, to **inspecting**, and finally to **available**.