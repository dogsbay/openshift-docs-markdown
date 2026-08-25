{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a primary network attachment with the Cluster Network Operator {id="nw-multus-create-network_{{ context }}"}

When you specify a primary network to create by using the Cluster Network Operator (CNO), the (CNO) creates the `NetworkAttachmentDefinition` custom resource definition (CRD) automatically and manages it. {._abstract}


:::important

Do not edit the `NetworkAttachmentDefinition` CRDs that the Cluster Network Operator manages. Doing so might disrupt network traffic on your primary network.

:::


**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Optional: Create the namespace for the primary networks:
    ```terminal
    $ oc create namespace <namespace_name>
    ```
1.  To edit the CNO configuration, enter the following command:
    ```terminal
    $ oc edit networks.operator.openshift.io cluster
    ```
1.  Modify the CR that you are creating by adding the configuration for the primary network that you are creating, as in the following example CR.
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: Network
    metadata:
      name: cluster
    spec:
      # ...
      additionalNetworks:
      - name: tertiary-net
        namespace: namespace2
        type: Raw
        rawCNIConfig: |-
          {
            "cniVersion": "0.3.1",
            "name": "tertiary-net",
            "type": "ipvlan",
            "master": "eth1",
            "mode": "l2",
            "ipam": {
              "type": "static",
              "addresses": [
                {
                  "address": "192.168.1.23/24"
                }
              ]
            }
          }
    ```
1.  Save your changes and quit the text editor to commit your changes.

**Verification**

*   Confirm that the CNO created the `NetworkAttachmentDefinition` CRD by running the following command. A delay might exist before the CNO creates the CRD. The expected output shows the name of the NAD CRD and the creation age in minutes.
    ```terminal
    $ oc get network-attachment-definitions -n <namespace>
    ```
    where:


    `<namespace>`
    :   Specifies the namespace for the network attachment that you added to the CNO configuration.