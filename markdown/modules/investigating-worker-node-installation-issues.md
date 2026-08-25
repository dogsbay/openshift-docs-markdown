{%- set _mod_docs_content_type = "PROCEDURE" %}
# Investigating worker node installation issues {id="investigating-worker-node-installation-issues_{{ context }}"}

If you experience worker node installation issues, you can review the worker node status. Collect `kubelet.service`, `crio.service` journald unit logs and the worker node container logs for visibility into the worker node agent, CRI-O container runtime and pod activity. Additionally, you can check the Ignition file and Machine API Operator functionality. If worker node postinstallation configuration fails, check Machine Config Operator (MCO) and DNS functionality. You can also verify system clock synchronization between the bootstrap, master, and worker nodes, and validate certificates. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).
*   You have SSH access to your hosts.
*   You have the fully qualified domain names of the bootstrap and worker nodes.
*   If you are hosting Ignition configuration files by using an HTTP server, you must have the HTTP server’s fully qualified domain name and the port number. You must also have SSH access to the HTTP host.

    :::note

    The initial `kubeadmin` password can be found in `<install_directory>/auth/kubeadmin-password` on the installation host.
    
    :::


**Procedure**

1.  If you have access to the worker node’s console, monitor the console until the node reaches the login prompt. During the installation, Ignition log messages are output to the console.
1.  Verify Ignition file configuration.
    *   If you are hosting Ignition configuration files by using an HTTP server.
        1.  Verify the worker node Ignition file URL. Replace `<http_server_fqdn>` with HTTP server’s fully qualified domain name:
            ```terminal
            $ curl -I http://<http_server_fqdn>:<port>/worker.ign
            ```

            The `-I` option returns the header only. If the Ignition file is available on the specified URL, the command returns `200 OK` status. If it is not available, the command returns `404 file not found`.
        1.  To verify that the Ignition file was received by the worker node, query the HTTP server logs on the HTTP host. For example, if you are using an Apache web server to serve Ignition files:
            ```terminal
            $ grep -is 'worker.ign' /var/log/httpd/access_log
            ```

            If the worker Ignition file is received, the associated `HTTP GET` log message will include a `200 OK` success status, indicating that the request succeeded.
        1.  If the Ignition file was not received, check that it exists on the serving host directly. Ensure that the appropriate file and web server permissions are in place.
    *   If you are using a cloud provider mechanism to inject Ignition configuration files into hosts as part of their initial deployment.
        1.  Review the worker node’s console to determine if the mechanism is injecting the worker node Ignition file correctly.
1.  Check the availability of the worker node’s assigned storage device.
1.  Verify that the worker node has been assigned an IP address from the DHCP server.
1.  Determine worker node status.
    1.  Query node status:
        ```terminal
        $ oc get nodes
        ```
    1.  Retrieve a detailed node description for any worker nodes not showing a `Ready` status:
        ```terminal
        $ oc describe node <worker_node>
        ```

        :::note

        It is not possible to run `oc` commands if an installation issue prevents the {{ product_title }} API from running or if the kubelet is not running yet on each node.
        
        :::

1.  Unlike control plane nodes, worker nodes are deployed and scaled using the Machine API Operator. Check the status of the Machine API Operator.
    1.  Review Machine API Operator pod status:
        ```terminal
        $ oc get pods -n openshift-machine-api
        ```
    1.  If the Machine API Operator pod does not have a `Ready` status, detail the pod’s events:
        ```terminal
        $ oc describe pod/<machine_api_operator_pod_name> -n openshift-machine-api
        ```
    1.  Inspect `machine-api-operator` container logs. The container runs within the `machine-api-operator` pod:
        ```terminal
        $ oc logs pod/<machine_api_operator_pod_name> -n openshift-machine-api -c machine-api-operator
        ```
    1.  Also inspect `kube-rbac-proxy` container logs. The container also runs within the `machine-api-operator` pod:
        ```terminal
        $ oc logs pod/<machine_api_operator_pod_name> -n openshift-machine-api -c kube-rbac-proxy
        ```
1.  Monitor `kubelet.service` journald unit logs on worker nodes, after they have booted. This provides visibility into worker node agent activity.
    1.  Retrieve the logs using `oc`:
        ```terminal
        $ oc adm node-logs --role=worker -u kubelet
        ```
    1.  If the API is not functional, review the logs using SSH instead. Replace `<worker-node>.<cluster_name>.<base_domain>` with appropriate values:
        ```terminal
        $ ssh core@<worker-node>.<cluster_name>.<base_domain> journalctl -b -f -u kubelet.service
        ```

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Accessing cluster nodes by using SSH is not recommended. Before attempting to collect diagnostic data over SSH, review whether the data collected by running `oc adm must gather` and other `oc` commands is sufficient instead. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to access nodes using `ssh core@<node>.<cluster_name>.<base_domain>`.
        
        :::

1.  Retrieve `crio.service` journald unit logs on worker nodes, after they have booted. This provides visibility into worker node CRI-O container runtime activity.
    1.  Retrieve the logs using `oc`:
        ```terminal
        $ oc adm node-logs --role=worker -u crio
        ```
    1.  If the API is not functional, review the logs using SSH instead:
        ```terminal
        $ ssh core@<worker-node>.<cluster_name>.<base_domain> journalctl -b -f -u crio.service
        ```
1.  Collect logs from specific subdirectories under `/var/log/` on worker nodes.
    1.  Retrieve a list of logs contained within a `/var/log/` subdirectory. The following example lists files in `/var/log/sssd/` on all worker nodes:
        ```terminal
        $ oc adm node-logs --role=worker --path=sssd
        ```
    1.  Inspect a specific log within a `/var/log/` subdirectory. The following example outputs `/var/log/sssd/sssd.log` contents from all worker nodes:
        ```terminal
        $ oc adm node-logs --role=worker --path=sssd/sssd.log
        ```
    1.  If the API is not functional, review the logs on each node using SSH instead. The following example tails `/var/log/sssd/sssd.log`:
        ```terminal
        $ ssh core@<worker-node>.<cluster_name>.<base_domain> sudo tail -f /var/log/sssd/sssd.log
        ```
1.  Review worker node container logs using SSH.
    1.  List the containers:
        ```terminal
        $ ssh core@<worker-node>.<cluster_name>.<base_domain> sudo crictl ps -a
        ```
    1.  Retrieve a container’s logs using `crictl`:
        ```terminal
        $ ssh core@<worker-node>.<cluster_name>.<base_domain> sudo crictl logs -f <container_id>
        ```
1.  If you experience worker node configuration issues, verify that the MCO, MCO endpoint, and DNS record are functioning. The Machine Config Operator (MCO) manages operating system configuration during the installation procedure. Also verify system clock accuracy and certificate validity.
    1.  Test whether the MCO endpoint is available. Replace `<cluster_name>` with appropriate values:
        ```terminal
        $ curl https://api-int.<cluster_name>:22623/config/worker
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
        $ ssh core@<bootstrap_fqdn> curl https://api-int.<cluster_name>:22623/config/worker
        ```
    1.  System clock time must be synchronized between bootstrap, master, and worker nodes. Check each node’s system clock reference time and time synchronization statistics:
        ```terminal
        $ ssh core@<node>.<cluster_name>.<base_domain> chronyc tracking
        ```
    1.  Review certificate validity:
        ```terminal
        $ openssl s_client -connect api-int.<cluster_name>:22623 | openssl x509 -noout -text
        ```