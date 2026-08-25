{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Operator subscriptions for managed clusters that you install with {{ cgu_operator }} {id="talo-about-subscription-crs_{{ context }}"}

{{ cgu_operator_first }} can only approve the install plan for an Operator if the `Subscription` custom resource (CR) of the Operator contains the `status.state.AtLatestKnown` field. {._abstract}

**Procedure**

1.  Add the `status.state.AtLatestKnown` field to the `Subscription` CR of the Operator:
    ```yaml title="Example Subscription CR"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: cluster-logging
      namespace: openshift-logging
      annotations:
        ran.openshift.io/ztp-deploy-wave: "2"
    spec:
      channel: "stable-6.2"
      name: cluster-logging
      source: redhat-operators-disconnected
      sourceNamespace: openshift-marketplace
      installPlanApproval: Manual
    status:
      state: AtLatestKnown
    ```

    The `status.state: AtLatestKnown` field is used for the latest Operator version available from the Operator catalog.

    :::note

    When a new version of the Operator is available in the registry, the associated policy becomes non-compliant.
    
    :::

1.  Apply the changed `Subscription` policy to your managed clusters with a `ClusterGroupUpgrade` CR.