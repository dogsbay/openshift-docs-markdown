{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ hcp }} management cluster {id="co-hcp-mgmt-config_{{ context }}"}

If you are hosting your own {{ hcp_capital }} or Hypershift environment and want to scan a Hosted Cluster from the management cluster, you will need to set the name and prefix namespace for the target Hosted Cluster. You can achieve this by creating a `TailoredProfile`. {._abstract}


:::important

This procedure only applies to users managing their own {{ hcp }} environment.

:::



:::note

Only `ocp4-cis` and `ocp4-pci-dss` profiles are supported in {{ hcp }} management clusters.

:::


**Prerequisites**

*   The Compliance Operator is installed in the management cluster.

**Procedure**

1.  Obtain the `name` and `namespace` of the hosted cluster to be scanned by running the following command:
    ```terminal
    $ oc get hostedcluster -A
    ```
    ```terminal title="Example output"
    NAMESPACE       NAME                   VERSION   KUBECONFIG                              PROGRESS    AVAILABLE   PROGRESSING   MESSAGE
    local-cluster   79136a1bdb84b3c13217   4.13.5    79136a1bdb84b3c13217-admin-kubeconfig   Completed   True        False         The hosted control plane is available
    ```
1.  In the management cluster, create a `TailoredProfile` extending the scan Profile and define the name and namespace of the Hosted Cluster to be scanned:
    ```yaml title="Example management-tailoredprofile.yaml"
    apiVersion: compliance.openshift.io/v1alpha1
    kind: TailoredProfile
    metadata:
      name: hypershift-cisk57aw88gry
      namespace: openshift-compliance
    spec:
      description: This profile test required rules
      extends: ocp4-cis
      title: Management namespace profile
      setValues:
      - name: ocp4-hypershift-cluster
        rationale: This value is used for HyperShift version detection
        value: 79136a1bdb84b3c13217
      - name: ocp4-hypershift-namespace-prefix
        rationale: This value is used for HyperShift control plane namespace detection
        value: local-cluster
    ```

    where:

    `spec.extends`
    :   Specifies the name of the `Profile` object upon which the `TailoredProfile` is built. Only `ocp4-cis` and `ocp4-pci-dss` profiles are supported in {{ hcp }} management clusters.

    `spec.setValues.value`
    :   Specifies the output in the previous step.

    `spec.setValues.value`
    :   Specifies the `NAMESPACE` from the output in the previous step.

1.  Create the `TailoredProfile`:
    ```terminal
    $ oc create -n openshift-compliance -f mgmt-tp.yaml
    ```