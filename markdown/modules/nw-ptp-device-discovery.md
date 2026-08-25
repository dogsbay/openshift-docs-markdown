{%- set _mod_docs_content_type = "PROCEDURE" %}
# Discovering PTP-capable network devices in your cluster {id="discover-ptp-devices_{{ context }}"}

Identify PTP-capable network devices that exist in your cluster so that you can configure them  {._abstract}

**Prerequisites**

*   You installed the PTP Operator.

**Procedure**

*   To return a complete list of PTP capable network devices in your cluster, run the following command:
    ```terminal
    $ oc get NodePtpDevice -n openshift-ptp -o yaml
    ```
    ```terminal title="Example output"
    apiVersion: v1
    items:
    - apiVersion: ptp.openshift.io/v1
      kind: NodePtpDevice
      metadata:
        creationTimestamp: "2022-01-27T15:16:28Z"
        generation: 1
        name: dev-worker-0
        namespace: openshift-ptp
        resourceVersion: "6538103"
        uid: d42fc9ad-bcbf-4590-b6d8-b676c642781a
      spec: {}
      status:
        devices:
        - name: eno1
        - name: eno2
        - name: eno3
        - name: eno4
        - name: enp5s0f0
        - name: enp5s0f1
    ...
    ```

    where:

    `-worker-0`
    :   The value for the `name` parameter is the same as the name of the parent node.


    `devices`
    :   The `devices` collection includes a list of the PTP capable devices that the PTP Operator discovers for the node.