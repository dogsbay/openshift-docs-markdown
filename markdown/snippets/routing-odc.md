{%- set _mod_docs_content_type = "SNIPPET" %}


Routing
:   By clicking the **Routing** link, you can perform the following actions:
    *   Customize the hostname for the route.
    *   Specify the path the router watches.
    *   Select the target port for the traffic from the drop-down list.
    *   Secure your route by selecting the **Secure Route** check box. Select the required TLS termination type and set a policy for insecure traffic from the respective drop-down lists.

    :::note


    For serverless applications, the Knative service manages all the routing options above. However, you can customize the target port for traffic, if required. If the target port is not specified, the default port of `8080` is used.
    
    :::