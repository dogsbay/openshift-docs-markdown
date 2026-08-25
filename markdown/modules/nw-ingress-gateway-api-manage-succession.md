{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing for Gateway API management succession by the Ingress Operator {id="nw-ingress-gateway-api-manage-succession_{{ context }}"}

Prepare your cluster for Gateway API management succession by removing existing unsupported definitions and installing compliant resources. This ensures a seamless update to {{ product_title }} 4.19 and prevents conflicts with the Ingress Operator. {._abstract}

Starting in {{ product_title }} 4.19, the Ingress Operator manages the lifecycle of any Gateway API custom resource definitions (CRDs). This lifecycle control blocks you from creating, updating, or deleting CRDs within the `gateway.networking.k8s.io` API group.


:::note

Starting in {{ product_title }} 4.22, deploying the Gateway API CRD `gateway.networking.x-k8s.io` is no longer restricted. You can deploy that CRD without interference from the Ingress Operator. Experimental Gateway API CRDs in the `gateway.networking.k8s.io` group remain restricted.

:::



:::warning

Updating or deleting Gateway API resources can result in downtime and loss of service or data. Be sure you understand how this affects your cluster before performing the steps in this procedure. If necessary, back up any Gateway API objects in YAML format to restore them later.

:::


**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have access to an {{ product_title }} account with cluster administrator access.
*   Optional: You have backed up any necessary Gateway API objects.


:::warning

Backup and restore can fail or result in data loss for any CRD fields that were present in the old definitions but are absent in the new definitions.

:::


**Procedure**

1.  List all the Gateway API CRDs that you must remove by entering the following command:
    ```terminal
    $ oc get crd | grep -F -e gateway.networking.k8s.io -e gateway.networking.x-k8s.io
    ```
    ```terminal title="Example output"
    gatewayclasses.gateway.networking.k8s.io
    gateways.gateway.networking.k8s.io
    grpcroutes.gateway.networking.k8s.io
    httproutes.gateway.networking.k8s.io
    referencegrants.gateway.networking.k8s.io
    ```

    If the output lists custom resource definitions (CRDs) for `gateway.networking.x-k8s.io`, retain those resources. The subsequent step removes only CRDs that belong to the `gateway.networking.k8s.io` group.
1.  Delete the Gateway API CRDs from the previous step by entering the following command:
    ```terminal
    $ oc delete crd gatewayclasses.gateway.networking.k8s.io && \
    oc delete crd gateways.gateway.networking.k8s.io && \
    oc delete crd grpcroutes.gateway.networking.k8s.io && \
    oc delete crd httproutes.gateway.networking.k8s.io && \
    oc delete crd referencegrants.gateway.networking.k8s.io
    ```

    :::important

    Deleting CRDs removes every custom resource that relies on them and can result in data loss. Back up any necessary data before deleting the Gateway API CRDs. Any controller that was previously managing the lifecycle of the Gateway API CRDs ceases to function correctly. Attempting to force its use in conjunction with the Ingress Operator to manage Gateway API CRDs might prevent the cluster update from succeeding.
    
    :::

1.  Get the supported Gateway API CRDs by entering the following command:
    ```terminal
    $ oc apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.2.1/standard-install.yaml
    ```

    :::warning

    You can perform this step without deleting your CRDs. If your update to a CRD removes a field that is used by a custom resource, you can lose data. Updating a CRD a second time, to a version that re-adds a field, can cause any previously deleted data to reappear. Any third-party controller that depends on a specific Gateway API CRD version that is not supported in {{ product_title }} {{ product_version }} breaks upon updating that CRD to one supported by Red&#160;Hat.

    For more information on the {{ product_title }} implementation and the dead fields issue, see _Gateway API implementation for {{ product_title }}_.
    
    :::