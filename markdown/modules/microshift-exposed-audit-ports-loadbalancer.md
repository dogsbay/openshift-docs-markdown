{%- set _mod_docs_content_type = "PROCEDURE" %}
# NodePort and LoadBalancer services {id="microshift-exposed-audit-ports-loadbalancer_{{ context }}"}

OVN-Kubernetes opens host ports for `NodePort` and `LoadBalancer` service types. These services add iptables rules that take the ingress traffic from the host port and forwards it to the node IP address. {._abstract}

Logs for the `NodePort` and `LoadBalancer` services are 
presented in the following examples.

**Procedure**

1.  To access the name of your `ovnkube-master` pods, run the following command:
    ```terminal
    $ oc get pods -n openshift-ovn-kubernetes | awk '/ovnkube-master/{print $1}'
    ```
    ```terminal title="Example ovnkube-master pod name"
    ovnkube-master-n2shv
    ```
1.  You can access the `NodePort` and `LoadBalancer` services logs using your `ovnkube-master` pod and running the following example command:
    ```terminal
    $ oc logs -n openshift-ovn-kubernetes <ovnkube_master_podname> ovnkube-master | grep -E "OVN-KUBE-NODEPORT|OVN-KUBE-EXTERNALIP"
    ```
    ```terminal title="Example NodePort service logs in the ovnkube-master container of the ovnkube-master pod when a host port is open"
    $ I0625 09:07:00.992980 2118395 iptables.go:27] Adding rule in table: nat, chain: OVN-KUBE-NODEPORT with args: "-p TCP -m addrtype --dst-type LOCAL --dport 32718 -j DNAT --to-destination 10.96.178.142:8081" for protocol: 0
    ```
    ```terminal title="Example NodePort service logs in the ovnkube-master container of the ovnkube-master pod when a host port is closed"
    $ Deleting rule in table: nat, chain: OVN-KUBE-NODEPORT with args: "-p TCP -m addrtype --dst-type LOCAL --dport 32718 -j DNAT --to-destination 10.96.178.142:8081" for protocol: 0
    ```
    ```terminal title="Example LoadBalancer service logs in the ovnkube-master container of the ovnkube-master pod when a host port is open"
    $ I0625 09:34:10.406067  128902 iptables.go:27] Adding rule in table: nat, chain: OVN-KUBE-EXTERNALIP with args: "-p TCP -d 172.16.47.129 --dport 8081 -j DNAT --to-destination 10.43.114.94:8081" for protocol: 0
    ```
    ```terminal title="Example LoadBalancer service logs in the ovnkube-master container of the ovnkube-master pod when a host port is closed"
    $ I0625 09:37:00.976953  128902 iptables.go:63] Deleting rule in table: nat, chain: OVN-KUBE-EXTERNALIP with args: "-p TCP -d 172.16.47.129 --dport 8081 -j DNAT --to-destination 10.43.114.94:8081" for protocol: 0
    ```