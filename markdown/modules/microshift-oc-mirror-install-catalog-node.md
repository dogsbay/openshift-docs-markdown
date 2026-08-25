{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install a custom catalog created with the oc-mirror plugin {id="microshift-oc-mirror-install-catalog-in-node_{{ context }}"}

After you mirror your image set to the mirror registry, you must apply the generated `CatalogSource` custom resource (CR) into the node. Operator Lifecycle Manager (OLM) uses the `CatalogSource` CR to retrieve information about the available Operators in the mirror registry. You must then create and apply a subscription CR to subscribe to your custom catalog. {._abstract}

**Prerequisites**

*   You mirrored the image set to your registry mirror.
*   You added image reference information to the CRI-O container runtime configuration.

**Procedure**

1.  Apply the catalog source configuration file from the results directory to create the catalog source object by running the following command:
    ```terminal
    $ oc apply -f ./_<v2_workspace>_/working-dir/cluster-resources/catalogSource-cs-redhat-catalog.yaml
    ```

    Replace _&lt;v2_workspace>_ with the directory you used to store custom resources for the mirroring process.
    ```terminal title="Example output"
    catalogsource.operators.coreos.com/cs-redhat-catalog created
    ```
1.  For reference, see the following example file:
    ```yaml title="Example catalog source configuration file" {minja}
    apiVersion: operators.coreos.com/v2alpha1
    kind: CatalogSource
    metadata:
      name: redhat-catalog
      namespace: openshift-marketplace
    spec:
      sourceType: grpc
      image: registry.example.com/redhat/redhat-catalog:v{{ ocp_version }}
      updateStrategy:
        registryPoll:
          interval: 60m
    ```

    where

    `metadata.namespace`
    :   Specifies the global namespace. Setting the `metadata.namespace` to `openshift-marketplace` enables the catalog to reference catalogs in all namespaces. Subscriptions in any namespace can reference catalogs created in the `openshift-marketplace` namespace.

1.  Verify that the `CatalogSource` resources were successfully installed by running the following command:
    ```terminal
    $ oc get catalogsource --all-namespaces
    ```
    ```terminal title="Example output"
    NAMESPACE               NAME                  DISPLAY               TYPE   PUBLISHER   AGE
    openshift-marketplace   certified-operators   Certified Operators   grpc   Red Hat     37m
    openshift-marketplace   community-operators   Community Operators   grpc   Red Hat     37m
    openshift-marketplace   redhat-marketplace    Red Hat Marketplace   grpc   Red Hat     37m
    openshift-marketplace   redhat-catalog        Red Hat Catalog     grpc   Red Hat     37m
    ```
1.  Verify that the catalog source is running by using the following command:
    ```terminal
    $ oc get pods -n openshift-marketplace
    ```
    ```terminal title="Example output"
    NAME                             READY   STATUS    RESTARTS   AGE
    cs-redhat-catalog-4227b   2/2     Running   0          2m5s
    ```
1.  Create a `Subscription` CR, similar to the following example:
    ```yaml title="Example Subscription CR"
    apiVersion: operators.coreos.com/v2alpha1
    kind: Subscription
    metadata:
      name: amq-broker
      namespace: openshift-operators
    spec:
      channel: 7.13.x
      name: amq-broker-rhel9
      source: cs-redhat-catalog
      sourceNamespace: openshift-marketplace
    ```
1.  Apply the Subscription CR configuration by running the following command:
    ```terminal
    $ oc apply -f ./_<subscription_cr.yaml>_
    ```

    Specify the name of your subscription in _&lt;subscription_cr.yaml>_, for example `amq--broker-subscription-cr.yaml`.
    ```terminal title="Example output"
    subscription.operators.coreos.com/amq-broker created
    ```