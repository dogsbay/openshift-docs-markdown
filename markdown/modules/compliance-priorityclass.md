{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting `PriorityClass` for `ScanSetting` scans {id="compliance-priorityclass_{{ context }}"}

In some clusters, the default `PriorityClass` object can be too low to guarantee pods execute scans on time. To maintain compliance or guarantee automated scanning, you can set the `PriorityClass` variable to ensure the Compliance Operator is always given priority in resource constrained situations. {._abstract}

**Prerequisites**

*   Optional: You have created a `PriorityClass` object. For more information, see "Configuring priority and preemption" in the _Additional resources_.

**Procedure**

*   Set the `PriorityClass` variable:
    ```yaml
    apiVersion: compliance.openshift.io/v1alpha1
    strictNodeScan: true
    metadata:
      name: default
      namespace: openshift-compliance
    priorityClass: compliance-high-priority
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
    scanTolerations:
      - operator: Exists
    ```

    where:

    `PriorityClass`
    :   If the `PriorityClass` referenced in the `ScanSetting` cannot be found, the Operator will leave the `PriorityClass` empty, issue a warning, and continue scheduling scans without a `PriorityClass`.