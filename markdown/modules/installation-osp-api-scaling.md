{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling clusters by using Octavia {id="installation-osp-api-scaling_{{ context }}"}

If you want to use multiple API load balancers, create an Octavia load balancer and then configure your cluster to use it. {._abstract}

**Prerequisites**

*   Octavia is available on your {{ rh_openstack_first }} deployment.

**Procedure**

1.  From the command-line interface (CLI), create an Octavia load balancer that uses the Amphora driver:
    ```terminal
    $ openstack loadbalancer create --name API_OCP_CLUSTER --vip-subnet-id <id_of_worker_vms_subnet>
    ```

    You can use a name of your choice instead of `API_OCP_CLUSTER`.
1.  After the load balancer becomes active, create listeners:
    ```terminal
    $ openstack loadbalancer listener create --name API_OCP_CLUSTER_6443 --protocol HTTPS--protocol-port 6443 API_OCP_CLUSTER
    ```

    :::note

    To view the status of the load balancer, enter `openstack loadbalancer list`.
    
    :::

1.  Create a pool that uses the round-robin algorithm and has session persistence enabled:
    ```terminal
    $ openstack loadbalancer pool create --name API_OCP_CLUSTER_pool_6443 --lb-algorithm ROUND_ROBIN --session-persistence type=<source_IP_address> --listener API_OCP_CLUSTER_6443 --protocol HTTPS
    ```
1.  To ensure that control-plane machines are available, create a health monitor:
    ```terminal
    $ openstack loadbalancer healthmonitor create --delay 5 --max-retries 4 --timeout 10 --type TCP API_OCP_CLUSTER_pool_6443
    ```
1.  Add the control plane machines as members of the load balancer pool:
    ```terminal
    $ for SERVER in $(MASTER-0-IP MASTER-1-IP MASTER-2-IP)
    do
      openstack loadbalancer member create --address $SERVER  --protocol-port 6443 API_OCP_CLUSTER_pool_6443
    done
    ```
1.  Optional: To reuse the cluster API floating IP address, unset it:
    ```terminal
    $ openstack floating ip unset $API_FIP
    ```
1.  Add either the unset `API_FIP` or a new address to the created load balancer VIP:
    ```terminal
    $ openstack floating ip set  --port $(openstack loadbalancer show -c <vip_port_id> -f value API_OCP_CLUSTER) $API_FIP
    ```

    Your cluster now uses Octavia for load balancing.