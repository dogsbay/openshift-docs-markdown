{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing an example Node Tuning Operator specification {id="accessing-an-example-node-tuning-operator-specification_{{ context }}"}

Use this process to access an example Node Tuning Operator specification. {._abstract}

**Procedure**

*   Run the following command to access an example Node Tuning Operator specification:
    ```terminal
    oc get tuned.tuned.openshift.io/default -o yaml -n openshift-cluster-node-tuning-operator
    ```

    The default CR is meant for delivering standard node-level tuning for the {{ product_title }} platform and it can only be modified to set the Operator Management state. Any other custom changes to the default CR will be overwritten by the Operator. For custom tuning, create your own Tuned CRs. Newly created CRs will be combined with the default CR and custom tuning applied to {{ product_title }} nodes based on node or pod labels and profile priorities.

    :::warning

    While in certain situations the support for pod labels can be a convenient way of automatically delivering required tuning, this practice is discouraged and strongly advised against, especially in large-scale clusters. The default Tuned CR ships without pod label matching. If a custom profile is created with pod label matching, then the functionality will be enabled at that time. The pod label functionality will be deprecated in future versions of the Node Tuning Operator.
    
    :::