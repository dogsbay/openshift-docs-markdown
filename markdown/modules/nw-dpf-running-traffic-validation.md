{%- set _mod_docs_content_type = "PROCEDURE" %}
# Run traffic validation tests {id="nw-dpf-running-traffic-validation_{{ context }}"}

You can run connectivity tests between the traffic test pods and services to verify that the DPU services and service chains are configured correctly.
A successful test confirms that end-to-end traffic flows through the DPU data plane as expected. {._abstract}

**Prerequisites**

*   The traffic test pods and services are deployed in the `workload` namespace and all pods are in a `Running` state.
*   You have access to the management cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Run a ping connectivity test between pods on different worker nodes.

    In the following example, replace `<worker_pod_name>` with the name of a `traffic-test-worker` pod and replace `<target_pod_ip>` with the IP address of a `traffic-test-worker` pod on a different worker node:
    ```terminal
    $ oc -n workload exec -it <worker_pod_name> -- ping -c 4 <target_pod_ip>
    ```
    ```terminal title="Example output"
    PING 10.131.0.9 (10.131.0.9) 56(84) bytes of data.
    64 bytes from 10.131.0.9: icmp_seq=1 ttl=62 time=1.61 ms
    64 bytes from 10.131.0.9: icmp_seq=2 ttl=62 time=0.876 ms
    64 bytes from 10.131.0.9: icmp_seq=3 ttl=62 time=0.510 ms
    64 bytes from 10.131.0.9: icmp_seq=4 ttl=62 time=0.421 ms

    --- 10.131.0.9 ping statistics ---
    4 packets transmitted, 4 received, 0% packet loss, time 3028ms
    rtt min/avg/max/mdev = 0.421/0.853/1.606/0.466 ms
    ```

    Verify that all 4 packets are received with 0% packet loss.
1.  Run a service connectivity test from a worker pod to a service on a control plane node.

    In the following example, replace `<worker_pod_name>` with the name of a `traffic-test-worker` pod and replace `<service_cluster_ip>` with the cluster IP address of the `traffic-test-master` service:
    ```terminal
    $ oc -n workload exec -it <worker_pod_name> -- nc -vz <service_cluster_ip> 5000
    ```

    A `succeeded` message confirms that the service is reachable through the DPU-accelerated network.
1.  Run a service connectivity test from a worker pod to another worker pod.

    In the following example, replace `<worker_pod_name>` with the name of a `traffic-test-worker` pod and replace `<service_cluster_ip>` with the cluster IP address of the `traffic-test-worker` service:
    ```terminal
    $ oc -n workload exec -it <worker_pod_name> -- nc -vz <service_cluster_ip> 5000
    ```

    A `succeeded` message confirms end-to-end connectivity through the DPU-accelerated service chain between worker pods.
1.  Optional: Run an external service connectivity test.

    In the following example, replace `<worker_pod_name>` with the name of a `traffic-test-worker` pod, replace `<node_ip>` with the IP address of a cluster node, and replace `<nodeport>` with the NodePort for one of the services:
    ```terminal
    $ oc -n workload exec -it <worker_pod_name> -- nc -vz <node_ip> <nodeport>
    ```

    A `succeeded` message confirms that NodePort services are reachable through the DPU networking stack.