{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing from the software catalog using the CLI {id="nw-metallb-installing-operator-cli_{{ context }}"}

To install the MetalLB Operator from the software catalog in {{ product_title }} without using the web console, you can use the {{ oc_first }}. {._abstract}

It is recommended that when using the CLI you install the Operator in the `metallb-system` namespace.

**Prerequisites**

*   A cluster installed on bare-metal hardware.
*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a namespace for the MetalLB Operator by entering the following command:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      name: metallb-system
    EOF
    ```
1.  Create an Operator group custom resource (CR) in the namespace:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: metallb-operator
      namespace: metallb-system
    EOF
    ```
1.  Confirm the Operator group is installed in the namespace:
    ```terminal
    $ oc get operatorgroup -n metallb-system
    ```

    The following is example output:
    ```terminal
    NAME               AGE
    metallb-operator   14m
    ```
1.  Create a `Subscription` CR:
    1.  Define the `Subscription` CR and save the YAML file, for example, `metallb-sub.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: metallb-operator-sub
          namespace: metallb-system
        spec:
          channel: stable
          name: metallb-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        ```
        *   For the `spec.source` parameter, must specify the `redhat-operators` value.
    1.  To create the `Subscription` CR, run the following command:
        ```terminal
        $ oc apply -f metallb-sub.yaml
        ```
1.  Optional: To ensure BGP and BFD metrics appear in Prometheus, you can label the namespace as in the following command:
    ```terminal
    $ oc label ns metallb-system "openshift.io/cluster-monitoring=true"
    ```

**Verification**

The verification steps assume the MetalLB Operator is installed in the `metallb-system` namespace.

1.  Verify that the Operator installed successfully by running the following command. Wait until the `PHASE` displays `Succeeded`:
    ```terminal
    $ oc get clusterserviceversion -n metallb-system \
      -o custom-columns=Name:.metadata.name,Phase:.status.phase
    ```

    The following is example output:
    ```terminal
    Name                                                Phase
    metallb-operator.{product-version}.0-nnnnnnnnnnnn   Succeeded
    ```

    :::note

    Installation of the Operator might take a few seconds.
    
    :::

1.  Confirm that the install plan is in the namespace:
    ```terminal
    $ oc get installplan -n metallb-system
    ```

    The following is example output:
    ```terminal
    NAME            CSV                                                 APPROVAL    APPROVED
    install-wzg94   metallb-operator.{{ product_version }}.0-nnnnnnnnnnnn   Automatic   true
    ```