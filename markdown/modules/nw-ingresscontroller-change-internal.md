{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the Ingress Controller endpoint publishing scope to Internal {id="nw-ingresscontroller-change-internal_{{ context }}"}

As a cluster administrator, when you install a new cluster without specifying that the cluster is private, the default Ingress Controller is created with a `scope` set to `External`. You can change an `External` scoped Ingress Controller to `Internal`. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.

**Procedure**

*   To change an `External`-scoped Ingress Controller to `Internal`, enter the following command:
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontrollers/default --type=merge --patch='{"spec":{"endpointPublishingStrategy":{"type":"LoadBalancerService","loadBalancer":{"scope":"Internal"}}}}'
    ```

**Verification**

*   To check the status of the Ingress Controller, enter the following command:
    ```terminal
    $ oc -n openshift-ingress-operator get ingresscontrollers/default -o yaml
    ```
    *   The `Progressing` status condition indicates whether you must take further action. For example, the status condition can indicate that you need to delete the service by entering the following command:
        ```terminal
        $ oc -n openshift-ingress delete services/router-default
        ```

        If you delete the service, the Ingress Operator recreates it as `Internal`.