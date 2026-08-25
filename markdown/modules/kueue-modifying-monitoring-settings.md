{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying monitoring settings {id="modifying-monitoring-settings_{{ context }}"}

Modify the monitoring settings according to your organization’s requirements to ensure users can access and view the pending workloads in a timely and reliable manner. {._abstract}

This procedure tells you how to modify the resource flow control for the {{ kueue_name }} `VisibilityOnDemand` feature. Modifications directly impact the system’s ability to handle concurrent requests for job visibility information.

**Procedure**

1.  Edit the `PriorityLevelConfiguration` asset for `VisibilityOnDemand` on `Kueue` by running the following command:
    ```terminal
    $ oc edit prioritylevelconfiguration kueue-visibility
    ```
1.  Modify the `nominalConcurrencyShares` field in the `PriorityLevelConfiguration` asset by setting the value for `kueue.openshift.io/allow-nominal-concurrency-shares-update`  to `true`. 

    The possible values you can specify for `nominalConcurrencyShares` are `0`, `2` (the default) until `5`. If you specify a value that is not acceptable (the value `1` or any value above `5`), the default value `2`, is enforced.

    See the following example:
    ```yaml
    apiVersion: flowcontrol.apiserver.k8s.io/v1
    kind: PriorityLevelConfiguration
    metadata:
      name: kueue-visibility
      annotations:
        kueue.openshift.io/allow-nominal-concurrency-shares-update: "false"
    spec:
      limited:
        borrowingLimitPercent: 0
        lendablePercent: 90
        limitResponse:
          queuing:
            handSize: 4
            queueLengthLimit: 50
            queues: 16
          type: Queue
        nominalConcurrencyShares: 2
      type: Limited
    ```

    The default value for `kueue.openshift.io/allow-nominal-concurrency-shares-update` is `false`. If you change the value of `nominalConcurrencyShares` to any value other than `2`, then you must first change the value of `kueue.openshift.io/allow-nominal-concurrency-shares-update` to `true`. Otherwise, the value you assign for `nominalConcurrencyShares` will not take effect.
1.  Verify the value is kept by running the following command:
    ```terminal
    $ oc get prioritylevelconfiguration kueue-visibility
    ```