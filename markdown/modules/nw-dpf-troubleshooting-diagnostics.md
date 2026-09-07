{%- set _mod_docs_content_type = "REFERENCE" %}
# DPF diagnostic commands and log collection {id="nw-dpf-troubleshooting-diagnostics_{{ context }}"}

You can run diagnostic commands and collect logs to investigate DPF component status, DPU provisioning failures, and hosted cluster issues when troubleshooting or opening support cases. {._abstract}

## Quick status overview commands {id="_quick_status_overview_commands"}

The following commands provide a quick overview of DPF component status:

```terminal title="DPF resource status"
$ oc get dpudeployment,dpuservicetemplate,dpuserviceconfiguration,bfb,dpu -n dpf-operator-system
```

```terminal title="DPF Operator pod status"
$ oc get pods -n dpf-operator-system -l app.kubernetes.io/part-of=dpf-operator
```

```terminal title="DPU-enabled worker node status"
$ oc get nodes -l feature.node.kubernetes.io/dpu-enabled="" \
  -o custom-columns=NAME:.metadata.name,STATUS:.status.conditions[?(@.type=="Ready")].status,AGE:.metadata.creationTimestamp
```

```terminal title="Hosted cluster status (if using HCP Provisioner)"
$ oc get hostedcluster -n clusters-$HOSTED_CLUSTER_NAME
```

```terminal
$ oc get nodepool -n clusters-$HOSTED_CLUSTER_NAME
```

## Detailed diagnostic commands {id="_detailed_diagnostic_commands"}

```terminal title="DPU provisioning status"
$ oc describe dpu -n dpf-operator-system
```

```terminal
$ oc describe bfb -n dpf-operator-system bf-bundle
```

```terminal title="DPF Operator configuration"
$ oc get dpfoperatorconfig -n dpf-operator-system -o yaml
```

```terminal title="Service template and configuration status"
$ oc describe dpuservicetemplate -n dpf-operator-system
```

```terminal
$ oc describe dpuserviceconfiguration -n dpf-operator-system
```

```terminal title="DPU service status"
$ oc get dpuservice -n dpf-operator-system -o wide
```

```terminal
$ oc describe dpuservice -n dpf-operator-system
```

```terminal title="Node Feature Discovery status"
$ oc get nodefeaturerule -n openshift-nfd
```

```terminal
$ oc describe node <worker-node> | grep -A 20 "Labels:"
```

## Log collection commands {id="_log_collection_commands"}

```terminal title="DPF Operator logs"
$ oc logs -n dpf-operator-system -l app.kubernetes.io/name=dpf-operator --tail=200 > dpf-operator.log
```

```terminal title="HCP Provisioner logs (if using hosted clusters)"
$ oc logs -n dpf-operator-system -l app.kubernetes.io/name=dpfhcp-provisioner-operator --tail=200 > dpfhcp-provisioner.log
```

```terminal title="Worker node kubelet logs"
$ oc debug node/<dpu-worker-node>
```

In the debug shell, run:

```terminal
$ chroot /host
```

```terminal
$ journalctl -u kubelet --since "1 hour ago" > kubelet.log
```

```terminal title="OVN-Kubernetes logs"
$ oc logs -n openshift-ovn-kubernetes -l app=ovnkube-node --tail=100 > ovn-kubernetes.log
```

```terminal title="SR-IOV Network Operator logs"
$ oc logs -n openshift-sriov-network-operator -l app=sriov-network-operator --tail=100 > sriov-operator.log
```

```terminal title="Node Feature Discovery logs"
$ oc logs -n openshift-nfd -l app=nfd-worker --tail=100 > nfd.log
```

## System information collection {id="_system_information_collection"}

```terminal title="Hardware information"
$ oc debug node/<dpu-worker-node>
```

In the debug shell, run:

```terminal
$ lspci | grep -i mellanox
```

```terminal
$ lshw -class network
```

```terminal
$ dmidecode -t system
```

```terminal title="DPU firmware information"
$ mlxfwmanager --query
```

```terminal
$ mst status
```

```terminal title="Network interface information"
$ ip addr show
```

```terminal
$ ip route show
```

```terminal
$ ethtool -i <interface>
```

## Performance monitoring commands {id="_performance_monitoring_commands"}

```terminal title="DPU service metrics"
$ oc exec -n dpf-operator-system <dts-service-pod> -- \
  curl -s localhost:9189/metrics | grep -E "(current_link_speed|p[01]_eth_)"
```

```terminal title="Container resource usage"
$ oc adm top pods -n dpf-operator-system --containers
```

```terminal
$ oc adm top nodes -l feature.node.kubernetes.io/dpu-enabled=""
```

## Support information package {id="_support_information_package"}

When opening a support case, collect the following information:

**Environment information**

*   {{ product_title }} cluster version and build
*   DPF Operator version and configuration
*   Hardware specifications (server model, DPU model, firmware versions)
*   Network topology and configuration

**Configuration files**

*   DPF Operator configuration (`dpfoperatorconfig`)
*   Service templates and configurations
*   Network policies and configurations
*   Environment variables used during installation

**Log files**

*   DPF Operator logs (past 24 hours)
*   Worker node system logs (past 4 hours)
*   Kubernetes event logs related to DPF resources
*   Application logs for affected services

## Common log analysis patterns {id="_common_log_analysis_patterns"}

Look for the following patterns in logs when troubleshooting:

**DPU provisioning issues**:

*   `Error downloading BFB image`
*   `Failed to detect DPU hardware`
*   `Provisioning timeout exceeded`

**Networking issues**:

*   `OVN database connection failed`
*   `Failed to program flows`
*   `Interface binding failed`

**Service deployment issues**:

*   `Image pull failed`
*   `Insufficient resources`
*   `ConfigMap not found`

**Authentication issues**:

*   `Certificate signing request denied`
*   `Unauthorized access to API server`
*   `Token validation failed`