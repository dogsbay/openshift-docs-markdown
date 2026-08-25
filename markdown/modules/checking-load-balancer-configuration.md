{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking a load balancer configuration before {{ product_title }} installation {id="checking-load-balancer-configuration_{{ context }}"}

Check your load balancer configuration prior to starting an {{ product_title }} installation. {._abstract}

**Prerequisites**

*   You have configured an external load balancer of your choosing, in preparation for an {{ product_title }} installation. The following example is based on a {{ op_system_base_full }} host using HAProxy to provide load balancing services to a cluster.
*   You have configured DNS in preparation for an {{ product_title }} installation.
*   You have SSH access to your load balancer.

**Procedure**

1.  Check that the `haproxy` systemd service is active:
    ```terminal
    $ ssh <user_name>@<load_balancer> systemctl status haproxy
    ```
1.  Verify that the load balancer is listening on the required ports. The following example references ports `80`, `443`, `6443`, and `22623`.
    *   For HAProxy instances running on {{ op_system_base_full }} 6, verify port status by using the `netstat` command:
        ```terminal
        $ ssh <user_name>@<load_balancer> netstat -nltupe | grep -E ':80|:443|:6443|:22623'
        ```
    *   For HAProxy instances running on {{ op_system_base_full }} 7 or 8, verify port status by using the `ss` command:
        ```terminal
        $ ssh <user_name>@<load_balancer> ss -nltupe | grep -E ':80|:443|:6443|:22623'
        ```

        :::note

        Red Hat recommends the `ss` command instead of `netstat` in {{ op_system_base_full }} 7 or later. `ss` is provided by the iproute package. For more information on the `ss` command, see the [{{ op_system_base_full }} 7 Performance Tuning Guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/performance_tuning_guide/sect-red_hat_enterprise_linux-performance_tuning_guide-tool_reference-ss).
        
        :::

1.  Check that the wildcard DNS record resolves to the load balancer:
    ```terminal
    $ dig <wildcard_fqdn> @<dns_server>
    ```