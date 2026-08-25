{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing KMM-Hub by creating KMM resources {id="kmm-hub-installing-kmm-hub-creating-resources_{{ context }}"}

To install KMM-Hub programmatically on {{ product_title }}, you can create `Namespace`, `OperatorGroup`, and `Subscription` resources. {._abstract}

**Procedure**

*   If you want to install KMM-Hub programmatically, you can use the following resources to create
the `Namespace`, `OperatorGroup` and `Subscription` resources:
    ```yaml
    ---
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-kmm-hub
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: kernel-module-management-hub
      namespace: openshift-kmm-hub
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: kernel-module-management-hub
      namespace: openshift-kmm-hub
    spec:
      channel: stable
      installPlanApproval: Automatic
      name: kernel-module-management-hub
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```