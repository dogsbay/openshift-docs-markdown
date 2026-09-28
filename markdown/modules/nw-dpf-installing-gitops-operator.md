{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the GitOps Operator {id="nw-dpf-installing-gitops-operator_{{ context }}"}

The {{ gitops_title }} manages DPF service deployments and configurations using GitOps principles.
You install this operator by using the OpenShift CLI. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create a file named `gitops-operator.yaml` with the following content:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-gitops-operator
      labels:
        openshift.io/cluster-monitoring: "true"
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-gitops-operator
      namespace: openshift-gitops-operator
    spec:
      upgradeStrategy: Default
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-gitops-operator
      namespace: openshift-gitops-operator
    spec:
      channel: gitops-1.21
      config:
        env:
        - name: ARGOCD_CLUSTER_CONFIG_NAMESPACES
          value: "openshift-gitops,dpf-operator-system"
        - name: CONTROLLER_CLUSTER_ROLE
          value: "cluster-admin"
        - name: SERVER_CLUSTER_ROLE
          value: "cluster-admin"
      installPlanApproval: Automatic
      name: openshift-gitops-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```
1.  Apply the file:
    ```terminal
    $ oc apply -f gitops-operator.yaml
    ```

**Verification**

*   Wait for the Argo CD custom resource definition to be created and established before creating an `ArgoCD` resource:
    ```terminal
    $ oc wait crd/argocds.argoproj.io --for=create --timeout=10m
    $ oc wait crd/argocds.argoproj.io --for=condition=Established --timeout=5m
    ```