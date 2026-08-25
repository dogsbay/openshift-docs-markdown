{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ product_title }} network flow matrix {id="network-flow-matrix_{{ context }}"}

You can use the information in the appropriate network flow matrix to manage ingress traffic for your specific environment. You can restrict ingress traffic to essential flows to improve network security. {._abstract}

The following network flow matrixes describe the ingress flows to {{ product_title }} services for the following environments:

*   {{ product_title }} on bare metal
*   {{ sno_caps }} with other platforms
*   {{ product_title }} on {{ aws_first }}
*   {{ sno_caps }} on {{ aws_short }}


:::note

You can use the `commatrix` plugin for the `oc` command to generate local network flow data for your cluster. For more information see "Generating ingress network flow data using the `commatrix` plugin".

:::


Additionally, consider the following dynamic port ranges when managing ingress traffic for both bare metal and cloud environments:

*   `9000-9999`: Reserved for internal {{ product_title }} components. Do not assign user workloads or services to ports in this range.
*   `30000-32767`: Kubernetes `NodePort` service ports. These ports are required only if you expose services by using the `NodePort` service type. If `NodePort` services are not used, you can block this port range.

To view or download the complete raw CSV content for an environment, see the following resources:

*   [{{ product_title }} on bare metal](https://raw.githubusercontent.com/openshift-kni/commatrix/release-4.22/docs/stable/raw/bm.csv)
*   [{{ sno_caps }} with other platforms](https://raw.githubusercontent.com/openshift-kni/commatrix/release-4.22/docs/stable/raw/none-sno.csv)
*   [{{ product_title }} on {{ aws_short }}](https://raw.githubusercontent.com/openshift-kni/commatrix/release-4.22/docs/stable/raw/aws.csv)
*   [{{ sno_caps }} on {{ aws_short }}](https://raw.githubusercontent.com/openshift-kni/commatrix/release-4.22/docs/stable/raw/aws-sno.csv)


:::note

The network flow matrixes describe ingress traffic flows for a base {{ product_title }} or {{ sno }} installation. The matrixes do not apply for {{ hcp }}, Red&#160;Hat build of MicroShift, or standalone clusters.

:::


## Base network flows {id="network-flow-matrix-common_{{ context }}"}

The following matrixes describe the base ingress flows to {{ product_title }} services.


:::note

For base ingress flows to {{ sno }} clusters, see the _Control plane node base flows_ matrix only.

:::


**Control plane node base flows**

```
Direction,Protocol,Port,Namespace,Service,Pod,Container,Node Role,Optional
Ingress,TCP,22,Host system service,sshd,,,master,TRUE
Ingress,TCP,111,Host system service,rpcbind,,,master,TRUE
Ingress,TCP,2379,openshift-etcd,etcd,etcd,etcdctl,master,FALSE
Ingress,TCP,2380,openshift-etcd,healthz,etcd,etcd,master,FALSE
Ingress,TCP,6080,openshift-kube-apiserver,,kube-apiserver,kube-apiserver-insecure-readyz,master,FALSE
Ingress,TCP,6443,openshift-kube-apiserver,apiserver,kube-apiserver,kube-apiserver,master,FALSE
Ingress,TCP,8798,openshift-machine-config-operator,machine-config-daemon,machine-config-daemon,machine-config-daemon,master,FALSE
Ingress,TCP,9001,openshift-machine-config-operator,machine-config-daemon,machine-config-daemon,kube-rbac-proxy,master,FALSE
Ingress,TCP,9099,openshift-cluster-version,cluster-version-operator,cluster-version-operator,cluster-version-operator,master,FALSE
Ingress,TCP,9100,openshift-monitoring,node-exporter,node-exporter,kube-rbac-proxy,master,FALSE
Ingress,TCP,9103,openshift-ovn-kubernetes,ovn-kubernetes-node,ovnkube-node,kube-rbac-proxy-node,master,FALSE
Ingress,TCP,9104,openshift-network-operator,metrics,network-operator,network-operator,master,FALSE
Ingress,TCP,9105,openshift-ovn-kubernetes,ovn-kubernetes-node,ovnkube-node,kube-rbac-proxy-ovn-metrics,master,FALSE
Ingress,TCP,9107,openshift-ovn-kubernetes,egressip-node-healthcheck,ovnkube-node,ovnkube-controller,master,FALSE
Ingress,TCP,9108,openshift-ovn-kubernetes,ovn-kubernetes-control-plane,ovnkube-control-plane,kube-rbac-proxy,master,FALSE
Ingress,TCP,9192,openshift-cluster-machine-approver,machine-approver,machine-approver,kube-rbac-proxy,master,FALSE
Ingress,TCP,9258,openshift-cloud-controller-manager-operator,machine-approver,cluster-cloud-controller-manager,cluster-cloud-controller-manager,master,FALSE
Ingress,TCP,9443,openshift-cloud-controller-manager-operator,cloud-controller-manager-operator,cluster-cloud-controller-manager-operator,cluster-cloud-controller-manager,master,FALSE
Ingress,TCP,9637,openshift-machine-config-operator,kube-rbac-proxy-crio,kube-rbac-proxy-crio,kube-rbac-proxy-crio,master,FALSE
Ingress,TCP,9978,openshift-etcd,etcd,etcd,etcd-metrics,master,FALSE
Ingress,TCP,9979,openshift-etcd,etcd,etcd,etcd-metrics,master,FALSE
Ingress,TCP,9980,openshift-etcd,etcd,etcd,etcd,master,FALSE
Ingress,TCP,10250,Host system service,kubelet,,,master,FALSE
Ingress,TCP,10256,openshift-ovn-kubernetes,ovnkube,ovnkube,ovnkube-controller,master,FALSE
Ingress,TCP,10257,openshift-kube-controller-manager,kube-controller-manager,kube-controller-manager,kube-controller-manager,master,FALSE
Ingress,TCP,10259,openshift-kube-scheduler,scheduler,openshift-kube-scheduler,kube-scheduler,master,FALSE
Ingress,TCP,17697,openshift-kube-apiserver,openshift-kube-apiserver-healthz,kube-apiserver,kube-apiserver-check-endpoints,master,FALSE
Ingress,TCP,22623,openshift-machine-config-operator,machine-config-server,machine-config-server,machine-config-server,master,FALSE
Ingress,TCP,22624,openshift-machine-config-operator,machine-config-server,machine-config-server,machine-config-server,master,FALSE
Ingress,UDP,111,Host system service,rpcbind,,,master,TRUE
```

**Worker node base flows**

```
Direction,Protocol,Port,Namespace,Service,Pod,Container,Node Role,Optional
Ingress,TCP,22,Host system service,sshd,,,worker,TRUE
Ingress,TCP,111,Host system service,rpcbind,,,worker,TRUE
Ingress,TCP,8798,openshift-machine-config-operator,machine-config-daemon,machine-config-daemon,machine-config-daemon,worker,FALSE
Ingress,TCP,9001,openshift-machine-config-operator,machine-config-daemon,machine-config-daemon,kube-rbac-proxy,worker,FALSE
Ingress,TCP,9100,openshift-monitoring,node-exporter,node-exporter,kube-rbac-proxy,worker,FALSE
Ingress,TCP,9103,openshift-ovn-kubernetes,ovn-kubernetes-node,ovnkube-node,kube-rbac-proxy-node,worker,FALSE
Ingress,TCP,9105,openshift-ovn-kubernetes,ovn-kubernetes-node,ovnkube-node,kube-rbac-proxy-ovn-metrics,worker,FALSE
Ingress,TCP,9107,openshift-ovn-kubernetes,egressip-node-healthcheck,ovnkube-node,ovnkube-controller,worker,FALSE
Ingress,TCP,9637,openshift-machine-config-operator,kube-rbac-proxy-crio,kube-rbac-proxy-crio,kube-rbac-proxy-crio,worker,FALSE
Ingress,TCP,10250,Host system service,kubelet,,,worker,FALSE
Ingress,TCP,10256,openshift-ovn-kubernetes,ovnkube,ovnkube,ovnkube-controller,worker,FALSE
Ingress,UDP,111,Host system service,rpcbind,,,worker,TRUE
```

## Additional network flows for {{ product_title }} on bare metal {id="network-flow-matrix-bm_{{ context }}"}

In addition to the base network flows, the following matrix describes the ingress flows to {{ product_title }} services that are specific to {{ product_title }} on bare metal.

**{{ product_title }} on bare metal**

```
Direction,Protocol,Port,Namespace,Service,Pod,Container,Node Role,Optional
Ingress,TCP,53,openshift-dns,dns-default,dns-default,dns,master,FALSE
Ingress,TCP,6180,openshift-machine-api,metal3-state,metal3,metal3-httpd,master,FALSE
Ingress,TCP,6183,openshift-machine-api,metal3-state,metal3,metal3-httpd,master,FALSE
Ingress,TCP,6385,openshift-machine-api,metal3-state,metal3,metal3-httpd,master,FALSE
Ingress,TCP,6388,openshift-machine-api,metal3-state,metal3,metal3-httpd,master,FALSE
Ingress,TCP,9444,openshift-kni-infra,,haproxy,haproxy,master,FALSE
Ingress,TCP,9445,openshift-kni-infra,,haproxy,haproxy,master,FALSE
Ingress,TCP,9454,openshift-kni-infra,,haproxy,haproxy,master,FALSE
Ingress,TCP,18080,openshift-kni-infra,,coredns,coredns,master,FALSE
Ingress,UDP,53,openshift-dns,dns-default,dns-default,dns,master,FALSE
Ingress,UDP,6081,openshift-ovn-kubernetes,ovn-kubernetes geneve,,,master,FALSE
Ingress,TCP,53,openshift-dns,dns-default,dns-default,dns,worker,FALSE
Ingress,TCP,80,openshift-ingress,router-internal-default,router-default,router,worker,FALSE
Ingress,TCP,443,openshift-ingress,router-internal-default,router-default,router,worker,FALSE
Ingress,TCP,1936,openshift-ingress,router-internal-default,router-default,router,worker,FALSE
Ingress,TCP,18080,openshift-kni-infra,,coredns,coredns,worker,FALSE
Ingress,UDP,53,openshift-dns,dns-default,dns-default,dns,worker,FALSE
Ingress,UDP,6081,openshift-ovn-kubernetes,ovn-kubernetes geneve,,,worker,FALSE
```

## Additional network flows for {{ sno }} with other platforms {id="network-flow-matrix-sno_{{ context }}"}

In addition to the base network flows, the following matrix describes the ingress flows to {{ product_title }} services that are specific to {{ sno }} configured with `platform: none` in the installation manifest.

**{{ sno_caps }} with other platforms**

```
Direction,Protocol,Port,Namespace,Service,Pod,Container,Node Role,Optional
Ingress,TCP,80,openshift-ingress,router-internal-default,router-default,router,master,FALSE
Ingress,TCP,443,openshift-ingress,router-internal-default,router-default,router,master,FALSE
Ingress,TCP,1936,openshift-ingress,router-internal-default,router-default,router,master,FALSE
```

## Additional network flows for {{ product_title }} on {{ aws_short }} {id="network-flow-matrix-aws_{{ context }}"}

In addition to the base network flows, the following matrix describes the ingress flows to {{ product_title }} services that are specific to {{ product_title }} on {{ aws_short }}.

**{{ product_title }} on AWS**

```
Direction,Protocol,Port,Namespace,Service,Pod,Container,Node Role,Optional
Ingress,TCP,10258,openshift-cloud-controller-manager-operator,cloud-controller,cloud-controller-manager,cloud-controller-manager,master,FALSE
Ingress,TCP,80,openshift-ingress,router-default,router-default,router,worker,FALSE
Ingress,TCP,443,openshift-ingress,router-default,router-default,router,worker,FALSE
Ingress,UDP,6081,openshift-ovn-kubernetes,ovn-kubernetes geneve,,,worker,FALSE
```

## Additional network flows for {{ sno }} on {{ aws_short }} {id="network-flow-matrix-aws-sno_{{ context }}"}

In addition to the base network flows, the following matrix describes the ingress flows to {{ product_title }} services that are specific to {{ sno }} on {{ aws_short }}.

**{{ sno_caps }} on AWS**

```
Direction,Protocol,Port,Namespace,Service,Pod,Container,Node Role,Optional
Ingress,TCP,80,openshift-ingress,router-default,router-default,router,master,FALSE
Ingress,TCP,443,openshift-ingress,router-default,router-default,router,master,FALSE
Ingress,TCP,10258,openshift-cloud-controller-manager-operator,cloud-controller,cloud-controller-manager,cloud-controller-manager,master,FALSE
```