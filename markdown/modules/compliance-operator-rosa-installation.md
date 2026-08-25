{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Compliance Operator on ROSA hosted control planes (HCP) {id="installing-compliance-operator-rosa_{{ context }}"}

You can install the Compliance Operator on {{ product_rosa }} by using the OpenShift CLI by creating the required namespace, Operator group, and subscription objects. {._abstract}

As of the Compliance Operator 1.5.0 release, the Operator is tested against {{ product_rosa }} using {{ hcp_capital }}.

{{ product_rosa }} {{ hcp_capital }} clusters have restricted access to the control plane, which is managed by Red&#160;Hat. By default, the Compliance Operator will schedule to nodes within the `master` node pool, which is not available in {{ product_rosa }} {{ hcp_capital }} installations. This requires you to configure the `Subscription` object in a way that allows the Operator to schedule on available node pools. This step is necessary for a successful installation on {{ product_rosa }} {{ hcp_capital }} clusters.

**Prerequisites**

*   You must have `admin` privileges.
*   You must have a `StorageClass` resource configured.

**Procedure**

1.  Define a `Namespace` object:
    ```yaml title="Example namespace-object.yaml file"
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        openshift.io/cluster-monitoring: "true"
        pod-security.kubernetes.io/enforce: privileged
      name: openshift-compliance
    ```

    where:

    `metadata.labels.pod-security.kubernetes.io/enforce`
    :   Specifies the pod security label that must be set to `privileged` at the namespace level in {{ product_title }} {{ product_version }}.

1.  Create the `Namespace` object by running the following command:
    ```terminal
    $ oc create -f namespace-object.yaml
    ```
1.  Define an `OperatorGroup` object:
    ```yaml title="Example operator-group-object.yaml file"
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
    ```yaml title="Example subscription-object.yaml file"
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
    ```
    *   Update the Operator deployment to deploy on `worker` nodes.
1.  Create the `Subscription` object by running the following command:
    ```terminal
    $ oc create -f subscription-object.yaml
    ```

**Verification**

1.  Verify that the installation succeeded by running the following command to inspect the cluster service version (CSV) file:
    ```terminal
    $ oc get csv -n openshift-compliance
    ```
1.  Verify that the Compliance Operator is up and running by using the following command:
    ```terminal
    $ oc get deploy -n openshift-compliance
    ```