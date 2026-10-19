{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure HAProxy reload interval {id="configuring-haproxy-interval_{{ context }}"}

To reduce how often the router reloads HAProxy, change the minimum reload interval on the Ingress Controller. By doing this task, you can spread reload work over time and limit resource use from long-lived connections. {._abstract}


:::note

The higher the reload interval, the longer a route update takes.

:::


When you update a route or an endpoint associated with a route, the {{ product_title }} router updates the configuration for HAProxy and reloads it so those changes take effect. Each reload starts a new HAProxy process for new connections while the old process handles existing connections until they close.

When connections last a long time, old processes can accumulate and consume resources.

The default minimum HAProxy reload interval is 5 seconds. You can configure an Ingress Controller by using its `spec.tuningOptions.reloadInterval` field to set a longer minimum reload interval.


:::warning

Setting a large value for the minimum HAProxy reload interval can cause latency in observing updates to routes and their endpoints. To lessen the risk, avoid setting a value larger than the tolerable latency for updates.

:::


**Procedure**

*   Change the minimum HAProxy reload interval of the default Ingress Controller to 15 seconds by running the following command:
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontrollers/default --type=merge --patch='{"spec":{"tuningOptions":{"reloadInterval":"15s"}}}'
    ```