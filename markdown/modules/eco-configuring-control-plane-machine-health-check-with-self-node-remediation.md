{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring control-plane machine health checks to use the Self Node Remediation Operator {id="configuring-control-plane-machine-health-check-with-self-node-remediation-operator_{{ context }}"}

Use the following procedure to configure the control-plane machine health checks to use the Self Node Remediation Operator as a remediation provider.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a `SelfNodeRemediationTemplate` CR:
    1.  Define the `SelfNodeRemediationTemplate` CR:
        ```yaml
        apiVersion: self-node-remediation.medik8s.io/v1alpha1
        kind: SelfNodeRemediationTemplate
        metadata:
          namespace: openshift-machine-api
          name: selfnoderemediationtemplate-sample
        spec:
          template:
            spec:
              remediationStrategy: ResourceDeletion (1)
        ```
        1.  Specifies the remediation strategy. The default strategy is `ResourceDeletion`.
    1.  To create the `SelfNodeRemediationTemplate` CR, run the following command:
        ```terminal
        $ oc create -f <snrt-name>.yaml
        ```
1.  Create or update the `MachineHealthCheck` CR to point to the `SelfNodeRemediationTemplate` CR:
    1.  Define or update the `MachineHealthCheck` CR:
        ```yaml
        apiVersion: machine.openshift.io/v1beta1
        kind: MachineHealthCheck
        metadata:
          name: machine-health-check
          namespace: openshift-machine-api
        spec:
          selector:
            matchLabels:
              machine.openshift.io/cluster-api-machine-role: "control-plane"
              machine.openshift.io/cluster-api-machine-type: "control-plane"
          unhealthyConditions:
          - type:    "Ready"
            timeout: "300s"
            status: "False"
          - type:    "Ready"
            timeout: "300s"
            status: "Unknown"
          maxUnhealthy: "40%"
          nodeStartupTimeout: "10m"
          remediationTemplate: (1)
            kind: SelfNodeRemediationTemplate
            apiVersion: self-node-remediation.medik8s.io/v1alpha1
            name: selfnoderemediationtemplate-sample
        ```
        1.  Specifies the details for the remediation template.

    1.  To create a `MachineHealthCheck` CR, run the following command:
        ```terminal
        $ oc create -f <mhc-name>.yaml
        ```
    1.  To update a `MachineHealthCheck` CR, run the following command:
        ```terminal
        $ oc apply -f <mhc-name>.yaml
        ```