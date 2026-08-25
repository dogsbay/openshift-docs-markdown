{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Ingress Node Firewall Operator {id="installing-infw-operator_{{ context }}"}

As a cluster administrator, you can install the Ingress Node Firewall Operator to enable node-level ingress firewalling by using the {{ product_title }} CLI. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have an account with administrator privileges.

**Procedure**

1.  To create the `openshift-ingress-node-firewall` namespace, enter the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        pod-security.kubernetes.io/enforce: privileged
        pod-security.kubernetes.io/enforce-version: v1.24
      name: openshift-ingress-node-firewall
    EOF
    ```
1.  To create an `OperatorGroup` CR, enter the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: ingress-node-firewall-operators
      namespace: openshift-ingress-node-firewall
    EOF
    ```
1.  Subscribe to the Ingress Node Firewall Operator.
    *   To create a `Subscription` CR for the Ingress Node Firewall Operator, enter the following command:
        ```terminal
        $ cat << EOF| oc create -f -
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: ingress-node-firewall-sub
          namespace: openshift-ingress-node-firewall
        spec:
          name: ingress-node-firewall
          channel: stable
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        EOF
        ```
1.  To verify that the Operator is installed, enter the following command:
    ```terminal
    $ oc get ip -n openshift-ingress-node-firewall
    ```
    ```terminal title="Example output"
    NAME            CSV                                         APPROVAL    APPROVED
    install-5cvnz   ingress-node-firewall.{{ product_version }}.0-202211122336   Automatic   true
    ```
1.  To verify the version of the Operator, enter the following command:

    ```terminal
    $ oc get csv -n openshift-ingress-node-firewall
    ```
    ```terminal title="Example output"
    NAME                                        DISPLAY                          VERSION               REPLACES                                    PHASE
    ingress-node-firewall.{{ product_version }}.0-202211122336   Ingress Node Firewall Operator   {{ product_version }}.0-202211122336   ingress-node-firewall.{{ product_version }}.0-202211102047   Succeeded
    ```