{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the bind9 DNS named server   {id="k8s-nmstate-troubleshooting-dns-disconnected-bind9-dns_{{ context }}"}

For a cluster configured to query a `bind9` DNS server, you can add the `root-servers.net` zone to a configuration file that contains at least one DNS record. For example you can use the `/var/named/named.localhost` as a zone file that already matches this criteria. {._abstract}

**Procedure**

1.  Add the `root-servers.net` zone at the end of the `/etc/named.conf` configuration file by running the following command:
    ```terminal
    $ cat >> /etc/named.conf <<EOF
    zone "root-servers.net" IN {
        	type master;
        	file "named.localhost";
    };
    EOF
    ```
1.  Restart the `named` service by running the following command:
    ```terminal
    $ systemctl restart named
    ```
1.  Confirm that the `root-servers.net` zone is present by running the following command:
    ```terminal
    $ journalctl -u named|grep root-servers.net
    ```
    ```terminal title="Example output"
    Jul 03 15:16:26 rhel-8-10 bash[xxxx]: zone root-servers.net/IN: loaded serial 0
    Jul 03 15:16:26 rhel-8-10 named[xxxx]: zone root-servers.net/IN: loaded serial 0
    ```
1.  Verify that the DNS server can resolve the NS record for the `root-servers.net` domain by running the following command:
    ```terminal
    $ host -t NS root-servers.net. 127.0.0.1
    ```
    ```terminal title="Example output"
    Using domain server:
    Name: 127.0.0.1
    Address: 127.0.0.53
    Aliases:
    root-servers.net name server root-servers.net.
    ```