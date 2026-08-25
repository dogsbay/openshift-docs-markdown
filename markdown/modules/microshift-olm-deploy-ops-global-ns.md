{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add OLM-based Operators to a networked node using the global namespace {id="microshift-OLM-deploy-Operators_{{ context }}"}

To deploy different Operators to different namespaces, follow the basic steps to use configuration files to install an Operator that uses the global namespace. {._abstract}

For a {{ microshift_short }} node that has network connectivity, Operator Lifecycle Manager (OLM) can access sources hosted on remote registries.


:::note

To use an Operator installed in a different namespace, or in more than one namespace, make sure that both the catalog source and the Subscription CR that references the Operator are running in the `openshift-marketplace` namespace.

:::


**Prerequisites**

*   The {{ oc_first }} is installed.
*   Operator Lifecycle Manager (OLM) is installed.
*   You created a custom catalog in the global namespace.

**Procedure**

1.  Confirm that OLM is running by using the following command:
    ```terminal
    $ oc -n openshift-operator-lifecycle-manager get pod -l app=olm-operator
    ```
    ```terminal title="Example output"
    NAME                            READY   STATUS    RESTARTS   AGE
    olm-operator-85b5c6786-n6kbc    1/1     Running   0          2m24s
    ```
1.  Confirm that the OLM catalog Operator is running by using the following command:
    ```terminal
    $ oc -n openshift-operator-lifecycle-manager get pod -l app=catalog-operator
    ```
    ```terminal title="Example output"
    NAME                                READY   STATUS    RESTARTS   AGE
    catalog-operator-5fc7f857b6-tj8cf   1/1     Running   0          2m33s
    ```

    :::note

    The following steps assume you are using the global namespace, `openshift-marketplace`. The catalog must run in the same namespace as the Operator. The Operator must support the **AllNamespaces** mode.
    
    :::

1.  Create the `CatalogSource` object by using the following example YAML:
    ```yaml title="Example catalog source YAML"
    apiVersion: operators.coreos.com/v1alpha1
    kind: CatalogSource
    metadata:
      name: operatorhubio-catalog
      namespace: openshift-marketplace
    spec:
      sourceType: grpc
      image: quay.io/operatorhubio/catalog:latest
      displayName: Community Operators
      publisher: OperatorHub.io
      grpcPodConfig:
        securityContextConfig: restricted
      updateStrategy:
        registryPoll:
          interval: 60m
    ```

    where:

    `metadata.namespace`
    :   Specifies the global namespace. Setting the `metadata.namespace` to `openshift-marketplace` enables the catalog to run in all namespaces. Subscriptions in any namespace can reference catalogs created in the `openshift-marketplace` namespace.


`spec.displayName`
:   Specifies that the Community Operators are not installed by default with OLM for {{ microshift_short }}. Listed here for example only.


`grpcPodConfig.securityContextConfig`
:   Specifies the value of `securityContextConfig` must be set to `restricted` for {{ microshift_short }}.

1.  Apply the `CatalogSource` configuration by running the following command:
    ```terminal
    $ oc apply -f _<catalog_source.yaml>_
    ```

    Replace `_<catalog_-_source.yaml>_` with your catalog source configuration file name. In this example, `catalogsource.yaml` is used.
    ```terminal title="Example output"
    catalogsource.operators.coreos.com/operatorhubio-catalog created
    ```
1.  To verify that the catalog source is applied, check for the `READY` state by using the following command:
    ```terminal
    $ oc describe catalogsources.operators.coreos.com -n openshift-marketplace operatorhubio-catalog
    ```
    ```terminal title="Example output"
    Name:         operatorhubio-catalog
    Namespace:    openshift-marketplace
    Labels:       <none>
    Annotations:  <none>
    API Version:  operators.coreos.com/v1alpha1
    Kind:         CatalogSource
    Metadata:
      Creation Timestamp:  2024-01-31T09:55:31Z
      Generation:          1
      Resource Version:    1212
      UID:                 4edc1a96-83cd-4de9-ac8c-c269ca895f3e
    Spec:
      Display Name:  Community Operators
      Grpc Pod Config:
        Security Context Config:  restricted
      Image:                      quay.io/operatorhubio/catalog:latest
      Publisher:                  OperatorHub.io
      Source Type:                grpc
      Update Strategy:
        Registry Poll:
          Interval:  60m
    Status:
      Connection State:
        Address:              operatorhubio-catalog.openshift-marketplace.svc:50051
        Last Connect:         2024-01-31T09:55:57Z
        Last Observed State:  READY
      Registry Service:
        Created At:         2024-01-31T09:55:31Z
        Port:               50051
        Protocol:           grpc
        Service Name:       operatorhubio-catalog
        Service Namespace:  openshift-marketplace
    Events:                 <none>
    ```

    The `Last Observed State` field reports the status as `READY`.
1.  Confirm that the catalog source is running by using the following command:
    ```terminal
    $ oc get pods -n openshift-marketplace -l olm.catalogSource=operatorhubio-catalog
    ```
    ```terminal title="Example output"
    NAME                          READY   STATUS    RESTARTS   AGE
    operatorhubio-catalog-x24nh   1/1     Running   0          59s
    ```
1.  Create a Subscription CR configuration file by using the following example YAML:
    ```yaml title="Example Subscription custom resource YAML"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: my-cert-manager
      namespace: openshift-operators
    spec:
      channel: stable
      name: cert-manager
      source: operatorhubio-catalog
      sourceNamespace: openshift-marketplace
    ```

    The `sourceNamespace` field defines the global namespace. Setting the `sourceNamespace` value to `openshift-marketplace` enables Operators to run in multiple namespaces if the catalog also runs in the `openshift-marketplace` namespace.
1.  Apply the Subscription CR configuration by running the following command:
    ```terminal
    $ oc apply -f _<subscription_cr.yaml>_
    ```

    Replace `_<subscription_cr.yaml>_` with your Subscription CR filename.
    ```terminal title="Example output"
    subscription.operators.coreos.com/my-cert-manager created
    ```
1.  You can create a configuration file for the specific Operand you want to use and apply it now.

**Verification**

*   Verify that your Operator is running by using the following command:
    ```terminal
    $ oc get pods -n openshift-operators (1)
    ```

    `openshift-operators` uses the namespace from the Subscription CR.

    :::note

    Allow a minute or two for the Operator start.
    
    :::

    ```terminal title="Example output"
    NAME                                       READY   STATUS    RESTARTS   AGE
    cert-manager-7df8994ddb-4vrkr              1/1     Running   0          19s
    cert-manager-cainjector-5746db8fd7-69442   1/1     Running   0          18s
    cert-manager-webhook-f858bf58b-748nt       1/1     Running   0          18s
    ```