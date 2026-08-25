{%- set _mod_docs_content_type = "REFERENCE" %}
# Custom certificates reserved name values {id="microshift-custom-ca-reserved-name-values_{{ context }}"}

Certificate problems cause {{ microshift_short }} to ignore certificates dynamically and log an error. Problems can be caused by: {._abstract}

*   The certificate files do not exist on the disk or are not readable.
*   The certificate is not parsable.
*   The certificate overrides the internal certificates IP addresses or DNS names in a `SubjectAlternativeNames` (SAN) field. Do not use a reserved name when configuring SANs.

**Reserved Names values**

| Address | Type | Comment |
| :-- | :-- | :-- |
| `localhost` | DNS |  |
| `127.0.0.1` | IP Address |  |
| `10.42.0.0` | IP Address | Node Network |
| `10.43.0.0/16,10.44.0.0/16` | IP Address | Service Network |
| 169.254.169.2/29 | IP Address | br-ex Network |
| `kubernetes.default.svc` | DNS |  |
| `openshift.default.svc` | DNS |  |
| `svc.cluster.local` | DNS |  |