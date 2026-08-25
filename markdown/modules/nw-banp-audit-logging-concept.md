{%- set _mod_docs_content_type = "CONCEPT" %}
# BaselineAdminNetworkPolicy audit logging {id="nw-banp-audit-logging-concept_{{ context }}"}

You can enable audit logging for `BaselineAdminNetworkPolicy` custom resources in {{ product_title }} by annotating each policy with the `k8s.ovn.org/acl-logging` key. {._abstract}

<details>
<summary>Example of annotation for `BaselineAdminNetworkPolicy` CR</summary>

```yaml
apiVersion: policy.networking.k8s.io/v1alpha1
kind: BaselineAdminNetworkPolicy
metadata:
  annotations:
    k8s.ovn.org/acl-logging: '{ "deny": "alert", "allow": "alert"}'
  name: default
spec:
  subject:
    namespaces:
      matchLabels:
          tenant: workloads # Selects all workload pods in the cluster.
  ingress:
  - name: "default-allow-dns" # This rule allows ingress from dns tenant to all workloads.
    action: "Allow"
    from:
    - namespaces:
          matchLabels:
            tenant: dns
  - name: "default-deny-dns" # This rule denies all ingress from all pods to workloads.
    action: "Deny"
    from:
    - namespaces: {} # Use the empty selector with caution because it also selects OpenShift namespaces as well.
  egress:
  - name: "default-deny-dns" # This rule denies all egress from workloads. It will be applied when no ANP or network policy matches.
    action: "Deny"
    to:
    - namespaces: {} # Use the empty selector with caution because it also selects OpenShift namespaces as well.
```
</details>

In the example, an event in which any of the namespaces with the label `tenant: dns` accesses the namespaces with the label `tenant: workloads`, a log is generated.

The following is a direction index for the examples log entries that follow:

<table>
<thead>
<tr>
  <th>Direction</th>
  <th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Ingress</td>
  <td>Rule0:: Allow from tenant <code>dns</code> to tenant <code>workloads</code>; Ingress0: <code>Allow</code>Rule1:: Deny to tenant <code>workloads</code> from all pods; Ingress1: <code>Deny</code></td>
</tr>
<tr>
  <td>Egress</td>
  <td>Rule0:: Deny to all pods; Egress0: <code>Deny</code></td>
</tr>
</tbody>
</table>

<details>
<summary>Example ACL allow log entry for `Allow` action of `default` BANP with `Ingress:0`</summary>

```text
2024-06-10T18:11:58.263Z|00022|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:0", verdict=allow, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:57,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.87,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=60510,tp_dst=8080,tcp_flags=syn
2024-06-10T18:11:58.264Z|00023|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:0", verdict=allow, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:57,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.87,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=60510,tp_dst=8080,tcp_flags=psh|ack
2024-06-10T18:11:58.264Z|00024|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:0", verdict=allow, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:57,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.87,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=60510,tp_dst=8080,tcp_flags=ack
2024-06-10T18:11:58.264Z|00025|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:0", verdict=allow, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:57,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.87,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=60510,tp_dst=8080,tcp_flags=ack
2024-06-10T18:11:58.264Z|00026|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:0", verdict=allow, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:57,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.87,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=60510,tp_dst=8080,tcp_flags=fin|ack
2024-06-10T18:11:58.264Z|00027|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:0", verdict=allow, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:57,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.87,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=60510,tp_dst=8080,tcp_flags=ack
```
</details>

<details>
<summary>Example ACL allow log entry for `Allow` action of `default` BANP with `Egress:0` and `Ingress:1`</summary>

```text
2024-06-10T18:09:57.774Z|00016|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Egress:0", verdict=drop, severity=alert, direction=from-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:56,dl_dst=0a:58:0a:82:02:57,nw_src=10.130.2.86,nw_dst=10.130.2.87,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=45614,tp_dst=8080,tcp_flags=syn
2024-06-10T18:09:58.809Z|00017|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Egress:0", verdict=drop, severity=alert, direction=from-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:56,dl_dst=0a:58:0a:82:02:57,nw_src=10.130.2.86,nw_dst=10.130.2.87,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=45614,tp_dst=8080,tcp_flags=syn
2024-06-10T18:10:00.857Z|00018|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Egress:0", verdict=drop, severity=alert, direction=from-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:56,dl_dst=0a:58:0a:82:02:57,nw_src=10.130.2.86,nw_dst=10.130.2.87,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=45614,tp_dst=8080,tcp_flags=syn
2024-06-10T18:10:25.414Z|00019|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:1", verdict=drop, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:58,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.88,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=40630,tp_dst=8080,tcp_flags=syn
2024-06-10T18:10:26.457Z|00020|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:1", verdict=drop, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:58,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.88,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=40630,tp_dst=8080,tcp_flags=syn
2024-06-10T18:10:28.505Z|00021|acl_log(ovn_pinctrl0)|INFO|name="BANP:default:Ingress:1", verdict=drop, severity=alert, direction=to-lport: tcp,vlan_tci=0x0000,dl_src=0a:58:0a:82:02:58,dl_dst=0a:58:0a:82:02:56,nw_src=10.130.2.88,nw_dst=10.130.2.86,nw_tos=0,nw_ecn=0,nw_ttl=64,nw_frag=no,tp_src=40630,tp_dst=8080,tcp_flags=syn
```
</details>

The following table describes BANP annotation:

***Audit logging BaselineAdminNetworkPolicy annotation***

<table>
<thead>
<tr>
  <th>Annotation</th>
  <th>Value</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>k8s.ovn.org/acl-logging</code></td>
  <td>You must specify at least one of <code>Allow</code> or <code>Deny</code> to enable audit logging for a namespace.<br><br><code>Deny</code>:: Optional: Specify <code>alert</code>, <code>warning</code>, <code>notice</code>, <code>info</code>, or <code>debug</code>.<code>Allow</code>:: Optional: Specify <code>alert</code>, <code>warning</code>, <code>notice</code>, <code>info</code>, or <code>debug</code>.</td>
</tr>
</tbody>
</table>