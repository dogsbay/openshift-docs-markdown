{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshoot listener connections using status conditions {id="troubleshooting-listener-conditions_{{ context }}"}

When a listener is not routing traffic as expected, you can review its `status` conditions to quickly diagnose and fix the configuration error. The listener `status` condition gives insight into its current state and any underlying issues preventing it from accepting traffic. {._abstract}

**Procedure**

1.  Check the `status` conditions of your `Gateway` custom resource (CR) by running the following command:
    ```terminal
    $ oc describe gateway <gateway_cr> -n <namespace>
    ```
    *   `<gateway_cr>`: Specify the name of your gateway.
    *   `<namespace>`: Specify the namespace where the gateway resides.

        For details on how to interpret the output and resolve common errors, see [#!gateway-listener-troubleshooting-reference_{{ context }}](#gateway-listener-troubleshooting-reference_{{ context }}).