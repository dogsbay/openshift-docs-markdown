{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the Node Observability custom resource for scripting {id="node-observability-scripting-cr_{{ context }}"}

You must create and run the `NodeObservability` custom resource (CR) before you run the scripting. When you run the `NodeObservability` CR, it enables the agent in scripting mode on the compute nodes matching the `nodeSelector` label.  {._abstract}

**Prerequisites**

*   You have installed the Node Observability Operator.
*   You have installed the {{ oc_first }}.
*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Log in to the {{ product_title }} cluster by running the following command:
    ```terminal
    $ oc login -u kubeadmin https://<host_name>:6443
    ```
1.  Switch to the `node-observability-operator` namespace by running the following command:
    ```terminal
    $ oc project node-observability-operator
    ```
1.  Create a file named `nodeobservability.yaml` that contains the following content:
    ```yaml
        apiVersion: nodeobservability.olm.openshift.io/v1alpha2
        kind: NodeObservability
        metadata:
          name: cluster
        spec:
          nodeSelector:
            kubernetes.io/hostname: <node_hostname>
          type: scripting
    ```

    where:

    `cluster`
    :   You must specify the name as `cluster` because there should be only one `NodeObservability` CR per cluster.

    `<node_hostname>`
    :   Specify the nodes on which the Node Observability agent must be deployed.

    `scripting`
    :   To deploy the agent in scripting mode, you must set the type to `scripting`.

1.  Create the `NodeObservability` CR by running the following command:
    ```terminal
    $ oc apply -f nodeobservability.yaml
    ```

    ```terminal title="Example output"
    nodeobservability.olm.openshift.io/cluster created
    ```
1.  Review the status of the `NodeObservability` CR by running the following command:
    ```terminal
    $ oc get nob/cluster -o yaml | yq '.status.conditions'
    ```

    ```terminal title="Example output"
    conditions:
      conditions:
      - lastTransitionTime: "2022-07-05T07:33:54Z"
        message: 'DaemonSet node-observability-ds ready: true NodeObservabilityScripting
          ready: true'
        reason: Ready
        status: "True"
        type: Ready
    ```


    The `NodeObservability` CR run is completed when the `reason` is `Ready` and `status` is `"True"`.