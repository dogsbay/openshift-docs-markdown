{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the dnsmasq DNS server {id="troubleshooting-dns-disconnected-env-dnsmasq_{{ context }}"}

If you are using `dnsmasq` as the DNS server, you can delegate resolution of the `root-servers.net` domain to another DNS server, for example, by creating a new configuration file that resolves `root-servers.net` using a DNS server that you specify. {._abstract}

**Procedure**

1.  Create a configuration file that delegates the domain `root-servers.net` to another DNS server by running the following command:
    ```terminal
    $ echo 'server=/root-servers.net/<DNS_server_IP>'> /etc/dnsmasq.d/delegate-root-servers.net.conf
    ```
1.  Restart the `dnsmasq` service by running the following command:
    ```terminal
    $ systemctl restart dnsmasq
    ```
1.  Confirm that the `root-servers.net` domain is delegated to another DNS server by running the following command:
    ```terminal
    $ journalctl -u dnsmasq|grep root-servers.net
    ```
    ```terminal title="Example output"
    Jul 03 15:31:25 rhel-8-10 dnsmasq[1342]: using nameserver 192.168.1.1#53 for domain root-servers.net
    ```
1.  Verify that the DNS server can resolve the NS record for the `root-servers.net` domain by running the following command:
    ```terminal
    $ host -t NS root-servers.net. 127.0.0.1
    ```
    ```terminal title="Example output"
    Using domain server:
    Name: 127.0.0.1
    Address: 127.0.0.1#53
    Aliases:
    root-servers.net name server root-servers.net.
    ```