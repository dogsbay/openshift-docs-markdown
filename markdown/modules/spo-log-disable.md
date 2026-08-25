{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling Advanced Audit Logging {id="spo-log-disable_{{ context }}"}

You can disable advanced audit logging and revert all configurations by deleting the test pod, the `seccompProfile`, the JSON Log Enricher and resetting all `spod` pod options. {._abstract}

**Procedure**

1.  Delete the test pod with the following command:
    ```terminal
    oc delete pod my-pod
    ```
1.  Delete the `seccompProfile` using this command:
    ```terminal
    oc delete seccompprofile profile1 -n openshift-security-profiles
    ```
1.  Disable the JSON Log Enricher and reset all options:
    ```terminal
    oc patch spod spod -n openshift-security-profiles --type merge -p '{ "spec": { "enableJsonEnricher": false, "jsonEnricherOptions": { "auditLogPath": "", "auditLogMaxSize": 0, "auditLogMaxBackups": 0, "auditLogMaxAge": 0, "auditLogIntervalSeconds": 0 } }}'
    ```
1.  Wait for `spod` pods to restart. Run the following command to check:
    ```terminal
    oc get pods -n openshift-security-profiles -l name=spod -w
    ```

    Wait until all `spod` pods show `Running`.
1.  Revert the ConfigMap volume patch with the following command:
    ```terminal
    oc patch configmap security-profiles-operator-profile -n openshift-security-profiles --type merge -p '{"data":{"patch-volume-source.json":""}}'
    ```
1.  Verify that the configuration has been successfully updated:
    ```terminal
    oc get spod spod -n openshift-security-profiles -o jsonpath='{.spec.enableJsonEnricher}'
    ```

    Expected output:
    ```terminal
    false
    ```