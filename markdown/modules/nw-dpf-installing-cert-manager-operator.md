{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the cert-manager Operator {id="nw-dpf-installing-cert-manager-operator_{{ context }}"}

The {{ cert_manager_operator }} manages TLS certificates for DPF components.
You install this operator by using the OpenShift CLI. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create a file named `cert-manager-operator.yaml` with the following content:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: cert-manager
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-cert-manager-operator
      namespace: cert-manager
    spec:
      targetNamespaces:
      - cert-manager
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-cert-manager-operator
      namespace: cert-manager
    spec:
      channel: stable-v1
      name: openshift-cert-manager-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```
1.  Apply the file:
    ```terminal
    $ oc apply -f cert-manager-operator.yaml
    ```

**Verification**

*   Verify that the Operator is installed:
    ```terminal
    $ oc get pods -n cert-manager
    ```