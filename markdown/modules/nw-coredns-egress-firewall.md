{%- set _mod_docs_content_type = "CONCEPT" %}
# Improved DNS resolution and resolving wildcard domain names {id="nw-coredns-egress-firewall_{{ context }}"}

To support frequently changing IP addresses or wildcard domain names, the OVN-Kubernetes cluster manager creates a `DNSNameResolver` custom resource object for each unique DNS name used in your egress firewall policy rules. {._abstract}

This custom resource stores the following information:

{%- set FeatureName = "Improved DNS resolution for egress firewall rules" %}
{% include "./snippets/technology-preview.md" %}

```yaml title="Example DNSNameResolver CR definition"
apiVersion: networking.openshift.io/v1alpha1
kind: DNSNameResolver
spec:
  name: www.example.com.
status:
  resolvedNames:
  - dnsName: www.example.com.
    resolvedAddress:
    - ip: "1.2.3.4"
      ttlSeconds: 60
      lastLookupTime: "2023-08-08T15:07:04Z"
```
where:


&lt;name>
:   Specifies the DNS name. This can be either a standard DNS name or a wildcard DNS name. For a wildcard DNS name, the DNS name resolution information contains all of the DNS names that match the wildcard DNS name.

&lt;dnsName>
:   Specifies the resolved DNS name matching the `spec.name` field. If the `spec.name` field contains a wildcard DNS name, then multiple `dnsName` entries are created that contain the standard DNS names that match the wildcard DNS name when resolved. If the wildcard DNS name can also be successfully resolved, then this field also stores the wildcard DNS name.

&lt;ip>
:   Specifies the current IP addresses associated with the DNS name.

&lt;ttlSeconds>
:   Specifies the last time-to-live (TTL) duration.

&lt;lastLookupTime>
:   Specifies the last lookup time.

If during DNS resolution the DNS name in the query matches any name defined in a `DNSNameResolver` CR, then the previous information is updated accordingly in the CR `status` field. For unsuccessful DNS wildcard name lookups, the request is retried after a default TTL of 30 minutes.

The OVN-Kubernetes cluster manager watches for updates to an `EgressFirewall` custom resource object, and creates, modifies, or deletes `DNSNameResolver` CRs associated with those egress firewall policies when that update occurs.


:::warning

Do not modify `DNSNameResolver` custom resources directly. This can lead to unwanted behavior of your egress firewall.

:::