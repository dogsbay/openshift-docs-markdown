{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add OLM-based Operators to a networked node in a specific namespace {id="microshift-OLM-deploy-Operators-specific-namespace_{{ context }}"}

You can specify a namespace for an Operator for a variety of reasons, such as security and resource isolation. For example, you can specify the namespace `olm-microshift`. {._abstract}

In the following example, the catalog is scoped and available in the global `openshift-marketplace` namespace. The Operator uses content from the global namespace, but runs only in the `olm-microshift` namespace. For a {{ microshift_short }} node that has network connectivity, Operator Lifecycle Manager (OLM) can access sources hosted on remote registries.


:::important

All of the Operators installed in a specific namespace must have the same watch scope. In this case, the watch scope is **OwnNamespace**.

:::


**Prerequisites**

*   The {{ oc_first }} is installed.
*   Operator Lifecycle Manager (OLM) is installed.
*   You have created a custom catalog that is running in the global namespace.

**Procedure**

1.  Confirm that OLM is running by using the following command:
    ```terminal
    $ oc -n openshift-operator-lifecycle-manager get pod -l app=olm-operator
    ```
    ```terminal title="Example output"
    NAME                           READY   STATUS    RESTARTS   AGE
    olm-operator-85b5c6786-n6kbc   1/1     Running   0          16m
    ```
1.  Confirm that the OLM catalog Operator is running by using the following command:
    ```terminal
    $ oc -n openshift-operator-lifecycle-manager get pod -l app=catalog-operator
    ```
    ```terminal title="Example output"
    NAME                                READY   STATUS    RESTARTS   AGE
    catalog-operator-5fc7f857b6-tj8cf   1/1     Running   0          16m
    ```
1.  Create a namespace by using the following example YAML:
    ```YAML title="Example namespace YAML"
    apiVersion: v1
    kind: Namespace
    metadata:
      name: olm-microshift
    ```
1.  Apply the namespace configuration using the following command:
    ```terminal
    $ oc apply -f _<ns.yaml>_
    ```

    Replace `_<ns.yaml>_` with the name of your namespace configuration file. In this example, `olm-microshift` is used.
    ```terminal title="Example output"
    namespace/olm-microshift created
    ```
1.  Create the Operator group YAML by using the following example YAML:
    ```yaml title="Example Operator group YAML"
    kind: OperatorGroup
    apiVersion: operators.coreos.com/v1
    metadata:
      name: og
      namespace: olm-microshift
    spec:
      targetNamespaces:
      - olm-microshift
    ```

    The `spec.targetNamespaces` field and values can be omitted for Operators using the global namespace.
1.  Apply the Operator group configuration by running the following command:
    ```terminal
    $ oc apply -f _<og.yaml>_
    ```

    Replace `_<og.yaml>_` with the name of your operator group configuration file.
    ```terminal title="Example output"
    operatorgroup.operators.coreos.com/og created
    ```
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
    :   Specifies the global namespace. Setting the `metadata.namespace` to `openshift-marketplace` enables the catalog to run in all namespaces. Subscriptions CRs in any namespace can reference catalogs created in the `openshift-marketplace` namespace.


`spec.displayName`
:   Specifies that the Community Operators are not installed by default with OLM for {{ microshift_short }}. Listed here for example only.


`grpcPodConfig.securityContextConfig`
:   Specifies the value of `securityContextConfig` must be set to `restricted` for {{ microshift_short }}.

1.  Apply the `CatalogSource` configuration by running the following command:
    ```terminal
    $ oc apply -f _<catalog_source.yaml>_
    ```

    Replace `_<catalog_source.yaml>_` with your catalog source configuration file name.
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
      Creation Timestamp:  2024-01-31T10:09:46Z
      Generation:          1
      Resource Version:    2811
      UID:                 60ce4a36-86d3-4921-b9fc-84d67c28df48
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
        Last Connect:         2024-01-31T10:10:04Z
        Last Observed State:  READY
      Registry Service:
        Created At:         2024-01-31T10:09:46Z
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
    operatorhubio-catalog-j7sc8   1/1     Running   0          43s
    ```
1.  Create a Subscription CR configuration file by using the following example YAML:
    ```yaml title="Example Subscription custom resource YAML"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: my-gitlab-operator-kubernetes
      namespace: olm-microshift
    spec:
      channel: stable
      name: gitlab-operator-kubernetes
      source: operatorhubio-catalog
      sourceNamespace: openshift-marketplace
    ```

    where:

    `metadata.namespace`
    :   Specifies the specific namespace. Operators reference the global namespace for content, but run in the `olm-microshift` namespace.


`spec.sourceNamespace`
:   Specifies the global namespace. Subscriptions CRs in any namespace can reference catalogs created in the `openshift-marketplace` namespace.

1.  Apply the Subscription CR configuration by running the following command:
    ```terminal
    $ oc apply -f _<subscription_cr.yaml>_
    ```

    Replace `_<subscription_cr.yaml>_` with the name of the Subscription CR configuration file.
    ```terminal title="Example output"
    subscription.operators.coreos.com/my-gitlab-operator-kubernetes
    ```
1.  You can create a configuration file for the specific Operand you want to use and apply it now.

**Verification**

*   Verify that your Operator is running by using the following command:
    ```terminal
    $ oc get pods -n olm-microshift
    ```

    The `olm-microshift` uses the namespace from the Subscription CR.

    :::note

    Allow a minute or two for the Operator start.
    
    :::

    ```terminal title="Example output"
    NAME                                         READY   STATUS    RESTARTS   AGE
    gitlab-controller-manager-69bb6df7d6-g7ntx   2/2     Running   0          3m24s
    ```