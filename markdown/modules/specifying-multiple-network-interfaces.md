{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying multiple network interfaces and DNS servers {id="specifying-multiple-network-interfaces_{{ context }}"}

You can specify multiple network interfaces by setting multiple `ip=` entries. You can provide multiple DNS servers by adding a `nameserver=` entry for each server, {._abstract}

**Procedure**

*   To specify multiple network interfaces for your interfaces, you can enter a command like the following command:
    ```terminal
    ip=10.10.10.2::10.10.10.254:255.255.255.0:core0.example.com:enp1s0:none
    ip=10.10.10.3::10.10.10.254:255.255.255.0:core0.example.com:enp2s0:none
    ```
*   To provide multiple DNS servers by adding a `nameserver=` entry for each server, enter a command like the following command:
    ```terminal
    nameserver=1.1.1.1
    nameserver=8.8.8.8
    ```