{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding custom labels and annotations to a CustomRule object {id="compliance-operator-checkresult-custom-metadata-configure-customrules_{{ context }}"}

For platform checks implemented as a `CustomRule` object and evaluated by the Common Expression Language (CEL) scanner, define labels and annotations on the `CustomRule` metadata. The Compliance Operator copies non-reserved entries onto each generated `ComplianceCheckResult`. {._abstract}

**Prerequisites**

*   You have installed Compliance Operator 1.9.0 or later.
*   You use a `TailoredProfile` (or equivalent workflow) that enables your `CustomRule` for a CEL profile scan.

**Procedure**

1.  Create a `CustomRule` object that includes your metadata in `metadata.labels` and `metadata.annotations`. The following example defines a platform CEL check; replace names, expressions, and metadata with values appropriate for your environment:
    ```yaml
    apiVersion: compliance.openshift.io/v1alpha1
    kind: CustomRule
    metadata:
      name: check-pod-security-standard
      namespace: openshift-compliance
      labels:
        break_severity: critical
        weakness_score: "9.5"
      annotations:
        internal-id: SEC-5500
        audit-contact: platform-security-team
    spec:
      id: check-pod-security-standard
      title: "Ensure Pod Security Standards are enforced"
      severity: high
      checkType: Platform
      scannerType: CEL
      expression: |
        namespaces.items.all(ns,
          has(ns.metadata.labels) &&
          "pod-security.kubernetes.io/enforce" in ns.metadata.labels
        )
      failureReason: "One or more namespaces do not enforce Pod Security Standards"
      inputs:
        - name: namespaces
          kubernetesInputSpec:
            apiVersion: v1
            resource: namespaces
    ```
1.  Apply the manifest by running the following command:
    ```terminal
    $ oc apply -f custom-rule.yaml
    ```
1.  Reference the `CustomRule` object from a `TailoredProfile`, for example:
    ```yaml
    apiVersion: compliance.openshift.io/v1alpha1
    kind: TailoredProfile
    metadata:
      name: custom-cel-profile
      namespace: openshift-compliance
    spec:
      title: "Custom CEL profile"
      description: "Profile with custom CEL rules"
      enableRules:
        - name: check-pod-security-standard
          rationale: "Enforce pod security standards"
          kind: CustomRule
    ```
1.  Bind the tailored profile with a `ScanSettingBinding` and run the scan using your normal workflow.
1.  After the scan completes, query results by a custom label by running the following command:
    ```terminal
    $ oc get compliancecheckresults \
      -l break_severity=critical \
      -n openshift-compliance
    ```
1.  Identify the `ComplianceCheckResult` name for your `CustomRule` object in the scan output, for example by listing results in the namespace and filtering by labels or name.
1.  Read a propagated annotation from that object by running the following command:
    ```terminal
    $ oc get compliancecheckresult <result_name> \
      -o jsonpath='{.metadata.annotations.internal-id}' \
      -n openshift-compliance
    ```