{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting worker nodes that cannot join the cluster {id="worker-nodes-cannot-join-the-cluster_{{ context }}"}

Installer-provisioned clusters deploy with a DNS server that includes a DNS entry for the `api-int.<cluster_name>.<base_domain>` URL. If the nodes within the cluster use an external or upstream DNS server to resolve the `api-int.<cluster_name>.<base_domain>` URL and there is no such entry, worker nodes might fail to join the cluster.  {._abstract}

Ensure that all nodes in the cluster can resolve the domain name.

**Procedure**

1.  Add a DNS A/AAAA or CNAME record to internally identify the API load balancer. For example, when using dnsmasq, modify the `dnsmasq.conf` configuration file by running the following command:
    ```terminal
    $ sudo nano /etc/dnsmasq.conf
    ```
    ```terminal title="Example output"
    address=/api-int.<cluster_name>.<base_domain>/<IP_address>
    address=/api-int.mycluster.example.com/192.168.1.10
    address=/api-int.mycluster.example.com/2001:0db8:85a3:0000:0000:8a2e:0370:7334
    ```
1.  Add a DNS PTR record to internally identify the API load balancer. For example, when using dnsmasq, modify the `dnsmasq.conf` configuration file by running the following command:
    ```terminal
    $ sudo nano /etc/dnsmasq.conf
    ```
    ```terminal title="Example output"
    ptr-record=<IP_address>.in-addr.arpa,api-int.<cluster_name>.<base_domain>
    ptr-record=10.1.168.192.in-addr.arpa,api-int.mycluster.example.com
    ```
1.  Restart the DNS server. For example, when using dnsmasq, run the following command:
    ```terminal
    $ sudo systemctl restart dnsmasq
    ```

    These records must be resolvable from all the nodes within the cluster.