{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Kubernetes NMState Operator by using the CLI {id="installing-the-kubernetes-nmstate-operator-CLI_{{ context }}"}

You can install the Kubernetes NMState Operator by using the OpenShift CLI (`oc)`. After it is installed, the Operator deploys the NMState State Controller as a daemon set across all of the cluster nodes to manage the node network state and configuration. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You are logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create the `nmstate` Operator namespace:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-nmstate
    spec:
      finalizers:
      - kubernetes
    EOF
    ```
1.  Create the `OperatorGroup`:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-nmstate
      namespace: openshift-nmstate
    spec:
      targetNamespaces:
      - openshift-nmstate
    EOF
    ```
1.  Subscribe to the `nmstate` Operator:
    ```terminal
    $ cat << EOF| oc apply -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: kubernetes-nmstate-operator
      namespace: openshift-nmstate
    spec:
      channel: stable
      installPlanApproval: Automatic
      name: kubernetes-nmstate-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```
1.  Confirm the `ClusterServiceVersion` (CSV) status for the `nmstate` Operator deployment equals `Succeeded`:
    ```terminal
    $ oc get clusterserviceversion -n openshift-nmstate \
     -o custom-columns=Name:.metadata.name,Phase:.status.phase
    ```
1.  Create an instance of the `nmstate` Operator:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: nmstate.io/v1
    kind: NMState
    metadata:
      name: nmstate
    EOF
    ```
1.  If your cluster has problems with the DNS health check probe because of DNS connectivity issues, you can add the following DNS host name configuration to the `NMState` CRD to build in health checks that can resolve these issues:
    ```terminal
    apiVersion: nmstate.io/v1
    kind: NMState
    metadata:
      name: nmstate
    spec:
      probeConfiguration:
        dns:
          host: redhat.com
    # ...
    ```
    1.  Apply the DNS host name configuration to your cluster network by running the following command. Ensure that you replace `<filename>` with the name of your CRD file.
        ```yaml
        $ oc apply -f <filename>.yaml
        ```
    1.  Monitor the `nmstate` CRD until the resource reaches the `Available` condition by running the following command. Ensure that you set a value for the `--timeout` option so that if the `Available` condition is not met within this set maximum waiting time, the command times out and generates an error message.
        ```yaml
        $ oc wait --for=condition=Available nmstate/nmstate --timeout=600s
        ```

**Verification**

1.  Verify that all pods for the NMState Operator have the `Running` status by entering the following command:
    ```terminal
    $ oc get pod -n openshift-nmstate
    ```