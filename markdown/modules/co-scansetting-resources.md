{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring ScanSetting resources {id="co-scansetting-resources_{{ context }}"}

When using the Compliance Operator in a cluster that contains more than 500 MachineConfigs, the `ocp4-pci-dss-api-checks-pod` pod might pause in the `init` phase when performing a `Platform` scan. {._abstract}


:::note

Resource constraints applied in this process overwrites the existing resource constraints.

:::


**Procedure**

1.  Confirm the `ocp4-pci-dss-api-checks-pod` pod is stuck in the `Init:OOMKilled` status:
    ```terminal
    $ oc get pod ocp4-pci-dss-api-checks-pod -w
    ```
    ```terminal title="Example output"
    NAME                          READY   STATUS     RESTARTS        AGE
    ocp4-pci-dss-api-checks-pod   0/2     Init:1/2   8 (5m56s ago)   25m
    ocp4-pci-dss-api-checks-pod   0/2     Init:OOMKilled   8 (6m19s ago)   26m
    ```
1.  Edit the  `scanLimits` attribute in the `ScanSetting` CR to increase the available memory for the `ocp4-pci-dss-api-checks-pod` pod:
    ```yaml
    timeout: 30m
    strictNodeScan: true
    metadata:
      name: default
      namespace: openshift-compliance
    kind: ScanSetting
    showNotApplicable: false
    rawResultStorage:
      nodeSelector:
        node-role.kubernetes.io/master: ''
      pvAccessModes:
        - ReadWriteOnce
      rotation: 3
      size: 1Gi
      tolerations:
        - effect: NoSchedule
          key: node-role.kubernetes.io/master
          operator: Exists
        - effect: NoExecute
          key: node.kubernetes.io/not-ready
          operator: Exists
          tolerationSeconds: 300
        - effect: NoExecute
          key: node.kubernetes.io/unreachable
          operator: Exists
          tolerationSeconds: 300
        - effect: NoSchedule
          key: node.kubernetes.io/memory-pressure
          operator: Exists
    schedule: 0 1 * * *
    roles:
      - master
      - worker
    apiVersion: compliance.openshift.io/v1alpha1
    maxRetryOnTimeout: 3
    scanTolerations:
      - operator: Exists
    scanLimits:
      memory: 1024Mi
    ```

    where:

    `scanLimits.memory`
    :   Specifies the default setting is `500Mi`.

1.  Apply the `ScanSetting` CR to your cluster: 
    ```terminal
    $ oc apply -f scansetting.yaml
    ```