{%- set _mod_docs_content_type = "PROCEDURE" %}
# Query Gateway infrastructure status using the CLI {id="querying-gateway-status-cli_{{ context }}"}

To quickly check the health of your gateway infrastructure, query specific `status` fields using the {{ product_title }} CLI. You can validate your deployment, check route attachments, and retrieve IP addresses without parsing lengthy YAML manifests. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.
*   Your gateway is deployed in the `openshift-ingress` namespace.
*   Your gateway is managed by the gateway controller (`openshift.io/gateway-controller/v1`).

**Procedure**

*   Run the relevant command for the status information you need to retrieve:
    *   To list all `GatewayClass` custom resources (CRs) in your cluster, run the following command:
        ```terminal
        $ oc get gatewayclass
        ```
    *   To check if a specific `GatewayClass` CR has been accepted by the controller, run the following command:
        ```terminal
        $ oc get gatewayclass <gatewayclass_name> -o jsonpath='{.status.conditions[?(@.type=="Accepted")].status}'
        ```
        *   `<gatewayclass_name>`: Specify the name of your gateway class.
    *   To list all `Gateway` custom resources (CRs) across all namespaces, run the following command:
        ```terminal
        $ oc get gateway -A
        ```
    *   To check if a specific `Gateway` CR is successfully programmed in the data plane, run the following command:
        ```terminal
        $ oc get gateway <gateway_name> -n openshift-ingress -o jsonpath='{.status.conditions[?(@.type=="Programmed")].status}'
        ```
        *   `<gateway_name>`: Specify the name of your gateway.
    *   To retrieve the IP address assigned to a specific `Gateway` CR, run the following command:
        ```terminal
        $ oc get gateway <gateway_name> -n openshift-ingress -o jsonpath='{.status.addresses[0].value}'
        ```
        *   `<gateway_name>`: Specify the name of your gateway.
    *   To check the total number of routes attached to a specific `Gateway` CR, run the following command:
        ```terminal
        $ oc get gateway <gateway_name> -n openshift-ingress -o jsonpath='{.status.listeners[*].attachedRoutes}'
        ```
        *   `<gateway_name>`: Specify the name of your gateway.
    *   To watch a specific `Gateway` CR for real-time status changes, run the following command:
        ```terminal
        $ oc get gateway <gateway_name> -n openshift-ingress -w
        ```
        *   `<gateway_name>`: Specify the name of your gateway.