{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Compliance Operator on {{ hcp }} {id="installing-compliance-operator-hcp_{{ context }}"}

Install the Compliance Operator on {{ hcp }} by creating a `Subscription` file in the software catalog so you can run compliance scans in a hosted control plane environment. {._abstract}

{%- set FeatureName = "{{ hcp_capital }}" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You must have `admin` privileges.

**Procedure**

1.  Define a `Namespace` object similar to the following:
    ```yaml title="Example namespace-object.yaml"
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        openshift.io/cluster-monitoring: "true"
        pod-security.kubernetes.io/enforce: privileged
      name: openshift-compliance
    ```
    *   In {{ product_title }} {{ product_version }}, the pod security label must be set to `privileged` at the namespace level.
1.  Create the `Namespace` object by running the following command:
    ```terminal
    $ oc create -f namespace-object.yaml
    ```
1.  Define an `OperatorGroup` object:
    ```yaml title="Example operator-group-object.yaml"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: compliance-operator
      namespace: openshift-compliance
    spec:
      targetNamespaces:
      - openshift-compliance
    ```
1.  Create the `OperatorGroup` object by running the following command:
    ```terminal
    $ oc create -f operator-group-object.yaml
    ```
1.  Define a `Subscription` object:
    ```yaml title="Example subscription-object.yaml"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: compliance-operator-sub
      namespace: openshift-compliance
    spec:
      channel: "stable"
      installPlanApproval: Automatic
      name: compliance-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      config:
        nodeSelector:
          node-role.kubernetes.io/worker: ""
        env:
        - name: PLATFORM
          value: "HyperShift"
    ```
1.  Create the `Subscription` object by running the following command:
    ```terminal
    $ oc create -f subscription-object.yaml
    ```

**Verification**

1.  Verify the installation succeeded by inspecting the CSV file by running the following command:
    ```terminal
    $ oc get csv -n openshift-compliance
    ```
1.  Verify that the Compliance Operator is up and running by running the following command:
    ```terminal
    $ oc get deploy -n openshift-compliance
    ```