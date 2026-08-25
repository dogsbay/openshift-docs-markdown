{%- set _mod_docs_content_type = "PROCEDURE" %}
# Fetching compliance remediation details {id="fetching-compliance-remediation-details_{{ context }}"}

The Compliance Operator provides remediation objects that are used to automate the changes required to make the cluster compliant. You can use the `fetch-fixes` subcommand to help you understand exactly which configuration remediations are used.
 
The `fetch-fixes` extracts the remediation objects from a profile, rule, or `ComplianceRemediation` object into a directory for you to inspect. {._abstract}


:::warning

Use caution before applying remediations directly. Some remediations might not be applicable in bulk, such as the usbguard rules in the moderate profile. In these cases, allow the Compliance Operator to apply the rules because it addresses the dependencies and ensures that the cluster remains in a good state.

:::


**Procedure**

1.  View the remediations for a profile:
    ```terminal
    $ oc compliance fetch-fixes profile ocp4-cis -o /tmp
    ```
    ```terminal title="Example output"
    No fixes to persist for rule 'ocp4-api-server-api-priority-flowschema-catch-all'
    No fixes to persist for rule 'ocp4-api-server-api-priority-gate-enabled'
    No fixes to persist for rule 'ocp4-api-server-audit-log-maxbackup'
    Persisted rule fix to /tmp/ocp4-api-server-audit-log-maxsize.yaml
    No fixes to persist for rule 'ocp4-api-server-audit-log-path'
    No fixes to persist for rule 'ocp4-api-server-auth-mode-no-aa'
    No fixes to persist for rule 'ocp4-api-server-auth-mode-node'
    No fixes to persist for rule 'ocp4-api-server-auth-mode-rbac'
    No fixes to persist for rule 'ocp4-api-server-basic-auth'
    No fixes to persist for rule 'ocp4-api-server-bind-address'
    No fixes to persist for rule 'ocp4-api-server-client-ca'
    Persisted rule fix to /tmp/ocp4-api-server-encryption-provider-cipher.yaml
    Persisted rule fix to /tmp/ocp4-api-server-encryption-provider-config.yaml
    ```

    :::note

    The `No fixes to persist` warning is expected whenever there are rules in a profile that do not have a corresponding remediation, because either the rule cannot be remediated automatically or a remediation was not provided.
    
    :::

1.  You can view a sample of the YAML file. The `head` command will show you the first 10 lines:
    ```terminal
    $ head /tmp/ocp4-api-server-audit-log-maxsize.yaml
    ```
    ```terminal title="Example output"
    apiVersion: config.openshift.io/v1
    kind: APIServer
    metadata:
      name: cluster
    spec:
      maximumFileSizeMegabytes: 100
    ```
1.  View the remediation from a `ComplianceRemediation` object created after a scan:
    ```terminal
    $ oc get complianceremediations -n openshift-compliance
    ```
    ```terminal title="Example output"
    NAME                                             STATE
    ocp4-cis-api-server-encryption-provider-cipher   NotApplied
    ocp4-cis-api-server-encryption-provider-config   NotApplied
    ```
    ```terminal
    $ oc compliance fetch-fixes complianceremediations ocp4-cis-api-server-encryption-provider-cipher -o /tmp
    ```
    ```terminal title="Example output"
    Persisted compliance remediation fix to /tmp/ocp4-cis-api-server-encryption-provider-cipher.yaml
    ```
1.  You can view a sample of the YAML file. The `head` command will show you the first 10 lines:
    ```terminal
    $ head /tmp/ocp4-cis-api-server-encryption-provider-cipher.yaml
    ```
    ```terminal title="Example output"
    apiVersion: config.openshift.io/v1
    kind: APIServer
    metadata:
      name: cluster
    spec:
      encryption:
        type: aescbc
    ```