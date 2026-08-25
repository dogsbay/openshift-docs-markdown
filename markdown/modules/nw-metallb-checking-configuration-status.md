{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking MetalLB configuration status {id="nw-metallb-checking-configuration-status_{{ context }}"}

You can verify that the MetalLB controller and speakers have successfully applied the current configuration by viewing the `ConfigurationState` custom resource (CR). MetalLB creates a `ConfigurationState` resource for the controller and one for each speaker node. These resources report whether the configuration is valid and surface error details when validation fails, such as incompatible custom resources. {._abstract}

**Prerequisites**

*   You have an {{ product_title }} cluster with the MetalLB Operator installed.
*   You have deployed a MetalLB instance.
*   You have configured MetalLB resources such as `IPAddressPool`, `BGPPeer`, `BFDProfile`, `Community`, or `FRRConfiguration`.

**Procedure**

1.  List the `ConfigurationState` resources by running the following command:
    ```terminal
    $ oc get configurationstates -n metallb-system
    ```
    ```terminal title="Example output"
    NAME                         RESULT   ERRORSUMMARY   AGE
    controller                   Valid                   75m
    speaker-mysno-sno.demo.lab   Valid                   28m
    ```

    The `controller` resource shows the status for the MetalLB controller. Each `speaker-<node-name>` resource shows the status for the speaker on that node.
1.  Verify that the controller has a valid configuration by inspecting the `ConfigurationState` details. Run the following command:
    ```terminal
    $ oc get configurationstates controller -n metallb-system -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: metallb.io/v1beta1
    kind: ConfigurationState
    metadata:
      creationTimestamp: "2026-04-21T09:46:47Z"
      generation: 1
      labels:
        metallb.io/component-type: controller
      name: controller
      namespace: metallb-system
      resourceVersion: "28268"
      uid: 23f5c492-4d5c-4893-84ea-77904c006404
    status:
      conditions:
      - lastTransitionTime: "2026-04-21T09:54:00Z"
        message: ""
        reason: Reconciled
        status: "True"
        type: poolReconcilerValid
      result: Valid
    ```

    Confirm that the output has the following values:
    *   `result: Valid` indicates that all configured resources are compatible and active. If this value is `Invalid`, check the `errorSummary` field for aggregated error messages that identify which part of the configuration has failed.
    *   `message: Describes any configuration problem that occurs.  Here, `""` confirms that no errors were reported.
    *   `reason: Reconciled` with `status: "True"` confirms that the reconciler has successfully processed the configuration. If the `reason` is `ReconciliationFailed` and `status` is `"False"`, the `message` field contains details about the failure.

        :::note

        The controller does not validate peer-level settings. Errors such as a missing `BFDProfile`, undefined `Community`, or missing authentication secret are reported only by the speakers. A `Valid` controller with one or more `Invalid` speakers is expected in these cases. Always check both controller and speaker `ConfigurationState` resources.
        
        :::


        If the configuration is invalid, the output is similar to the following example:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: ConfigurationState
        metadata:
          creationTimestamp: "2026-04-21T09:51:17Z"
          generation: 1
          labels:
            metallb.io/component-type: speaker
            metallb.io/node-name: mysno-sno.demo.lab
          name: speaker-mysno-sno.demo.lab
          namespace: metallb-system
          resourceVersion: "31161"
          uid: 339781bf-ec9a-4ba9-aaba-0a9ac8ebce78
        status:
          conditions:
          - lastTransitionTime: "2026-04-21T10:09:34Z"
            message: 'configuration error: peer peer1 referencing non existing bfd profile
              my-bfd-profile'
            reason: ConfigurationError
            status: "False"
            type: configReconcilerValid
          errorSummary: 'configuration error: peer peer1 referencing non existing bfd profile
            my-bfd-profile'
          result: Invalid
        ```

        Confirm that the output has the following values to identify the problem:
    *   `result: Invalid` indicates that one or more configured resources are incompatible. The `errorSummary` field provides an aggregated description of the problem.
    *   `reason: ConfigurationError` with `status: "False"` indicates that the reconciler failed to process the configuration. The `message` field describes the specific error.
    *   In this example, the `BGPPeer` resource `peer1` references a `BFDProfile` named `my-bfd-profile` that does not exist. To resolve this error, either create the missing `BFDProfile` resource or update the `BGPPeer` to reference an existing `BFDProfile`.

        :::note

        The `ConfigurationState` resource does not report errors that arise when the configuration applied by the speaker to the `frr-k8s` daemon conflicts with other external configurations within that daemon.
        
        :::

1.  After correcting the configuration, verify that the status shows a valid configuration by running the following command:
    ```terminal
    $ oc get configurationstates -n metallb-system -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.status.result}{"\n"}{end}'
    ```

    A return value of `Valid` for all entries confirms that the MetalLB controller and speakers are operating with a valid configuration.