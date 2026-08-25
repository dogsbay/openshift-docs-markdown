{%- set _mod_docs_content_type = "PROCEDURE" %}
# Ensuring PTP and SR-IOV daemon selector compatibility {id="ztp-additional-worker-daemon-selector-comp_{{ context }}"}

If the DU profile was deployed using the {{ ztp_first }} plugin version 4.11 or earlier, the PTP and SR-IOV Operators might be configured to place the daemons only on nodes labeled as `master`. This configuration prevents the PTP and SR-IOV daemons from operating on the worker node. If the PTP and SR-IOV daemon node selectors are incorrectly configured on your system, you must change the daemons before proceeding with the worker DU profile configuration. {._abstract}

**Procedure**

1.  Check the daemon node selector settings of the PTP Operator on one of the spoke clusters:
    ```terminal
    $ oc get ptpoperatorconfig/default -n openshift-ptp -ojsonpath='{.spec}' | jq
    ```

    The following is example output for the PTP Operator:
    ```json
    {"daemonNodeSelector":{"node-role.kubernetes.io/master":""}}
    ```
    *   If the node selector is set to `master`, the spoke was deployed with the version of the {{ ztp }} plugin that requires changes.
1.  Check the daemon node selector settings of the SR-IOV Operator on one of the spoke clusters:
    ```terminal
    $  oc get sriovoperatorconfig/default -n \
    openshift-sriov-network-operator -ojsonpath='{.spec}' | jq
    ```

    The following is example output for the SR-IOV Operator:
    ```json
    {"configDaemonNodeSelector":{"node-role.kubernetes.io/worker":""},"disableDrain":false,"enableInjector":true,"enableOperatorWebhook":true}
    ```
    *   If the node selector is set to `master`, the spoke was deployed with the version of the {{ ztp }} plugin that requires changes.
1.  In the group policy, add the following `complianceType` and `spec` entries:
    ```yaml
    spec:
        - fileName: PtpOperatorConfig.yaml
          policyName: "config-policy"
          complianceType: mustonlyhave
          spec:
            daemonNodeSelector:
              node-role.kubernetes.io/worker: ""
        - fileName: SriovOperatorConfig.yaml
          policyName: "config-policy"
          complianceType: mustonlyhave
          spec:
            configDaemonNodeSelector:
              node-role.kubernetes.io/worker: ""
    ```

    :::important

    Changing the `daemonNodeSelector` field causes temporary PTP synchronization loss and SR-IOV connectivity loss.
    
    :::

1.  Commit the changes in Git, and then push to the Git repository being monitored by the {{ ztp }} ArgoCD application.