{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the cluster capabilities by setting additional enabled capabilities {id="enabling-additional-enabled-capabilities_{{ context }}"}

As a cluster administrator, you can enable cluster capabilities any time after a {{ product_title }} installation by setting the `additionalEnabledCapabilities` configuration parameter. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  View the additional enabled capabilities by running the following command:
    ```terminal
    $ oc get clusterversion version -o jsonpath='{.spec.capabilities.additionalEnabledCapabilities}{"\n"}'
    ```
    ```terminal title="Example output"
    ["openshift-samples"]
    ```
1.  To set the `additionalEnabledCapabilities` configuration parameter, run the following command:
    ```terminal
    $ oc patch clusterversion/version --type merge -p '{"spec":{"capabilities":{"additionalEnabledCapabilities":["openshift-samples", "marketplace"]}}}'
    ```

    :::important

    You cannot disable a capability that is already enabled in a cluster. The cluster version Operator (CVO) continues to reconcile the capability which is already enabled in the cluster.
    
    :::


    If you try to disable a capability, then CVO shows the divergent spec:
    ```terminal
    $ oc get clusterversion version -o jsonpath='{.status.conditions[?(@.type=="ImplicitlyEnabledCapabilities")]}{"\n"}'
    ```
    ```terminal title="Example output"
    {"lastTransitionTime":"2022-07-22T03:14:35Z","message":"The following capabilities could not be disabled: openshift-samples","reason":"CapabilitiesImplicitlyEnabled","status":"True","type":"ImplicitlyEnabledCapabilities"}
    ```

    :::note

    During the cluster upgrades, it is possible that a given capability could be implicitly enabled. If a resource was already running on the cluster before the upgrade, then any capabilities that is part of the resource will be enabled. For example, during a cluster upgrade, a resource that is already running on the cluster has been changed to be part of the `marketplace` capability by the system. Even if a cluster administrator does not explicitly enabled the `marketplace` capability, it is implicitly enabled by the system.
    
    :::