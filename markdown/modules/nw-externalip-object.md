{%- set _mod_docs_content_type = "REFERENCE" %}
# ExternalIP address block configuration {id="nw-externalip-object_{{ context }}"}

To better understand ExternalIP address blocks, view the example configuration for ExternalIP address blocks that is defined by a Network custom resource (CR) named `cluster`. The Network CR is part of the `config.openshift.io` API group. {._abstract}


:::important

During cluster installation, the Cluster Version Operator (CVO) automatically creates a Network CR named `cluster`. Creating any other CR objects of this type is not supported.

:::


The following YAML describes the ExternalIP configuration in a `Network.config.openshift.io` CR named `cluster`:

```yaml
apiVersion: config.openshift.io/v1
kind: Network
metadata:
  name: cluster
spec:
  externalIP:
    autoAssignCIDRs: []
    policy:
      ...
```
*   `autoAssignCIDRs`: Defines the IP address block in CIDR format that is available for automatic assignment of external IP addresses to a service.
Only a single IP address range is allowed.
*   `policy`: Defines restrictions on manual assignment of an IP address to a service. If no restrictions are defined, specifying the `spec.externalIP` field in a `Service` object is not allowed. By default, no restrictions are defined.

The following YAML describes the fields for the `policy` stanza in the `Network.config.openshift.io` CR:

```yaml
policy:
  allowedCIDRs: []
  rejectedCIDRs: []
```
*   `allowedCIDRs`: A list of allowed IP address ranges in CIDR format.
*   `rejectedCIDRs`: A list of rejected IP address ranges in CIDR format.

The next set of example configurations show external IP address pools configurations.

The following YAML shows a `spec.externalIP.autoAssignCIDRs` configuration that enables automatically assigned external IP addresses:

```yaml title="Example configuration with spec.externalIP.autoAssignCIDRs set"
apiVersion: config.openshift.io/v1
kind: Network
metadata:
  name: cluster
spec:
  ...
  externalIP:
    autoAssignCIDRs:
    - 192.168.132.254/29
```

The following YAML configuration includes a `spec.externalIP.policy` configuration that sets policy rules for the allowed and rejected CIDR ranges:

```yaml
apiVersion: config.openshift.io/v1
kind: Network
metadata:
  name: cluster
spec:
  ...
  externalIP:
    policy:
      allowedCIDRs:
      - 192.168.132.0/29
      - 192.168.132.8/29
      rejectedCIDRs:
      - 192.168.132.7/32
```