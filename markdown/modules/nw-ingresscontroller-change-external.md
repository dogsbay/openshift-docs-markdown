{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the Ingress Controller endpoint publishing scope to External {id="nw-ingresscontroller-change-external_{{ context }}"}

As an installation or post-installation task, a cluster administrator can configure the Ingress Controller to `Internal`. Additionally, a cluster administrator can change an `Internal` Ingress Controller to `External`. {._abstract}

When you install a new cluster without specifying that the cluster is private, the default Ingress Controller is created with a `scope` set to `External`.


:::important

On some platforms, it is necessary to delete and recreate the service.

Changing the scope can cause disruption to Ingress traffic, potentially for several minutes. This applies to platforms where it is necessary to delete and recreate the service, because the procedure can cause {{ product_title }} to deprovision the existing service load balancer, provision a new one, and update DNS.

:::


**Prerequisites**

*   You installed the {{ oc_first }}.

**Procedure**

*   To change an `Internal`-scoped Ingress Controller to `External`, enter the following command:
    ```terminal
    $ oc -n openshift-ingress-operator patch ingresscontrollers/private --type=merge --patch='{"spec":{"endpointPublishingStrategy":{"type":"LoadBalancerService","loadBalancer":{"scope":"External"}}}}'
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

        If you delete the service, the Ingress Operator recreates it as `External`.