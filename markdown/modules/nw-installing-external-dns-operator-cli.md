{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the External DNS Operator by using the CLI {id="nw-installing-external-dns-operator-cli_{{ context }}"}

You can use the {{ oc_first }} to install the External DNS Operator. The Operator manages the installation process directly from your terminal without you having to use the web console. {._abstract}

**Prerequisites**

*   You are logged in to the {{ oc_first }}.

**Procedure**

1.  Create a `Namespace` object:
    1.  Create a YAML file that defines the `Namespace` object:
        ```yaml title="Example namespace.yaml file"
        apiVersion: v1
        kind: Namespace
        metadata:
          name: external-dns-operator
        # ...
        ```
    1.  Create the `Namespace` object by running the following command:
        ```terminal
        $ oc apply -f namespace.yaml
        ```
1.  Create an `OperatorGroup` object:
    1.  Create a YAML file that defines the `OperatorGroup` object:
        ```yaml title="Example operatorgroup.yaml file"
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: external-dns-operator
          namespace: external-dns-operator
        spec:
          upgradeStrategy: Default
          targetNamespaces:
          - external-dns-operator
        # ...
        ```
    1.  Create the `OperatorGroup` object by running the following command:
        ```terminal
        $ oc apply -f operatorgroup.yaml
        ```
1.  Create a `Subscription` object:
    1.  Create a YAML file that defines the `Subscription` object:
        ```yaml title="Example subscription.yaml file"
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: external-dns-operator
          namespace: external-dns-operator
        spec:
          channel: stable-v1
          installPlanApproval: Automatic
          name: external-dns-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        # ...
        ```
    1.  Create the `Subscription` object by running the following command:
        ```terminal
        $ oc apply -f subscription.yaml
        ```

**Verification**

1.  Get the name of the install plan from the subscription by running the following command:
    ```terminal
    $ oc -n external-dns-operator \
      get subscription external-dns-operator \
      --template='{{.status.installplan.name}}{{"\n"}}'
    ```
1.  Verify that the status of the install plan is `Complete` by running the following command:
    ```terminal
    $ oc -n external-dns-operator \
      get ip <install_plan_name> \
      --template='{{.status.phase}}{{"\n"}}'
    ```
1.  Verify that the status of the `external-dns-operator` pod is `Running` by running the following command:
    ```terminal
    $ oc -n external-dns-operator get pod
    ```

    ```terminal title="Example output"
    NAME                                     READY   STATUS    RESTARTS   AGE
    external-dns-operator-5584585fd7-5lwqm   2/2     Running   0          11m
    ```
1.  Verify that the catalog source of the subscription is `redhat-operators` by running the following command:
    ```terminal
    $ oc -n external-dns-operator get subscription
    ```
1.  Check the `external-dns-operator` version by running the following command:
    ```terminal
    $ oc -n external-dns-operator get csv
    ```