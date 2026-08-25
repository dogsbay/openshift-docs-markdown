{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a non-default `OpenshiftEC2NodeClass` {id="rosa-nodes-autonode-managing-create-nodeclass_{{ context }}"}

Create a non-default resource when you need to customize the {{ ocp_short }} version, VPC subnets, security groups, tags, metadata options, or capacity reservations for your worker nodes. The default `OpenshiftEC2NodeClass` is immutable. {._abstract}


:::note

Modifying these resources, such as adding or changing AWS tags, security groups, and capacity reservation can cause a drift and initiate a new instance roll-out. See the _Additional resources_ for more information.

:::


**Prerequisites**

*   The {{ autonode }} is enabled on the cluster.
*   The default `OpenshiftEC2NodeClass` is in a `Ready` state.
*   You have cluster administrator access.
*   You have installed the `oc` CLI and are logged in to the cluster.

**Procedure**

1.  Create an `OpenshiftEC2NodeClass` manifest:
    ```terminal
    $ cat > openshiftec2nodeclass.yaml <<'EOF'
    apiVersion: karpenter.hypershift.openshift.io/v1
    kind: OpenshiftEC2NodeClass
    metadata:
      name: custom-nodeclass
    spec:
      tags:
        team: "engineering"
    EOF
    ```

    For a complete list of configurable fields, see "OpenshiftEC2NodeClass configuration fields".
1.  Apply the manifest:
    ```terminal
    $ oc apply -f openshiftec2nodeclass.yaml
    ```

**Verification**

1.  Verify that the `OpenshiftEC2NodeClass` resource was created:
    ```terminal
    $ oc get openshiftec2nodeclass
    ```
    ```terminal title="Example output"
    NAME               READY   AGE
    default            True    1h
    custom-nodeclass   True    5s
    ```
1.  Verify the resource is ready by checking its status conditions:
    ```terminal
    $ oc get openshiftec2nodeclass/custom-nodeclass -o json | jq '.status.conditions'
    ```

    If the `Ready` condition is `False`, see the troubleshooting guidance in _Additional resources_.