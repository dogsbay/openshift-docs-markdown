{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scheduling the result server pod on a worker node {id="running-compliance-scans-worker-node_{{ context }}"}

The result server pod mounts the persistent volume (PV) that stores the raw Asset Reporting Format (ARF) scan results. You can use the `nodeSelector` and `tolerations` attributes to configure the location of the result server pod to meet your organization’s requirements. {._abstract}

This is helpful for those environments where control plane nodes are not permitted to mount persistent volumes.

**Procedure**

*   Create a `ScanSetting` custom resource (CR) for the Compliance Operator:
    1.  Define the `ScanSetting` CR, and save the YAML file, for example, `rs-workers.yaml`:
        ```yaml
        apiVersion: compliance.openshift.io/v1alpha1
        kind: ScanSetting
        metadata:
          name: rs-on-workers
          namespace: openshift-compliance
        rawResultStorage:
          nodeSelector:
            node-role.kubernetes.io/worker: ""
          pvAccessModes:
          - ReadWriteOnce
          rotation: 3
          size: 1Gi
          tolerations:
          - operator: Exists
        roles:
        - worker
        - master
        scanTolerations:
          - operator: Exists
        schedule: 0 1 * * *
        ```

        where:

        `rawResultStorage.nodeSelector.node-role.kubernetes.io/worker`
        :   Specifies the Compliance Operator uses this node to store scan results in ARF format.

        `rawResultStorage.tolerations.operator`
        :   Specifies the result server pod tolerates all taints.

    1.  To create the `ScanSetting` CR, run the following command:
        ```terminal
        $ oc create -f rs-workers.yaml
        ```

**Verification**

*   To verify that the `ScanSetting` object is created, run the following command:
    ```terminal
    $ oc get scansettings rs-on-workers -n openshift-compliance -o yaml
    ```
    ```terminal title="Example output"
    apiVersion: compliance.openshift.io/v1alpha1
    kind: ScanSetting
    metadata:
      creationTimestamp: "2021-11-19T19:36:36Z"
      generation: 1
      name: rs-on-workers
      namespace: openshift-compliance
      resourceVersion: "48305"
      uid: 43fdfc5f-15a7-445a-8bbc-0e4a160cd46e
    rawResultStorage:
      nodeSelector:
        node-role.kubernetes.io/worker: ""
      pvAccessModes:
      - ReadWriteOnce
      rotation: 3
      size: 1Gi
      tolerations:
      - operator: Exists
    roles:
    - worker
    - master
    scanTolerations:
    - operator: Exists
    schedule: 0 1 * * *
    strictNodeScan: true
    ```