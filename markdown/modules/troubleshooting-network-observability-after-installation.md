{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring network traffic menu entry in the {{ product_title }} console {id="configure-network-traffic-console_{{ context }}"}

Restore a missing network traffic menu entry in the **Observe** menu of the {{ product_title }} console by manually registering the console plugin in the `FlowCollector` resource and the console operator configuration. {._abstract}

**Prerequisites**

*   You have installed {{ product_title }} version 4.10 or newer.

**Procedure**

1.  Check if the `spec.consolePlugin.register` field is set to `true` by running the following command:
    ```terminal
    $ oc -n netobserv get flowcollector cluster -o yaml
    ```
    ```text title="Example output"
    apiVersion: flows.netobserv.io/v1alpha1
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      consolePlugin:
        register: false
    ```
1.  Optional: Add the `netobserv-plugin` plugin by manually editing the Console Operator config:
    ```terminal
    $ oc edit console.operator.openshift.io cluster
    ```
    ```text title="Example output"
    ...
    spec:
      plugins:
      - netobserv-plugin
    ...
    ```
1.  Optional: Set the `spec.consolePlugin.register` field to `true` by running the following command:
    ```terminal
    $ oc -n netobserv edit flowcollector cluster -o yaml
    ```
    ```text title="Example output"
    apiVersion: flows.netobserv.io/v1alpha1
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      consolePlugin:
        register: true
    ```
1.  Ensure the status of console pods is `running` by running the following command:
    ```terminal
    $ oc get pods -n openshift-console -l app=console
    ```
1.  Restart the console pods by running the following command:
    ```terminal
    $ oc delete pods -n openshift-console -l app=console
    ```
1.  Clear your browser cache and history.
1.  Check the status of network observability plugin pods by running the following command:
    ```terminal
    $ oc get pods -n netobserv -l app=netobserv-plugin
    ```
    ```text title="Example output"
    NAME                                READY   STATUS    RESTARTS   AGE
    netobserv-plugin-68c7bbb9bb-b69q6   1/1     Running   0          21s
    ```
1.  Check the logs of the network observability plugin pods by running the following command:
    ```terminal
    $ oc logs -n netobserv -l app=netobserv-plugin
    ```
    ```terminal title="Example output"
    time="2022-12-13T12:06:49Z" level=info msg="Starting netobserv-console-plugin [build version: , build date: 2022-10-21 15:15] at log level info" module=main
    time="2022-12-13T12:06:49Z" level=info msg="listening on https://:9001" module=server
    ```