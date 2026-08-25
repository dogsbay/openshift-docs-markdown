{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the SR-IOV Operator for {{ hcp }} {id="sriov-operator-hosted-control-planes_{{ context }}"}

After you configure and deploy your hosting service cluster, you can create a subscription to the SR-IOV Operator on a hosted cluster. The SR-IOV pod runs on worker machines rather than the control plane. {._abstract}

**Prerequisites**

You must configure and deploy the hosted cluster on AWS.

**Procedure**

1.  Create a namespace and an Operator group:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-sriov-network-operator
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: sriov-network-operators
      namespace: openshift-sriov-network-operator
    spec:
      targetNamespaces:
      - openshift-sriov-network-operator
    ```
1.  Create a subscription to the SR-IOV Operator:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: sriov-network-operator-subsription
      namespace: openshift-sriov-network-operator
    spec:
      channel: stable
      name: sriov-network-operator
      config:
        nodeSelector:
          node-role.kubernetes.io/worker: ""
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```

**Verification**

1.  To verify that the SR-IOV Operator is ready, run the following command and view the resulting output:
    ```terminal
    $ oc get csv -n openshift-sriov-network-operator
    ```
    ```terminal title="Example output" {minja}
    NAME                                         DISPLAY                   VERSION               REPLACES                                     PHASE
    sriov-network-operator.{{ product_version }}.0-202211021237   SR-IOV Network Operator   {{ product_version }}.0-202211021237   sriov-network-operator.{{ product_version }}.0-202210290517   Succeeded
    ```
1.  To verify that the SR-IOV pods are deployed, run the following command:
    ```terminal
    $ oc get pods -n openshift-sriov-network-operator
    ```