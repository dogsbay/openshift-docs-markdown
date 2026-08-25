{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply catalogs and Operators in a disconnected-deployment RHEL for Edge image {id="microshift-apply-ops-ostree-disconnected-use_{{ context }}"}

After you have created a {{ op_system_ostree }} image for a disconnected environment and configured {{ microshift_short }} networking settings for disconnected use, you can configure the namespace and create catalog and Operator custom resources (CR) for running your Operators. {._abstract}

**Prerequisites**

*   You have a {{ op_system_ostree }} image.
*   Networking is configured for disconnected use.
*   You completed the oc-mirror plugin dry run procedure.

**Procedure**

1.  Create a `CatalogSource` custom resource (CR), similar to the following example:
    ```yaml title="Example my-catalog-source-cr.yaml file"
    apiVersion: operators.coreos.com/v1alpha1
    kind: CatalogSource
    metadata:
      name: cs-redhat-operator-index
      namespace: openshift-marketplace
    spec:
      image: registry.example.com/redhat/redhat-operator-index:v4.17
      sourceType: grpc
      displayName:
      publisher:
      updateStrategy:
        registryPoll:
          interval: 60m
    ```

    where:

    `metadata.namespace`
    :   Specifies the global namespace. Setting the `metadata.namespace` to `openshift-marketplace` enables the catalog to run in all namespaces. Subscriptions in any namespace can reference catalogs created in the `openshift-marketplace` namespace.


    :::note

    The default pod security admission definition for `openshift-marketplace` is `baseline`, therefore a catalog source custom resource (CR) created in that namespace does not require a `spec.grpcPodConfig.securityContextConfig` value to be set. You can set a `legacy` or `restricted` value if required for the namespace and Operators you want to use.
    
    :::


1.  Add the SHA of the catalog index commit to the Catalog Source (CR), similar to the following example:
    ```yaml title="Example namespace spec.image configuration"
    apiVersion: operators.coreos.com/v1alpha1
    kind: CatalogSource
    metadata:
      name: cs-redhat-operator-index
      namespace: openshift-marketplace
    spec:
      image: registry.example.com/redhat/redhat-operator-index@sha256:7a76c0880a839035eb6e896d54ebd63668bb37b82040692141ba39ab4c539bc6 (1)
      sourceType: grpc
      displayName:
      publisher:
      updateStrategy:
        registryPoll:
          interval: 60m
    ```

    where:

    `spec.image`
    :   Specifies the SHA of the image commit. Use the same SHA you added to the image builder blueprint.

    :::important

    You must use the SHA instead of a tag in your catalog CR or the pod fails to start.
    
    :::


1.  Apply the YAML file from the oc-mirror plugin dry run results directory to the node by running the following command:
    ```terminal
    $ oc apply -f ./oc-mirror-workspace/results-1708508014/catalogSource-cs-redhat-operator-index.yaml
    ```
    ```terminal title="Example output"
    catalogsource.operators.coreos.com/cs-redhat-operator-index created
    ```
1.  Verify that the `CatalogSource` resources were successfully installed by running the following command:
    ```terminal
    $ oc get catalogsource --all-namespaces
    ```
1.  Verify that the catalog source is running by using the following command:
    ```terminal
    $ oc get pods -n openshift-marketplace
    ```
    ```terminal title="Example output"
    NAME                             READY   STATUS    RESTARTS   AGE
    cs-redhat-operator-index-4227b   2/2     Running   0          2m5s
    ```
1.  Create a `Subscription` CR, similar to the following example:
    ```yaml title="Example my-subscription-cr.yaml file"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: amq-broker
      namespace: openshift-operators
    spec:
      channel: 7.11.x
      name: amq-broker-rhel8
      source: cs-redhat-operator-index
      sourceNamespace: openshift-marketplace
    ```
1.  Apply the `Subscription` CR by running the following command:
    ```terminal
    $ oc apply -f ./<my-subscription-cr.yaml>
    ```

    where:

    `<my-subscription-cr.yaml>`
    :   Specifies the name of your `Subscription` CR, such as `my-subscription-cr.yaml`.
    ```terminal title="Example output"
    subscription.operators.coreos.com/amq-broker created
    ```