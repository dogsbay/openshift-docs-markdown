{%- set _mod_docs_content_type = "REFERENCE" %}
# Recommended practices for installing large-scale clusters {id="recommended-install-practices_{{ context }}"}

When installing large clusters or scaling the cluster to larger node counts, set the cluster network `cidr` accordingly in your `install-config.yaml` file before you install the cluster. {._abstract}

```yaml title="Example install-config.yaml file with a network configuration for a cluster with a large node count"
apiVersion: v1
metadata:
  name: cluster-name
# ...
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.0.0.0/16
  networkType: OVNKubernetes
  serviceNetwork:
  - 172.30.0.0/16
# ...
```
*   The default cluster network `cidr` `10.128.0.0/14` cannot be used if the cluster size is more than 500 nodes. The `cidr` must be set to `10.128.0.0/12` or `10.128.0.0/10` to support larger node counts beyond 500 nodes.