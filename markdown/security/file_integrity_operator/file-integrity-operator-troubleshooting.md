---
title: Troubleshooting the File Integrity Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting the File Integrity Operator {id="troubleshooting-file-integrity-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "file-integrity-operator" %}

Use the following information to troubleshoot common issues with the File Integrity Operator.

## General troubleshooting {id="_general_troubleshooting"}


Issue
:   You want to generally troubleshoot issues with the File Integrity Operator.


Resolution
:   Enable the debug flag in the `FileIntegrity` object. The `debug` flag increases the verbosity of the daemons that run in the `DaemonSet` pods and run the AIDE checks.

## Checking the AIDE configuration {id="_checking_the_aide_configuration"}


Issue
:   You want to check the AIDE configuration.


Resolution
:   The AIDE configuration is stored in a config map with the same name as the `FileIntegrity` object. All AIDE configuration config maps are labeled with `file-integrity.openshift.io/aide-conf`.

## Determining the FileIntegrity object phase {id="_determining_the_fileintegrity_object_phase"}


Issue
:   You want to determine if the `FileIntegrity` object exists and see its current status.


Resolution
:   To see the current status of the `FileIntegrity` object, run:
    ```terminal
    $ oc get fileintegrities/worker-fileintegrity  -o jsonpath="{ .status }"
    ```

    After the `FileIntegrity` object and the backing daemon set are created, the status should switch to `Active`. If it does not, check the Operator pod logs.

## Determining that the daemon set pods are running on the expected nodes {id="_determining_that_the_daemon_set_pods_are_running_on_the_expected_nodes"}


Issue
:   You want to confirm that the daemon set exists and that its pods are running on the nodes you expect them to run on.


Resolution
:   Run:
    ```terminal
    $ oc -n openshift-file-integrity get pods -lapp=aide-worker-fileintegrity
    ```

    :::note


    Adding `-owide` includes the IP address of the node that the pod is running on.
    
    :::


    To check the logs of the daemon pods, run `oc logs`.

    Check the return value of the AIDE command to see if the check passed or failed.