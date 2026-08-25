{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an Ingress load balancer for a two-node cluster with fencing {id="two-node-ingress-lb-configuration_{{ context }}"}

You must configure an external Ingress load balancer (LB) before you install a two-node OpenShift cluster with fencing. The Ingress LB forwards external application traffic to the Ingress Controller pods that run on the control plane nodes. Both nodes can actively receive traffic.

**Prerequisites**

*   You have two control plane nodes with fencing enabled.  
*   You have network connectivity from the load balancer to both control plane nodes.  
*   You created DNS records for `api.<cluster_name>.<base_domain>` and `*.apps.<cluster_name>.<base_domain>`.  
*   You have an external load balancer that supports health checks on endpoints.  

**Procedure**

1.  Configure the load balancer to forward traffic for the following ports:
    *   `6443`: Kubernetes API server  
    *   `80` and `443`: Application ingress

        You must forward traffic to both control plane nodes.
1.  Configure health checks on the load balancer. You must monitor the backend endpoints so that the load balancer only sends traffic to nodes that respond.
1.  Configure the load balancer to forward traffic to both control plane nodes. The following example shows how to configure two control plane nodes:  
    ```terminal
    frontend api_frontend
        bind *:6443
        mode tcp
        default_backend api_backend

    backend api_backend
        mode tcp
        balance roundrobin
        server cp0 <cp0_ip>:6443 check
        server cp1 <cp1_ip>:6443 check

    frontend ingress_frontend
        bind *:80
        bind *:443
        mode tcp
        default_backend ingress_backend

    backend ingress_backend
        mode tcp
        balance roundrobin
        server cp0 <cp0_ip>:80 check
        server cp1 <cp1_ip>:80 check
        server cp0 <cp0_ip>:443 check
        server cp1 <cp1_ip>:443 check
    ```
1.  Verify the load balancer configuration:
    1.  From an external client, run the following command:
        ```terminal
        $ curl -k https://api.<cluster_name>.<base_domain>:6443/version
        ```
    1.  From an external client, access an application route by running the following command:
        ```terminal
        $ curl https://<app>.<cluster_name>.<base_domain>
        ```

You can shut down a control plane node and verify that the load balancer stops sending traffic to that node while the other node continues to serve requests.