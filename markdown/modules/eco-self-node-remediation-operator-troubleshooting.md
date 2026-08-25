{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting the Self Node Remediation Operator {id="troubleshooting-self-node-remediation-operator_{{ context }}"}

## General troubleshooting {id="general-troubleshooting-self-node-remediation-operator_{{ context }}"}


Issue
:   You want to troubleshoot issues with the Self Node Remediation Operator.


Resolution
:   Check the Operator logs.

## Checking the daemon set {id="checking-daemon-set_{{ context }}"}

Issue
:   The Self Node Remediation Operator is installed but the daemon set is not available.


Resolution
:   Check the Operator logs for errors or warnings.

## Unsuccessful remediation {id="unsuccessful-remediation_{{ context }}"}

Issue
:   An unhealthy node was not remediated.


Resolution
:   Verify that the `SelfNodeRemediation` CR was created by running the following command:
    ```terminal
    $ oc get snr -A
    ```

    If the `MachineHealthCheck` controller did not create the `SelfNodeRemediation` CR when the node turned unhealthy, check the logs of the `MachineHealthCheck` controller. Additionally, ensure that the `MachineHealthCheck` CR includes the required specification to use the remediation template.

    If the `SelfNodeRemediation` CR was created, ensure that its name matches the unhealthy node or the machine object.

## Daemon set and other Self Node Remediation Operator resources exist even after uninstalling the Operator {id="daemon-set-exists_{{ context }}"}

Issue
:   The Self Node Remediation Operator resources, such as the daemon set, configuration CR, and the remediation template CR, exist even after after uninstalling the Operator.


Resolution
:   To remove the Self Node Remediation Operator resources, delete the resources by running the following commands for each resource type:
    ```terminal
    $ oc delete ds <self-node-remediation-ds> -n <namespace>
    ```
    ```terminal
    $ oc delete snrc <self-node-remediation-config> -n <namespace>
    ```
    ```terminal
    $ oc delete snrt <self-node-remediation-template> -n <namespace>
    ```