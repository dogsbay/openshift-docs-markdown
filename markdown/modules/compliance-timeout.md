{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring ScanSetting timeout {id="compliance-timeout_{{ context }}"}

The `ScanSetting` object has a timeout option that you can specify in the `ComplianceScanSetting` object as a duration string, such as `1h30m`. If the scan does not finish within the specified timeout, the scan reattempts until the `maxRetryOnTimeout` limit is reached. {._abstract}

**Procedure**

*   To set a `timeout` and `maxRetryOnTimeout` in ScanSetting, modify an existing `ScanSetting` object:
    ```yaml
    apiVersion: compliance.openshift.io/v1alpha1
    kind: ScanSetting
    metadata:
      name: default
      namespace: openshift-compliance
    rawResultStorage:
      rotation: 3
      size: 1Gi
    roles:
    - worker
    - master
    scanTolerations:
    - effect: NoSchedule
      key: node-role.kubernetes.io/master
      operator: Exists
    schedule: '0 1 * * *'
    timeout: '10m0s'
    maxRetryOnTimeout: 3
    ```

    where:

    `timeout`
    :   Specifies a duration string, such as `1h30m`. The default value is `30m`. To disable the timeout, set the value to `0s`.

    `maxRetryOnTimeout`
    :   Specifies the `maxRetryOnTimeout` variable defines how many times a retry is attempted. The default value is `3`.