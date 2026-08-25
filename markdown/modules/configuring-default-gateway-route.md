{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring default gateway and route {id="configuring-default-gateway-route_{{ context }}"}

As an optional task, you can configure routes to additional networks by setting an `rd.route=` value. {._abstract}


:::note

When you configure one or multiple networks, one default gateway is required. If the additional network gateway is different from the primary network gateway, the default gateway must be the primary network gateway.

:::


**Procedure**

*   To configure the default gateway, enter the following command:
    ```terminal
    ip=::10.10.10.254::::
    ```
*   To configure the route for an additional network, enter the following command:
    ```terminal
    rd.route=20.20.20.0/24:20.20.20.254:enp2s0
    ```