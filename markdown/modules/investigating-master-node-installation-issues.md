{%- set _mod_docs_content_type = "PROCEDURE" %}
# Investigating control plane node installation issues {id="investigating-master-node-installation-issues_{{ context }}"}

If you experience control plane node installation issues, determine the control plane node {{ product_title }} software defined network (SDN), and network Operator status. Collect `kubelet.service`, `crio.service` journald unit logs, and control plane node container logs for visibility into control plane node agent, CRI-O container runtime, and pod activity. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).
*   You have SSH access to your hosts.
*   You have the fully qualified domain names of the bootstrap and control plane nodes.
*   If you are hosting Ignition configuration files by using an HTTP server, you must have the HTTP server’s fully qualified domain name and the port number. You must also have SSH access to the HTTP host.

    :::note

    The initial `kubeadmin` password can be found in `<install_directory>/auth/kubeadmin-password` on the installation host.
    
    :::


**Procedure**

1.  If you have access to the console for the control plane node, monitor the console until the node reaches the login prompt. During the installation, Ignition log messages are output to the console.
1.  Verify Ignition file configuration.
    *   If you are hosting Ignition configuration files by using an HTTP server.
        1.  Verify the control plane node Ignition file URL. Replace `<http_server_fqdn>` with HTTP server’s fully qualified domain name:
            ```terminal
            $ curl -I http://<http_server_fqdn>:<port>/master.ign
            ```

            The `-I` option returns the header only. If the Ignition file is available on the specified URL, the command returns `200 OK` status. If it is not available, the command returns `404 file not found`.
        1.  To verify that the Ignition file was received by the control plane node query the HTTP server logs on the serving host. For example, if you are using an Apache web server to serve Ignition files:
            ```terminal
            $ grep -is 'master.ign' /var/log/httpd/access_log
            ```

            If the master Ignition file is received, the associated `HTTP GET` log message will include a `200 OK` success status, indicating that the request succeeded.
        1.  If the Ignition file was not received, check that it exists on the serving host directly. Ensure that the appropriate file and web server permissions are in place.
    *   If you are using a cloud provider mechanism to inject Ignition configuration files into hosts as part of their initial deployment.
        1.  Review the console for the control plane node to determine if the mechanism is injecting the control plane node Ignition file correctly.
1.  Check the availability of the storage device assigned to the control plane node.
1.  Verify that the control plane node has been assigned an IP address from the DHCP server.
1.  Determine control plane node status.
    1.  Query control plane node status:
        ```terminal
        $ oc get nodes
        ```
    1.  If one of the control plane nodes does not reach a `Ready` status, retrieve a detailed node description:
        ```terminal
        $ oc describe node <master_node>
        ```

        :::note

        It is not possible to run `oc` commands if an installation issue prevents the {{ product_title }} API from running or if the kubelet is not running yet on each node:
        
        :::

1.  Determine OVN-Kubernetes status.
    1.  Review `ovnkube-node` daemon set status, in the `openshift-ovn-kubernetes` namespace:
        ```terminal
        $ oc get daemonsets -n openshift-ovn-kubernetes
        ```
    1.  If those resources are listed as `Not found`, review pods in the `openshift-ovn-kubernetes` namespace:
        ```terminal
        $ oc get pods -n openshift-ovn-kubernetes
        ```
    1.  Review logs relating to failed {{ product_title }} OVN-Kubernetes pods in the `openshift-ovn-kubernetes` namespace:
        ```terminal
        $ oc logs <ovn-k_pod> -n openshift-ovn-kubernetes
        ```
1.  Determine cluster network configuration status.
    1.  Review whether the cluster’s network configuration exists:
        ```terminal
        $ oc get network.config.openshift.io cluster -o yaml
        ```
    1.  If the installer failed to create the network configuration, generate the Kubernetes manifests again and review message output:
        ```terminal
        $ ./openshift-install create manifests
        ```
    1.  Review the pod status in the `openshift-network-operator` namespace to determine whether the Cluster Network Operator (CNO) is running:
        ```terminal
        $ oc get pods -n openshift-network-operator
        ```
    1.  Gather network Operator pod logs from the `openshift-network-operator` namespace:
        ```terminal
        $ oc logs pod/<network_operator_pod_name> -n openshift-network-operator
        ```
1.  Monitor `kubelet.service` journald unit logs on control plane nodes, after they have booted. This provides visibility into control plane node agent activity.
    1.  Retrieve the logs using `oc`:
        ```terminal
        $ oc adm node-logs --role=master -u kubelet
        ```
    1.  If the API is not functional, review the logs using SSH instead. Replace `<master-node>.<cluster_name>.<base_domain>` with appropriate values:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> journalctl -b -f -u kubelet.service
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. Before attempting to collect diagnostic data over SSH, review whether the data collected by running `oc adm must gather` and other `oc` commands is sufficient instead. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>`.
        
        :::

1.  Retrieve `crio.service` journald unit logs on control plane nodes, after they have booted. This provides visibility into control plane node CRI-O container runtime activity.
    1.  Retrieve the logs using `oc`:
        ```terminal
        $ oc adm node-logs --role=master -u crio
        ```
    1.  If the API is not functional, review the logs using SSH instead:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> journalctl -b -f -u crio.service
        ```
1.  Collect logs from specific subdirectories under `/var/log/` on control plane nodes.
    1.  Retrieve a list of logs contained within a `/var/log/` subdirectory. The following example lists files in `/var/log/openshift-apiserver/` on all control plane nodes:
        ```terminal
        $ oc adm node-logs --role=master --path=openshift-apiserver
        ```
    1.  Inspect a specific log within a `/var/log/` subdirectory. The following example outputs `/var/log/openshift-apiserver/audit.log` contents from all control plane nodes:
        ```terminal
        $ oc adm node-logs --role=master --path=openshift-apiserver/audit.log
        ```
    1.  If the API is not functional, review the logs on each node using SSH instead. The following example tails `/var/log/openshift-apiserver/audit.log`:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo tail -f /var/log/openshift-apiserver/audit.log
        ```
1.  Review control plane node container logs using SSH.
    1.  List the containers:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl ps -a
        ```
    1.  Retrieve a container’s logs using `crictl`:
        ```terminal
        $ ssh core@<master-node>.<cluster_name>.<base_domain> sudo crictl logs -f <container_id>
        ```
1.  If you experience control plane node configuration issues, verify that the MCO, MCO endpoint, and DNS record are functioning. The Machine Config Operator (MCO) manages operating system configuration during the installation procedure. Also verify system clock accuracy and certificate validity.
    1.  Test whether the MCO endpoint is available. Replace `<cluster_name>` with appropriate values:
        ```terminal
        $ curl https://api-int.<cluster_name>:22623/config/master
        ```
    1.  If the endpoint is unresponsive, verify load balancer configuration. Ensure that the endpoint is configured to run on port 22623.
    1.  Verify that the MCO endpoint’s DNS record is configured and resolves to the load balancer.
        1.  Run a DNS lookup for the defined MCO endpoint name:
            ```terminal
            $ dig api-int.<cluster_name> @<dns_server>
            ```
        1.  Run a reverse lookup to the assigned MCO IP address on the load balancer:
            ```terminal
            $ dig -x <load_balancer_mco_ip_address> @<dns_server>
            ```
    1.  Verify that the MCO is functioning from the bootstrap node directly. Replace `<bootstrap_fqdn>` with the bootstrap node’s fully qualified domain name:
        ```terminal
        $ ssh core@<bootstrap_fqdn> curl https://api-int.<cluster_name>:22623/config/master
        ```
    1.  System clock time must be synchronized between bootstrap, master, and worker nodes. Check each node’s system clock reference time and time synchronization statistics:
        ```terminal
        $ ssh core@<node>.<cluster_name>.<base_domain> chronyc tracking
        ```
    1.  Review certificate validity:
        ```terminal
        $ openssl s_client -connect api-int.<cluster_name>:22623 | openssl x509 -noout -text
        ```