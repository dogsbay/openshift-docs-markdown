{%- set _mod_docs_content_type = "REFERENCE" %}
# Intel Columbiaville E800 series NIC as PTP ordinary clock reference {id="nw-columbiaville-ptp-config-refererence_{{ context }}"}

The following table describes the changes that you must make to the reference PTP configuration to use Intel Columbiaville E800 series NICs as ordinary clocks. Make the changes in a `PtpConfig` custom resource (CR) that you apply to the cluster. {._abstract}

**Recommended PTP settings for Intel Columbiaville NIC**

| PTP configuration | Recommended setting |
| --- | --- |
| `phc2sysOpts` | `-a -r -m -n 24 -N 8 -R 16` |
| `tx_timestamp_timeout` | `50` |
| `boundary_clock_jbod` | `0` |


:::note

For `phc2sysOpts`, `-m` prints messages to `stdout`. The `linuxptp-daemon` `DaemonSet` parses the logs and generates Prometheus metrics.

:::