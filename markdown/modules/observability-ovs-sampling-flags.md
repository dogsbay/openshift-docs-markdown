{%- set _mod_docs_content_type = "REFERENCE" %}
# OVN-Kubernetes network traffic with OVS sampling flags {id="observability-ovs-sampling-flags_{{ context }}"}

To filter OVN-Kubernetes traffic samples from `ovnkube-observ`, you can pass command line flags that limit output and collector options. {._abstract}

After you have opened a bash shell inside of the `ovnkube-node` pod, the following flags are available and can be appended using the following syntax:

```terminal title="Command syntax"
# /usr/bin/ovnkube-observ <flag>
```

| Flag | Description |
| --- | --- |
| `-h` | Returns a complete list flags that can be used with the `usr/bin/ovnkube-observ` command. ` |
| `-add-ovs-collector` | Add OVS collector to enable sampling. Use with caution. Make sure no one else is using observability. |
| `-enable-enrichment` | Enrich samples with NBDB data. Defaults to `true`. |
| `-filter-dst-ip` | Filter only packets to a given destination IP. |
| `-filter-src-ip` | Filters only packets from a given source IP. |
| `-log-cookie` | Print raw sample cookie with psample group_id. |
| `-output-file` | Output file to write the samples to. |
| `-print-full-packet` | Print full received packet. When false, only source and destination IPs are printed with every sample. |