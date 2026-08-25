{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting MetalLB on your cluster {id="nw-metallb-operator-initial-config_{{ context }}"}

To start MetalLB on your cluster after installing the MetalLB Operator in {{ product_title }}, you create a single MetalLB custom resource. {._abstract}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.
*   Install the MetalLB Operator.

**Procedure**

1.  Create a single instance of a MetalLB custom resource:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: metallb.io/v1beta1
    kind: MetalLB
    metadata:
      name: metallb
      namespace: metallb-system
    EOF
    ```
    *   For the `metadata.namespace` parameter, substitute `metallb-system` with `openshift-operators` if you installed the MetalLB Operator using the web console.

**Verification**

Confirm that the deployment for the MetalLB controller and the daemon set for the MetalLB speaker are running.


:::note

It might take a few seconds for the controller deployment and speaker daemon set to become available after you create the `MetalLB` custom resource.

:::


1.  Verify that the deployment for the controller is running:
    ```terminal
    $ oc get deployment -n metallb-system controller
    ```

    The following is example output:
    ```terminal
    NAME         READY   UP-TO-DATE   AVAILABLE   AGE
    controller   1/1     1            1           11m
    ```
1.  Verify that the daemon set for the speaker is running:
    ```terminal
    $ oc get daemonset -n metallb-system speaker
    ```

    The following is example output:
    ```terminal
    NAME      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE
    speaker   6         6         6       6            6           kubernetes.io/os=linux   18m
    ```

    The example output indicates six speaker pods. The number of speaker pods in your cluster might differ from the example output. Verify that the number of speaker pods equals the number of nodes in your cluster. For example, a single-node cluster has one speaker pod.