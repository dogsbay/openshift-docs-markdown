{%- set _mod_docs_content_type = "PROCEDURE" %}
# Subscribing to the {{ VirtProductName }} catalog by using the CLI {id="virt-subscribing-cli_{{ context }}"}

Before you install {{ VirtProductName }}, you must subscribe to the {{ VirtProductName }} catalog. Subscribing gives the `{{ CNVNamespace }}` namespace access to the {{ VirtProductName }} Operators. {._abstract}

To subscribe, configure `Namespace`, `OperatorGroup`, and `Subscription` objects by applying a single manifest to your cluster.

**Prerequisites**

*   Install {{ product_title }} {{ product_version }} on your cluster.
*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

{% if openshift_enterprise or openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}

1.  Create a YAML file that contains the following manifest:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: {{ CNVNamespace }}
      labels:
        openshift.io/cluster-monitoring: "true"
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: kubevirt-hyperconverged-group
      namespace: {{ CNVNamespace }}
    spec:
      targetNamespaces:
        - {{ CNVNamespace }}
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: hco-operatorhub
      namespace: {{ CNVNamespace }}
    spec:
      source: {{ CNVSubscriptionSpecSource }}
      sourceNamespace: openshift-marketplace
      name: {{ CNVSubscriptionSpecName }}
      startingCSV: kubevirt-hyperconverged-operator.v{{ HCOVersion }}
      channel: "stable"
    ```

    Using the `stable` channel ensures that you install the version of
    {{ VirtProductName }} that is compatible with your {{ product_title }} version.

{% endif %}

{% if openshift_origin %}
1.  Create a YAML file that contains the following manifest:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: {{ CNVNamespace }}
    ---
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: kubevirt-hyperconverged-group
      namespace: {{ CNVNamespace }}
    spec: {}
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: hco-operatorhub
      namespace: {{ CNVNamespace }}
    spec:
      source: {{ CNVSubscriptionSpecSource }}
      sourceNamespace: openshift-marketplace
      name: {{ CNVSubscriptionSpecName }}
      startingCSV: kubevirt-hyperconverged-operator.v{{ HCOVersion }}
      channel: "stable"
    ```

    Using the `stable` channel ensures that you install the version of
    {{ VirtProductName }} that is compatible with your {{ product_title }} version.

{% endif %}
1.  Create the required `Namespace`, `OperatorGroup`, and `Subscription` objects
for {{ VirtProductName }} by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

You must verify that the subscription creation was successful before you can proceed with installing {{ VirtProductName }}.

1.  Check that the `ClusterServiceVersion` (CSV) object was created successfully. Run the following command and verify the output:
    ```terminal
    $ oc get csv -n {{ CNVNamespace }}
    ```

    If the CSV was created successfully, the output shows an entry that contains a `NAME` value of `kubevirt-hyperconverged-operator-*`, a `DISPLAY` value of `{{ VirtProductName }}`, and a `PHASE` value of `Succeeded`, as shown in the following example output:

    Example output:
    ```terminal
    NAME                                       DISPLAY                    VERSION   REPLACES                                   PHASE
    kubevirt-hyperconverged-operator.v{{ HCOVersion }}   {{ VirtProductName }}   {{ HCOVersion }}    kubevirt-hyperconverged-operator.v{{ HCOVersionPrev }}   Succeeded
    ```
1.  Check that the `HyperConverged` custom resource (CR) has the correct version. Run the following command and verify the output:
    ```terminal
    $ oc get {{ HCOCliKind }} -n {{ CNVNamespace }} kubevirt-hyperconverged -o json | jq .status.versions
    ```

    Example output:
    ```terminal
    {
    "name": "operator",
    "version": "{{ HCOVersion }}"
    }
    ```
1.  Verify the `HyperConverged` CR conditions. Run the following command and check the output:
    ```terminal
    $ oc get {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} -o json | jq -r '.status.conditions[] | {type,status}'
    ```

    Example output:
    ```terminal
    {
      "type": "ReconcileComplete",
      "status": "True"
    }
    {
      "type": "Available",
      "status": "True"
    }
    {
      "type": "Progressing",
      "status": "False"
    }
    {
      "type": "Degraded",
      "status": "False"
    }
    {
      "type": "Upgradeable",
      "status": "True"
    }
    ```